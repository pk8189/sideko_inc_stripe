import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { EventSummariesClient } from "@sideko-inc/stripe/resources/billing/meter/event-summaries";
import * as requests from "@sideko-inc/stripe/resources/billing/meter/request-types";
import { Schemas$BillingMeter } from "@sideko-inc/stripe/types/billing-meter";
import { Schemas$BillingMeterCreateBody } from "@sideko-inc/stripe/types/billing-meter-create-body";
import { Schemas$BillingMeterDeactivateBody } from "@sideko-inc/stripe/types/billing-meter-deactivate-body";
import { Schemas$BillingMeterListResponse } from "@sideko-inc/stripe/types/billing-meter-list-response";
import { Schemas$BillingMeterReactivateBody } from "@sideko-inc/stripe/types/billing-meter-reactivate-body";
import { Schemas$BillingMeterUpdateBody } from "@sideko-inc/stripe/types/billing-meter-update-body";
import * as z from "zod";

export class MeterClient extends CoreResourceClient {
  eventSummaries: EventSummariesClient;

  constructor(client: CoreClient) {
    super(client);

    this.eventSummaries = new EventSummariesClient(this._client);
  }
  /**
   * Reactivate a billing meter
   *
   * <p>When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.</p>
   *
   * POST /v1/billing/meters/{id}/reactivate
   */
  reactivate(
    request: requests.ReactivateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeter> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/meters/${request.id}/reactivate`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingMeterReactivateBody.out.parse(request),
      responseSchema: Schemas$BillingMeter.in,
      opts,
    });
  }
  /**
   * Deactivate a billing meter
   *
   * <p>When a meter is deactivated, no more meter events will be accepted for this meter. You can’t attach a deactivated meter to a price.</p>
   *
   * POST /v1/billing/meters/{id}/deactivate
   */
  deactivate(
    request: requests.DeactivateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeter> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/meters/${request.id}/deactivate`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingMeterDeactivateBody.out.parse(request),
      responseSchema: Schemas$BillingMeter.in,
      opts,
    });
  }
  /**
   * Update a billing meter
   *
   * <p>Updates a billing meter.</p>
   *
   * POST /v1/billing/meters/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeter> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/meters/${request.id}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingMeterUpdateBody.out.parse(request),
      responseSchema: Schemas$BillingMeter.in,
      opts,
    });
  }
  /**
   * Create a billing meter
   *
   * <p>Creates a billing meter.</p>
   *
   * POST /v1/billing/meters
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeter> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/billing/meters",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingMeterCreateBody.out.parse(request),
      responseSchema: Schemas$BillingMeter.in,
      opts,
    });
  }
  /**
   * Retrieve a billing meter
   *
   * <p>Retrieves a billing meter given an ID.</p>
   *
   * GET /v1/billing/meters/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeter> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/billing/meters/${request.id}`,
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
      responseSchema: Schemas$BillingMeter.in,
      opts,
    });
  }
  /**
   * List billing meters
   *
   * <p>Retrieve a list of billing meters.</p>
   *
   * GET /v1/billing/meters
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeterListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/billing/meters",
      auth: ["basicAuth", "bearerAuth"],
      query: [
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
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["active", "inactive"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$BillingMeterListResponse.in,
      opts,
    });
  }
}
