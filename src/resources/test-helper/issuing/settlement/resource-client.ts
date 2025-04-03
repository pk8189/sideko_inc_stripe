import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/issuing/settlement/request-types";
import { Schemas$IssuingSettlement } from "@sideko-inc/stripe/types/issuing-settlement";
import { Schemas$TestHelperIssuingSettlementCompleteBody } from "@sideko-inc/stripe/types/test-helper-issuing-settlement-complete-body";
import { Schemas$TestHelperIssuingSettlementCreateBody } from "@sideko-inc/stripe/types/test-helper-issuing-settlement-create-body";

export class SettlementClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Complete a test-mode settlement
   *
   * <p>Allows the user to mark an Issuing settlement as complete.</p>
   *
   * POST /v1/test_helpers/issuing/settlements/{settlement}/complete
   */
  complete(
    request: requests.CompleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingSettlement> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/settlements/${request.settlement}/complete`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingSettlementCompleteBody.out.parse(request),
      responseSchema: Schemas$IssuingSettlement.in,
      opts,
    });
  }
  /**
   * Create a test-mode settlement
   *
   * <p>Allows the user to create an Issuing settlement.</p>
   *
   * POST /v1/test_helpers/issuing/settlements
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingSettlement> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/issuing/settlements",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingSettlementCreateBody.out.parse(request),
      responseSchema: Schemas$IssuingSettlement.in,
      opts,
    });
  }
}
