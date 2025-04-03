import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/financial-accounts/feature/request-types";
import { Schemas$TreasuryFinancialAccountFeatures } from "@sideko-inc/stripe/types/treasury-financial-account-features";
import { Schemas$TreasuryFinancialAccountsFeatureCreateBody } from "@sideko-inc/stripe/types/treasury-financial-accounts-feature-create-body";
import * as z from "zod";

export class FeatureClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update FinancialAccount Features
   *
   * <p>Updates the Features associated with a FinancialAccount.</p>
   *
   * POST /v1/treasury/financial_accounts/{financial_account}/features
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryFinancialAccountFeatures> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/treasury/financial_accounts/${request.financialAccount}/features`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TreasuryFinancialAccountsFeatureCreateBody.out.parse(
        request,
      ),
      responseSchema: Schemas$TreasuryFinancialAccountFeatures.in,
      opts,
    });
  }
  /**
   * Retrieve FinancialAccount Features
   *
   * <p>Retrieves Features information associated with the FinancialAccount.</p>
   *
   * GET /v1/treasury/financial_accounts/{financial_account}/features
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryFinancialAccountFeatures> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/financial_accounts/${request.financialAccount}/features`,
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$TreasuryFinancialAccountFeatures.in,
      opts,
    });
  }
}
