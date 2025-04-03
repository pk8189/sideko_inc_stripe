import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { ConfirmationTokenClient } from "@sideko-inc/stripe/resources/test-helper/confirmation-token";
import { CustomerClient } from "@sideko-inc/stripe/resources/test-helper/customer";
import { IssuingClient } from "@sideko-inc/stripe/resources/test-helper/issuing";
import { RefundClient } from "@sideko-inc/stripe/resources/test-helper/refund";
import { TerminalClient } from "@sideko-inc/stripe/resources/test-helper/terminal";
import { TestClockClient } from "@sideko-inc/stripe/resources/test-helper/test-clock";
import { TreasuryClient } from "@sideko-inc/stripe/resources/test-helper/treasury";

export class TestHelperClient extends CoreResourceClient {
  testClock: TestClockClient;
  confirmationToken: ConfirmationTokenClient;
  customer: CustomerClient;
  issuing: IssuingClient;
  refund: RefundClient;
  terminal: TerminalClient;
  treasury: TreasuryClient;

  constructor(client: CoreClient) {
    super(client);

    this.testClock = new TestClockClient(this._client);
    this.confirmationToken = new ConfirmationTokenClient(this._client);
    this.customer = new CustomerClient(this._client);
    this.issuing = new IssuingClient(this._client);
    this.refund = new RefundClient(this._client);
    this.terminal = new TerminalClient(this._client);
    this.treasury = new TreasuryClient(this._client);
  }
}
