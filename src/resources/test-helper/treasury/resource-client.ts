import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { InboundTransfersClient } from "@sideko-inc/stripe/resources/test-helper/treasury/inbound-transfers";
import { OutboundPaymentClient } from "@sideko-inc/stripe/resources/test-helper/treasury/outbound-payment";
import { OutboundTransferClient } from "@sideko-inc/stripe/resources/test-helper/treasury/outbound-transfer";
import { ReceivedCreditClient } from "@sideko-inc/stripe/resources/test-helper/treasury/received-credit";
import { ReceivedDebitClient } from "@sideko-inc/stripe/resources/test-helper/treasury/received-debit";

export class TreasuryClient extends CoreResourceClient {
  inboundTransfers: InboundTransfersClient;
  outboundPayment: OutboundPaymentClient;
  outboundTransfer: OutboundTransferClient;
  receivedCredit: ReceivedCreditClient;
  receivedDebit: ReceivedDebitClient;

  constructor(client: CoreClient) {
    super(client);

    this.inboundTransfers = new InboundTransfersClient(this._client);
    this.outboundPayment = new OutboundPaymentClient(this._client);
    this.outboundTransfer = new OutboundTransferClient(this._client);
    this.receivedCredit = new ReceivedCreditClient(this._client);
    this.receivedDebit = new ReceivedDebitClient(this._client);
  }
}
