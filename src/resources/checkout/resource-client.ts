import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { SessionClient } from "@sideko-inc/stripe/resources/checkout/session";

export class CheckoutClient extends CoreResourceClient {
  session: SessionClient;

  constructor(client: CoreClient) {
    super(client);

    this.session = new SessionClient(this._client);
  }
}
