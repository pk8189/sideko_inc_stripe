import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/payment-method-domain/request-types";
import { Schemas$PaymentMethodDomain } from "@sideko-inc/stripe/types/payment-method-domain";
import { Schemas$PaymentMethodDomainCreateBody } from "@sideko-inc/stripe/types/payment-method-domain-create-body";
import { Schemas$PaymentMethodDomainListResponse } from "@sideko-inc/stripe/types/payment-method-domain-list-response";
import { Schemas$PaymentMethodDomainUpdateBody } from "@sideko-inc/stripe/types/payment-method-domain-update-body";
import { Schemas$PaymentMethodDomainValidateBody } from "@sideko-inc/stripe/types/payment-method-domain-validate-body";
import * as z from "zod";

export class PaymentMethodDomainClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Validate an existing payment method domain
   *
   * <p>Some payment methods might require additional steps to register a domain. If the requirements weren’t satisfied when the domain was created, the payment method will be inactive on the domain.
   * The payment method doesn’t appear in Elements or Embedded Checkout for this domain until it is active.</p>
   *
   * <p>To activate a payment method on an existing payment method domain, complete the required registration steps specific to the payment method, and then validate the payment method domain with this endpoint.</p>
   *
   * <p>Related guides: <a href="/docs/payments/payment-methods/pmd-registration">Payment method domains</a>.</p>
   *
   * POST /v1/payment_method_domains/{payment_method_domain}/validate
   */
  validate(
    request: requests.ValidateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodDomain> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_method_domains/${request.paymentMethodDomain}/validate`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentMethodDomainValidateBody.out.parse(request),
      responseSchema: Schemas$PaymentMethodDomain.in,
      opts,
    });
  }
  /**
   * Update a payment method domain
   *
   * <p>Updates an existing payment method domain.</p>
   *
   * POST /v1/payment_method_domains/{payment_method_domain}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodDomain> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_method_domains/${request.paymentMethodDomain}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentMethodDomainUpdateBody.out.parse(request),
      responseSchema: Schemas$PaymentMethodDomain.in,
      opts,
    });
  }
  /**
   * Create a payment method domain
   *
   * <p>Creates a payment method domain.</p>
   *
   * POST /v1/payment_method_domains
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodDomain> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payment_method_domains",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentMethodDomainCreateBody.out.parse(request),
      responseSchema: Schemas$PaymentMethodDomain.in,
      opts,
    });
  }
  /**
   * Retrieve a payment method domain
   *
   * <p>Retrieves the details of an existing payment method domain.</p>
   *
   * GET /v1/payment_method_domains/{payment_method_domain}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodDomain> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/payment_method_domains/${request.paymentMethodDomain}`,
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
      responseSchema: Schemas$PaymentMethodDomain.in,
      opts,
    });
  }
  /**
   * List payment method domains
   *
   * <p>Lists the details of existing payment method domains.</p>
   *
   * GET /v1/payment_method_domains
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodDomainListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payment_method_domains",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "domain_name",
          value: z.string().optional().parse(request.domainName),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "enabled",
          value: z.boolean().optional().parse(request.enabled),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "ending_before",
          value: z.string().optional().parse(request.endingBefore),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "limit",
          value: z.number().int().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$PaymentMethodDomainListResponse.in,
      opts,
    });
  }
}
