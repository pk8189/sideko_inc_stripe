import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$InvoiceCreateBodyAutomaticTax,
  InvoiceCreateBodyAutomaticTax,
  Schemas$InvoiceCreateBodyAutomaticTax,
} from "@sideko-inc/stripe/types/invoice-create-body-automatic-tax";
import {
  External$InvoiceCreateBodyCustomFieldsArr0Item,
  InvoiceCreateBodyCustomFieldsArr0Item,
  Schemas$InvoiceCreateBodyCustomFieldsArr0Item,
} from "@sideko-inc/stripe/types/invoice-create-body-custom-fields-arr0-item";
import {
  External$InvoiceCreateBodyDiscountsArr0Item,
  InvoiceCreateBodyDiscountsArr0Item,
  Schemas$InvoiceCreateBodyDiscountsArr0Item,
} from "@sideko-inc/stripe/types/invoice-create-body-discounts-arr0-item";
import {
  External$InvoiceCreateBodyFromInvoice,
  InvoiceCreateBodyFromInvoice,
  Schemas$InvoiceCreateBodyFromInvoice,
} from "@sideko-inc/stripe/types/invoice-create-body-from-invoice";
import {
  External$InvoiceCreateBodyIssuer,
  InvoiceCreateBodyIssuer,
  Schemas$InvoiceCreateBodyIssuer,
} from "@sideko-inc/stripe/types/invoice-create-body-issuer";
import {
  External$InvoiceCreateBodyMetadataObj0,
  InvoiceCreateBodyMetadataObj0,
  Schemas$InvoiceCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/invoice-create-body-metadata-obj0";
import {
  External$InvoiceCreateBodyPaymentSettings,
  InvoiceCreateBodyPaymentSettings,
  Schemas$InvoiceCreateBodyPaymentSettings,
} from "@sideko-inc/stripe/types/invoice-create-body-payment-settings";
import {
  External$InvoiceCreateBodyRendering,
  InvoiceCreateBodyRendering,
  Schemas$InvoiceCreateBodyRendering,
} from "@sideko-inc/stripe/types/invoice-create-body-rendering";
import {
  External$InvoiceCreateBodyShippingCost,
  InvoiceCreateBodyShippingCost,
  Schemas$InvoiceCreateBodyShippingCost,
} from "@sideko-inc/stripe/types/invoice-create-body-shipping-cost";
import {
  External$InvoiceCreateBodyShippingDetails,
  InvoiceCreateBodyShippingDetails,
  Schemas$InvoiceCreateBodyShippingDetails,
} from "@sideko-inc/stripe/types/invoice-create-body-shipping-details";
import {
  External$InvoiceCreateBodyTransferData,
  InvoiceCreateBodyTransferData,
  Schemas$InvoiceCreateBodyTransferData,
} from "@sideko-inc/stripe/types/invoice-create-body-transfer-data";
import {
  External$InvoiceListCreatedObj0,
  InvoiceListCreatedObj0,
  Schemas$InvoiceListCreatedObj0,
} from "@sideko-inc/stripe/types/invoice-list-created-obj0";
import {
  External$InvoiceListDueDateObj0,
  InvoiceListDueDateObj0,
  Schemas$InvoiceListDueDateObj0,
} from "@sideko-inc/stripe/types/invoice-list-due-date-obj0";
import {
  External$InvoicePreviewBodyAutomaticTax,
  InvoicePreviewBodyAutomaticTax,
  Schemas$InvoicePreviewBodyAutomaticTax,
} from "@sideko-inc/stripe/types/invoice-preview-body-automatic-tax";
import {
  External$InvoicePreviewBodyCustomerDetails,
  InvoicePreviewBodyCustomerDetails,
  Schemas$InvoicePreviewBodyCustomerDetails,
} from "@sideko-inc/stripe/types/invoice-preview-body-customer-details";
import {
  External$InvoicePreviewBodyDiscountsArr0Item,
  InvoicePreviewBodyDiscountsArr0Item,
  Schemas$InvoicePreviewBodyDiscountsArr0Item,
} from "@sideko-inc/stripe/types/invoice-preview-body-discounts-arr0-item";
import {
  External$InvoicePreviewBodyInvoiceItemsItem,
  InvoicePreviewBodyInvoiceItemsItem,
  Schemas$InvoicePreviewBodyInvoiceItemsItem,
} from "@sideko-inc/stripe/types/invoice-preview-body-invoice-items-item";
import {
  External$InvoicePreviewBodyIssuer,
  InvoicePreviewBodyIssuer,
  Schemas$InvoicePreviewBodyIssuer,
} from "@sideko-inc/stripe/types/invoice-preview-body-issuer";
import {
  External$InvoicePreviewBodyScheduleDetails,
  InvoicePreviewBodyScheduleDetails,
  Schemas$InvoicePreviewBodyScheduleDetails,
} from "@sideko-inc/stripe/types/invoice-preview-body-schedule-details";
import {
  External$InvoicePreviewBodySubscriptionDetails,
  InvoicePreviewBodySubscriptionDetails,
  Schemas$InvoicePreviewBodySubscriptionDetails,
} from "@sideko-inc/stripe/types/invoice-preview-body-subscription-details";
import {
  External$InvoiceUpdateBodyAutomaticTax,
  InvoiceUpdateBodyAutomaticTax,
  Schemas$InvoiceUpdateBodyAutomaticTax,
} from "@sideko-inc/stripe/types/invoice-update-body-automatic-tax";
import {
  External$InvoiceUpdateBodyCustomFieldsArr0Item,
  InvoiceUpdateBodyCustomFieldsArr0Item,
  Schemas$InvoiceUpdateBodyCustomFieldsArr0Item,
} from "@sideko-inc/stripe/types/invoice-update-body-custom-fields-arr0-item";
import {
  External$InvoiceUpdateBodyDiscountsArr0Item,
  InvoiceUpdateBodyDiscountsArr0Item,
  Schemas$InvoiceUpdateBodyDiscountsArr0Item,
} from "@sideko-inc/stripe/types/invoice-update-body-discounts-arr0-item";
import {
  External$InvoiceUpdateBodyIssuer,
  InvoiceUpdateBodyIssuer,
  Schemas$InvoiceUpdateBodyIssuer,
} from "@sideko-inc/stripe/types/invoice-update-body-issuer";
import {
  External$InvoiceUpdateBodyMetadataObj0,
  InvoiceUpdateBodyMetadataObj0,
  Schemas$InvoiceUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/invoice-update-body-metadata-obj0";
import {
  External$InvoiceUpdateBodyPaymentSettings,
  InvoiceUpdateBodyPaymentSettings,
  Schemas$InvoiceUpdateBodyPaymentSettings,
} from "@sideko-inc/stripe/types/invoice-update-body-payment-settings";
import {
  External$InvoiceUpdateBodyRendering,
  InvoiceUpdateBodyRendering,
  Schemas$InvoiceUpdateBodyRendering,
} from "@sideko-inc/stripe/types/invoice-update-body-rendering";
import {
  External$InvoiceUpdateBodyShippingCostObj0,
  InvoiceUpdateBodyShippingCostObj0,
  Schemas$InvoiceUpdateBodyShippingCostObj0,
} from "@sideko-inc/stripe/types/invoice-update-body-shipping-cost-obj0";
import {
  External$InvoiceUpdateBodyShippingDetailsObj0,
  InvoiceUpdateBodyShippingDetailsObj0,
  Schemas$InvoiceUpdateBodyShippingDetailsObj0,
} from "@sideko-inc/stripe/types/invoice-update-body-shipping-details-obj0";
import {
  External$InvoiceUpdateBodyTransferDataObj0,
  InvoiceUpdateBodyTransferDataObj0,
  Schemas$InvoiceUpdateBodyTransferDataObj0,
} from "@sideko-inc/stripe/types/invoice-update-body-transfer-data-obj0";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data: Record<string, any>;
  invoice: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data: Record<string, any>;
  invoice: string;
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
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
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
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
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
   * The collection method of the invoice to retrieve. Either `charge_automatically` or `send_invoice`.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  /**
   * Only return invoices that were created during the given date interval.
   */
  created?: (InvoiceListCreatedObj0 | number) | undefined;
  /**
   * Only return invoices for the customer specified by this customer ID.
   */
  customer?: string | undefined;
  dueDate?: (InvoiceListDueDateObj0 | number) | undefined;
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
   * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
   */
  status?: ("draft" | "open" | "paid" | "uncollectible" | "void") | undefined;
  /**
   * Only return invoices for the subscription specified by this subscription ID.
   */
  subscription?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  data: Record<string, any>;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  created?: (External$InvoiceListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  due_date?: (External$InvoiceListDueDateObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: ("draft" | "open" | "paid" | "uncollectible" | "void") | undefined;
  subscription?: string | undefined;
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
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    created: z
      .union([Schemas$InvoiceListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    due_date: z
      .union([Schemas$InvoiceListDueDateObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z
      .enum(["draft", "open", "paid", "uncollectible", "void"])
      .optional(),
    subscription: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      collection_method: "collectionMethod",
      created: "created",
      customer: "customer",
      due_date: "dueDate",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      status: "status",
      subscription: "subscription",
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
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    created: z
      .union([Schemas$InvoiceListCreatedObj0.out, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    dueDate: z
      .union([Schemas$InvoiceListDueDateObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z
      .enum(["draft", "open", "paid", "uncollectible", "void"])
      .optional(),
    subscription: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      collectionMethod: "collection_method",
      created: "created",
      customer: "customer",
      dueDate: "due_date",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      status: "status",
      subscription: "subscription",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * SearchRequest
 */
export type SearchRequest = {
  data: Record<string, any>;
  /**
   * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for invoices](https://stripe.com/docs/search#query-fields-for-invoices).
   */
  query: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
   */
  page?: string | undefined;
};

/**
 * @internal
 * SearchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SearchRequest = {
  data: Record<string, any>;
  query: string;
  expand?: string[] | undefined;
  limit?: number | undefined;
  page?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SearchRequest
 */
const SchemaIn$SearchRequest: z.ZodType<
  SearchRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()),
    query: z.string(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    page: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      query: "query",
      expand: "expand",
      limit: "limit",
      page: "page",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SearchRequest
 */
const SchemaOut$SearchRequest: z.ZodType<
  External$SearchRequest, // output type of this zod object
  z.ZodTypeDef,
  SearchRequest // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()),
    query: z.string(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    page: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      query: "query",
      expand: "expand",
      limit: "limit",
      page: "page",
    });
  });

export const Schemas$SearchRequest = {
  in: SchemaIn$SearchRequest,
  out: SchemaOut$SearchRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  data: Record<string, any>;
  invoice: string;
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
  invoice: string;
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
    invoice: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
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
    invoice: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      invoice: "invoice",
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
   * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
   */
  accountTaxIds?: (string[] | string) | undefined;
  /**
   * A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees).
   */
  applicationFeeAmount?: number | undefined;
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action.
   */
  autoAdvance?: boolean | undefined;
  /**
   * Settings for automatic tax lookup for this invoice.
   */
  automaticTax?: InvoiceCreateBodyAutomaticTax | undefined;
  /**
   * The time when this invoice should be scheduled to finalize. The invoice will be finalized at this time if it is still in draft state.
   */
  automaticallyFinalizesAt?: number | undefined;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. Defaults to `charge_automatically`.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  /**
   * The currency to create this invoice in. Defaults to that of `customer` if not specified.
   */
  currency?: string | undefined;
  /**
   * A list of up to 4 custom fields to be displayed on the invoice.
   */
  customFields?: (InvoiceCreateBodyCustomFieldsArr0Item[] | string) | undefined;
  /**
   * The ID of the customer who will be billed.
   */
  customer?: string | undefined;
  /**
   * The number of days from when the invoice is created until it is due. Valid only for invoices where `collection_method=send_invoice`.
   */
  daysUntilDue?: number | undefined;
  /**
   * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: string | undefined;
  /**
   * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
   */
  defaultSource?: string | undefined;
  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set.
   */
  defaultTaxRates?: string[] | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
   */
  description?: string | undefined;
  /**
   * The coupons and promotion codes to redeem into discounts for the invoice. If not specified, inherits the discount from the invoice's customer. Pass an empty string to avoid inheriting any discounts.
   */
  discounts?: (InvoiceCreateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * The date on which payment for this invoice is due. Valid only for invoices where `collection_method=send_invoice`.
   */
  dueDate?: number | undefined;
  /**
   * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
   */
  effectiveAt?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Footer to be displayed on the invoice.
   */
  footer?: string | undefined;
  /**
   * Revise an existing invoice. The new invoice will be created in `status=draft`. See the [revision documentation](https://stripe.com/docs/invoicing/invoice-revisions) for more details.
   */
  fromInvoice?: InvoiceCreateBodyFromInvoice | undefined;
  /**
   * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
   */
  issuer?: InvoiceCreateBodyIssuer | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (InvoiceCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Set the number for this invoice. If no number is present then a number will be assigned automatically when the invoice is finalized. In many markets, regulations require invoices to be unique, sequential and / or gapless. You are responsible for ensuring this is true across all your different invoicing systems in the event that you edit the invoice number using our API. If you use only Stripe for your invoices and do not change invoice numbers, Stripe handles this aspect of compliance for you automatically.
   */
  number?: string | undefined;
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: string | undefined;
  /**
   * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
   */
  paymentSettings?: InvoiceCreateBodyPaymentSettings | undefined;
  /**
   * How to handle pending invoice items on invoice creation. Defaults to `exclude` if the parameter is omitted.
   */
  pendingInvoiceItemsBehavior?: ("exclude" | "include") | undefined;
  /**
   * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
   */
  rendering?: InvoiceCreateBodyRendering | undefined;
  /**
   * Settings for the cost of shipping for this invoice.
   */
  shippingCost?: InvoiceCreateBodyShippingCost | undefined;
  /**
   * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
   */
  shippingDetails?: InvoiceCreateBodyShippingDetails | undefined;
  /**
   * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
   */
  statementDescriptor?: string | undefined;
  /**
   * The ID of the subscription to invoice, if any. If set, the created invoice will only include pending invoice items for that subscription. The subscription's billing cycle and regular subscription events won't be affected.
   */
  subscription?: string | undefined;
  /**
   * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge.
   */
  transferData?: InvoiceCreateBodyTransferData | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  account_tax_ids?: (string[] | string) | undefined;
  application_fee_amount?: number | undefined;
  auto_advance?: boolean | undefined;
  automatic_tax?: External$InvoiceCreateBodyAutomaticTax | undefined;
  automatically_finalizes_at?: number | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  currency?: string | undefined;
  custom_fields?:
    | (External$InvoiceCreateBodyCustomFieldsArr0Item[] | string)
    | undefined;
  customer?: string | undefined;
  days_until_due?: number | undefined;
  default_payment_method?: string | undefined;
  default_source?: string | undefined;
  default_tax_rates?: string[] | undefined;
  description?: string | undefined;
  discounts?:
    | (External$InvoiceCreateBodyDiscountsArr0Item[] | string)
    | undefined;
  due_date?: number | undefined;
  effective_at?: number | undefined;
  expand?: string[] | undefined;
  footer?: string | undefined;
  from_invoice?: External$InvoiceCreateBodyFromInvoice | undefined;
  issuer?: External$InvoiceCreateBodyIssuer | undefined;
  metadata?: (External$InvoiceCreateBodyMetadataObj0 | string) | undefined;
  number?: string | undefined;
  on_behalf_of?: string | undefined;
  payment_settings?: External$InvoiceCreateBodyPaymentSettings | undefined;
  pending_invoice_items_behavior?: ("exclude" | "include") | undefined;
  rendering?: External$InvoiceCreateBodyRendering | undefined;
  shipping_cost?: External$InvoiceCreateBodyShippingCost | undefined;
  shipping_details?: External$InvoiceCreateBodyShippingDetails | undefined;
  statement_descriptor?: string | undefined;
  subscription?: string | undefined;
  transfer_data?: External$InvoiceCreateBodyTransferData | undefined;
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
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    application_fee_amount: z.number().int().optional(),
    auto_advance: z.boolean().optional(),
    automatic_tax: Schemas$InvoiceCreateBodyAutomaticTax.in.optional(),
    automatically_finalizes_at: z.number().int().optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    currency: z.string().optional(),
    custom_fields: z
      .union([
        z.array(Schemas$InvoiceCreateBodyCustomFieldsArr0Item.in),
        z.string(),
      ])
      .optional(),
    customer: z.string().optional(),
    days_until_due: z.number().int().optional(),
    default_payment_method: z.string().optional(),
    default_source: z.string().optional(),
    default_tax_rates: z.array(z.string()).optional(),
    description: z.string().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceCreateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    due_date: z.number().int().optional(),
    effective_at: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    footer: z.string().optional(),
    from_invoice: Schemas$InvoiceCreateBodyFromInvoice.in.optional(),
    issuer: Schemas$InvoiceCreateBodyIssuer.in.optional(),
    metadata: z
      .union([Schemas$InvoiceCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    number: z.string().optional(),
    on_behalf_of: z.string().optional(),
    payment_settings: Schemas$InvoiceCreateBodyPaymentSettings.in.optional(),
    pending_invoice_items_behavior: z.enum(["exclude", "include"]).optional(),
    rendering: Schemas$InvoiceCreateBodyRendering.in.optional(),
    shipping_cost: Schemas$InvoiceCreateBodyShippingCost.in.optional(),
    shipping_details: Schemas$InvoiceCreateBodyShippingDetails.in.optional(),
    statement_descriptor: z.string().optional(),
    subscription: z.string().optional(),
    transfer_data: Schemas$InvoiceCreateBodyTransferData.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_tax_ids: "accountTaxIds",
      application_fee_amount: "applicationFeeAmount",
      auto_advance: "autoAdvance",
      automatic_tax: "automaticTax",
      automatically_finalizes_at: "automaticallyFinalizesAt",
      collection_method: "collectionMethod",
      currency: "currency",
      custom_fields: "customFields",
      customer: "customer",
      days_until_due: "daysUntilDue",
      default_payment_method: "defaultPaymentMethod",
      default_source: "defaultSource",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      due_date: "dueDate",
      effective_at: "effectiveAt",
      expand: "expand",
      footer: "footer",
      from_invoice: "fromInvoice",
      issuer: "issuer",
      metadata: "metadata",
      number: "number",
      on_behalf_of: "onBehalfOf",
      payment_settings: "paymentSettings",
      pending_invoice_items_behavior: "pendingInvoiceItemsBehavior",
      rendering: "rendering",
      shipping_cost: "shippingCost",
      shipping_details: "shippingDetails",
      statement_descriptor: "statementDescriptor",
      subscription: "subscription",
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
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    applicationFeeAmount: z.number().int().optional(),
    autoAdvance: z.boolean().optional(),
    automaticTax: Schemas$InvoiceCreateBodyAutomaticTax.out.optional(),
    automaticallyFinalizesAt: z.number().int().optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    currency: z.string().optional(),
    customFields: z
      .union([
        z.array(Schemas$InvoiceCreateBodyCustomFieldsArr0Item.out),
        z.string(),
      ])
      .optional(),
    customer: z.string().optional(),
    daysUntilDue: z.number().int().optional(),
    defaultPaymentMethod: z.string().optional(),
    defaultSource: z.string().optional(),
    defaultTaxRates: z.array(z.string()).optional(),
    description: z.string().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceCreateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    dueDate: z.number().int().optional(),
    effectiveAt: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    footer: z.string().optional(),
    fromInvoice: Schemas$InvoiceCreateBodyFromInvoice.out.optional(),
    issuer: Schemas$InvoiceCreateBodyIssuer.out.optional(),
    metadata: z
      .union([Schemas$InvoiceCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    number: z.string().optional(),
    onBehalfOf: z.string().optional(),
    paymentSettings: Schemas$InvoiceCreateBodyPaymentSettings.out.optional(),
    pendingInvoiceItemsBehavior: z.enum(["exclude", "include"]).optional(),
    rendering: Schemas$InvoiceCreateBodyRendering.out.optional(),
    shippingCost: Schemas$InvoiceCreateBodyShippingCost.out.optional(),
    shippingDetails: Schemas$InvoiceCreateBodyShippingDetails.out.optional(),
    statementDescriptor: z.string().optional(),
    subscription: z.string().optional(),
    transferData: Schemas$InvoiceCreateBodyTransferData.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      applicationFeeAmount: "application_fee_amount",
      autoAdvance: "auto_advance",
      automaticTax: "automatic_tax",
      automaticallyFinalizesAt: "automatically_finalizes_at",
      collectionMethod: "collection_method",
      currency: "currency",
      customFields: "custom_fields",
      customer: "customer",
      daysUntilDue: "days_until_due",
      defaultPaymentMethod: "default_payment_method",
      defaultSource: "default_source",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      dueDate: "due_date",
      effectiveAt: "effective_at",
      expand: "expand",
      footer: "footer",
      fromInvoice: "from_invoice",
      issuer: "issuer",
      metadata: "metadata",
      number: "number",
      onBehalfOf: "on_behalf_of",
      paymentSettings: "payment_settings",
      pendingInvoiceItemsBehavior: "pending_invoice_items_behavior",
      rendering: "rendering",
      shippingCost: "shipping_cost",
      shippingDetails: "shipping_details",
      statementDescriptor: "statement_descriptor",
      subscription: "subscription",
      transferData: "transfer_data",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * PreviewRequest
 */
export type PreviewRequest = {
  /**
   * Settings for automatic tax lookup for this invoice preview.
   */
  automaticTax?: InvoicePreviewBodyAutomaticTax | undefined;
  /**
   * The currency to preview this invoice in. Defaults to that of `customer` if not specified.
   */
  currency?: string | undefined;
  /**
   * The identifier of the customer whose upcoming invoice you'd like to retrieve. If `automatic_tax` is enabled then one of `customer`, `customer_details`, `subscription`, or `schedule` must be set.
   */
  customer?: string | undefined;
  /**
   * Details about the customer you want to invoice or overrides for an existing customer. If `automatic_tax` is enabled then one of `customer`, `customer_details`, `subscription`, or `schedule` must be set.
   */
  customerDetails?: InvoicePreviewBodyCustomerDetails | undefined;
  /**
   * The coupons to redeem into discounts for the invoice preview. If not specified, inherits the discount from the subscription or customer. This works for both coupons directly applied to an invoice and coupons applied to a subscription. Pass an empty string to avoid inheriting any discounts.
   */
  discounts?: (InvoicePreviewBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * List of invoice items to add or update in the upcoming invoice preview (up to 250).
   */
  invoiceItems?: InvoicePreviewBodyInvoiceItemsItem[] | undefined;
  /**
   * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
   */
  issuer?: InvoicePreviewBodyIssuer | undefined;
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: (string | string) | undefined;
  /**
   * Customizes the types of values to include when calculating the invoice. Defaults to `next` if unspecified.
   */
  previewMode?: ("next" | "recurring") | undefined;
  /**
   * The identifier of the schedule whose upcoming invoice you'd like to retrieve. Cannot be used with subscription or subscription fields.
   */
  schedule?: string | undefined;
  /**
   * The schedule creation or modification params to apply as a preview. Cannot be used with `subscription` or `subscription_` prefixed fields.
   */
  scheduleDetails?: InvoicePreviewBodyScheduleDetails | undefined;
  /**
   * The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_details.items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_details.items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
   */
  subscription?: string | undefined;
  /**
   * The subscription creation or modification params to apply as a preview. Cannot be used with `schedule` or `schedule_details` fields.
   */
  subscriptionDetails?: InvoicePreviewBodySubscriptionDetails | undefined;
};

/**
 * @internal
 * PreviewRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PreviewRequest = {
  automatic_tax?: External$InvoicePreviewBodyAutomaticTax | undefined;
  currency?: string | undefined;
  customer?: string | undefined;
  customer_details?: External$InvoicePreviewBodyCustomerDetails | undefined;
  discounts?:
    | (External$InvoicePreviewBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  invoice_items?: External$InvoicePreviewBodyInvoiceItemsItem[] | undefined;
  issuer?: External$InvoicePreviewBodyIssuer | undefined;
  on_behalf_of?: (string | string) | undefined;
  preview_mode?: ("next" | "recurring") | undefined;
  schedule?: string | undefined;
  schedule_details?: External$InvoicePreviewBodyScheduleDetails | undefined;
  subscription?: string | undefined;
  subscription_details?:
    | External$InvoicePreviewBodySubscriptionDetails
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PreviewRequest
 */
const SchemaIn$PreviewRequest: z.ZodType<
  PreviewRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    automatic_tax: Schemas$InvoicePreviewBodyAutomaticTax.in.optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    customer_details: Schemas$InvoicePreviewBodyCustomerDetails.in.optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoicePreviewBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    invoice_items: z
      .array(Schemas$InvoicePreviewBodyInvoiceItemsItem.in)
      .optional(),
    issuer: Schemas$InvoicePreviewBodyIssuer.in.optional(),
    on_behalf_of: z.union([z.string(), z.string()]).optional(),
    preview_mode: z.enum(["next", "recurring"]).optional(),
    schedule: z.string().optional(),
    schedule_details: Schemas$InvoicePreviewBodyScheduleDetails.in.optional(),
    subscription: z.string().optional(),
    subscription_details:
      Schemas$InvoicePreviewBodySubscriptionDetails.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      automatic_tax: "automaticTax",
      currency: "currency",
      customer: "customer",
      customer_details: "customerDetails",
      discounts: "discounts",
      expand: "expand",
      invoice_items: "invoiceItems",
      issuer: "issuer",
      on_behalf_of: "onBehalfOf",
      preview_mode: "previewMode",
      schedule: "schedule",
      schedule_details: "scheduleDetails",
      subscription: "subscription",
      subscription_details: "subscriptionDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PreviewRequest
 */
const SchemaOut$PreviewRequest: z.ZodType<
  External$PreviewRequest, // output type of this zod object
  z.ZodTypeDef,
  PreviewRequest // the object to be transformed
> = z
  .object({
    automaticTax: Schemas$InvoicePreviewBodyAutomaticTax.out.optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    customerDetails: Schemas$InvoicePreviewBodyCustomerDetails.out.optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoicePreviewBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    invoiceItems: z
      .array(Schemas$InvoicePreviewBodyInvoiceItemsItem.out)
      .optional(),
    issuer: Schemas$InvoicePreviewBodyIssuer.out.optional(),
    onBehalfOf: z.union([z.string(), z.string()]).optional(),
    previewMode: z.enum(["next", "recurring"]).optional(),
    schedule: z.string().optional(),
    scheduleDetails: Schemas$InvoicePreviewBodyScheduleDetails.out.optional(),
    subscription: z.string().optional(),
    subscriptionDetails:
      Schemas$InvoicePreviewBodySubscriptionDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      automaticTax: "automatic_tax",
      currency: "currency",
      customer: "customer",
      customerDetails: "customer_details",
      discounts: "discounts",
      expand: "expand",
      invoiceItems: "invoice_items",
      issuer: "issuer",
      onBehalfOf: "on_behalf_of",
      previewMode: "preview_mode",
      schedule: "schedule",
      scheduleDetails: "schedule_details",
      subscription: "subscription",
      subscriptionDetails: "subscription_details",
    });
  });

export const Schemas$PreviewRequest = {
  in: SchemaIn$PreviewRequest,
  out: SchemaOut$PreviewRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  /**
   * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
   */
  accountTaxIds?: (string[] | string) | undefined;
  /**
   * A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees).
   */
  applicationFeeAmount?: number | undefined;
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice.
   */
  autoAdvance?: boolean | undefined;
  /**
   * Settings for automatic tax lookup for this invoice.
   */
  automaticTax?: InvoiceUpdateBodyAutomaticTax | undefined;
  /**
   * The time when this invoice should be scheduled to finalize. The invoice will be finalized at this time if it is still in draft state. To turn off automatic finalization, set `auto_advance` to false.
   */
  automaticallyFinalizesAt?: number | undefined;
  /**
   * Either `charge_automatically` or `send_invoice`. This field can be updated only on `draft` invoices.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  /**
   * A list of up to 4 custom fields to be displayed on the invoice. If a value for `custom_fields` is specified, the list specified will replace the existing custom field list on this invoice. Pass an empty string to remove previously-defined fields.
   */
  customFields?: (InvoiceUpdateBodyCustomFieldsArr0Item[] | string) | undefined;
  /**
   * The number of days from which the invoice is created until it is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
   */
  daysUntilDue?: number | undefined;
  /**
   * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: string | undefined;
  /**
   * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
   */
  defaultSource?: (string | string) | undefined;
  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set. Pass an empty string to remove previously-defined tax rates.
   */
  defaultTaxRates?: (string[] | string) | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
   */
  description?: string | undefined;
  /**
   * The discounts that will apply to the invoice. Pass an empty string to remove previously-defined discounts.
   */
  discounts?: (InvoiceUpdateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * The date on which payment for this invoice is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
   */
  dueDate?: number | undefined;
  /**
   * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
   */
  effectiveAt?: (number | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Footer to be displayed on the invoice.
   */
  footer?: string | undefined;
  /**
   * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
   */
  issuer?: InvoiceUpdateBodyIssuer | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (InvoiceUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Set the number for this invoice. If no number is present then a number will be assigned automatically when the invoice is finalized. In many markets, regulations require invoices to be unique, sequential and / or gapless. You are responsible for ensuring this is true across all your different invoicing systems in the event that you edit the invoice number using our API. If you use only Stripe for your invoices and do not change invoice numbers, Stripe handles this aspect of compliance for you automatically.
   */
  number?: (string | string) | undefined;
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: (string | string) | undefined;
  /**
   * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
   */
  paymentSettings?: InvoiceUpdateBodyPaymentSettings | undefined;
  /**
   * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
   */
  rendering?: InvoiceUpdateBodyRendering | undefined;
  /**
   * Settings for the cost of shipping for this invoice.
   */
  shippingCost?: (InvoiceUpdateBodyShippingCostObj0 | string) | undefined;
  /**
   * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
   */
  shippingDetails?: (InvoiceUpdateBodyShippingDetailsObj0 | string) | undefined;
  /**
   * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
   */
  statementDescriptor?: string | undefined;
  /**
   * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge. This will be unset if you POST an empty value.
   */
  transferData?: (InvoiceUpdateBodyTransferDataObj0 | string) | undefined;
  invoice: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  account_tax_ids?: (string[] | string) | undefined;
  application_fee_amount?: number | undefined;
  auto_advance?: boolean | undefined;
  automatic_tax?: External$InvoiceUpdateBodyAutomaticTax | undefined;
  automatically_finalizes_at?: number | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  custom_fields?:
    | (External$InvoiceUpdateBodyCustomFieldsArr0Item[] | string)
    | undefined;
  days_until_due?: number | undefined;
  default_payment_method?: string | undefined;
  default_source?: (string | string) | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  description?: string | undefined;
  discounts?:
    | (External$InvoiceUpdateBodyDiscountsArr0Item[] | string)
    | undefined;
  due_date?: number | undefined;
  effective_at?: (number | string) | undefined;
  expand?: string[] | undefined;
  footer?: string | undefined;
  issuer?: External$InvoiceUpdateBodyIssuer | undefined;
  metadata?: (External$InvoiceUpdateBodyMetadataObj0 | string) | undefined;
  number?: (string | string) | undefined;
  on_behalf_of?: (string | string) | undefined;
  payment_settings?: External$InvoiceUpdateBodyPaymentSettings | undefined;
  rendering?: External$InvoiceUpdateBodyRendering | undefined;
  shipping_cost?:
    | (External$InvoiceUpdateBodyShippingCostObj0 | string)
    | undefined;
  shipping_details?:
    | (External$InvoiceUpdateBodyShippingDetailsObj0 | string)
    | undefined;
  statement_descriptor?: string | undefined;
  transfer_data?:
    | (External$InvoiceUpdateBodyTransferDataObj0 | string)
    | undefined;
  invoice: string;
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
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    application_fee_amount: z.number().int().optional(),
    auto_advance: z.boolean().optional(),
    automatic_tax: Schemas$InvoiceUpdateBodyAutomaticTax.in.optional(),
    automatically_finalizes_at: z.number().int().optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    custom_fields: z
      .union([
        z.array(Schemas$InvoiceUpdateBodyCustomFieldsArr0Item.in),
        z.string(),
      ])
      .optional(),
    days_until_due: z.number().int().optional(),
    default_payment_method: z.string().optional(),
    default_source: z.union([z.string(), z.string()]).optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.string().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceUpdateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    due_date: z.number().int().optional(),
    effective_at: z.union([z.number().int(), z.string()]).optional(),
    expand: z.array(z.string()).optional(),
    footer: z.string().optional(),
    issuer: Schemas$InvoiceUpdateBodyIssuer.in.optional(),
    metadata: z
      .union([Schemas$InvoiceUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    number: z.union([z.string(), z.string()]).optional(),
    on_behalf_of: z.union([z.string(), z.string()]).optional(),
    payment_settings: Schemas$InvoiceUpdateBodyPaymentSettings.in.optional(),
    rendering: Schemas$InvoiceUpdateBodyRendering.in.optional(),
    shipping_cost: z
      .union([Schemas$InvoiceUpdateBodyShippingCostObj0.in, z.string()])
      .optional(),
    shipping_details: z
      .union([Schemas$InvoiceUpdateBodyShippingDetailsObj0.in, z.string()])
      .optional(),
    statement_descriptor: z.string().optional(),
    transfer_data: z
      .union([Schemas$InvoiceUpdateBodyTransferDataObj0.in, z.string()])
      .optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_tax_ids: "accountTaxIds",
      application_fee_amount: "applicationFeeAmount",
      auto_advance: "autoAdvance",
      automatic_tax: "automaticTax",
      automatically_finalizes_at: "automaticallyFinalizesAt",
      collection_method: "collectionMethod",
      custom_fields: "customFields",
      days_until_due: "daysUntilDue",
      default_payment_method: "defaultPaymentMethod",
      default_source: "defaultSource",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      due_date: "dueDate",
      effective_at: "effectiveAt",
      expand: "expand",
      footer: "footer",
      issuer: "issuer",
      metadata: "metadata",
      number: "number",
      on_behalf_of: "onBehalfOf",
      payment_settings: "paymentSettings",
      rendering: "rendering",
      shipping_cost: "shippingCost",
      shipping_details: "shippingDetails",
      statement_descriptor: "statementDescriptor",
      transfer_data: "transferData",
      invoice: "invoice",
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
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    applicationFeeAmount: z.number().int().optional(),
    autoAdvance: z.boolean().optional(),
    automaticTax: Schemas$InvoiceUpdateBodyAutomaticTax.out.optional(),
    automaticallyFinalizesAt: z.number().int().optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    customFields: z
      .union([
        z.array(Schemas$InvoiceUpdateBodyCustomFieldsArr0Item.out),
        z.string(),
      ])
      .optional(),
    daysUntilDue: z.number().int().optional(),
    defaultPaymentMethod: z.string().optional(),
    defaultSource: z.union([z.string(), z.string()]).optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.string().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceUpdateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    dueDate: z.number().int().optional(),
    effectiveAt: z.union([z.number().int(), z.string()]).optional(),
    expand: z.array(z.string()).optional(),
    footer: z.string().optional(),
    issuer: Schemas$InvoiceUpdateBodyIssuer.out.optional(),
    metadata: z
      .union([Schemas$InvoiceUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    number: z.union([z.string(), z.string()]).optional(),
    onBehalfOf: z.union([z.string(), z.string()]).optional(),
    paymentSettings: Schemas$InvoiceUpdateBodyPaymentSettings.out.optional(),
    rendering: Schemas$InvoiceUpdateBodyRendering.out.optional(),
    shippingCost: z
      .union([Schemas$InvoiceUpdateBodyShippingCostObj0.out, z.string()])
      .optional(),
    shippingDetails: z
      .union([Schemas$InvoiceUpdateBodyShippingDetailsObj0.out, z.string()])
      .optional(),
    statementDescriptor: z.string().optional(),
    transferData: z
      .union([Schemas$InvoiceUpdateBodyTransferDataObj0.out, z.string()])
      .optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      applicationFeeAmount: "application_fee_amount",
      autoAdvance: "auto_advance",
      automaticTax: "automatic_tax",
      automaticallyFinalizesAt: "automatically_finalizes_at",
      collectionMethod: "collection_method",
      customFields: "custom_fields",
      daysUntilDue: "days_until_due",
      defaultPaymentMethod: "default_payment_method",
      defaultSource: "default_source",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      dueDate: "due_date",
      effectiveAt: "effective_at",
      expand: "expand",
      footer: "footer",
      issuer: "issuer",
      metadata: "metadata",
      number: "number",
      onBehalfOf: "on_behalf_of",
      paymentSettings: "payment_settings",
      rendering: "rendering",
      shippingCost: "shipping_cost",
      shippingDetails: "shipping_details",
      statementDescriptor: "statement_descriptor",
      transferData: "transfer_data",
      invoice: "invoice",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * FinalizeRequest
 */
export type FinalizeRequest = {
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action.
   */
  autoAdvance?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  invoice: string;
};

/**
 * @internal
 * FinalizeRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinalizeRequest = {
  auto_advance?: boolean | undefined;
  expand?: string[] | undefined;
  invoice: string;
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
    auto_advance: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      auto_advance: "autoAdvance",
      expand: "expand",
      invoice: "invoice",
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
    autoAdvance: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      autoAdvance: "auto_advance",
      expand: "expand",
      invoice: "invoice",
    });
  });

export const Schemas$FinalizeRequest = {
  in: SchemaIn$FinalizeRequest,
  out: SchemaOut$FinalizeRequest,
};

/**
 * MarkUncollectibleRequest
 */
export type MarkUncollectibleRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  invoice: string;
};

/**
 * @internal
 * MarkUncollectibleRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MarkUncollectibleRequest = {
  expand?: string[] | undefined;
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MarkUncollectibleRequest
 */
const SchemaIn$MarkUncollectibleRequest: z.ZodType<
  MarkUncollectibleRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MarkUncollectibleRequest
 */
const SchemaOut$MarkUncollectibleRequest: z.ZodType<
  External$MarkUncollectibleRequest, // output type of this zod object
  z.ZodTypeDef,
  MarkUncollectibleRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice: "invoice",
    });
  });

export const Schemas$MarkUncollectibleRequest = {
  in: SchemaIn$MarkUncollectibleRequest,
  out: SchemaOut$MarkUncollectibleRequest,
};

/**
 * PayRequest
 */
export type PayRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * In cases where the source used to pay the invoice has insufficient funds, passing `forgive=true` controls whether a charge should be attempted for the full amount available on the source, up to the amount to fully pay the invoice. This effectively forgives the difference between the amount available on the source and the amount due.
   *
   * Passing `forgive=false` will fail the charge if the source hasn't been pre-funded with the right amount. An example for this case is with ACH Credit Transfers and wires: if the amount wired is less than the amount due by a small amount, you might want to forgive the difference. Defaults to `false`.
   */
  forgive?: boolean | undefined;
  /**
   * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the payment_method param or the invoice's default_payment_method or default_source, if set.
   */
  mandate?: (string | string) | undefined;
  /**
   * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `true` (off-session).
   */
  offSession?: boolean | undefined;
  /**
   * Boolean representing whether an invoice is paid outside of Stripe. This will result in no charge being made. Defaults to `false`.
   */
  paidOutOfBand?: boolean | undefined;
  /**
   * A PaymentMethod to be charged. The PaymentMethod must be the ID of a PaymentMethod belonging to the customer associated with the invoice being paid.
   */
  paymentMethod?: string | undefined;
  /**
   * A payment source to be charged. The source must be the ID of a source belonging to the customer associated with the invoice being paid.
   */
  source?: string | undefined;
  invoice: string;
};

/**
 * @internal
 * PayRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PayRequest = {
  expand?: string[] | undefined;
  forgive?: boolean | undefined;
  mandate?: (string | string) | undefined;
  off_session?: boolean | undefined;
  paid_out_of_band?: boolean | undefined;
  payment_method?: string | undefined;
  source?: string | undefined;
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PayRequest
 */
const SchemaIn$PayRequest: z.ZodType<
  PayRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    forgive: z.boolean().optional(),
    mandate: z.union([z.string(), z.string()]).optional(),
    off_session: z.boolean().optional(),
    paid_out_of_band: z.boolean().optional(),
    payment_method: z.string().optional(),
    source: z.string().optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      forgive: "forgive",
      mandate: "mandate",
      off_session: "offSession",
      paid_out_of_band: "paidOutOfBand",
      payment_method: "paymentMethod",
      source: "source",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PayRequest
 */
const SchemaOut$PayRequest: z.ZodType<
  External$PayRequest, // output type of this zod object
  z.ZodTypeDef,
  PayRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    forgive: z.boolean().optional(),
    mandate: z.union([z.string(), z.string()]).optional(),
    offSession: z.boolean().optional(),
    paidOutOfBand: z.boolean().optional(),
    paymentMethod: z.string().optional(),
    source: z.string().optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      forgive: "forgive",
      mandate: "mandate",
      offSession: "off_session",
      paidOutOfBand: "paid_out_of_band",
      paymentMethod: "payment_method",
      source: "source",
      invoice: "invoice",
    });
  });

export const Schemas$PayRequest = {
  in: SchemaIn$PayRequest,
  out: SchemaOut$PayRequest,
};

/**
 * SendRequest
 */
export type SendRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  invoice: string;
};

/**
 * @internal
 * SendRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SendRequest = {
  expand?: string[] | undefined;
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SendRequest
 */
const SchemaIn$SendRequest: z.ZodType<
  SendRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SendRequest
 */
const SchemaOut$SendRequest: z.ZodType<
  External$SendRequest, // output type of this zod object
  z.ZodTypeDef,
  SendRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice: "invoice",
    });
  });

export const Schemas$SendRequest = {
  in: SchemaIn$SendRequest,
  out: SchemaOut$SendRequest,
};

/**
 * VoidRequest
 */
export type VoidRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  invoice: string;
};

/**
 * @internal
 * VoidRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VoidRequest = {
  expand?: string[] | undefined;
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VoidRequest
 */
const SchemaIn$VoidRequest: z.ZodType<
  VoidRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VoidRequest
 */
const SchemaOut$VoidRequest: z.ZodType<
  External$VoidRequest, // output type of this zod object
  z.ZodTypeDef,
  VoidRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice: "invoice",
    });
  });

export const Schemas$VoidRequest = {
  in: SchemaIn$VoidRequest,
  out: SchemaOut$VoidRequest,
};
