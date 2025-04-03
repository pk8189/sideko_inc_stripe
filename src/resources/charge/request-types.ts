import { zodTransform } from "@sideko-inc/stripe/core";
import {
  ChargeCaptureBodyTransferData,
  External$ChargeCaptureBodyTransferData,
  Schemas$ChargeCaptureBodyTransferData,
} from "@sideko-inc/stripe/types/charge-capture-body-transfer-data";
import {
  ChargeCreateBodyCardObj0,
  External$ChargeCreateBodyCardObj0,
  Schemas$ChargeCreateBodyCardObj0,
} from "@sideko-inc/stripe/types/charge-create-body-card-obj0";
import {
  ChargeCreateBodyDestinationObj0,
  External$ChargeCreateBodyDestinationObj0,
  Schemas$ChargeCreateBodyDestinationObj0,
} from "@sideko-inc/stripe/types/charge-create-body-destination-obj0";
import {
  ChargeCreateBodyMetadataObj0,
  External$ChargeCreateBodyMetadataObj0,
  Schemas$ChargeCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/charge-create-body-metadata-obj0";
import {
  ChargeCreateBodyRadarOptions,
  External$ChargeCreateBodyRadarOptions,
  Schemas$ChargeCreateBodyRadarOptions,
} from "@sideko-inc/stripe/types/charge-create-body-radar-options";
import {
  ChargeCreateBodyShipping,
  External$ChargeCreateBodyShipping,
  Schemas$ChargeCreateBodyShipping,
} from "@sideko-inc/stripe/types/charge-create-body-shipping";
import {
  ChargeCreateBodyTransferData,
  External$ChargeCreateBodyTransferData,
  Schemas$ChargeCreateBodyTransferData,
} from "@sideko-inc/stripe/types/charge-create-body-transfer-data";
import {
  ChargeListCreatedObj0,
  External$ChargeListCreatedObj0,
  Schemas$ChargeListCreatedObj0,
} from "@sideko-inc/stripe/types/charge-list-created-obj0";
import {
  ChargeUpdateBodyFraudDetails,
  External$ChargeUpdateBodyFraudDetails,
  Schemas$ChargeUpdateBodyFraudDetails,
} from "@sideko-inc/stripe/types/charge-update-body-fraud-details";
import {
  ChargeUpdateBodyMetadataObj0,
  External$ChargeUpdateBodyMetadataObj0,
  Schemas$ChargeUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/charge-update-body-metadata-obj0";
import {
  ChargeUpdateBodyShipping,
  External$ChargeUpdateBodyShipping,
  Schemas$ChargeUpdateBodyShipping,
} from "@sideko-inc/stripe/types/charge-update-body-shipping";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * Only return charges that were created during the given date interval.
   */
  created?: (ChargeListCreatedObj0 | number) | undefined;
  /**
   * Only return charges for the customer specified by this customer ID.
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
   * Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.
   */
  paymentIntent?: string | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return charges for this transfer group, limited to 100.
   */
  transferGroup?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  data: Record<string, any>;
  created?: (External$ChargeListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  payment_intent?: string | undefined;
  starting_after?: string | undefined;
  transfer_group?: string | undefined;
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
      .union([Schemas$ChargeListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    payment_intent: z.string().optional(),
    starting_after: z.string().optional(),
    transfer_group: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      created: "created",
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      payment_intent: "paymentIntent",
      starting_after: "startingAfter",
      transfer_group: "transferGroup",
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
      .union([Schemas$ChargeListCreatedObj0.out, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    paymentIntent: z.string().optional(),
    startingAfter: z.string().optional(),
    transferGroup: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      created: "created",
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      paymentIntent: "payment_intent",
      startingAfter: "starting_after",
      transferGroup: "transfer_group",
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
   * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for charges](https://stripe.com/docs/search#query-fields-for-charges).
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
  charge: string;
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
  charge: string;
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
    charge: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
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
    charge: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
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
   * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount?: number | undefined;
  applicationFee?: number | undefined;
  /**
   * A fee in cents (or local equivalent) that will be applied to the charge and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/direct-charges#collect-fees).
   */
  applicationFeeAmount?: number | undefined;
  /**
   * Whether to immediately capture the charge. Defaults to `true`. When `false`, the charge issues an authorization (or pre-authorization), and will need to be [captured](https://stripe.com/docs/api#capture_charge) later. Uncaptured charges expire after a set number of days (7 by default). For more information, see the [authorizing charges and settling later](https://stripe.com/docs/charges/placing-a-hold) documentation.
   */
  capture?: boolean | undefined;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: (ChargeCreateBodyCardObj0 | string) | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | undefined;
  /**
   * The ID of an existing customer that will be charged in this request.
   */
  customer?: string | undefined;
  /**
   * An arbitrary string which you can attach to a `Charge` object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
   */
  description?: string | undefined;
  destination?: (ChargeCreateBodyDestinationObj0 | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ChargeCreateBodyMetadataObj0 | string) | undefined;
  /**
   * The Stripe account ID for which these funds are intended. Automatically set if you use the `destination` parameter. For details, see [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant).
   */
  onBehalfOf?: string | undefined;
  /**
   * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
   */
  radarOptions?: ChargeCreateBodyRadarOptions | undefined;
  /**
   * The email address to which this charge's [receipt](https://stripe.com/docs/dashboard/receipts) will be sent. The receipt will not be sent until the charge is paid, and no receipts will be sent for test mode charges. If this charge is for a [Customer](https://stripe.com/docs/api/customers/object), the email address specified here will override the customer's email address. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: string | undefined;
  /**
   * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
   */
  shipping?: ChargeCreateBodyShipping | undefined;
  /**
   * A payment source to be charged. This can be the ID of a [card](https://stripe.com/docs/api#cards) (i.e., credit or debit card), a [bank account](https://stripe.com/docs/api#bank_accounts), a [source](https://stripe.com/docs/api#sources), a [token](https://stripe.com/docs/api#tokens), or a [connected account](https://stripe.com/docs/connect/account-debits#charging-a-connected-account). For certain sources---namely, [cards](https://stripe.com/docs/api#cards), [bank accounts](https://stripe.com/docs/api#bank_accounts), and attached [sources](https://stripe.com/docs/api#sources)---you must also pass the ID of the associated customer.
   */
  source?: string | undefined;
  /**
   * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   *
   * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
   */
  statementDescriptor?: string | undefined;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
   */
  statementDescriptorSuffix?: string | undefined;
  /**
   * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
   */
  transferData?: ChargeCreateBodyTransferData | undefined;
  /**
   * A string that identifies this transaction as part of a group. For details, see [Grouping transactions](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options).
   */
  transferGroup?: string | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  amount?: number | undefined;
  application_fee?: number | undefined;
  application_fee_amount?: number | undefined;
  capture?: boolean | undefined;
  card?: (External$ChargeCreateBodyCardObj0 | string) | undefined;
  currency?: string | undefined;
  customer?: string | undefined;
  description?: string | undefined;
  destination?: (External$ChargeCreateBodyDestinationObj0 | string) | undefined;
  expand?: string[] | undefined;
  metadata?: (External$ChargeCreateBodyMetadataObj0 | string) | undefined;
  on_behalf_of?: string | undefined;
  radar_options?: External$ChargeCreateBodyRadarOptions | undefined;
  receipt_email?: string | undefined;
  shipping?: External$ChargeCreateBodyShipping | undefined;
  source?: string | undefined;
  statement_descriptor?: string | undefined;
  statement_descriptor_suffix?: string | undefined;
  transfer_data?: External$ChargeCreateBodyTransferData | undefined;
  transfer_group?: string | undefined;
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
    amount: z.number().int().optional(),
    application_fee: z.number().int().optional(),
    application_fee_amount: z.number().int().optional(),
    capture: z.boolean().optional(),
    card: z.union([Schemas$ChargeCreateBodyCardObj0.in, z.string()]).optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    destination: z
      .union([Schemas$ChargeCreateBodyDestinationObj0.in, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    on_behalf_of: z.string().optional(),
    radar_options: Schemas$ChargeCreateBodyRadarOptions.in.optional(),
    receipt_email: z.string().optional(),
    shipping: Schemas$ChargeCreateBodyShipping.in.optional(),
    source: z.string().optional(),
    statement_descriptor: z.string().optional(),
    statement_descriptor_suffix: z.string().optional(),
    transfer_data: Schemas$ChargeCreateBodyTransferData.in.optional(),
    transfer_group: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application_fee: "applicationFee",
      application_fee_amount: "applicationFeeAmount",
      capture: "capture",
      card: "card",
      currency: "currency",
      customer: "customer",
      description: "description",
      destination: "destination",
      expand: "expand",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      radar_options: "radarOptions",
      receipt_email: "receiptEmail",
      shipping: "shipping",
      source: "source",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      transfer_data: "transferData",
      transfer_group: "transferGroup",
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
    amount: z.number().int().optional(),
    applicationFee: z.number().int().optional(),
    applicationFeeAmount: z.number().int().optional(),
    capture: z.boolean().optional(),
    card: z
      .union([Schemas$ChargeCreateBodyCardObj0.out, z.string()])
      .optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    destination: z
      .union([Schemas$ChargeCreateBodyDestinationObj0.out, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    onBehalfOf: z.string().optional(),
    radarOptions: Schemas$ChargeCreateBodyRadarOptions.out.optional(),
    receiptEmail: z.string().optional(),
    shipping: Schemas$ChargeCreateBodyShipping.out.optional(),
    source: z.string().optional(),
    statementDescriptor: z.string().optional(),
    statementDescriptorSuffix: z.string().optional(),
    transferData: Schemas$ChargeCreateBodyTransferData.out.optional(),
    transferGroup: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicationFee: "application_fee",
      applicationFeeAmount: "application_fee_amount",
      capture: "capture",
      card: "card",
      currency: "currency",
      customer: "customer",
      description: "description",
      destination: "destination",
      expand: "expand",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      radarOptions: "radar_options",
      receiptEmail: "receipt_email",
      shipping: "shipping",
      source: "source",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      transferData: "transfer_data",
      transferGroup: "transfer_group",
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
   * The ID of an existing customer that will be associated with this request. This field may only be updated if there is no existing associated customer with this charge.
   */
  customer?: string | undefined;
  /**
   * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
   */
  fraudDetails?: ChargeUpdateBodyFraudDetails | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ChargeUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.
   */
  receiptEmail?: string | undefined;
  /**
   * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
   */
  shipping?: ChargeUpdateBodyShipping | undefined;
  /**
   * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string | undefined;
  charge: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  customer?: string | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  fraud_details?: External$ChargeUpdateBodyFraudDetails | undefined;
  metadata?: (External$ChargeUpdateBodyMetadataObj0 | string) | undefined;
  receipt_email?: string | undefined;
  shipping?: External$ChargeUpdateBodyShipping | undefined;
  transfer_group?: string | undefined;
  charge: string;
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
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    fraud_details: Schemas$ChargeUpdateBodyFraudDetails.in.optional(),
    metadata: z
      .union([Schemas$ChargeUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    receipt_email: z.string().optional(),
    shipping: Schemas$ChargeUpdateBodyShipping.in.optional(),
    transfer_group: z.string().optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      description: "description",
      expand: "expand",
      fraud_details: "fraudDetails",
      metadata: "metadata",
      receipt_email: "receiptEmail",
      shipping: "shipping",
      transfer_group: "transferGroup",
      charge: "charge",
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
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    fraudDetails: Schemas$ChargeUpdateBodyFraudDetails.out.optional(),
    metadata: z
      .union([Schemas$ChargeUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    receiptEmail: z.string().optional(),
    shipping: Schemas$ChargeUpdateBodyShipping.out.optional(),
    transferGroup: z.string().optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      description: "description",
      expand: "expand",
      fraudDetails: "fraud_details",
      metadata: "metadata",
      receiptEmail: "receipt_email",
      shipping: "shipping",
      transferGroup: "transfer_group",
      charge: "charge",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CaptureRequest
 */
export type CaptureRequest = {
  /**
   * The amount to capture, which must be less than or equal to the original amount.
   */
  amount?: number | undefined;
  /**
   * An application fee to add on to this charge.
   */
  applicationFee?: number | undefined;
  /**
   * An application fee amount to add on to this charge, which must be less than or equal to the original amount.
   */
  applicationFeeAmount?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The email address to send this charge's receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
   */
  receiptEmail?: string | undefined;
  /**
   * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   *
   * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
   */
  statementDescriptor?: string | undefined;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
   */
  statementDescriptorSuffix?: string | undefined;
  /**
   * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
   */
  transferData?: ChargeCaptureBodyTransferData | undefined;
  /**
   * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string | undefined;
  charge: string;
};

/**
 * @internal
 * CaptureRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CaptureRequest = {
  amount?: number | undefined;
  application_fee?: number | undefined;
  application_fee_amount?: number | undefined;
  expand?: string[] | undefined;
  receipt_email?: string | undefined;
  statement_descriptor?: string | undefined;
  statement_descriptor_suffix?: string | undefined;
  transfer_data?: External$ChargeCaptureBodyTransferData | undefined;
  transfer_group?: string | undefined;
  charge: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CaptureRequest
 */
const SchemaIn$CaptureRequest: z.ZodType<
  CaptureRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    application_fee: z.number().int().optional(),
    application_fee_amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    receipt_email: z.string().optional(),
    statement_descriptor: z.string().optional(),
    statement_descriptor_suffix: z.string().optional(),
    transfer_data: Schemas$ChargeCaptureBodyTransferData.in.optional(),
    transfer_group: z.string().optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application_fee: "applicationFee",
      application_fee_amount: "applicationFeeAmount",
      expand: "expand",
      receipt_email: "receiptEmail",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      transfer_data: "transferData",
      transfer_group: "transferGroup",
      charge: "charge",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CaptureRequest
 */
const SchemaOut$CaptureRequest: z.ZodType<
  External$CaptureRequest, // output type of this zod object
  z.ZodTypeDef,
  CaptureRequest // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    applicationFee: z.number().int().optional(),
    applicationFeeAmount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    receiptEmail: z.string().optional(),
    statementDescriptor: z.string().optional(),
    statementDescriptorSuffix: z.string().optional(),
    transferData: Schemas$ChargeCaptureBodyTransferData.out.optional(),
    transferGroup: z.string().optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicationFee: "application_fee",
      applicationFeeAmount: "application_fee_amount",
      expand: "expand",
      receiptEmail: "receipt_email",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      transferData: "transfer_data",
      transferGroup: "transfer_group",
      charge: "charge",
    });
  });

export const Schemas$CaptureRequest = {
  in: SchemaIn$CaptureRequest,
  out: SchemaOut$CaptureRequest,
};
