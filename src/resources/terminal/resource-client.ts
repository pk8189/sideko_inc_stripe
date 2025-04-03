import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { ConfigurationClient } from "@sideko-inc/stripe/resources/terminal/configuration";
import { ConnectionTokenClient } from "@sideko-inc/stripe/resources/terminal/connection-token";
import { LocationClient } from "@sideko-inc/stripe/resources/terminal/location";
import { ReaderClient } from "@sideko-inc/stripe/resources/terminal/reader";

export class TerminalClient extends CoreResourceClient {
  configuration: ConfigurationClient;
  location: LocationClient;
  reader: ReaderClient;
  connectionToken: ConnectionTokenClient;

  constructor(client: CoreClient) {
    super(client);

    this.configuration = new ConfigurationClient(this._client);
    this.location = new LocationClient(this._client);
    this.reader = new ReaderClient(this._client);
    this.connectionToken = new ConnectionTokenClient(this._client);
  }
}
