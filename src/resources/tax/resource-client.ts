import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { CalculationClient } from "@sideko-inc/stripe/resources/tax/calculation";
import { CalculationsClient } from "@sideko-inc/stripe/resources/tax/calculations";
import { RegistrationClient } from "@sideko-inc/stripe/resources/tax/registration";
import { SettingClient } from "@sideko-inc/stripe/resources/tax/setting";
import { TransactionClient } from "@sideko-inc/stripe/resources/tax/transaction";

export class TaxClient extends CoreResourceClient {
  calculation: CalculationClient;
  calculations: CalculationsClient;
  registration: RegistrationClient;
  setting: SettingClient;
  transaction: TransactionClient;

  constructor(client: CoreClient) {
    super(client);

    this.calculation = new CalculationClient(this._client);
    this.calculations = new CalculationsClient(this._client);
    this.registration = new RegistrationClient(this._client);
    this.setting = new SettingClient(this._client);
    this.transaction = new TransactionClient(this._client);
  }
}
