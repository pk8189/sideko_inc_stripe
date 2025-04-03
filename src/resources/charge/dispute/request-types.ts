import { zodTransform } from "@sideko-inc/stripe/core";
import {
  ChargeDisputeCreateBodyEvidence,
  External$ChargeDisputeCreateBodyEvidence,
  Schemas$ChargeDisputeCreateBodyEvidence,
} from "@sideko-inc/stripe/types/charge-dispute-create-body-evidence";
import {
  ChargeDisputeCreateBodyMetadataObj0,
  External$ChargeDisputeCreateBodyMetadataObj0,
  Schemas$ChargeDisputeCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/charge-dispute-create-body-metadata-obj0";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  data: Record<string, any>;
  charge: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  data: Record<string, any>;
  charge: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()),
    charge: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()),
    charge: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
   */
  evidence?: ChargeDisputeCreateBodyEvidence | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ChargeDisputeCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).
   */
  submit?: boolean | undefined;
  charge: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  evidence?: External$ChargeDisputeCreateBodyEvidence | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$ChargeDisputeCreateBodyMetadataObj0 | string)
    | undefined;
  submit?: boolean | undefined;
  charge: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    evidence: Schemas$ChargeDisputeCreateBodyEvidence.in.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeDisputeCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    submit: z.boolean().optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      evidence: "evidence",
      expand: "expand",
      metadata: "metadata",
      submit: "submit",
      charge: "charge",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    evidence: Schemas$ChargeDisputeCreateBodyEvidence.out.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeDisputeCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    submit: z.boolean().optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      evidence: "evidence",
      expand: "expand",
      metadata: "metadata",
      submit: "submit",
      charge: "charge",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * CloseRequest
 */
export type CloseRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  charge: string;
};

/**
 * @internal
 * CloseRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CloseRequest = {
  expand?: string[] | undefined;
  charge: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CloseRequest
 */
const SchemaIn$CloseRequest: z.ZodType<
  CloseRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      charge: "charge",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CloseRequest
 */
const SchemaOut$CloseRequest: z.ZodType<
  External$CloseRequest, // output type of this zod object
  z.ZodTypeDef,
  CloseRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      charge: "charge",
    });
  });

export const Schemas$CloseRequest = {
  in: SchemaIn$CloseRequest,
  out: SchemaOut$CloseRequest,
};
