import { zodTransform } from "@sideko-inc/stripe/core";
import {
  CustomerCashBalanceModifyBodySettings,
  External$CustomerCashBalanceModifyBodySettings,
  Schemas$CustomerCashBalanceModifyBodySettings,
} from "@sideko-inc/stripe/types/customer-cash-balance-modify-body-settings";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  data: Record<string, any>;
  customer: string;
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
  customer: string;
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
    customer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
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
    customer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * ModifyRequest
 */
export type ModifyRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A hash of settings for this cash balance.
   */
  settings?: CustomerCashBalanceModifyBodySettings | undefined;
  customer: string;
};

/**
 * @internal
 * ModifyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ModifyRequest = {
  expand?: string[] | undefined;
  settings?: External$CustomerCashBalanceModifyBodySettings | undefined;
  customer: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ModifyRequest
 */
const SchemaIn$ModifyRequest: z.ZodType<
  ModifyRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    settings: Schemas$CustomerCashBalanceModifyBodySettings.in.optional(),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      settings: "settings",
      customer: "customer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ModifyRequest
 */
const SchemaOut$ModifyRequest: z.ZodType<
  External$ModifyRequest, // output type of this zod object
  z.ZodTypeDef,
  ModifyRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    settings: Schemas$CustomerCashBalanceModifyBodySettings.out.optional(),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      settings: "settings",
      customer: "customer",
    });
  });

export const Schemas$ModifyRequest = {
  in: SchemaIn$ModifyRequest,
  out: SchemaOut$ModifyRequest,
};
