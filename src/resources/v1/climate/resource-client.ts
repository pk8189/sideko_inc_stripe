import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { SuppliersClient } from "@sideko-inc/stripe/resources/v1/climate/suppliers";

export class ClimateClient extends CoreResourceClient {
  suppliers: SuppliersClient;

  constructor(client: CoreClient) {
    super(client);

    this.suppliers = new SuppliersClient(this._client);
  }
}
