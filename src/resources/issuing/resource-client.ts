import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { AuthorizationClient } from "@sideko-inc/stripe/resources/issuing/authorization";
import { CardClient } from "@sideko-inc/stripe/resources/issuing/card";
import { CardholderClient } from "@sideko-inc/stripe/resources/issuing/cardholder";
import { DisputeClient } from "@sideko-inc/stripe/resources/issuing/dispute";
import { PersonalizationDesignClient } from "@sideko-inc/stripe/resources/issuing/personalization-design";
import { PhysicalBundleClient } from "@sideko-inc/stripe/resources/issuing/physical-bundle";
import { SettlementClient } from "@sideko-inc/stripe/resources/issuing/settlement";
import { TokenClient } from "@sideko-inc/stripe/resources/issuing/token";
import { TransactionClient } from "@sideko-inc/stripe/resources/issuing/transaction";

export class IssuingClient extends CoreResourceClient {
  authorization: AuthorizationClient;
  cardholder: CardholderClient;
  card: CardClient;
  dispute: DisputeClient;
  personalizationDesign: PersonalizationDesignClient;
  physicalBundle: PhysicalBundleClient;
  settlement: SettlementClient;
  token: TokenClient;
  transaction: TransactionClient;

  constructor(client: CoreClient) {
    super(client);

    this.authorization = new AuthorizationClient(this._client);
    this.cardholder = new CardholderClient(this._client);
    this.card = new CardClient(this._client);
    this.dispute = new DisputeClient(this._client);
    this.personalizationDesign = new PersonalizationDesignClient(this._client);
    this.physicalBundle = new PhysicalBundleClient(this._client);
    this.settlement = new SettlementClient(this._client);
    this.token = new TokenClient(this._client);
    this.transaction = new TransactionClient(this._client);
  }
}
