import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/terminal/reader/request-types";
import { Schemas$TerminalReader } from "@sideko-inc/stripe/types/terminal-reader";
import { Schemas$TestHelperTerminalReaderPresentPaymentMethodBody } from "@sideko-inc/stripe/types/test-helper-terminal-reader-present-payment-method-body";
import * as z from "zod";

export class ReaderClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Simulate presenting a payment method
   *
   * <p>Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.</p>
   *
   * POST /v1/test_helpers/terminal/readers/{reader}/present_payment_method
   */
  presentPaymentMethod(
    request: requests.PresentPaymentMethodRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalReader> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/terminal/readers/${request.reader}/present_payment_method`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperTerminalReaderPresentPaymentMethodBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$TerminalReader.in),
      opts,
    });
  }
}
