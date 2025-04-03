import {
  ApplicationFeeRefundCreateBodyMetadata,
  External$ApplicationFeeRefundCreateBodyMetadata,
  Schemas$ApplicationFeeRefundCreateBodyMetadata,
} from "./application-fee-refund-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ApplicationFeeRefundCreateBody
 */
export type ApplicationFeeRefundCreateBody = {
  /**
   * A positive integer, in _cents (or local equivalent)_, representing how much of this fee to refund. Can refund only up to the remaining unrefunded amount of the fee.
   */
  amount?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: ApplicationFeeRefundCreateBodyMetadata | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string[] | undefined)
    | (ApplicationFeeRefundCreateBodyMetadata | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ApplicationFeeRefundCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplicationFeeRefundCreateBody = {
  amount?: number | undefined;
  expand?: string[] | undefined;
  metadata?: External$ApplicationFeeRefundCreateBodyMetadata | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string[] | undefined)
    | (External$ApplicationFeeRefundCreateBodyMetadata | undefined)
    | External$ApplicationFeeRefundCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplicationFeeRefundCreateBody
 */
const SchemaIn$ApplicationFeeRefundCreateBody: z.ZodType<
  ApplicationFeeRefundCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$ApplicationFeeRefundCreateBodyMetadata.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplicationFeeRefundCreateBody
 */
const SchemaOut$ApplicationFeeRefundCreateBody: z.ZodType<
  External$ApplicationFeeRefundCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ApplicationFeeRefundCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$ApplicationFeeRefundCreateBodyMetadata.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$ApplicationFeeRefundCreateBody = {
  in: SchemaIn$ApplicationFeeRefundCreateBody,
  out: SchemaOut$ApplicationFeeRefundCreateBody,
};
