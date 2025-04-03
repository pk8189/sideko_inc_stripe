import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { ShippingClient } from "@sideko-inc/stripe/resources/test-helper/issuing/card/shipping";

export class CardClient extends CoreResourceClient {
  shipping: ShippingClient;

  constructor(client: CoreClient) {
    super(client);

    this.shipping = new ShippingClient(this._client);
  }
}
