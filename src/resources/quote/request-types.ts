import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$QuoteCreateBodyAutomaticTax,
  QuoteCreateBodyAutomaticTax,
  Schemas$QuoteCreateBodyAutomaticTax,
} from "@sideko-inc/stripe/types/quote-create-body-automatic-tax";
import {
  External$QuoteCreateBodyDiscountsArr0Item,
  QuoteCreateBodyDiscountsArr0Item,
  Schemas$QuoteCreateBodyDiscountsArr0Item,
} from "@sideko-inc/stripe/types/quote-create-body-discounts-arr0-item";
import {
  External$QuoteCreateBodyFromQuote,
  QuoteCreateBodyFromQuote,
  Schemas$QuoteCreateBodyFromQuote,
} from "@sideko-inc/stripe/types/quote-create-body-from-quote";
import {
  External$QuoteCreateBodyInvoiceSettings,
  QuoteCreateBodyInvoiceSettings,
  Schemas$QuoteCreateBodyInvoiceSettings,
} from "@sideko-inc/stripe/types/quote-create-body-invoice-settings";
import {
  External$QuoteCreateBodyLineItemsItem,
  QuoteCreateBodyLineItemsItem,
  Schemas$QuoteCreateBodyLineItemsItem,
} from "@sideko-inc/stripe/types/quote-create-body-line-items-item";
import {
  External$QuoteCreateBodyMetadata,
  QuoteCreateBodyMetadata,
  Schemas$QuoteCreateBodyMetadata,
} from "@sideko-inc/stripe/types/quote-create-body-metadata";
import {
  External$QuoteCreateBodySubscriptionData,
  QuoteCreateBodySubscriptionData,
  Schemas$QuoteCreateBodySubscriptionData,
} from "@sideko-inc/stripe/types/quote-create-body-subscription-data";
import {
  External$QuoteCreateBodyTransferDataObj0,
  QuoteCreateBodyTransferDataObj0,
  Schemas$QuoteCreateBodyTransferDataObj0,
} from "@sideko-inc/stripe/types/quote-create-body-transfer-data-obj0";
import {
  External$QuoteUpdateBodyAutomaticTax,
  QuoteUpdateBodyAutomaticTax,
  Schemas$QuoteUpdateBodyAutomaticTax,
} from "@sideko-inc/stripe/types/quote-update-body-automatic-tax";
import {
  External$QuoteUpdateBodyDiscountsArr0Item,
  QuoteUpdateBodyDiscountsArr0Item,
  Schemas$QuoteUpdateBodyDiscountsArr0Item,
} from "@sideko-inc/stripe/types/quote-update-body-discounts-arr0-item";
import {
  External$QuoteUpdateBodyInvoiceSettings,
  QuoteUpdateBodyInvoiceSettings,
  Schemas$QuoteUpdateBodyInvoiceSettings,
} from "@sideko-inc/stripe/types/quote-update-body-invoice-settings";
import {
  External$QuoteUpdateBodyLineItemsItem,
  QuoteUpdateBodyLineItemsItem,
  Schemas$QuoteUpdateBodyLineItemsItem,
} from "@sideko-inc/stripe/types/quote-update-body-line-items-item";
import {
  External$QuoteUpdateBodyMetadata,
  QuoteUpdateBodyMetadata,
  Schemas$QuoteUpdateBodyMetadata,
} from "@sideko-inc/stripe/types/quote-update-body-metadata";
import {
  External$QuoteUpdateBodySubscriptionData,
  QuoteUpdateBodySubscriptionData,
  Schemas$QuoteUpdateBodySubscriptionData,
} from "@sideko-inc/stripe/types/quote-update-body-subscription-data";
import {
  External$QuoteUpdateBodyTransferDataObj0,
  QuoteUpdateBodyTransferDataObj0,
  Schemas$QuoteUpdateBodyTransferDataObj0,
} from "@sideko-inc/stripe/types/quote-update-body-transfer-data-obj0";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * The ID of the customer whose quotes will be retrieved.
   */
  customer?: string | undefined;
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
  /**
   * The status of the quote.
   */
  status?: ("accepted" | "canceled" | "draft" | "open") | undefined;
  /**
   * Provides a list of quotes that are associated with the specified test clock. The response will not include quotes with test clocks if this and the customer parameter is not set.
   */
  testClock?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  data: Record<string, any>;
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: ("accepted" | "canceled" | "draft" | "open") | undefined;
  test_clock?: string | undefined;
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
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["accepted", "canceled", "draft", "open"]).optional(),
    test_clock: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      status: "status",
      test_clock: "testClock",
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
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["accepted", "canceled", "draft", "open"]).optional(),
    testClock: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      status: "status",
      testClock: "test_clock",
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
  quote: string;
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
  quote: string;
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
    quote: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
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
    quote: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * ComputedUpfrontLineItemsRequest
 */
export type ComputedUpfrontLineItemsRequest = {
  data: Record<string, any>;
  quote: string;
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
 * ComputedUpfrontLineItemsRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ComputedUpfrontLineItemsRequest = {
  data: Record<string, any>;
  quote: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ComputedUpfrontLineItemsRequest
 */
const SchemaIn$ComputedUpfrontLineItemsRequest: z.ZodType<
  ComputedUpfrontLineItemsRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()),
    quote: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ComputedUpfrontLineItemsRequest
 */
const SchemaOut$ComputedUpfrontLineItemsRequest: z.ZodType<
  External$ComputedUpfrontLineItemsRequest, // output type of this zod object
  z.ZodTypeDef,
  ComputedUpfrontLineItemsRequest // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()),
    quote: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ComputedUpfrontLineItemsRequest = {
  in: SchemaIn$ComputedUpfrontLineItemsRequest,
  out: SchemaOut$ComputedUpfrontLineItemsRequest,
};

/**
 * PdfRequest
 */
export type PdfRequest = {
  data: Record<string, any>;
  quote: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * PdfRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PdfRequest = {
  data: Record<string, any>;
  quote: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PdfRequest
 */
const SchemaIn$PdfRequest: z.ZodType<
  PdfRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()),
    quote: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PdfRequest
 */
const SchemaOut$PdfRequest: z.ZodType<
  External$PdfRequest, // output type of this zod object
  z.ZodTypeDef,
  PdfRequest // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()),
    quote: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
      expand: "expand",
    });
  });

export const Schemas$PdfRequest = {
  in: SchemaIn$PdfRequest,
  out: SchemaOut$PdfRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
   */
  applicationFeeAmount?: (number | string) | undefined;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
   */
  applicationFeePercent?: (number | string) | undefined;
  /**
   * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
   */
  automaticTax?: QuoteCreateBodyAutomaticTax | undefined;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  /**
   * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
   */
  customer?: string | undefined;
  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set.
   */
  defaultTaxRates?: (string[] | string) | undefined;
  /**
   * A description that will be displayed on the quote PDF. If no value is passed, the default description configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  description?: (string | string) | undefined;
  /**
   * The discounts applied to the quote.
   */
  discounts?: (QuoteCreateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch. If no value is passed, the default expiration date configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  expiresAt?: number | undefined;
  /**
   * A footer that will be displayed on the quote PDF. If no value is passed, the default footer configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  footer?: (string | string) | undefined;
  /**
   * Clone an existing quote. The new quote will be created in `status=draft`. When using this parameter, you cannot specify any other parameters except for `expires_at`.
   */
  fromQuote?: QuoteCreateBodyFromQuote | undefined;
  /**
   * A header that will be displayed on the quote PDF. If no value is passed, the default header configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  header?: (string | string) | undefined;
  /**
   * All invoices will be billed using the specified settings.
   */
  invoiceSettings?: QuoteCreateBodyInvoiceSettings | undefined;
  /**
   * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
   */
  lineItems?: QuoteCreateBodyLineItemsItem[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: QuoteCreateBodyMetadata | undefined;
  /**
   * The account on behalf of which to charge.
   */
  onBehalfOf?: (string | string) | undefined;
  /**
   * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
   */
  subscriptionData?: QuoteCreateBodySubscriptionData | undefined;
  /**
   * ID of the test clock to attach to the quote.
   */
  testClock?: string | undefined;
  /**
   * The data with which to automatically create a Transfer for each of the invoices.
   */
  transferData?: (QuoteCreateBodyTransferDataObj0 | string) | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  application_fee_amount?: (number | string) | undefined;
  application_fee_percent?: (number | string) | undefined;
  automatic_tax?: External$QuoteCreateBodyAutomaticTax | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  customer?: string | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  description?: (string | string) | undefined;
  discounts?:
    | (External$QuoteCreateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  footer?: (string | string) | undefined;
  from_quote?: External$QuoteCreateBodyFromQuote | undefined;
  header?: (string | string) | undefined;
  invoice_settings?: External$QuoteCreateBodyInvoiceSettings | undefined;
  line_items?: External$QuoteCreateBodyLineItemsItem[] | undefined;
  metadata?: External$QuoteCreateBodyMetadata | undefined;
  on_behalf_of?: (string | string) | undefined;
  subscription_data?: External$QuoteCreateBodySubscriptionData | undefined;
  test_clock?: string | undefined;
  transfer_data?:
    | (External$QuoteCreateBodyTransferDataObj0 | string)
    | undefined;
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
    application_fee_amount: z.union([z.number().int(), z.string()]).optional(),
    application_fee_percent: z.union([z.number(), z.string()]).optional(),
    automatic_tax: Schemas$QuoteCreateBodyAutomaticTax.in.optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    customer: z.string().optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([z.array(Schemas$QuoteCreateBodyDiscountsArr0Item.in), z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    footer: z.union([z.string(), z.string()]).optional(),
    from_quote: Schemas$QuoteCreateBodyFromQuote.in.optional(),
    header: z.union([z.string(), z.string()]).optional(),
    invoice_settings: Schemas$QuoteCreateBodyInvoiceSettings.in.optional(),
    line_items: z.array(Schemas$QuoteCreateBodyLineItemsItem.in).optional(),
    metadata: Schemas$QuoteCreateBodyMetadata.in.optional(),
    on_behalf_of: z.union([z.string(), z.string()]).optional(),
    subscription_data: Schemas$QuoteCreateBodySubscriptionData.in.optional(),
    test_clock: z.string().optional(),
    transfer_data: z
      .union([Schemas$QuoteCreateBodyTransferDataObj0.in, z.string()])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application_fee_amount: "applicationFeeAmount",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      collection_method: "collectionMethod",
      customer: "customer",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      expand: "expand",
      expires_at: "expiresAt",
      footer: "footer",
      from_quote: "fromQuote",
      header: "header",
      invoice_settings: "invoiceSettings",
      line_items: "lineItems",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      subscription_data: "subscriptionData",
      test_clock: "testClock",
      transfer_data: "transferData",
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
    applicationFeeAmount: z.union([z.number().int(), z.string()]).optional(),
    applicationFeePercent: z.union([z.number(), z.string()]).optional(),
    automaticTax: Schemas$QuoteCreateBodyAutomaticTax.out.optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    customer: z.string().optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([
        z.array(Schemas$QuoteCreateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    footer: z.union([z.string(), z.string()]).optional(),
    fromQuote: Schemas$QuoteCreateBodyFromQuote.out.optional(),
    header: z.union([z.string(), z.string()]).optional(),
    invoiceSettings: Schemas$QuoteCreateBodyInvoiceSettings.out.optional(),
    lineItems: z.array(Schemas$QuoteCreateBodyLineItemsItem.out).optional(),
    metadata: Schemas$QuoteCreateBodyMetadata.out.optional(),
    onBehalfOf: z.union([z.string(), z.string()]).optional(),
    subscriptionData: Schemas$QuoteCreateBodySubscriptionData.out.optional(),
    testClock: z.string().optional(),
    transferData: z
      .union([Schemas$QuoteCreateBodyTransferDataObj0.out, z.string()])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      applicationFeeAmount: "application_fee_amount",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      collectionMethod: "collection_method",
      customer: "customer",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      expand: "expand",
      expiresAt: "expires_at",
      footer: "footer",
      fromQuote: "from_quote",
      header: "header",
      invoiceSettings: "invoice_settings",
      lineItems: "line_items",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      subscriptionData: "subscription_data",
      testClock: "test_clock",
      transferData: "transfer_data",
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
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
   */
  applicationFeeAmount?: (number | string) | undefined;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
   */
  applicationFeePercent?: (number | string) | undefined;
  /**
   * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
   */
  automaticTax?: QuoteUpdateBodyAutomaticTax | undefined;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  /**
   * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
   */
  customer?: string | undefined;
  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set.
   */
  defaultTaxRates?: (string[] | string) | undefined;
  /**
   * A description that will be displayed on the quote PDF.
   */
  description?: (string | string) | undefined;
  /**
   * The discounts applied to the quote.
   */
  discounts?: (QuoteUpdateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
   */
  expiresAt?: number | undefined;
  /**
   * A footer that will be displayed on the quote PDF.
   */
  footer?: (string | string) | undefined;
  /**
   * A header that will be displayed on the quote PDF.
   */
  header?: (string | string) | undefined;
  /**
   * All invoices will be billed using the specified settings.
   */
  invoiceSettings?: QuoteUpdateBodyInvoiceSettings | undefined;
  /**
   * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
   */
  lineItems?: QuoteUpdateBodyLineItemsItem[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: QuoteUpdateBodyMetadata | undefined;
  /**
   * The account on behalf of which to charge.
   */
  onBehalfOf?: (string | string) | undefined;
  /**
   * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
   */
  subscriptionData?: QuoteUpdateBodySubscriptionData | undefined;
  /**
   * The data with which to automatically create a Transfer for each of the invoices.
   */
  transferData?: (QuoteUpdateBodyTransferDataObj0 | string) | undefined;
  quote: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  application_fee_amount?: (number | string) | undefined;
  application_fee_percent?: (number | string) | undefined;
  automatic_tax?: External$QuoteUpdateBodyAutomaticTax | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  customer?: string | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  description?: (string | string) | undefined;
  discounts?:
    | (External$QuoteUpdateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  footer?: (string | string) | undefined;
  header?: (string | string) | undefined;
  invoice_settings?: External$QuoteUpdateBodyInvoiceSettings | undefined;
  line_items?: External$QuoteUpdateBodyLineItemsItem[] | undefined;
  metadata?: External$QuoteUpdateBodyMetadata | undefined;
  on_behalf_of?: (string | string) | undefined;
  subscription_data?: External$QuoteUpdateBodySubscriptionData | undefined;
  transfer_data?:
    | (External$QuoteUpdateBodyTransferDataObj0 | string)
    | undefined;
  quote: string;
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
    application_fee_amount: z.union([z.number().int(), z.string()]).optional(),
    application_fee_percent: z.union([z.number(), z.string()]).optional(),
    automatic_tax: Schemas$QuoteUpdateBodyAutomaticTax.in.optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    customer: z.string().optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([z.array(Schemas$QuoteUpdateBodyDiscountsArr0Item.in), z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    footer: z.union([z.string(), z.string()]).optional(),
    header: z.union([z.string(), z.string()]).optional(),
    invoice_settings: Schemas$QuoteUpdateBodyInvoiceSettings.in.optional(),
    line_items: z.array(Schemas$QuoteUpdateBodyLineItemsItem.in).optional(),
    metadata: Schemas$QuoteUpdateBodyMetadata.in.optional(),
    on_behalf_of: z.union([z.string(), z.string()]).optional(),
    subscription_data: Schemas$QuoteUpdateBodySubscriptionData.in.optional(),
    transfer_data: z
      .union([Schemas$QuoteUpdateBodyTransferDataObj0.in, z.string()])
      .optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application_fee_amount: "applicationFeeAmount",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      collection_method: "collectionMethod",
      customer: "customer",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      expand: "expand",
      expires_at: "expiresAt",
      footer: "footer",
      header: "header",
      invoice_settings: "invoiceSettings",
      line_items: "lineItems",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      subscription_data: "subscriptionData",
      transfer_data: "transferData",
      quote: "quote",
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
    applicationFeeAmount: z.union([z.number().int(), z.string()]).optional(),
    applicationFeePercent: z.union([z.number(), z.string()]).optional(),
    automaticTax: Schemas$QuoteUpdateBodyAutomaticTax.out.optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    customer: z.string().optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([
        z.array(Schemas$QuoteUpdateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    footer: z.union([z.string(), z.string()]).optional(),
    header: z.union([z.string(), z.string()]).optional(),
    invoiceSettings: Schemas$QuoteUpdateBodyInvoiceSettings.out.optional(),
    lineItems: z.array(Schemas$QuoteUpdateBodyLineItemsItem.out).optional(),
    metadata: Schemas$QuoteUpdateBodyMetadata.out.optional(),
    onBehalfOf: z.union([z.string(), z.string()]).optional(),
    subscriptionData: Schemas$QuoteUpdateBodySubscriptionData.out.optional(),
    transferData: z
      .union([Schemas$QuoteUpdateBodyTransferDataObj0.out, z.string()])
      .optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      applicationFeeAmount: "application_fee_amount",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      collectionMethod: "collection_method",
      customer: "customer",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      expand: "expand",
      expiresAt: "expires_at",
      footer: "footer",
      header: "header",
      invoiceSettings: "invoice_settings",
      lineItems: "line_items",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      subscriptionData: "subscription_data",
      transferData: "transfer_data",
      quote: "quote",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * AcceptRequest
 */
export type AcceptRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  quote: string;
};

/**
 * @internal
 * AcceptRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AcceptRequest = {
  expand?: string[] | undefined;
  quote: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AcceptRequest
 */
const SchemaIn$AcceptRequest: z.ZodType<
  AcceptRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      quote: "quote",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AcceptRequest
 */
const SchemaOut$AcceptRequest: z.ZodType<
  External$AcceptRequest, // output type of this zod object
  z.ZodTypeDef,
  AcceptRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      quote: "quote",
    });
  });

export const Schemas$AcceptRequest = {
  in: SchemaIn$AcceptRequest,
  out: SchemaOut$AcceptRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  quote: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  expand?: string[] | undefined;
  quote: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelRequest
 */
const SchemaIn$CancelRequest: z.ZodType<
  CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      quote: "quote",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelRequest
 */
const SchemaOut$CancelRequest: z.ZodType<
  External$CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      quote: "quote",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * FinalizeRequest
 */
export type FinalizeRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
   */
  expiresAt?: number | undefined;
  quote: string;
};

/**
 * @internal
 * FinalizeRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinalizeRequest = {
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  quote: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinalizeRequest
 */
const SchemaIn$FinalizeRequest: z.ZodType<
  FinalizeRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expires_at: "expiresAt",
      quote: "quote",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinalizeRequest
 */
const SchemaOut$FinalizeRequest: z.ZodType<
  External$FinalizeRequest, // output type of this zod object
  z.ZodTypeDef,
  FinalizeRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expiresAt: "expires_at",
      quote: "quote",
    });
  });

export const Schemas$FinalizeRequest = {
  in: SchemaIn$FinalizeRequest,
  out: SchemaOut$FinalizeRequest,
};
