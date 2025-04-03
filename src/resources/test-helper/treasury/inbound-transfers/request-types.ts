import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperTreasuryInboundTransfersFailBodyFailureDetails,
  Schemas$TestHelperTreasuryInboundTransfersFailBodyFailureDetails,
  TestHelperTreasuryInboundTransfersFailBodyFailureDetails,
} from "@sideko-inc/stripe/types/test-helper-treasury-inbound-transfers-fail-body-failure-details";
import * as z from "zod";

/**
 * FailRequest
 */
export type FailRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Details about a failed InboundTransfer.
   */
  failureDetails?:
    | TestHelperTreasuryInboundTransfersFailBodyFailureDetails
    | undefined;
  id: string;
};

/**
 * @internal
 * FailRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FailRequest = {
  expand?: string[] | undefined;
  failure_details?:
    | External$TestHelperTreasuryInboundTransfersFailBodyFailureDetails
    | undefined;
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
    failure_details:
      Schemas$TestHelperTreasuryInboundTransfersFailBodyFailureDetails.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      failure_details: "failureDetails",
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
    failureDetails:
      Schemas$TestHelperTreasuryInboundTransfersFailBodyFailureDetails.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      failureDetails: "failure_details",
      id: "id",
    });
  });

export const Schemas$FailRequest = {
  in: SchemaIn$FailRequest,
  out: SchemaOut$FailRequest,
};

/**
 * ReturnedRequest
 */
export type ReturnedRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  id: string;
};

/**
 * @internal
 * ReturnedRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReturnedRequest = {
  expand?: string[] | undefined;
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReturnedRequest
 */
const SchemaOut$ReturnedRequest: z.ZodType<
  External$ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  ReturnedRequest // the object to be transformed
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

export const Schemas$ReturnedRequest = {
  in: SchemaIn$ReturnedRequest,
  out: SchemaOut$ReturnedRequest,
};

/**
 * SucceedRequest
 */
export type SucceedRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  id: string;
};

/**
 * @internal
 * SucceedRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SucceedRequest = {
  expand?: string[] | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SucceedRequest
 */
const SchemaIn$SucceedRequest: z.ZodType<
  SucceedRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SucceedRequest
 */
const SchemaOut$SucceedRequest: z.ZodType<
  External$SucceedRequest, // output type of this zod object
  z.ZodTypeDef,
  SucceedRequest // the object to be transformed
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

export const Schemas$SucceedRequest = {
  in: SchemaIn$SucceedRequest,
  out: SchemaOut$SucceedRequest,
};
