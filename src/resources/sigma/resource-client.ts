import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { ScheduledQueryRunClient } from "@sideko-inc/stripe/resources/sigma/scheduled-query-run";

export class SigmaClient extends CoreResourceClient {
  scheduledQueryRun: ScheduledQueryRunClient;

  constructor(client: CoreClient) {
    super(client);

    this.scheduledQueryRun = new ScheduledQueryRunClient(this._client);
  }
}
