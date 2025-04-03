import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { ReaderClient } from "@sideko-inc/stripe/resources/test-helper/terminal/reader";

export class TerminalClient extends CoreResourceClient {
  reader: ReaderClient;

  constructor(client: CoreClient) {
    super(client);

    this.reader = new ReaderClient(this._client);
  }
}
