import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ApplicationFeeRefundCreate1Body
 */
export type ApplicationFeeRefundCreate1Body = {
  amount?: number | undefined;
  directive?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ApplicationFeeRefundCreate1Body without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplicationFeeRefundCreate1Body = {
  amount?: number | undefined;
  directive?: string | undefined;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | External$ApplicationFeeRefundCreate1Body
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplicationFeeRefundCreate1Body
 */
const SchemaIn$ApplicationFeeRefundCreate1Body: z.ZodType<
  ApplicationFeeRefundCreate1Body, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    directive: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      directive: "directive",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplicationFeeRefundCreate1Body
 */
const SchemaOut$ApplicationFeeRefundCreate1Body: z.ZodType<
  External$ApplicationFeeRefundCreate1Body, // output type of this zod object
  z.ZodTypeDef,
  ApplicationFeeRefundCreate1Body // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    directive: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      directive: "directive",
      expand: "expand",
    });
  });

export const Schemas$ApplicationFeeRefundCreate1Body = {
  in: SchemaIn$ApplicationFeeRefundCreate1Body,
  out: SchemaOut$ApplicationFeeRefundCreate1Body,
};
