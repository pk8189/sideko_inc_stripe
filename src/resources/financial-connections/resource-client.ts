import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { AccountClient } from "@sideko-inc/stripe/resources/financial-connections/account";
import { SessionClient } from "@sideko-inc/stripe/resources/financial-connections/session";
import { TransactionClient } from "@sideko-inc/stripe/resources/financial-connections/transaction";

export class FinancialConnectionsClient extends CoreResourceClient {
  account: AccountClient;
  session: SessionClient;
  transaction: TransactionClient;

  constructor(client: CoreClient) {
    super(client);

    this.account = new AccountClient(this._client);
    this.session = new SessionClient(this._client);
    this.transaction = new TransactionClient(this._client);
  }
}
