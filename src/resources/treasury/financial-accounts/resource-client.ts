import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { FeatureClient } from "@sideko-inc/stripe/resources/treasury/financial-accounts/feature";

export class FinancialAccountsClient extends CoreResourceClient {
  feature: FeatureClient;

  constructor(client: CoreClient) {
    super(client);

    this.feature = new FeatureClient(this._client);
  }
}
