import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { ActiveEntitlementClient } from "@sideko-inc/stripe/resources/entitlement/active-entitlement";
import { FeatureClient } from "@sideko-inc/stripe/resources/entitlement/feature";

export class EntitlementClient extends CoreResourceClient {
  activeEntitlement: ActiveEntitlementClient;
  feature: FeatureClient;

  constructor(client: CoreClient) {
    super(client);

    this.activeEntitlement = new ActiveEntitlementClient(this._client);
    this.feature = new FeatureClient(this._client);
  }
}
