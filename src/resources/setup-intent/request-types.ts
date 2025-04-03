import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$SetupIntentConfirmBodyMandateDataObj0,
  Schemas$SetupIntentConfirmBodyMandateDataObj0,
  SetupIntentConfirmBodyMandateDataObj0,
} from "@sideko-inc/stripe/types/setup-intent-confirm-body-mandate-data-obj0";
import {
  External$SetupIntentConfirmBodyMandateDataObj2,
  Schemas$SetupIntentConfirmBodyMandateDataObj2,
  SetupIntentConfirmBodyMandateDataObj2,
} from "@sideko-inc/stripe/types/setup-intent-confirm-body-mandate-data-obj2";
import {
  External$SetupIntentConfirmBodyPaymentMethodData,
  Schemas$SetupIntentConfirmBodyPaymentMethodData,
  SetupIntentConfirmBodyPaymentMethodData,
} from "@sideko-inc/stripe/types/setup-intent-confirm-body-payment-method-data";
import {
  External$SetupIntentConfirmBodyPaymentMethodOptions,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptions,
  SetupIntentConfirmBodyPaymentMethodOptions,
} from "@sideko-inc/stripe/types/setup-intent-confirm-body-payment-method-options";
import {
  External$SetupIntentCreateBodyAutomaticPaymentMethods,
  Schemas$SetupIntentCreateBodyAutomaticPaymentMethods,
  SetupIntentCreateBodyAutomaticPaymentMethods,
} from "@sideko-inc/stripe/types/setup-intent-create-body-automatic-payment-methods";
import {
  External$SetupIntentCreateBodyMandateDataObj0,
  Schemas$SetupIntentCreateBodyMandateDataObj0,
  SetupIntentCreateBodyMandateDataObj0,
} from "@sideko-inc/stripe/types/setup-intent-create-body-mandate-data-obj0";
import {
  External$SetupIntentCreateBodyMetadata,
  Schemas$SetupIntentCreateBodyMetadata,
  SetupIntentCreateBodyMetadata,
} from "@sideko-inc/stripe/types/setup-intent-create-body-metadata";
import {
  External$SetupIntentCreateBodyPaymentMethodData,
  Schemas$SetupIntentCreateBodyPaymentMethodData,
  SetupIntentCreateBodyPaymentMethodData,
} from "@sideko-inc/stripe/types/setup-intent-create-body-payment-method-data";
import {
  External$SetupIntentCreateBodyPaymentMethodOptions,
  Schemas$SetupIntentCreateBodyPaymentMethodOptions,
  SetupIntentCreateBodyPaymentMethodOptions,
} from "@sideko-inc/stripe/types/setup-intent-create-body-payment-method-options";
import {
  External$SetupIntentCreateBodySingleUse,
  Schemas$SetupIntentCreateBodySingleUse,
  SetupIntentCreateBodySingleUse,
} from "@sideko-inc/stripe/types/setup-intent-create-body-single-use";
import {
  External$SetupIntentListCreatedObj0,
  Schemas$SetupIntentListCreatedObj0,
  SetupIntentListCreatedObj0,
} from "@sideko-inc/stripe/types/setup-intent-list-created-obj0";
import {
  External$SetupIntentUpdateBodyMetadataObj0,
  Schemas$SetupIntentUpdateBodyMetadataObj0,
  SetupIntentUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/setup-intent-update-body-metadata-obj0";
import {
  External$SetupIntentUpdateBodyPaymentMethodData,
  Schemas$SetupIntentUpdateBodyPaymentMethodData,
  SetupIntentUpdateBodyPaymentMethodData,
} from "@sideko-inc/stripe/types/setup-intent-update-body-payment-method-data";
import {
  External$SetupIntentUpdateBodyPaymentMethodOptions,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptions,
  SetupIntentUpdateBodyPaymentMethodOptions,
} from "@sideko-inc/stripe/types/setup-intent-update-body-payment-method-options";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean | undefined;
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: (SetupIntentListCreatedObj0 | number) | undefined;
  /**
   * Only return SetupIntents for the customer specified by this customer ID.
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
   * Only return SetupIntents that associate with the specified payment method.
   */
  paymentMethod?: string | undefined;
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
  attach_to_self?: boolean | undefined;
  created?: (External$SetupIntentListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  payment_method?: string | undefined;
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
    attach_to_self: z.boolean().optional(),
    created: z
      .union([Schemas$SetupIntentListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    payment_method: z.string().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      attach_to_self: "attachToSelf",
      created: "created",
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      payment_method: "paymentMethod",
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
    attachToSelf: z.boolean().optional(),
    created: z
      .union([Schemas$SetupIntentListCreatedObj0.out, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    paymentMethod: z.string().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      attachToSelf: "attach_to_self",
      created: "created",
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      paymentMethod: "payment_method",
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
  intent: string;
  /**
   * The client secret of the SetupIntent. We require this string if you use a publishable key to retrieve the SetupIntent.
   */
  clientSecret?: string | undefined;
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
  intent: string;
  client_secret?: string | undefined;
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
    intent: z.string(),
    client_secret: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
      client_secret: "clientSecret",
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
    intent: z.string(),
    clientSecret: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
      clientSecret: "client_secret",
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
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean | undefined;
  /**
   * When you enable this parameter, this SetupIntent accepts payment methods that you enable in the Dashboard and that are compatible with its other parameters.
   */
  automaticPaymentMethods?:
    | SetupIntentCreateBodyAutomaticPaymentMethods
    | undefined;
  /**
   * Set to `true` to attempt to confirm this SetupIntent immediately. This parameter defaults to `false`. If a card is the attached payment method, you can provide a `return_url` in case further authentication is necessary.
   */
  confirm?: boolean | undefined;
  /**
   * ID of the ConfirmationToken used to confirm this SetupIntent.
   *
   * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmationToken?: string | undefined;
  /**
   * ID of the Customer this SetupIntent belongs to, if one exists.
   *
   * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
   */
  customer?: string | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Indicates the directions of money movement for which this payment method is intended to be used.
   *
   * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
   */
  flowDirections?: ("inbound" | "outbound")[] | undefined;
  /**
   * This hash contains details about the mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
   */
  mandateData?: (SetupIntentCreateBodyMandateDataObj0 | string) | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: SetupIntentCreateBodyMetadata | undefined;
  /**
   * The Stripe account ID created for this SetupIntent.
   */
  onBehalfOf?: string | undefined;
  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
   */
  paymentMethod?: string | undefined;
  /**
   * The ID of the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) to use with this SetupIntent.
   */
  paymentMethodConfiguration?: string | undefined;
  /**
   * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
   * value in the SetupIntent.
   */
  paymentMethodData?: SetupIntentCreateBodyPaymentMethodData | undefined;
  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  paymentMethodOptions?: SetupIntentCreateBodyPaymentMethodOptions | undefined;
  /**
   * The list of payment method types (for example, card) that this SetupIntent can use. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
   */
  paymentMethodTypes?: string[] | undefined;
  /**
   * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. To redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
   */
  returnUrl?: string | undefined;
  /**
   * If you populate this hash, this SetupIntent generates a `single_use` mandate after successful completion.
   *
   * Single-use mandates are only valid for the following payment methods: `acss_debit`, `alipay`, `au_becs_debit`, `bacs_debit`, `bancontact`, `boleto`, `ideal`, `link`, `sepa_debit`, and `us_bank_account`.
   */
  singleUse?: SetupIntentCreateBodySingleUse | undefined;
  /**
   * Indicates how the payment method is intended to be used in the future. If not provided, this value defaults to `off_session`.
   */
  usage?: ("off_session" | "on_session") | undefined;
  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  useStripeSdk?: boolean | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  attach_to_self?: boolean | undefined;
  automatic_payment_methods?:
    | External$SetupIntentCreateBodyAutomaticPaymentMethods
    | undefined;
  confirm?: boolean | undefined;
  confirmation_token?: string | undefined;
  customer?: string | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  flow_directions?: ("inbound" | "outbound")[] | undefined;
  mandate_data?:
    | (External$SetupIntentCreateBodyMandateDataObj0 | string)
    | undefined;
  metadata?: External$SetupIntentCreateBodyMetadata | undefined;
  on_behalf_of?: string | undefined;
  payment_method?: string | undefined;
  payment_method_configuration?: string | undefined;
  payment_method_data?:
    | External$SetupIntentCreateBodyPaymentMethodData
    | undefined;
  payment_method_options?:
    | External$SetupIntentCreateBodyPaymentMethodOptions
    | undefined;
  payment_method_types?: string[] | undefined;
  return_url?: string | undefined;
  single_use?: External$SetupIntentCreateBodySingleUse | undefined;
  usage?: ("off_session" | "on_session") | undefined;
  use_stripe_sdk?: boolean | undefined;
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
    attach_to_self: z.boolean().optional(),
    automatic_payment_methods:
      Schemas$SetupIntentCreateBodyAutomaticPaymentMethods.in.optional(),
    confirm: z.boolean().optional(),
    confirmation_token: z.string().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flow_directions: z.array(z.enum(["inbound", "outbound"])).optional(),
    mandate_data: z
      .union([Schemas$SetupIntentCreateBodyMandateDataObj0.in, z.string()])
      .optional(),
    metadata: Schemas$SetupIntentCreateBodyMetadata.in.optional(),
    on_behalf_of: z.string().optional(),
    payment_method: z.string().optional(),
    payment_method_configuration: z.string().optional(),
    payment_method_data:
      Schemas$SetupIntentCreateBodyPaymentMethodData.in.optional(),
    payment_method_options:
      Schemas$SetupIntentCreateBodyPaymentMethodOptions.in.optional(),
    payment_method_types: z.array(z.string()).optional(),
    return_url: z.string().optional(),
    single_use: Schemas$SetupIntentCreateBodySingleUse.in.optional(),
    usage: z.enum(["off_session", "on_session"]).optional(),
    use_stripe_sdk: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attach_to_self: "attachToSelf",
      automatic_payment_methods: "automaticPaymentMethods",
      confirm: "confirm",
      confirmation_token: "confirmationToken",
      customer: "customer",
      description: "description",
      expand: "expand",
      flow_directions: "flowDirections",
      mandate_data: "mandateData",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      payment_method: "paymentMethod",
      payment_method_configuration: "paymentMethodConfiguration",
      payment_method_data: "paymentMethodData",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      return_url: "returnUrl",
      single_use: "singleUse",
      usage: "usage",
      use_stripe_sdk: "useStripeSdk",
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
    attachToSelf: z.boolean().optional(),
    automaticPaymentMethods:
      Schemas$SetupIntentCreateBodyAutomaticPaymentMethods.out.optional(),
    confirm: z.boolean().optional(),
    confirmationToken: z.string().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flowDirections: z.array(z.enum(["inbound", "outbound"])).optional(),
    mandateData: z
      .union([Schemas$SetupIntentCreateBodyMandateDataObj0.out, z.string()])
      .optional(),
    metadata: Schemas$SetupIntentCreateBodyMetadata.out.optional(),
    onBehalfOf: z.string().optional(),
    paymentMethod: z.string().optional(),
    paymentMethodConfiguration: z.string().optional(),
    paymentMethodData:
      Schemas$SetupIntentCreateBodyPaymentMethodData.out.optional(),
    paymentMethodOptions:
      Schemas$SetupIntentCreateBodyPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z.array(z.string()).optional(),
    returnUrl: z.string().optional(),
    singleUse: Schemas$SetupIntentCreateBodySingleUse.out.optional(),
    usage: z.enum(["off_session", "on_session"]).optional(),
    useStripeSdk: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attachToSelf: "attach_to_self",
      automaticPaymentMethods: "automatic_payment_methods",
      confirm: "confirm",
      confirmationToken: "confirmation_token",
      customer: "customer",
      description: "description",
      expand: "expand",
      flowDirections: "flow_directions",
      mandateData: "mandate_data",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      paymentMethod: "payment_method",
      paymentMethodConfiguration: "payment_method_configuration",
      paymentMethodData: "payment_method_data",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      returnUrl: "return_url",
      singleUse: "single_use",
      usage: "usage",
      useStripeSdk: "use_stripe_sdk",
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
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean | undefined;
  /**
   * ID of the Customer this SetupIntent belongs to, if one exists.
   *
   * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
   */
  customer?: string | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Indicates the directions of money movement for which this payment method is intended to be used.
   *
   * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
   */
  flowDirections?: ("inbound" | "outbound")[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (SetupIntentUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent. To unset this field to null, pass in an empty string.
   */
  paymentMethod?: string | undefined;
  /**
   * The ID of the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) to use with this SetupIntent.
   */
  paymentMethodConfiguration?: string | undefined;
  /**
   * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
   * value in the SetupIntent.
   */
  paymentMethodData?: SetupIntentUpdateBodyPaymentMethodData | undefined;
  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  paymentMethodOptions?: SetupIntentUpdateBodyPaymentMethodOptions | undefined;
  /**
   * The list of payment method types (for example, card) that this SetupIntent can set up. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
   */
  paymentMethodTypes?: string[] | undefined;
  intent: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  attach_to_self?: boolean | undefined;
  customer?: string | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  flow_directions?: ("inbound" | "outbound")[] | undefined;
  metadata?: (External$SetupIntentUpdateBodyMetadataObj0 | string) | undefined;
  payment_method?: string | undefined;
  payment_method_configuration?: string | undefined;
  payment_method_data?:
    | External$SetupIntentUpdateBodyPaymentMethodData
    | undefined;
  payment_method_options?:
    | External$SetupIntentUpdateBodyPaymentMethodOptions
    | undefined;
  payment_method_types?: string[] | undefined;
  intent: string;
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
    attach_to_self: z.boolean().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flow_directions: z.array(z.enum(["inbound", "outbound"])).optional(),
    metadata: z
      .union([Schemas$SetupIntentUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    payment_method: z.string().optional(),
    payment_method_configuration: z.string().optional(),
    payment_method_data:
      Schemas$SetupIntentUpdateBodyPaymentMethodData.in.optional(),
    payment_method_options:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptions.in.optional(),
    payment_method_types: z.array(z.string()).optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attach_to_self: "attachToSelf",
      customer: "customer",
      description: "description",
      expand: "expand",
      flow_directions: "flowDirections",
      metadata: "metadata",
      payment_method: "paymentMethod",
      payment_method_configuration: "paymentMethodConfiguration",
      payment_method_data: "paymentMethodData",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      intent: "intent",
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
    attachToSelf: z.boolean().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flowDirections: z.array(z.enum(["inbound", "outbound"])).optional(),
    metadata: z
      .union([Schemas$SetupIntentUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    paymentMethod: z.string().optional(),
    paymentMethodConfiguration: z.string().optional(),
    paymentMethodData:
      Schemas$SetupIntentUpdateBodyPaymentMethodData.out.optional(),
    paymentMethodOptions:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z.array(z.string()).optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attachToSelf: "attach_to_self",
      customer: "customer",
      description: "description",
      expand: "expand",
      flowDirections: "flow_directions",
      metadata: "metadata",
      paymentMethod: "payment_method",
      paymentMethodConfiguration: "payment_method_configuration",
      paymentMethodData: "payment_method_data",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      intent: "intent",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  /**
   * Reason for canceling this SetupIntent. Possible values are: `abandoned`, `requested_by_customer`, or `duplicate`
   */
  cancellationReason?:
    | ("abandoned" | "duplicate" | "requested_by_customer")
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  intent: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  cancellation_reason?:
    | ("abandoned" | "duplicate" | "requested_by_customer")
    | undefined;
  expand?: string[] | undefined;
  intent: string;
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
    cancellation_reason: z
      .enum(["abandoned", "duplicate", "requested_by_customer"])
      .optional(),
    expand: z.array(z.string()).optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancellation_reason: "cancellationReason",
      expand: "expand",
      intent: "intent",
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
    cancellationReason: z
      .enum(["abandoned", "duplicate", "requested_by_customer"])
      .optional(),
    expand: z.array(z.string()).optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancellationReason: "cancellation_reason",
      expand: "expand",
      intent: "intent",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * ConfirmRequest
 */
export type ConfirmRequest = {
  /**
   * The client secret of the SetupIntent.
   */
  clientSecret?: string | undefined;
  /**
   * ID of the ConfirmationToken used to confirm this SetupIntent.
   *
   * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmationToken?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  mandateData?:
    | (
        | SetupIntentConfirmBodyMandateDataObj0
        | string
        | SetupIntentConfirmBodyMandateDataObj2
      )
    | undefined;
  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
   */
  paymentMethod?: string | undefined;
  /**
   * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
   * value in the SetupIntent.
   */
  paymentMethodData?: SetupIntentConfirmBodyPaymentMethodData | undefined;
  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  paymentMethodOptions?: SetupIntentConfirmBodyPaymentMethodOptions | undefined;
  /**
   * The URL to redirect your customer back to after they authenticate on the payment method's app or site.
   * If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
   * This parameter is only used for cards and other redirect-based payment methods.
   */
  returnUrl?: string | undefined;
  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  useStripeSdk?: boolean | undefined;
  intent: string;
};

/**
 * @internal
 * ConfirmRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmRequest = {
  client_secret?: string | undefined;
  confirmation_token?: string | undefined;
  expand?: string[] | undefined;
  mandate_data?:
    | (
        | External$SetupIntentConfirmBodyMandateDataObj0
        | string
        | External$SetupIntentConfirmBodyMandateDataObj2
      )
    | undefined;
  payment_method?: string | undefined;
  payment_method_data?:
    | External$SetupIntentConfirmBodyPaymentMethodData
    | undefined;
  payment_method_options?:
    | External$SetupIntentConfirmBodyPaymentMethodOptions
    | undefined;
  return_url?: string | undefined;
  use_stripe_sdk?: boolean | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmRequest
 */
const SchemaIn$ConfirmRequest: z.ZodType<
  ConfirmRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    client_secret: z.string().optional(),
    confirmation_token: z.string().optional(),
    expand: z.array(z.string()).optional(),
    mandate_data: z
      .union([
        Schemas$SetupIntentConfirmBodyMandateDataObj0.in,
        z.string(),
        Schemas$SetupIntentConfirmBodyMandateDataObj2.in,
      ])
      .optional(),
    payment_method: z.string().optional(),
    payment_method_data:
      Schemas$SetupIntentConfirmBodyPaymentMethodData.in.optional(),
    payment_method_options:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptions.in.optional(),
    return_url: z.string().optional(),
    use_stripe_sdk: z.boolean().optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      client_secret: "clientSecret",
      confirmation_token: "confirmationToken",
      expand: "expand",
      mandate_data: "mandateData",
      payment_method: "paymentMethod",
      payment_method_data: "paymentMethodData",
      payment_method_options: "paymentMethodOptions",
      return_url: "returnUrl",
      use_stripe_sdk: "useStripeSdk",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmRequest
 */
const SchemaOut$ConfirmRequest: z.ZodType<
  External$ConfirmRequest, // output type of this zod object
  z.ZodTypeDef,
  ConfirmRequest // the object to be transformed
> = z
  .object({
    clientSecret: z.string().optional(),
    confirmationToken: z.string().optional(),
    expand: z.array(z.string()).optional(),
    mandateData: z
      .union([
        Schemas$SetupIntentConfirmBodyMandateDataObj0.out,
        z.string(),
        Schemas$SetupIntentConfirmBodyMandateDataObj2.out,
      ])
      .optional(),
    paymentMethod: z.string().optional(),
    paymentMethodData:
      Schemas$SetupIntentConfirmBodyPaymentMethodData.out.optional(),
    paymentMethodOptions:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptions.out.optional(),
    returnUrl: z.string().optional(),
    useStripeSdk: z.boolean().optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientSecret: "client_secret",
      confirmationToken: "confirmation_token",
      expand: "expand",
      mandateData: "mandate_data",
      paymentMethod: "payment_method",
      paymentMethodData: "payment_method_data",
      paymentMethodOptions: "payment_method_options",
      returnUrl: "return_url",
      useStripeSdk: "use_stripe_sdk",
      intent: "intent",
    });
  });

export const Schemas$ConfirmRequest = {
  in: SchemaIn$ConfirmRequest,
  out: SchemaOut$ConfirmRequest,
};

/**
 * VerifyMicrodepositsRequest
 */
export type VerifyMicrodepositsRequest = {
  /**
   * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
   */
  amounts?: number[] | undefined;
  /**
   * The client secret of the SetupIntent.
   */
  clientSecret?: string | undefined;
  /**
   * A six-character code starting with SM present in the microdeposit sent to the bank account.
   */
  descriptorCode?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  intent: string;
};

/**
 * @internal
 * VerifyMicrodepositsRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VerifyMicrodepositsRequest = {
  amounts?: number[] | undefined;
  client_secret?: string | undefined;
  descriptor_code?: string | undefined;
  expand?: string[] | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VerifyMicrodepositsRequest
 */
const SchemaIn$VerifyMicrodepositsRequest: z.ZodType<
  VerifyMicrodepositsRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amounts: z.array(z.number().int()).optional(),
    client_secret: z.string().optional(),
    descriptor_code: z.string().optional(),
    expand: z.array(z.string()).optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amounts: "amounts",
      client_secret: "clientSecret",
      descriptor_code: "descriptorCode",
      expand: "expand",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VerifyMicrodepositsRequest
 */
const SchemaOut$VerifyMicrodepositsRequest: z.ZodType<
  External$VerifyMicrodepositsRequest, // output type of this zod object
  z.ZodTypeDef,
  VerifyMicrodepositsRequest // the object to be transformed
> = z
  .object({
    amounts: z.array(z.number().int()).optional(),
    clientSecret: z.string().optional(),
    descriptorCode: z.string().optional(),
    expand: z.array(z.string()).optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amounts: "amounts",
      clientSecret: "client_secret",
      descriptorCode: "descriptor_code",
      expand: "expand",
      intent: "intent",
    });
  });

export const Schemas$VerifyMicrodepositsRequest = {
  in: SchemaIn$VerifyMicrodepositsRequest,
  out: SchemaOut$VerifyMicrodepositsRequest,
};
