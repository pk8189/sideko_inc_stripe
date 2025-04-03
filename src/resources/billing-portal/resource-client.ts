import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { ConfigurationClient } from "@sideko-inc/stripe/resources/billing-portal/configuration";
import { SessionClient } from "@sideko-inc/stripe/resources/billing-portal/session";

export class BillingPortalClient extends CoreResourceClient {
  configuration: ConfigurationClient;
  session: SessionClient;

  constructor(client: CoreClient) {
    super(client);

    this.configuration = new ConfigurationClient(this._client);
    this.session = new SessionClient(this._client);
  }
}
