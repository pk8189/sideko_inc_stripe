import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { LineItemClient } from "@sideko-inc/stripe/resources/quotes/line-item";

export class QuotesClient extends CoreResourceClient {
  lineItem: LineItemClient;

  constructor(client: CoreClient) {
    super(client);

    this.lineItem = new LineItemClient(this._client);
  }
}
