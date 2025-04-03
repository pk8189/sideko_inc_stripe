import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { DiscountClient } from "@sideko-inc/stripe/resources/subscriptions/discount";

export class SubscriptionsClient extends CoreResourceClient {
  discount: DiscountClient;

  constructor(client: CoreClient) {
    super(client);

    this.discount = new DiscountClient(this._client);
  }
}
