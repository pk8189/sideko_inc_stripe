import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * V1SigmaSavedQueriesCreateBody
 */
export type V1SigmaSavedQueriesCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  name?: string | undefined;
  sql?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * V1SigmaSavedQueriesCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$V1SigmaSavedQueriesCreateBody = {
  expand?: string[] | undefined;
  name?: string | undefined;
  sql?: string | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | External$V1SigmaSavedQueriesCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object V1SigmaSavedQueriesCreateBody
 */
const SchemaIn$V1SigmaSavedQueriesCreateBody: z.ZodType<
  V1SigmaSavedQueriesCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    sql: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      name: "name",
      sql: "sql",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$V1SigmaSavedQueriesCreateBody
 */
const SchemaOut$V1SigmaSavedQueriesCreateBody: z.ZodType<
  External$V1SigmaSavedQueriesCreateBody, // output type of this zod object
  z.ZodTypeDef,
  V1SigmaSavedQueriesCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    sql: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      name: "name",
      sql: "sql",
    });
  });

export const Schemas$V1SigmaSavedQueriesCreateBody = {
  in: SchemaIn$V1SigmaSavedQueriesCreateBody,
  out: SchemaOut$V1SigmaSavedQueriesCreateBody,
};
