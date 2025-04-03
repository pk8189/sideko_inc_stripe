import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { AlertClient } from "@sideko-inc/stripe/resources/billing/alert";
import { CreditBalanceSummaryClient } from "@sideko-inc/stripe/resources/billing/credit-balance-summary";
import { CreditBalanceTransactionClient } from "@sideko-inc/stripe/resources/billing/credit-balance-transaction";
import { CreditGrantClient } from "@sideko-inc/stripe/resources/billing/credit-grant";
import { MeterClient } from "@sideko-inc/stripe/resources/billing/meter";
import { MeterEventClient } from "@sideko-inc/stripe/resources/billing/meter-event";
import { MeterEventAdjustmentClient } from "@sideko-inc/stripe/resources/billing/meter-event-adjustment";

export class BillingClient extends CoreResourceClient {
  alert: AlertClient;
  creditBalanceSummary: CreditBalanceSummaryClient;
  creditBalanceTransaction: CreditBalanceTransactionClient;
  creditGrant: CreditGrantClient;
  meter: MeterClient;
  meterEventAdjustment: MeterEventAdjustmentClient;
  meterEvent: MeterEventClient;

  constructor(client: CoreClient) {
    super(client);

    this.alert = new AlertClient(this._client);
    this.creditBalanceSummary = new CreditBalanceSummaryClient(this._client);
    this.creditBalanceTransaction = new CreditBalanceTransactionClient(
      this._client,
    );
    this.creditGrant = new CreditGrantClient(this._client);
    this.meter = new MeterClient(this._client);
    this.meterEventAdjustment = new MeterEventAdjustmentClient(this._client);
    this.meterEvent = new MeterEventClient(this._client);
  }
}
