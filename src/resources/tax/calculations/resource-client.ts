import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { LineItemClient } from "@sideko-inc/stripe/resources/tax/calculations/line-item";

export class CalculationsClient extends CoreResourceClient {
  lineItem: LineItemClient;

  constructor(client: CoreClient) {
    super(client);

    this.lineItem = new LineItemClient(this._client);
  }
}
