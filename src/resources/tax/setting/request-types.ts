import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TaxSettingUpdateBodyDefaults,
  Schemas$TaxSettingUpdateBodyDefaults,
  TaxSettingUpdateBodyDefaults,
} from "@sideko-inc/stripe/types/tax-setting-update-body-defaults";
import {
  External$TaxSettingUpdateBodyHeadOffice,
  Schemas$TaxSettingUpdateBodyHeadOffice,
  TaxSettingUpdateBodyHeadOffice,
} from "@sideko-inc/stripe/types/tax-setting-update-body-head-office";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  data: Record<string, any>;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      expand: "expand",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  /**
   * Default configuration to be used on Stripe Tax calculations.
   */
  defaults?: TaxSettingUpdateBodyDefaults | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The place where your business is located.
   */
  headOffice?: TaxSettingUpdateBodyHeadOffice | undefined;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  defaults?: External$TaxSettingUpdateBodyDefaults | undefined;
  expand?: string[] | undefined;
  head_office?: External$TaxSettingUpdateBodyHeadOffice | undefined;
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
    defaults: Schemas$TaxSettingUpdateBodyDefaults.in.optional(),
    expand: z.array(z.string()).optional(),
    head_office: Schemas$TaxSettingUpdateBodyHeadOffice.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaults: "defaults",
      expand: "expand",
      head_office: "headOffice",
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
    defaults: Schemas$TaxSettingUpdateBodyDefaults.out.optional(),
    expand: z.array(z.string()).optional(),
    headOffice: Schemas$TaxSettingUpdateBodyHeadOffice.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaults: "defaults",
      expand: "expand",
      headOffice: "head_office",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
