import { AuthBasic, AuthBearer, CoreClient } from "@sideko-inc/stripe/core";
import { Environment } from "@sideko-inc/stripe/environment";
import * as Resources from "@sideko-inc/stripe/resources";

export interface StripeOptions {
  baseUrl?: string;
  environment?: Environment;
  timeout?: number;
  username?: string;
  password?: string;
  token?: string;
}

export class Stripe {
  private _client: CoreClient;
  // Cache of instantiated resource clients
  private _resources: Record<string, unknown> = {};

  // Added this index signature to support dynamic resource access
  [key: string]: any;

  constructor(opts?: StripeOptions) {
    const baseUrl =
      opts?.baseUrl ?? opts?.environment ?? Environment.Production;
    this._client = new CoreClient({ baseUrl, timeout: opts?.timeout });

    this._client.registerAuth(
      "basicAuth",
      new AuthBasic(opts?.username, opts?.password)
    );
    this._client.registerAuth("bearerAuth", new AuthBearer(opts?.token));

    // Use a Proxy to lazily load resource clients on first access
    return new Proxy(this, {
      get: (target, prop, receiver) => {
        if (typeof prop === "symbol" || prop in target) {
          return Reflect.get(target, prop, receiver);
        }

        const resourceName = String(prop);
        const resourceModule = (Resources as Record<string, any>)[resourceName];
        if (!resourceModule) return undefined;

        if (this._resources[resourceName]) {
          return this._resources[resourceName];
        }

        // Find the constructor within the resource's exports
        const allExports = Object.values(resourceModule);
        const ResourceClass = allExports.find(
          (val) => typeof val === "function"
        ) as { new (client: CoreClient): unknown };

        if (!ResourceClass) return undefined;

        // Instantiate and cache the resource
        const instance = new ResourceClass(this._client);
        this._resources[resourceName] = instance;
        return instance;
      },
    });
  }
}
