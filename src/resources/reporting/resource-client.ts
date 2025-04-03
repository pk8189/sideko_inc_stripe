import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { ReportRunClient } from "@sideko-inc/stripe/resources/reporting/report-run";
import { ReportTypeClient } from "@sideko-inc/stripe/resources/reporting/report-type";

export class ReportingClient extends CoreResourceClient {
  reportRun: ReportRunClient;
  reportType: ReportTypeClient;

  constructor(client: CoreClient) {
    super(client);

    this.reportRun = new ReportRunClient(this._client);
    this.reportType = new ReportTypeClient(this._client);
  }
}
