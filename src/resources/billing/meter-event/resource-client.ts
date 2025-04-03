import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/billing/meter-event/request-types";
import { Schemas$BillingMeterEvent } from "@sideko-inc/stripe/types/billing-meter-event";
import { Schemas$BillingMeterEventCreateBody } from "@sideko-inc/stripe/types/billing-meter-event-create-body";

export class MeterEventClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a billing meter event
   *
   * <p>Creates a billing meter event.</p>
   *
   * POST /v1/billing/meter_events
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeterEvent> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/billing/meter_events",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingMeterEventCreateBody.out.parse(request),
      responseSchema: Schemas$BillingMeterEvent.in,
      opts,
    });
  }
}
