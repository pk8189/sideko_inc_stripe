import { zodTransform } from "@sideko-inc/stripe/core";
import {
  CustomerCreateBodyAddressObj0,
  External$CustomerCreateBodyAddressObj0,
  Schemas$CustomerCreateBodyAddressObj0,
} from "@sideko-inc/stripe/types/customer-create-body-address-obj0";
import {
  CustomerCreateBodyCashBalance,
  External$CustomerCreateBodyCashBalance,
  Schemas$CustomerCreateBodyCashBalance,
} from "@sideko-inc/stripe/types/customer-create-body-cash-balance";
import {
  CustomerCreateBodyInvoiceSettings,
  External$CustomerCreateBodyInvoiceSettings,
  Schemas$CustomerCreateBodyInvoiceSettings,
} from "@sideko-inc/stripe/types/customer-create-body-invoice-settings";
import {
  CustomerCreateBodyMetadataObj0,
  External$CustomerCreateBodyMetadataObj0,
  Schemas$CustomerCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/customer-create-body-metadata-obj0";
import {
  CustomerCreateBodyShippingObj0,
  External$CustomerCreateBodyShippingObj0,
  Schemas$CustomerCreateBodyShippingObj0,
} from "@sideko-inc/stripe/types/customer-create-body-shipping-obj0";
import {
  CustomerCreateBodyTax,
  External$CustomerCreateBodyTax,
  Schemas$CustomerCreateBodyTax,
} from "@sideko-inc/stripe/types/customer-create-body-tax";
import {
  CustomerCreateBodyTaxIdDataItem,
  External$CustomerCreateBodyTaxIdDataItem,
  Schemas$CustomerCreateBodyTaxIdDataItem,
} from "@sideko-inc/stripe/types/customer-create-body-tax-id-data-item";
import {
  CustomerListCreatedObj0,
  External$CustomerListCreatedObj0,
  Schemas$CustomerListCreatedObj0,
} from "@sideko-inc/stripe/types/customer-list-created-obj0";
import {
  CustomerUpdateBodyAddressObj0,
  External$CustomerUpdateBodyAddressObj0,
  Schemas$CustomerUpdateBodyAddressObj0,
} from "@sideko-inc/stripe/types/customer-update-body-address-obj0";
import {
  CustomerUpdateBodyBankAccountObj0,
  External$CustomerUpdateBodyBankAccountObj0,
  Schemas$CustomerUpdateBodyBankAccountObj0,
} from "@sideko-inc/stripe/types/customer-update-body-bank-account-obj0";
import {
  CustomerUpdateBodyCardObj0,
  External$CustomerUpdateBodyCardObj0,
  Schemas$CustomerUpdateBodyCardObj0,
} from "@sideko-inc/stripe/types/customer-update-body-card-obj0";
import {
  CustomerUpdateBodyCashBalance,
  External$CustomerUpdateBodyCashBalance,
  Schemas$CustomerUpdateBodyCashBalance,
} from "@sideko-inc/stripe/types/customer-update-body-cash-balance";
import {
  CustomerUpdateBodyInvoiceSettings,
  External$CustomerUpdateBodyInvoiceSettings,
  Schemas$CustomerUpdateBodyInvoiceSettings,
} from "@sideko-inc/stripe/types/customer-update-body-invoice-settings";
import {
  CustomerUpdateBodyMetadataObj0,
  External$CustomerUpdateBodyMetadataObj0,
  Schemas$CustomerUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/customer-update-body-metadata-obj0";
import {
  CustomerUpdateBodyShippingObj0,
  External$CustomerUpdateBodyShippingObj0,
  Schemas$CustomerUpdateBodyShippingObj0,
} from "@sideko-inc/stripe/types/customer-update-body-shipping-obj0";
import {
  CustomerUpdateBodyTax,
  External$CustomerUpdateBodyTax,
  Schemas$CustomerUpdateBodyTax,
} from "@sideko-inc/stripe/types/customer-update-body-tax";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data: Record<string, any>;
  customer: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data: Record<string, any>;
  customer: string;
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
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
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
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
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
   * Only return customers that were created during the given date interval.
   */
  created?: (CustomerListCreatedObj0 | number) | undefined;
  /**
   * A case-sensitive filter on the list based on the customer's `email` field. The value must be a string.
   */
  email?: string | undefined;
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
   * Provides a list of customers that are associated with the specified test clock. The response will not include customers with test clocks if this parameter is not set.
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
  created?: (External$CustomerListCreatedObj0 | number) | undefined;
  email?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
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
    created: z
      .union([Schemas$CustomerListCreatedObj0.in, z.number().int()])
      .optional(),
    email: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    test_clock: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      created: "created",
      email: "email",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
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
    created: z
      .union([Schemas$CustomerListCreatedObj0.out, z.number().int()])
      .optional(),
    email: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    testClock: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      created: "created",
      email: "email",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      testClock: "test_clock",
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
   * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for customers](https://stripe.com/docs/search#query-fields-for-customers).
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
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * The customer's address.
   */
  address?: (CustomerCreateBodyAddressObj0 | string) | undefined;
  /**
   * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
   */
  balance?: number | undefined;
  /**
   * Balance information and default balance settings for this customer.
   */
  cashBalance?: CustomerCreateBodyCashBalance | undefined;
  /**
   * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
   */
  description?: string | undefined;
  /**
   * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
   */
  invoicePrefix?: string | undefined;
  /**
   * Default invoice settings for this customer.
   */
  invoiceSettings?: CustomerCreateBodyInvoiceSettings | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CustomerCreateBodyMetadataObj0 | string) | undefined;
  /**
   * The customer's full name or business name.
   */
  name?: string | undefined;
  /**
   * The sequence to be used on the customer's next invoice. Defaults to 1.
   */
  nextInvoiceSequence?: number | undefined;
  paymentMethod?: string | undefined;
  /**
   * The customer's phone number.
   */
  phone?: string | undefined;
  /**
   * Customer's preferred languages, ordered by preference.
   */
  preferredLocales?: string[] | undefined;
  /**
   * The customer's shipping information. Appears on invoices emailed to this customer.
   */
  shipping?: (CustomerCreateBodyShippingObj0 | string) | undefined;
  source?: string | undefined;
  /**
   * Tax details about the customer.
   */
  tax?: CustomerCreateBodyTax | undefined;
  /**
   * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
   */
  taxExempt?: ("exempt" | "none" | "reverse") | undefined;
  /**
   * The customer's tax IDs.
   */
  taxIdData?: CustomerCreateBodyTaxIdDataItem[] | undefined;
  /**
   * ID of the test clock to attach to the customer.
   */
  testClock?: string | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  address?: (External$CustomerCreateBodyAddressObj0 | string) | undefined;
  balance?: number | undefined;
  cash_balance?: External$CustomerCreateBodyCashBalance | undefined;
  description?: string | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  invoice_prefix?: string | undefined;
  invoice_settings?: External$CustomerCreateBodyInvoiceSettings | undefined;
  metadata?: (External$CustomerCreateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;
  next_invoice_sequence?: number | undefined;
  payment_method?: string | undefined;
  phone?: string | undefined;
  preferred_locales?: string[] | undefined;
  shipping?: (External$CustomerCreateBodyShippingObj0 | string) | undefined;
  source?: string | undefined;
  tax?: External$CustomerCreateBodyTax | undefined;
  tax_exempt?: ("exempt" | "none" | "reverse") | undefined;
  tax_id_data?: External$CustomerCreateBodyTaxIdDataItem[] | undefined;
  test_clock?: string | undefined;
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
    address: z
      .union([Schemas$CustomerCreateBodyAddressObj0.in, z.string()])
      .optional(),
    balance: z.number().int().optional(),
    cash_balance: Schemas$CustomerCreateBodyCashBalance.in.optional(),
    description: z.string().optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    invoice_prefix: z.string().optional(),
    invoice_settings: Schemas$CustomerCreateBodyInvoiceSettings.in.optional(),
    metadata: z
      .union([Schemas$CustomerCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
    next_invoice_sequence: z.number().int().optional(),
    payment_method: z.string().optional(),
    phone: z.string().optional(),
    preferred_locales: z.array(z.string()).optional(),
    shipping: z
      .union([Schemas$CustomerCreateBodyShippingObj0.in, z.string()])
      .optional(),
    source: z.string().optional(),
    tax: Schemas$CustomerCreateBodyTax.in.optional(),
    tax_exempt: z.enum(["exempt", "none", "reverse"]).optional(),
    tax_id_data: z.array(Schemas$CustomerCreateBodyTaxIdDataItem.in).optional(),
    test_clock: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      balance: "balance",
      cash_balance: "cashBalance",
      description: "description",
      email: "email",
      expand: "expand",
      invoice_prefix: "invoicePrefix",
      invoice_settings: "invoiceSettings",
      metadata: "metadata",
      name: "name",
      next_invoice_sequence: "nextInvoiceSequence",
      payment_method: "paymentMethod",
      phone: "phone",
      preferred_locales: "preferredLocales",
      shipping: "shipping",
      source: "source",
      tax: "tax",
      tax_exempt: "taxExempt",
      tax_id_data: "taxIdData",
      test_clock: "testClock",
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
    address: z
      .union([Schemas$CustomerCreateBodyAddressObj0.out, z.string()])
      .optional(),
    balance: z.number().int().optional(),
    cashBalance: Schemas$CustomerCreateBodyCashBalance.out.optional(),
    description: z.string().optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    invoicePrefix: z.string().optional(),
    invoiceSettings: Schemas$CustomerCreateBodyInvoiceSettings.out.optional(),
    metadata: z
      .union([Schemas$CustomerCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
    nextInvoiceSequence: z.number().int().optional(),
    paymentMethod: z.string().optional(),
    phone: z.string().optional(),
    preferredLocales: z.array(z.string()).optional(),
    shipping: z
      .union([Schemas$CustomerCreateBodyShippingObj0.out, z.string()])
      .optional(),
    source: z.string().optional(),
    tax: Schemas$CustomerCreateBodyTax.out.optional(),
    taxExempt: z.enum(["exempt", "none", "reverse"]).optional(),
    taxIdData: z.array(Schemas$CustomerCreateBodyTaxIdDataItem.out).optional(),
    testClock: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      balance: "balance",
      cashBalance: "cash_balance",
      description: "description",
      email: "email",
      expand: "expand",
      invoicePrefix: "invoice_prefix",
      invoiceSettings: "invoice_settings",
      metadata: "metadata",
      name: "name",
      nextInvoiceSequence: "next_invoice_sequence",
      paymentMethod: "payment_method",
      phone: "phone",
      preferredLocales: "preferred_locales",
      shipping: "shipping",
      source: "source",
      tax: "tax",
      taxExempt: "tax_exempt",
      taxIdData: "tax_id_data",
      testClock: "test_clock",
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
   * The customer's address.
   */
  address?: (CustomerUpdateBodyAddressObj0 | string) | undefined;
  /**
   * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
   */
  balance?: number | undefined;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: (CustomerUpdateBodyBankAccountObj0 | string) | undefined;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: (CustomerUpdateBodyCardObj0 | string) | undefined;
  /**
   * Balance information and default balance settings for this customer.
   */
  cashBalance?: CustomerUpdateBodyCashBalance | undefined;
  /**
   * ID of Alipay account to make the customer's new default for invoice payments.
   */
  defaultAlipayAccount?: string | undefined;
  /**
   * ID of bank account to make the customer's new default for invoice payments.
   */
  defaultBankAccount?: string | undefined;
  /**
   * ID of card to make the customer's new default for invoice payments.
   */
  defaultCard?: string | undefined;
  /**
   * If you are using payment methods created via the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method) parameter.
   *
   * Provide the ID of a payment source already attached to this customer to make it this customer's default payment source.
   *
   * If you want to add a new payment source and make it the default, see the [source](https://stripe.com/docs/api/customers/update#update_customer-source) property.
   */
  defaultSource?: string | undefined;
  /**
   * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
   */
  description?: string | undefined;
  /**
   * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
   */
  invoicePrefix?: string | undefined;
  /**
   * Default invoice settings for this customer.
   */
  invoiceSettings?: CustomerUpdateBodyInvoiceSettings | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CustomerUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * The customer's full name or business name.
   */
  name?: string | undefined;
  /**
   * The sequence to be used on the customer's next invoice. Defaults to 1.
   */
  nextInvoiceSequence?: number | undefined;
  /**
   * The customer's phone number.
   */
  phone?: string | undefined;
  /**
   * Customer's preferred languages, ordered by preference.
   */
  preferredLocales?: string[] | undefined;
  /**
   * The customer's shipping information. Appears on invoices emailed to this customer.
   */
  shipping?: (CustomerUpdateBodyShippingObj0 | string) | undefined;
  source?: string | undefined;
  /**
   * Tax details about the customer.
   */
  tax?: CustomerUpdateBodyTax | undefined;
  /**
   * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
   */
  taxExempt?: ("exempt" | "none" | "reverse") | undefined;
  customer: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  address?: (External$CustomerUpdateBodyAddressObj0 | string) | undefined;
  balance?: number | undefined;
  bank_account?:
    | (External$CustomerUpdateBodyBankAccountObj0 | string)
    | undefined;
  card?: (External$CustomerUpdateBodyCardObj0 | string) | undefined;
  cash_balance?: External$CustomerUpdateBodyCashBalance | undefined;
  default_alipay_account?: string | undefined;
  default_bank_account?: string | undefined;
  default_card?: string | undefined;
  default_source?: string | undefined;
  description?: string | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  invoice_prefix?: string | undefined;
  invoice_settings?: External$CustomerUpdateBodyInvoiceSettings | undefined;
  metadata?: (External$CustomerUpdateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;
  next_invoice_sequence?: number | undefined;
  phone?: string | undefined;
  preferred_locales?: string[] | undefined;
  shipping?: (External$CustomerUpdateBodyShippingObj0 | string) | undefined;
  source?: string | undefined;
  tax?: External$CustomerUpdateBodyTax | undefined;
  tax_exempt?: ("exempt" | "none" | "reverse") | undefined;
  customer: string;
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
    address: z
      .union([Schemas$CustomerUpdateBodyAddressObj0.in, z.string()])
      .optional(),
    balance: z.number().int().optional(),
    bank_account: z
      .union([Schemas$CustomerUpdateBodyBankAccountObj0.in, z.string()])
      .optional(),
    card: z
      .union([Schemas$CustomerUpdateBodyCardObj0.in, z.string()])
      .optional(),
    cash_balance: Schemas$CustomerUpdateBodyCashBalance.in.optional(),
    default_alipay_account: z.string().optional(),
    default_bank_account: z.string().optional(),
    default_card: z.string().optional(),
    default_source: z.string().optional(),
    description: z.string().optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    invoice_prefix: z.string().optional(),
    invoice_settings: Schemas$CustomerUpdateBodyInvoiceSettings.in.optional(),
    metadata: z
      .union([Schemas$CustomerUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
    next_invoice_sequence: z.number().int().optional(),
    phone: z.string().optional(),
    preferred_locales: z.array(z.string()).optional(),
    shipping: z
      .union([Schemas$CustomerUpdateBodyShippingObj0.in, z.string()])
      .optional(),
    source: z.string().optional(),
    tax: Schemas$CustomerUpdateBodyTax.in.optional(),
    tax_exempt: z.enum(["exempt", "none", "reverse"]).optional(),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      balance: "balance",
      bank_account: "bankAccount",
      card: "card",
      cash_balance: "cashBalance",
      default_alipay_account: "defaultAlipayAccount",
      default_bank_account: "defaultBankAccount",
      default_card: "defaultCard",
      default_source: "defaultSource",
      description: "description",
      email: "email",
      expand: "expand",
      invoice_prefix: "invoicePrefix",
      invoice_settings: "invoiceSettings",
      metadata: "metadata",
      name: "name",
      next_invoice_sequence: "nextInvoiceSequence",
      phone: "phone",
      preferred_locales: "preferredLocales",
      shipping: "shipping",
      source: "source",
      tax: "tax",
      tax_exempt: "taxExempt",
      customer: "customer",
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
    address: z
      .union([Schemas$CustomerUpdateBodyAddressObj0.out, z.string()])
      .optional(),
    balance: z.number().int().optional(),
    bankAccount: z
      .union([Schemas$CustomerUpdateBodyBankAccountObj0.out, z.string()])
      .optional(),
    card: z
      .union([Schemas$CustomerUpdateBodyCardObj0.out, z.string()])
      .optional(),
    cashBalance: Schemas$CustomerUpdateBodyCashBalance.out.optional(),
    defaultAlipayAccount: z.string().optional(),
    defaultBankAccount: z.string().optional(),
    defaultCard: z.string().optional(),
    defaultSource: z.string().optional(),
    description: z.string().optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    invoicePrefix: z.string().optional(),
    invoiceSettings: Schemas$CustomerUpdateBodyInvoiceSettings.out.optional(),
    metadata: z
      .union([Schemas$CustomerUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
    nextInvoiceSequence: z.number().int().optional(),
    phone: z.string().optional(),
    preferredLocales: z.array(z.string()).optional(),
    shipping: z
      .union([Schemas$CustomerUpdateBodyShippingObj0.out, z.string()])
      .optional(),
    source: z.string().optional(),
    tax: Schemas$CustomerUpdateBodyTax.out.optional(),
    taxExempt: z.enum(["exempt", "none", "reverse"]).optional(),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      balance: "balance",
      bankAccount: "bank_account",
      card: "card",
      cashBalance: "cash_balance",
      defaultAlipayAccount: "default_alipay_account",
      defaultBankAccount: "default_bank_account",
      defaultCard: "default_card",
      defaultSource: "default_source",
      description: "description",
      email: "email",
      expand: "expand",
      invoicePrefix: "invoice_prefix",
      invoiceSettings: "invoice_settings",
      metadata: "metadata",
      name: "name",
      nextInvoiceSequence: "next_invoice_sequence",
      phone: "phone",
      preferredLocales: "preferred_locales",
      shipping: "shipping",
      source: "source",
      tax: "tax",
      taxExempt: "tax_exempt",
      customer: "customer",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
