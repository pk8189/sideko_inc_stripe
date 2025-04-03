import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { AuthorizationClient } from "@sideko-inc/stripe/resources/test-helper/issuing/authorization";
import { CardClient } from "@sideko-inc/stripe/resources/test-helper/issuing/card";
import { PersonalizationDesignClient } from "@sideko-inc/stripe/resources/test-helper/issuing/personalization-design";
import { SettlementClient } from "@sideko-inc/stripe/resources/test-helper/issuing/settlement";
import { TransactionClient } from "@sideko-inc/stripe/resources/test-helper/issuing/transaction";

export class IssuingClient extends CoreResourceClient {
  authorization: AuthorizationClient;
  card: CardClient;
  personalizationDesign: PersonalizationDesignClient;
  settlement: SettlementClient;
  transaction: TransactionClient;

  constructor(client: CoreClient) {
    super(client);

    this.authorization = new AuthorizationClient(this._client);
    this.card = new CardClient(this._client);
    this.personalizationDesign = new PersonalizationDesignClient(this._client);
    this.settlement = new SettlementClient(this._client);
    this.transaction = new TransactionClient(this._client);
  }
}
