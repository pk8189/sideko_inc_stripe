import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$InvoiceLineCreateManyBodyInvoiceMetadataObj0,
  InvoiceLineCreateManyBodyInvoiceMetadataObj0,
  Schemas$InvoiceLineCreateManyBodyInvoiceMetadataObj0,
} from "@sideko-inc/stripe/types/invoice-line-create-many-body-invoice-metadata-obj0";
import {
  External$InvoiceLineCreateManyBodyLinesItem,
  InvoiceLineCreateManyBodyLinesItem,
  Schemas$InvoiceLineCreateManyBodyLinesItem,
} from "@sideko-inc/stripe/types/invoice-line-create-many-body-lines-item";
import {
  External$InvoiceLineRemoveManyBodyInvoiceMetadataObj0,
  InvoiceLineRemoveManyBodyInvoiceMetadataObj0,
  Schemas$InvoiceLineRemoveManyBodyInvoiceMetadataObj0,
} from "@sideko-inc/stripe/types/invoice-line-remove-many-body-invoice-metadata-obj0";
import {
  External$InvoiceLineRemoveManyBodyLinesItem,
  InvoiceLineRemoveManyBodyLinesItem,
  Schemas$InvoiceLineRemoveManyBodyLinesItem,
} from "@sideko-inc/stripe/types/invoice-line-remove-many-body-lines-item";
import {
  External$InvoiceLineUpdateBodyDiscountsArr0Item,
  InvoiceLineUpdateBodyDiscountsArr0Item,
  Schemas$InvoiceLineUpdateBodyDiscountsArr0Item,
} from "@sideko-inc/stripe/types/invoice-line-update-body-discounts-arr0-item";
import {
  External$InvoiceLineUpdateBodyMetadataObj0,
  InvoiceLineUpdateBodyMetadataObj0,
  Schemas$InvoiceLineUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/invoice-line-update-body-metadata-obj0";
import {
  External$InvoiceLineUpdateBodyPeriod,
  InvoiceLineUpdateBodyPeriod,
  Schemas$InvoiceLineUpdateBodyPeriod,
} from "@sideko-inc/stripe/types/invoice-line-update-body-period";
import {
  External$InvoiceLineUpdateBodyPriceData,
  InvoiceLineUpdateBodyPriceData,
  Schemas$InvoiceLineUpdateBodyPriceData,
} from "@sideko-inc/stripe/types/invoice-line-update-body-price-data";
import {
  External$InvoiceLineUpdateBodyPricing,
  InvoiceLineUpdateBodyPricing,
  Schemas$InvoiceLineUpdateBodyPricing,
} from "@sideko-inc/stripe/types/invoice-line-update-body-pricing";
import {
  External$InvoiceLineUpdateBodyTaxAmountsArr0Item,
  InvoiceLineUpdateBodyTaxAmountsArr0Item,
  Schemas$InvoiceLineUpdateBodyTaxAmountsArr0Item,
} from "@sideko-inc/stripe/types/invoice-line-update-body-tax-amounts-arr0-item";
import {
  External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
  InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
  Schemas$InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
} from "@sideko-inc/stripe/types/invoice-line-update-many-body-invoice-metadata-obj0";
import {
  External$InvoiceLineUpdateManyBodyLinesItem,
  InvoiceLineUpdateManyBodyLinesItem,
  Schemas$InvoiceLineUpdateManyBodyLinesItem,
} from "@sideko-inc/stripe/types/invoice-line-update-many-body-lines-item";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  invoice: string;
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
  invoice: string;
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
    invoice: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
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
    invoice: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
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
 * CreateManyRequest
 */
export type CreateManyRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  invoiceMetadata?:
    | (InvoiceLineCreateManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  /**
   * The line items to add.
   */
  lines: InvoiceLineCreateManyBodyLinesItem[];
  invoice: string;
};

/**
 * @internal
 * CreateManyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateManyRequest = {
  expand?: string[] | undefined;
  invoice_metadata?:
    | (External$InvoiceLineCreateManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  lines: External$InvoiceLineCreateManyBodyLinesItem[];
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateManyRequest
 */
const SchemaIn$CreateManyRequest: z.ZodType<
  CreateManyRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice_metadata: z
      .union([
        Schemas$InvoiceLineCreateManyBodyInvoiceMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineCreateManyBodyLinesItem.in),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice_metadata: "invoiceMetadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateManyRequest
 */
const SchemaOut$CreateManyRequest: z.ZodType<
  External$CreateManyRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateManyRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoiceMetadata: z
      .union([
        Schemas$InvoiceLineCreateManyBodyInvoiceMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineCreateManyBodyLinesItem.out),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceMetadata: "invoice_metadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

export const Schemas$CreateManyRequest = {
  in: SchemaIn$CreateManyRequest,
  out: SchemaOut$CreateManyRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  /**
   * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
   */
  amount?: number | undefined;
  /**
   * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
   */
  description?: string | undefined;
  /**
   * Controls whether discounts apply to this line item. Defaults to false for prorations or negative line items, and true for all other line items. Cannot be set to true for prorations.
   */
  discountable?: boolean | undefined;
  /**
   * The coupons, promotion codes & existing discounts which apply to the line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts.
   */
  discounts?: (InvoiceLineUpdateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-type) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](api/invoices/line_item#invoice_line_item_object-type) line items, where any existing metadata on the invoice line is merged with the incoming data.
   */
  metadata?: (InvoiceLineUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
   */
  period?: InvoiceLineUpdateBodyPeriod | undefined;
  /**
   * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
   */
  priceData?: InvoiceLineUpdateBodyPriceData | undefined;
  /**
   * The pricing information for the invoice item.
   */
  pricing?: InvoiceLineUpdateBodyPricing | undefined;
  /**
   * Non-negative integer. The quantity of units for the line item.
   */
  quantity?: number | undefined;
  /**
   * A list of up to 10 tax amounts for this line item. This can be useful if you calculate taxes on your own or use a third-party to calculate them. You cannot set tax amounts if any line item has [tax_rates](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-tax_rates) or if the invoice has [default_tax_rates](https://stripe.com/docs/api/invoices/object#invoice_object-default_tax_rates) or uses [automatic tax](https://stripe.com/docs/tax/invoicing). Pass an empty string to remove previously defined tax amounts.
   */
  taxAmounts?: (InvoiceLineUpdateBodyTaxAmountsArr0Item[] | string) | undefined;
  /**
   * The tax rates which apply to the line item. When set, the `default_tax_rates` on the invoice do not apply to this line item. Pass an empty string to remove previously-defined tax rates.
   */
  taxRates?: (string[] | string) | undefined;
  /**
   * Invoice ID of line item
   */
  invoice: string;
  /**
   * Invoice line item ID
   */
  lineItemId: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  amount?: number | undefined;
  description?: string | undefined;
  discountable?: boolean | undefined;
  discounts?:
    | (External$InvoiceLineUpdateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  metadata?: (External$InvoiceLineUpdateBodyMetadataObj0 | string) | undefined;
  period?: External$InvoiceLineUpdateBodyPeriod | undefined;
  price_data?: External$InvoiceLineUpdateBodyPriceData | undefined;
  pricing?: External$InvoiceLineUpdateBodyPricing | undefined;
  quantity?: number | undefined;
  tax_amounts?:
    | (External$InvoiceLineUpdateBodyTaxAmountsArr0Item[] | string)
    | undefined;
  tax_rates?: (string[] | string) | undefined;
  invoice: string;
  line_item_id: string;
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
    amount: z.number().int().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceLineUpdateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$InvoiceLineUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    period: Schemas$InvoiceLineUpdateBodyPeriod.in.optional(),
    price_data: Schemas$InvoiceLineUpdateBodyPriceData.in.optional(),
    pricing: Schemas$InvoiceLineUpdateBodyPricing.in.optional(),
    quantity: z.number().int().optional(),
    tax_amounts: z
      .union([
        z.array(Schemas$InvoiceLineUpdateBodyTaxAmountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    invoice: z.string(),
    line_item_id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      expand: "expand",
      metadata: "metadata",
      period: "period",
      price_data: "priceData",
      pricing: "pricing",
      quantity: "quantity",
      tax_amounts: "taxAmounts",
      tax_rates: "taxRates",
      invoice: "invoice",
      line_item_id: "lineItemId",
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
    amount: z.number().int().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceLineUpdateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$InvoiceLineUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    period: Schemas$InvoiceLineUpdateBodyPeriod.out.optional(),
    priceData: Schemas$InvoiceLineUpdateBodyPriceData.out.optional(),
    pricing: Schemas$InvoiceLineUpdateBodyPricing.out.optional(),
    quantity: z.number().int().optional(),
    taxAmounts: z
      .union([
        z.array(Schemas$InvoiceLineUpdateBodyTaxAmountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
    invoice: z.string(),
    lineItemId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      expand: "expand",
      metadata: "metadata",
      period: "period",
      priceData: "price_data",
      pricing: "pricing",
      quantity: "quantity",
      taxAmounts: "tax_amounts",
      taxRates: "tax_rates",
      invoice: "invoice",
      lineItemId: "line_item_id",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * RemoveManyRequest
 */
export type RemoveManyRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  invoiceMetadata?:
    | (InvoiceLineRemoveManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  /**
   * The line items to remove.
   */
  lines: InvoiceLineRemoveManyBodyLinesItem[];
  invoice: string;
};

/**
 * @internal
 * RemoveManyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RemoveManyRequest = {
  expand?: string[] | undefined;
  invoice_metadata?:
    | (External$InvoiceLineRemoveManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  lines: External$InvoiceLineRemoveManyBodyLinesItem[];
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RemoveManyRequest
 */
const SchemaIn$RemoveManyRequest: z.ZodType<
  RemoveManyRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice_metadata: z
      .union([
        Schemas$InvoiceLineRemoveManyBodyInvoiceMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineRemoveManyBodyLinesItem.in),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice_metadata: "invoiceMetadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RemoveManyRequest
 */
const SchemaOut$RemoveManyRequest: z.ZodType<
  External$RemoveManyRequest, // output type of this zod object
  z.ZodTypeDef,
  RemoveManyRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoiceMetadata: z
      .union([
        Schemas$InvoiceLineRemoveManyBodyInvoiceMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineRemoveManyBodyLinesItem.out),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceMetadata: "invoice_metadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

export const Schemas$RemoveManyRequest = {
  in: SchemaIn$RemoveManyRequest,
  out: SchemaOut$RemoveManyRequest,
};

/**
 * UpdateManyRequest
 */
export type UpdateManyRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-type) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](api/invoices/line_item#invoice_line_item_object-type) line items, where any existing metadata on the invoice line is merged with the incoming data.
   */
  invoiceMetadata?:
    | (InvoiceLineUpdateManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  /**
   * The line items to update.
   */
  lines: InvoiceLineUpdateManyBodyLinesItem[];
  invoice: string;
};

/**
 * @internal
 * UpdateManyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateManyRequest = {
  expand?: string[] | undefined;
  invoice_metadata?:
    | (External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0 | string)
    | undefined;
  lines: External$InvoiceLineUpdateManyBodyLinesItem[];
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateManyRequest
 */
const SchemaIn$UpdateManyRequest: z.ZodType<
  UpdateManyRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice_metadata: z
      .union([
        Schemas$InvoiceLineUpdateManyBodyInvoiceMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineUpdateManyBodyLinesItem.in),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice_metadata: "invoiceMetadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateManyRequest
 */
const SchemaOut$UpdateManyRequest: z.ZodType<
  External$UpdateManyRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateManyRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoiceMetadata: z
      .union([
        Schemas$InvoiceLineUpdateManyBodyInvoiceMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    lines: z.array(Schemas$InvoiceLineUpdateManyBodyLinesItem.out),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceMetadata: "invoice_metadata",
      lines: "lines",
      invoice: "invoice",
    });
  });

export const Schemas$UpdateManyRequest = {
  in: SchemaIn$UpdateManyRequest,
  out: SchemaOut$UpdateManyRequest,
};
