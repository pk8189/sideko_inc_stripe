import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A query object represents a query that can be executed for a run.
 */
export type SigmaSigmaApiQuery = {
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "sigma.sigma_api_query";
  sql: string;
};

/**
 * @internal
 * SigmaSigmaApiQuery without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SigmaSigmaApiQuery = {
  created: number;
  id: string;
  livemode: boolean;
  name: string;
  object: "sigma.sigma_api_query";
  sql: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SigmaSigmaApiQuery
 */
const SchemaIn$SigmaSigmaApiQuery: z.ZodType<
  SigmaSigmaApiQuery, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    name: z.string(),
    object: z.enum(["sigma.sigma_api_query"]),
    sql: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      id: "id",
      livemode: "livemode",
      name: "name",
      object: "object",
      sql: "sql",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SigmaSigmaApiQuery
 */
const SchemaOut$SigmaSigmaApiQuery: z.ZodType<
  External$SigmaSigmaApiQuery, // output type of this zod object
  z.ZodTypeDef,
  SigmaSigmaApiQuery // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    name: z.string(),
    object: z.enum(["sigma.sigma_api_query"]),
    sql: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      id: "id",
      livemode: "livemode",
      name: "name",
      object: "object",
      sql: "sql",
    });
  });

export const Schemas$SigmaSigmaApiQuery = {
  in: SchemaIn$SigmaSigmaApiQuery,
  out: SchemaOut$SigmaSigmaApiQuery,
};
