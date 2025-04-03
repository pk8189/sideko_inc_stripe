import { zodTransform } from "@sideko-inc/stripe/core";
import {
  CouponCreateBodyAppliesTo,
  External$CouponCreateBodyAppliesTo,
  Schemas$CouponCreateBodyAppliesTo,
} from "@sideko-inc/stripe/types/coupon-create-body-applies-to";
import {
  CouponCreateBodyCurrencyOptions,
  External$CouponCreateBodyCurrencyOptions,
  Schemas$CouponCreateBodyCurrencyOptions,
} from "@sideko-inc/stripe/types/coupon-create-body-currency-options";
import {
  CouponCreateBodyMetadataObj0,
  External$CouponCreateBodyMetadataObj0,
  Schemas$CouponCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/coupon-create-body-metadata-obj0";
import {
  CouponListCreatedObj0,
  External$CouponListCreatedObj0,
  Schemas$CouponListCreatedObj0,
} from "@sideko-inc/stripe/types/coupon-list-created-obj0";
import {
  CouponUpdateBodyCurrencyOptions,
  External$CouponUpdateBodyCurrencyOptions,
  Schemas$CouponUpdateBodyCurrencyOptions,
} from "@sideko-inc/stripe/types/coupon-update-body-currency-options";
import {
  CouponUpdateBodyMetadataObj0,
  External$CouponUpdateBodyMetadataObj0,
  Schemas$CouponUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/coupon-update-body-metadata-obj0";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data: Record<string, any>;
  coupon: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data: Record<string, any>;
  coupon: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()),
    coupon: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      coupon: "coupon",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()),
    coupon: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      coupon: "coupon",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: (CouponListCreatedObj0 | number) | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  data: Record<string, any>;
  created?: (External$CouponListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
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
    created: z
      .union([Schemas$CouponListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
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
    created: z
      .union([Schemas$CouponListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  data: Record<string, any>;
  coupon: string;
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
  coupon: string;
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
    coupon: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      coupon: "coupon",
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
    coupon: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      coupon: "coupon",
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
   * A positive integer representing the amount to subtract from an invoice total (required if `percent_off` is not passed).
   */
  amountOff?: number | undefined;
  /**
   * A hash containing directions for what this Coupon will apply discounts to.
   */
  appliesTo?: CouponCreateBodyAppliesTo | undefined;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `amount_off` parameter (required if `amount_off` is passed).
   */
  currency?: string | undefined;
  /**
   * Coupons defined in each available currency option (only supported if `amount_off` is passed). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: CouponCreateBodyCurrencyOptions | undefined;
  /**
   * Specifies how long the discount will be in effect if used on a subscription. Defaults to `once`.
   */
  duration?: ("forever" | "once" | "repeating") | undefined;
  /**
   * Required only if `duration` is `repeating`, in which case it must be a positive integer that specifies the number of months the discount will be in effect.
   */
  durationInMonths?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Unique string of your choice that will be used to identify this coupon when applying it to a customer. If you don't want to specify a particular code, you can leave the ID blank and we'll generate a random code for you.
   */
  id?: string | undefined;
  /**
   * A positive integer specifying the number of times the coupon can be redeemed before it's no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
   */
  maxRedemptions?: number | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CouponCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
   */
  name?: string | undefined;
  /**
   * A positive float larger than 0, and smaller or equal to 100, that represents the discount the coupon will apply (required if `amount_off` is not passed).
   */
  percentOff?: number | undefined;
  /**
   * Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.
   */
  redeemBy?: number | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  amount_off?: number | undefined;
  applies_to?: External$CouponCreateBodyAppliesTo | undefined;
  currency?: string | undefined;
  currency_options?: External$CouponCreateBodyCurrencyOptions | undefined;
  duration?: ("forever" | "once" | "repeating") | undefined;
  duration_in_months?: number | undefined;
  expand?: string[] | undefined;
  id?: string | undefined;
  max_redemptions?: number | undefined;
  metadata?: (External$CouponCreateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;
  percent_off?: number | undefined;
  redeem_by?: number | undefined;
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
    amount_off: z.number().int().optional(),
    applies_to: Schemas$CouponCreateBodyAppliesTo.in.optional(),
    currency: z.string().optional(),
    currency_options: Schemas$CouponCreateBodyCurrencyOptions.in.optional(),
    duration: z.enum(["forever", "once", "repeating"]).optional(),
    duration_in_months: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    id: z.string().optional(),
    max_redemptions: z.number().int().optional(),
    metadata: z
      .union([Schemas$CouponCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
    percent_off: z.number().optional(),
    redeem_by: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_off: "amountOff",
      applies_to: "appliesTo",
      currency: "currency",
      currency_options: "currencyOptions",
      duration: "duration",
      duration_in_months: "durationInMonths",
      expand: "expand",
      id: "id",
      max_redemptions: "maxRedemptions",
      metadata: "metadata",
      name: "name",
      percent_off: "percentOff",
      redeem_by: "redeemBy",
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
    amountOff: z.number().int().optional(),
    appliesTo: Schemas$CouponCreateBodyAppliesTo.out.optional(),
    currency: z.string().optional(),
    currencyOptions: Schemas$CouponCreateBodyCurrencyOptions.out.optional(),
    duration: z.enum(["forever", "once", "repeating"]).optional(),
    durationInMonths: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    id: z.string().optional(),
    maxRedemptions: z.number().int().optional(),
    metadata: z
      .union([Schemas$CouponCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
    percentOff: z.number().optional(),
    redeemBy: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountOff: "amount_off",
      appliesTo: "applies_to",
      currency: "currency",
      currencyOptions: "currency_options",
      duration: "duration",
      durationInMonths: "duration_in_months",
      expand: "expand",
      id: "id",
      maxRedemptions: "max_redemptions",
      metadata: "metadata",
      name: "name",
      percentOff: "percent_off",
      redeemBy: "redeem_by",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  /**
   * Coupons defined in each available currency option (only supported if the coupon is amount-based). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: CouponUpdateBodyCurrencyOptions | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CouponUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
   */
  name?: string | undefined;
  coupon: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  currency_options?: External$CouponUpdateBodyCurrencyOptions | undefined;
  expand?: string[] | undefined;
  metadata?: (External$CouponUpdateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;
  coupon: string;
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
    currency_options: Schemas$CouponUpdateBodyCurrencyOptions.in.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$CouponUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
    coupon: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency_options: "currencyOptions",
      expand: "expand",
      metadata: "metadata",
      name: "name",
      coupon: "coupon",
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
    currencyOptions: Schemas$CouponUpdateBodyCurrencyOptions.out.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$CouponUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
    coupon: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currencyOptions: "currency_options",
      expand: "expand",
      metadata: "metadata",
      name: "name",
      coupon: "coupon",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
