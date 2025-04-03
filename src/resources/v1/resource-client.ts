import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { ClimateClient } from "@sideko-inc/stripe/resources/v1/climate";
import { SigmaClient } from "@sideko-inc/stripe/resources/v1/sigma";

export class V1Client extends CoreResourceClient {
  climate: ClimateClient;
  sigma: SigmaClient;

  constructor(client: CoreClient) {
    super(client);

    this.climate = new ClimateClient(this._client);
    this.sigma = new SigmaClient(this._client);
  }
}
