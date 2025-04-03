import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/treasury/inbound-transfers/request-types";
import { Schemas$TestHelperTreasuryInboundTransfersFailBody } from "@sideko-inc/stripe/types/test-helper-treasury-inbound-transfers-fail-body";
import { Schemas$TestHelperTreasuryInboundTransfersReturnedBody } from "@sideko-inc/stripe/types/test-helper-treasury-inbound-transfers-returned-body";
import { Schemas$TestHelperTreasuryInboundTransfersSucceedBody } from "@sideko-inc/stripe/types/test-helper-treasury-inbound-transfers-succeed-body";
import { Schemas$TreasuryInboundTransfer } from "@sideko-inc/stripe/types/treasury-inbound-transfer";
import * as z from "zod";

export class InboundTransfersClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Test mode: Succeed an InboundTransfer
   *
   * <p>Transitions a test mode created InboundTransfer to the <code>succeeded</code> status. The InboundTransfer must already be in the <code>processing</code> state.</p>
   *
   * POST /v1/test_helpers/treasury/inbound_transfers/{id}/succeed
   */
  succeed(
    request: requests.SucceedRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryInboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/inbound_transfers/${request.id}/succeed`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperTreasuryInboundTransfersSucceedBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$TreasuryInboundTransfer.in),
      opts,
    });
  }
  /**
   * Test mode: Return an InboundTransfer
   *
   * <p>Marks the test mode InboundTransfer object as returned and links the InboundTransfer to a ReceivedDebit. The InboundTransfer must already be in the <code>succeeded</code> state.</p>
   *
   * POST /v1/test_helpers/treasury/inbound_transfers/{id}/return
   */
  returned(
    request: requests.ReturnedRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryInboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/inbound_transfers/${request.id}/return`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperTreasuryInboundTransfersReturnedBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$TreasuryInboundTransfer.in),
      opts,
    });
  }
  /**
   * Test mode: Fail an InboundTransfer
   *
   * <p>Transitions a test mode created InboundTransfer to the <code>failed</code> status. The InboundTransfer must already be in the <code>processing</code> state.</p>
   *
   * POST /v1/test_helpers/treasury/inbound_transfers/{id}/fail
   */
  fail(
    request: requests.FailRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryInboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/inbound_transfers/${request.id}/fail`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperTreasuryInboundTransfersFailBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$TreasuryInboundTransfer.in),
      opts,
    });
  }
}
