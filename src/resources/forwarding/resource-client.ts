import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { RequestClient } from "@sideko-inc/stripe/resources/forwarding/request";

export class ForwardingClient extends CoreResourceClient {
  request: RequestClient;

  constructor(client: CoreClient) {
    super(client);

    this.request = new RequestClient(this._client);
  }
}
