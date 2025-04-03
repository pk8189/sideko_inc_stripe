import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { ReversalClient } from "@sideko-inc/stripe/resources/transfers/reversal";

export class TransfersClient extends CoreResourceClient {
  reversal: ReversalClient;

  constructor(client: CoreClient) {
    super(client);

    this.reversal = new ReversalClient(this._client);
  }
}
