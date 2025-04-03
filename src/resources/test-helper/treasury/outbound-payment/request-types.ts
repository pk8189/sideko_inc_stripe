import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails,
  Schemas$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails,
  TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails,
} from "@sideko-inc/stripe/types/test-helper-treasury-outbound-payment-returned-body-returned-details";
import {
  External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
  Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
} from "@sideko-inc/stripe/types/test-helper-treasury-outbound-payment-update-body-tracking-details";
import * as z from "zod";

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Details about network-specific tracking information.
   */
  trackingDetails: TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails;
  id: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  tracking_details: External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    tracking_details:
      Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails.in,
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      tracking_details: "trackingDetails",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    trackingDetails:
      Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails.out,
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      trackingDetails: "tracking_details",
      id: "id",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * FailRequest
 */
export type FailRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  id: string;
};

/**
 * @internal
 * FailRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FailRequest = {
  expand?: string[] | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FailRequest
 */
const SchemaIn$FailRequest: z.ZodType<
  FailRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FailRequest
 */
const SchemaOut$FailRequest: z.ZodType<
  External$FailRequest, // output type of this zod object
  z.ZodTypeDef,
  FailRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      id: "id",
    });
  });

export const Schemas$FailRequest = {
  in: SchemaIn$FailRequest,
  out: SchemaOut$FailRequest,
};

/**
 * PostRequest
 */
export type PostRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  id: string;
};

/**
 * @internal
 * PostRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PostRequest = {
  expand?: string[] | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PostRequest
 */
const SchemaIn$PostRequest: z.ZodType<
  PostRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PostRequest
 */
const SchemaOut$PostRequest: z.ZodType<
  External$PostRequest, // output type of this zod object
  z.ZodTypeDef,
  PostRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      id: "id",
    });
  });

export const Schemas$PostRequest = {
  in: SchemaIn$PostRequest,
  out: SchemaOut$PostRequest,
};

/**
 * ReturnedRequest
 */
export type ReturnedRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Optional hash to set the return code.
   */
  returnedDetails?:
    | TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails
    | undefined;
  id: string;
};

/**
 * @internal
 * ReturnedRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReturnedRequest = {
  expand?: string[] | undefined;
  returned_details?:
    | External$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails
    | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReturnedRequest
 */
const SchemaIn$ReturnedRequest: z.ZodType<
  ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    returned_details:
      Schemas$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      returned_details: "returnedDetails",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReturnedRequest
 */
const SchemaOut$ReturnedRequest: z.ZodType<
  External$ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  ReturnedRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    returnedDetails:
      Schemas$TestHelperTreasuryOutboundPaymentReturnedBodyReturnedDetails.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      returnedDetails: "returned_details",
      id: "id",
    });
  });

export const Schemas$ReturnedRequest = {
  in: SchemaIn$ReturnedRequest,
  out: SchemaOut$ReturnedRequest,
};
