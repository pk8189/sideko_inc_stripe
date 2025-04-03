import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko-inc/stripe/core";
import { FraudChallengesClient } from "@sideko-inc/stripe/resources/test-helper/issuing/authorization/fraud-challenges";
import * as requests from "@sideko-inc/stripe/resources/test-helper/issuing/authorization/request-types";
import { Schemas$IssuingAuthorization } from "@sideko-inc/stripe/types/issuing-authorization";
import { Schemas$TestHelperIssuingAuthorizationCaptureBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-capture-body";
import { Schemas$TestHelperIssuingAuthorizationCreateBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-create-body";
import { Schemas$TestHelperIssuingAuthorizationExpireBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-expire-body";
import { Schemas$TestHelperIssuingAuthorizationFinalizeAmountBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-finalize-amount-body";
import { Schemas$TestHelperIssuingAuthorizationIncrementBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-increment-body";
import { Schemas$TestHelperIssuingAuthorizationReverseBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-reverse-body";
import * as z from "zod";

export class AuthorizationClient extends CoreResourceClient {
  fraudChallenges: FraudChallengesClient;

  constructor(client: CoreClient) {
    super(client);

    this.fraudChallenges = new FraudChallengesClient(this._client);
  }
  /**
   * Reverse a test-mode authorization
   *
   * <p>Reverse a test-mode Authorization.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/reverse
   */
  reverse(
    request: requests.ReverseRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/reverse`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingAuthorizationReverseBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Increment a test-mode authorization
   *
   * <p>Increment a test-mode Authorization.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/increment
   */
  increment(
    request: requests.IncrementRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/increment`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingAuthorizationIncrementBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Finalize a test-mode authorization's amount
   *
   * <p>Finalize the amount on an Authorization prior to capture, when the initial authorization was for an estimated amount.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount
   */
  finalizeAmount(
    request: requests.FinalizeAmountRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/finalize_amount`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingAuthorizationFinalizeAmountBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Expire a test-mode authorization
   *
   * <p>Expire a test-mode Authorization.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/expire
   */
  expire(
    request: requests.ExpireRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/expire`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingAuthorizationExpireBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Capture a test-mode authorization
   *
   * <p>Capture a test-mode authorization.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/capture
   */
  capture(
    request: requests.CaptureRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/capture`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingAuthorizationCaptureBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Create a test-mode authorization
   *
   * <p>Create a test-mode authorization.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/issuing/authorizations",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingAuthorizationCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
}
