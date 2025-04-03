import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { EarlyFraudWarningClient } from "@sideko-inc/stripe/resources/radar/early-fraud-warning";
import { ValueListClient } from "@sideko-inc/stripe/resources/radar/value-list";
import { ValueListItemClient } from "@sideko-inc/stripe/resources/radar/value-list-item";

export class RadarClient extends CoreResourceClient {
  valueListItem: ValueListItemClient;
  valueList: ValueListClient;
  earlyFraudWarning: EarlyFraudWarningClient;

  constructor(client: CoreClient) {
    super(client);

    this.valueListItem = new ValueListItemClient(this._client);
    this.valueList = new ValueListClient(this._client);
    this.earlyFraudWarning = new EarlyFraudWarningClient(this._client);
  }
}
