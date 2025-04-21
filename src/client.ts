import { AuthBasic, AuthBearer, CoreClient } from "@sideko-inc/stripe/core";
import { Environment } from "@sideko-inc/stripe/environment";
import { AccountClient } from "@sideko-inc/stripe/resources/account";
import { ApplePayClient } from "@sideko-inc/stripe/resources/apple-pay";
import { CouponClient } from "@sideko-inc/stripe/resources/coupon";

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

  // Individual caches for lazy-loaded resources
  private _account?: AccountClient;
  private _applePay?: ApplePayClient;
  private _coupon?: CouponClient;

  // Exposed resource properties (lazy proxied)
  account: AccountClient;
  applePay: ApplePayClient;
  coupon: CouponClient;

  constructor(opts?: StripeOptions) {
    const baseUrl =
      opts?.baseUrl ?? opts?.environment ?? Environment.Production;
    this._client = new CoreClient({ baseUrl, timeout: opts?.timeout });

    // Register authentication methods
    this._client.registerAuth(
      "basicAuth",
      new AuthBasic(opts?.username, opts?.password)
    );
    this._client.registerAuth("bearerAuth", new AuthBearer(opts?.token));

    // Lazy proxy for `account`
    this.account = new Proxy({} as AccountClient, {
      get: (_target, prop) => {
        if (!this._account) {
          this._account = new AccountClient(this._client);
        }
        return (this._account as any)[prop];
      },
    });

    // Lazy proxy for `applePay`
    this.applePay = new Proxy({} as ApplePayClient, {
      get: (_target, prop) => {
        if (!this._applePay) {
          this._applePay = new ApplePayClient(this._client);
        }
        return (this._applePay as any)[prop];
      },
    });

    // Lazy proxy for `coupon`
    this.coupon = new Proxy({} as CouponClient, {
      get: (_target, prop) => {
        if (!this._coupon) {
          this._coupon = new CouponClient(this._client);
        }
        return (this._coupon as any)[prop];
      },
    });
  }
}
