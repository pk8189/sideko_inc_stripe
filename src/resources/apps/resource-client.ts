import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { SecretClient } from "@sideko-inc/stripe/resources/apps/secret";

export class AppsClient extends CoreResourceClient {
  secret: SecretClient;

  constructor(client: CoreClient) {
    super(client);

    this.secret = new SecretClient(this._client);
  }
}
