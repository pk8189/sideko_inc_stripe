import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails,
  Schemas$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails,
  TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails,
} from "@sideko-inc/stripe/types/test-helper-treasury-outbound-transfer-returned-body-returned-details";
import {
  External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails,
  Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails,
  TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails,
} from "@sideko-inc/stripe/types/test-helper-treasury-outbound-transfer-update-body-tracking-details";
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
  trackingDetails: TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails;
  outboundTransfer: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  tracking_details: External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails;
  outbound_transfer: string;
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
      Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails.in,
    outbound_transfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      tracking_details: "trackingDetails",
      outbound_transfer: "outboundTransfer",
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
      Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails.out,
    outboundTransfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      trackingDetails: "tracking_details",
      outboundTransfer: "outbound_transfer",
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
  outboundTransfer: string;
};

/**
 * @internal
 * FailRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FailRequest = {
  expand?: string[] | undefined;
  outbound_transfer: string;
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
    outbound_transfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      outbound_transfer: "outboundTransfer",
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
    outboundTransfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      outboundTransfer: "outbound_transfer",
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
  outboundTransfer: string;
};

/**
 * @internal
 * PostRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PostRequest = {
  expand?: string[] | undefined;
  outbound_transfer: string;
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
    outbound_transfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      outbound_transfer: "outboundTransfer",
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
    outboundTransfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      outboundTransfer: "outbound_transfer",
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
   * Details about a returned OutboundTransfer.
   */
  returnedDetails?:
    | TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails
    | undefined;
  outboundTransfer: string;
};

/**
 * @internal
 * ReturnedRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReturnedRequest = {
  expand?: string[] | undefined;
  returned_details?:
    | External$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails
    | undefined;
  outbound_transfer: string;
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
      Schemas$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails.in.optional(),
    outbound_transfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      returned_details: "returnedDetails",
      outbound_transfer: "outboundTransfer",
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
      Schemas$TestHelperTreasuryOutboundTransferReturnedBodyReturnedDetails.out.optional(),
    outboundTransfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      returnedDetails: "returned_details",
      outboundTransfer: "outbound_transfer",
    });
  });

export const Schemas$ReturnedRequest = {
  in: SchemaIn$ReturnedRequest,
  out: SchemaOut$ReturnedRequest,
};
