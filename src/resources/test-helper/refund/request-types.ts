import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ExpireRequest
 */
export type ExpireRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  refund: string;
};

/**
 * @internal
 * ExpireRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExpireRequest = {
  expand?: string[] | undefined;
  refund: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExpireRequest
 */
const SchemaIn$ExpireRequest: z.ZodType<
  ExpireRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    refund: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      refund: "refund",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExpireRequest
 */
const SchemaOut$ExpireRequest: z.ZodType<
  External$ExpireRequest, // output type of this zod object
  z.ZodTypeDef,
  ExpireRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    refund: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      refund: "refund",
    });
  });

export const Schemas$ExpireRequest = {
  in: SchemaIn$ExpireRequest,
  out: SchemaOut$ExpireRequest,
};
