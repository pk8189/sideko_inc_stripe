import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/treasury/received-debit/request-types";
import { Schemas$TestHelperTreasuryReceivedDebitCreateBody } from "@sideko-inc/stripe/types/test-helper-treasury-received-debit-create-body";
import { Schemas$TreasuryReceivedDebit } from "@sideko-inc/stripe/types/treasury-received-debit";
import * as z from "zod";

export class ReceivedDebitClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Test mode: Create a ReceivedDebit
   *
   * <p>Use this endpoint to simulate a test mode ReceivedDebit initiated by a third party. In live mode, you can’t directly create ReceivedDebits initiated by third parties.</p>
   *
   * POST /v1/test_helpers/treasury/received_debits
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryReceivedDebit> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/treasury/received_debits",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperTreasuryReceivedDebitCreateBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$TreasuryReceivedDebit.in),
      opts,
    });
  }
}
