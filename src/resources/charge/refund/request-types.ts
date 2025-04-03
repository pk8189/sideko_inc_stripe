import { zodTransform } from "@sideko-inc/stripe/core";
import {
  ChargeRefundCreateBodyMetadataObj0,
  External$ChargeRefundCreateBodyMetadataObj0,
  Schemas$ChargeRefundCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/charge-refund-create-body-metadata-obj0";
import {
  ChargeRefundCreate1BodyMetadataObj0,
  External$ChargeRefundCreate1BodyMetadataObj0,
  Schemas$ChargeRefundCreate1BodyMetadataObj0,
} from "@sideko-inc/stripe/types/charge-refund-create1-body-metadata-obj0";
import {
  ChargeRefundUpdateBodyMetadataObj0,
  External$ChargeRefundUpdateBodyMetadataObj0,
  Schemas$ChargeRefundUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/charge-refund-update-body-metadata-obj0";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  charge: string;
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
  charge: string;
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
    charge: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
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
    charge: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
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
  charge: string;
  refund: string;
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
  refund: string;
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
    refund: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
      refund: "refund",
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
    refund: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
      refund: "refund",
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
   * A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) representing how much of this charge to refund. Can refund only up to the remaining, unrefunded amount of the charge.
   */
  amount?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * For payment methods without native refund support (e.g., Konbini, PromptPay), use this email from the customer to receive refund instructions.
   */
  instructionsEmail?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ChargeRefundCreateBodyMetadataObj0 | string) | undefined;
  /**
   * The identifier of the PaymentIntent to refund.
   */
  paymentIntent?: string | undefined;
  /**
   * String indicating the reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`. If you believe the charge to be fraudulent, specifying `fraudulent` as the reason will add the associated card and email to your [block lists](https://stripe.com/docs/radar/lists), and will also help us improve our fraud detection algorithms.
   */
  reason?: ("duplicate" | "fraudulent" | "requested_by_customer") | undefined;
  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refundApplicationFee?: boolean | undefined;
  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount).<br><br>A transfer can be reversed only by the application that created the charge.
   */
  reverseTransfer?: boolean | undefined;
  /**
   * The identifier of the charge to refund.
   */
  charge: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  amount?: number | undefined;
  expand?: string[] | undefined;
  instructions_email?: string | undefined;
  metadata?: (External$ChargeRefundCreateBodyMetadataObj0 | string) | undefined;
  payment_intent?: string | undefined;
  reason?: ("duplicate" | "fraudulent" | "requested_by_customer") | undefined;
  refund_application_fee?: boolean | undefined;
  reverse_transfer?: boolean | undefined;
  charge: string;
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
    expand: z.array(z.string()).optional(),
    instructions_email: z.string().optional(),
    metadata: z
      .union([Schemas$ChargeRefundCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    payment_intent: z.string().optional(),
    reason: z
      .enum(["duplicate", "fraudulent", "requested_by_customer"])
      .optional(),
    refund_application_fee: z.boolean().optional(),
    reverse_transfer: z.boolean().optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      instructions_email: "instructionsEmail",
      metadata: "metadata",
      payment_intent: "paymentIntent",
      reason: "reason",
      refund_application_fee: "refundApplicationFee",
      reverse_transfer: "reverseTransfer",
      charge: "charge",
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
    expand: z.array(z.string()).optional(),
    instructionsEmail: z.string().optional(),
    metadata: z
      .union([Schemas$ChargeRefundCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    paymentIntent: z.string().optional(),
    reason: z
      .enum(["duplicate", "fraudulent", "requested_by_customer"])
      .optional(),
    refundApplicationFee: z.boolean().optional(),
    reverseTransfer: z.boolean().optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      instructionsEmail: "instructions_email",
      metadata: "metadata",
      paymentIntent: "payment_intent",
      reason: "reason",
      refundApplicationFee: "refund_application_fee",
      reverseTransfer: "reverse_transfer",
      charge: "charge",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * Create1Request
 */
export type Create1Request = {
  amount?: number | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | undefined;
  /**
   * Customer whose customer balance to refund from.
   */
  customer?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * For payment methods without native refund support (e.g., Konbini, PromptPay), use this email from the customer to receive refund instructions.
   */
  instructionsEmail?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ChargeRefundCreate1BodyMetadataObj0 | string) | undefined;
  /**
   * Origin of the refund
   */
  origin?: "customer_balance" | undefined;
  /**
   * The identifier of the PaymentIntent to refund.
   */
  paymentIntent?: string | undefined;
  /**
   * String indicating the reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`. If you believe the charge to be fraudulent, specifying `fraudulent` as the reason will add the associated card and email to your [block lists](https://stripe.com/docs/radar/lists), and will also help us improve our fraud detection algorithms.
   */
  reason?: ("duplicate" | "fraudulent" | "requested_by_customer") | undefined;
  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refundApplicationFee?: boolean | undefined;
  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount).<br><br>A transfer can be reversed only by the application that created the charge.
   */
  reverseTransfer?: boolean | undefined;
  /**
   * The identifier of the charge to refund.
   */
  charge: string;
};

/**
 * @internal
 * Create1Request without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Create1Request = {
  amount?: number | undefined;
  currency?: string | undefined;
  customer?: string | undefined;
  expand?: string[] | undefined;
  instructions_email?: string | undefined;
  metadata?:
    | (External$ChargeRefundCreate1BodyMetadataObj0 | string)
    | undefined;
  origin?: "customer_balance" | undefined;
  payment_intent?: string | undefined;
  reason?: ("duplicate" | "fraudulent" | "requested_by_customer") | undefined;
  refund_application_fee?: boolean | undefined;
  reverse_transfer?: boolean | undefined;
  charge: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Create1Request
 */
const SchemaIn$Create1Request: z.ZodType<
  Create1Request, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    instructions_email: z.string().optional(),
    metadata: z
      .union([Schemas$ChargeRefundCreate1BodyMetadataObj0.in, z.string()])
      .optional(),
    origin: z.enum(["customer_balance"]).optional(),
    payment_intent: z.string().optional(),
    reason: z
      .enum(["duplicate", "fraudulent", "requested_by_customer"])
      .optional(),
    refund_application_fee: z.boolean().optional(),
    reverse_transfer: z.boolean().optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      expand: "expand",
      instructions_email: "instructionsEmail",
      metadata: "metadata",
      origin: "origin",
      payment_intent: "paymentIntent",
      reason: "reason",
      refund_application_fee: "refundApplicationFee",
      reverse_transfer: "reverseTransfer",
      charge: "charge",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Create1Request
 */
const SchemaOut$Create1Request: z.ZodType<
  External$Create1Request, // output type of this zod object
  z.ZodTypeDef,
  Create1Request // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    instructionsEmail: z.string().optional(),
    metadata: z
      .union([Schemas$ChargeRefundCreate1BodyMetadataObj0.out, z.string()])
      .optional(),
    origin: z.enum(["customer_balance"]).optional(),
    paymentIntent: z.string().optional(),
    reason: z
      .enum(["duplicate", "fraudulent", "requested_by_customer"])
      .optional(),
    refundApplicationFee: z.boolean().optional(),
    reverseTransfer: z.boolean().optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      expand: "expand",
      instructionsEmail: "instructions_email",
      metadata: "metadata",
      origin: "origin",
      paymentIntent: "payment_intent",
      reason: "reason",
      refundApplicationFee: "refund_application_fee",
      reverseTransfer: "reverse_transfer",
      charge: "charge",
    });
  });

export const Schemas$Create1Request = {
  in: SchemaIn$Create1Request,
  out: SchemaOut$Create1Request,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  metadata?: (ChargeRefundUpdateBodyMetadataObj0 | string) | undefined;
  charge: string;
  refund: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  metadata?: (External$ChargeRefundUpdateBodyMetadataObj0 | string) | undefined;
  charge: string;
  refund: string;
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
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeRefundUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    charge: z.string(),
    refund: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      charge: "charge",
      refund: "refund",
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
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeRefundUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    charge: z.string(),
    refund: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      charge: "charge",
      refund: "refund",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
