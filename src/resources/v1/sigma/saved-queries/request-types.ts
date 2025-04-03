import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  name?: string | undefined;
  sql?: string | undefined;
  id: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  expand?: string[] | undefined;
  name?: string | undefined;
  sql?: string | undefined;
  id: string;
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
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    sql: z.string().optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      name: "name",
      sql: "sql",
      id: "id",
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
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    sql: z.string().optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      name: "name",
      sql: "sql",
      id: "id",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
