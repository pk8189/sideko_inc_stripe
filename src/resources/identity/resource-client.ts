import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { VerificationReportClient } from "@sideko-inc/stripe/resources/identity/verification-report";
import { VerificationSessionClient } from "@sideko-inc/stripe/resources/identity/verification-session";

export class IdentityClient extends CoreResourceClient {
  verificationReport: VerificationReportClient;
  verificationSession: VerificationSessionClient;

  constructor(client: CoreClient) {
    super(client);

    this.verificationReport = new VerificationReportClient(this._client);
    this.verificationSession = new VerificationSessionClient(this._client);
  }
}
