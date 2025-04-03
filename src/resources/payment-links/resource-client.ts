import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { LineItemClient } from "@sideko-inc/stripe/resources/payment-links/line-item";

export class PaymentLinksClient extends CoreResourceClient {
  lineItem: LineItemClient;

  constructor(client: CoreClient) {
    super(client);

    this.lineItem = new LineItemClient(this._client);
  }
}
