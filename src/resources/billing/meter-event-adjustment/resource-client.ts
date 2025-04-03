import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/billing/meter-event-adjustment/request-types";
import { Schemas$BillingMeterEventAdjustment } from "@sideko-inc/stripe/types/billing-meter-event-adjustment";
import { Schemas$BillingMeterEventAdjustmentCreateBody } from "@sideko-inc/stripe/types/billing-meter-event-adjustment-create-body";

export class MeterEventAdjustmentClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a billing meter event adjustment
   *
   * <p>Creates a billing meter event adjustment.</p>
   *
   * POST /v1/billing/meter_event_adjustments
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeterEventAdjustment> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/billing/meter_event_adjustments",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingMeterEventAdjustmentCreateBody.out.parse(request),
      responseSchema: Schemas$BillingMeterEventAdjustment.in,
      opts,
    });
  }
}
