import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { SavedQueriesClient } from "@sideko-inc/stripe/resources/v1/sigma/saved-queries";

export class SigmaClient extends CoreResourceClient {
  savedQueries: SavedQueriesClient;

  constructor(client: CoreClient) {
    super(client);

    this.savedQueries = new SavedQueriesClient(this._client);
  }
}
