import { CoreClient, CoreResourceClient } from "@sideko-inc/stripe/core";
import { CreditReversalClient } from "@sideko-inc/stripe/resources/treasury/credit-reversal";
import { DebitReversalClient } from "@sideko-inc/stripe/resources/treasury/debit-reversal";
import { FinancialAccountClient } from "@sideko-inc/stripe/resources/treasury/financial-account";
import { FinancialAccountsClient } from "@sideko-inc/stripe/resources/treasury/financial-accounts";
import { InboundTransferClient } from "@sideko-inc/stripe/resources/treasury/inbound-transfer";
import { OutboundPaymentClient } from "@sideko-inc/stripe/resources/treasury/outbound-payment";
import { OutboundTransferClient } from "@sideko-inc/stripe/resources/treasury/outbound-transfer";
import { ReceivedCreditClient } from "@sideko-inc/stripe/resources/treasury/received-credit";
import { ReceivedDebitClient } from "@sideko-inc/stripe/resources/treasury/received-debit";
import { TransactionClient } from "@sideko-inc/stripe/resources/treasury/transaction";
import { TransactionEntryClient } from "@sideko-inc/stripe/resources/treasury/transaction-entry";

export class TreasuryClient extends CoreResourceClient {
  creditReversal: CreditReversalClient;
  debitReversal: DebitReversalClient;
  financialAccount: FinancialAccountClient;
  financialAccounts: FinancialAccountsClient;
  inboundTransfer: InboundTransferClient;
  outboundPayment: OutboundPaymentClient;
  outboundTransfer: OutboundTransferClient;
  receivedCredit: ReceivedCreditClient;
  receivedDebit: ReceivedDebitClient;
  transactionEntry: TransactionEntryClient;
  transaction: TransactionClient;

  constructor(client: CoreClient) {
    super(client);

    this.creditReversal = new CreditReversalClient(this._client);
    this.debitReversal = new DebitReversalClient(this._client);
    this.financialAccount = new FinancialAccountClient(this._client);
    this.financialAccounts = new FinancialAccountsClient(this._client);
    this.inboundTransfer = new InboundTransferClient(this._client);
    this.outboundPayment = new OutboundPaymentClient(this._client);
    this.outboundTransfer = new OutboundTransferClient(this._client);
    this.receivedCredit = new ReceivedCreditClient(this._client);
    this.receivedDebit = new ReceivedDebitClient(this._client);
    this.transactionEntry = new TransactionEntryClient(this._client);
    this.transaction = new TransactionClient(this._client);
  }
}
