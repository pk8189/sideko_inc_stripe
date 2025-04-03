import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { DomainClient } from "@sideko-inc/stripe/resources/apple-pay/domain";

export class ApplePayClient extends CoreResourceClient {
  domain: DomainClient;

  constructor(client: CoreClient) {
    super(client);

    this.domain = new DomainClient(this._client);
  }
}
