import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { OrderClient } from "@sideko-inc/stripe/resources/climate/order";
import { ProductClient } from "@sideko-inc/stripe/resources/climate/product";
import { SuppliersClient } from "@sideko-inc/stripe/resources/climate/suppliers";

export class ClimateClient extends CoreResourceClient {
  order: OrderClient;
  product: ProductClient;
  suppliers: SuppliersClient;

  constructor(client: CoreClient) {
    super(client);

    this.order = new OrderClient(this._client);
    this.product = new ProductClient(this._client);
    this.suppliers = new SuppliersClient(this._client);
  }
}
