import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TerminalReaderCreateBodyMetadataObj0,
  Schemas$TerminalReaderCreateBodyMetadataObj0,
  TerminalReaderCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/terminal-reader-create-body-metadata-obj0";
import {
  External$TerminalReaderProcessPaymentIntentBodyProcessConfig,
  Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfig,
  TerminalReaderProcessPaymentIntentBodyProcessConfig,
} from "@sideko-inc/stripe/types/terminal-reader-process-payment-intent-body-process-config";
import {
  External$TerminalReaderProcessSetupIntentBodyProcessConfig,
  Schemas$TerminalReaderProcessSetupIntentBodyProcessConfig,
  TerminalReaderProcessSetupIntentBodyProcessConfig,
} from "@sideko-inc/stripe/types/terminal-reader-process-setup-intent-body-process-config";
import {
  External$TerminalReaderRefundPaymentBodyMetadata,
  Schemas$TerminalReaderRefundPaymentBodyMetadata,
  TerminalReaderRefundPaymentBodyMetadata,
} from "@sideko-inc/stripe/types/terminal-reader-refund-payment-body-metadata";
import {
  External$TerminalReaderRefundPaymentBodyRefundPaymentConfig,
  Schemas$TerminalReaderRefundPaymentBodyRefundPaymentConfig,
  TerminalReaderRefundPaymentBodyRefundPaymentConfig,
} from "@sideko-inc/stripe/types/terminal-reader-refund-payment-body-refund-payment-config";
import {
  External$TerminalReaderSetReaderDisplayBodyCart,
  Schemas$TerminalReaderSetReaderDisplayBodyCart,
  TerminalReaderSetReaderDisplayBodyCart,
} from "@sideko-inc/stripe/types/terminal-reader-set-reader-display-body-cart";
import {
  External$TerminalReaderUpdateBodyMetadataObj0,
  Schemas$TerminalReaderUpdateBodyMetadataObj0,
  TerminalReaderUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/terminal-reader-update-body-metadata-obj0";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data: Record<string, any>;
  reader: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data: Record<string, any>;
  reader: string;
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
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      reader: "reader",
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
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      reader: "reader",
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
   * Filters readers by device type
   */
  deviceType?:
    | (
        | "bbpos_chipper2x"
        | "bbpos_wisepad3"
        | "bbpos_wisepos_e"
        | "mobile_phone_reader"
        | "simulated_wisepos_e"
        | "stripe_m2"
        | "stripe_s700"
        | "verifone_P400"
      )
    | undefined;
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
   * A location ID to filter the response list to only readers at the specific location
   */
  location?: string | undefined;
  /**
   * Filters readers by serial number
   */
  serialNumber?: string | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * A status filter to filter readers to only offline or online readers
   */
  status?: ("offline" | "online") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  data: Record<string, any>;
  device_type?:
    | (
        | "bbpos_chipper2x"
        | "bbpos_wisepad3"
        | "bbpos_wisepos_e"
        | "mobile_phone_reader"
        | "simulated_wisepos_e"
        | "stripe_m2"
        | "stripe_s700"
        | "verifone_P400"
      )
    | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  location?: string | undefined;
  serial_number?: string | undefined;
  starting_after?: string | undefined;
  status?: ("offline" | "online") | undefined;
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
    device_type: z
      .enum([
        "bbpos_chipper2x",
        "bbpos_wisepad3",
        "bbpos_wisepos_e",
        "mobile_phone_reader",
        "simulated_wisepos_e",
        "stripe_m2",
        "stripe_s700",
        "verifone_P400",
      ])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    location: z.string().optional(),
    serial_number: z.string().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["offline", "online"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      device_type: "deviceType",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      location: "location",
      serial_number: "serialNumber",
      starting_after: "startingAfter",
      status: "status",
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
    deviceType: z
      .enum([
        "bbpos_chipper2x",
        "bbpos_wisepad3",
        "bbpos_wisepos_e",
        "mobile_phone_reader",
        "simulated_wisepos_e",
        "stripe_m2",
        "stripe_s700",
        "verifone_P400",
      ])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    location: z.string().optional(),
    serialNumber: z.string().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["offline", "online"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      deviceType: "device_type",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      location: "location",
      serialNumber: "serial_number",
      startingAfter: "starting_after",
      status: "status",
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
  reader: string;
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
  reader: string;
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
    reader: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      reader: "reader",
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
    reader: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      reader: "reader",
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
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Custom label given to the reader for easier identification. If no label is specified, the registration code will be used.
   */
  label?: string | undefined;
  /**
   * The location to assign the reader to.
   */
  location?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TerminalReaderCreateBodyMetadataObj0 | string) | undefined;
  /**
   * A code generated by the reader used for registering to an account.
   */
  registrationCode: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  expand?: string[] | undefined;
  label?: string | undefined;
  location?: string | undefined;
  metadata?:
    | (External$TerminalReaderCreateBodyMetadataObj0 | string)
    | undefined;
  registration_code: string;
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
    expand: z.array(z.string()).optional(),
    label: z.string().optional(),
    location: z.string().optional(),
    metadata: z
      .union([Schemas$TerminalReaderCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    registration_code: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      label: "label",
      location: "location",
      metadata: "metadata",
      registration_code: "registrationCode",
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
    expand: z.array(z.string()).optional(),
    label: z.string().optional(),
    location: z.string().optional(),
    metadata: z
      .union([Schemas$TerminalReaderCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    registrationCode: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      label: "label",
      location: "location",
      metadata: "metadata",
      registrationCode: "registration_code",
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
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The new label of the reader.
   */
  label?: (string | string) | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TerminalReaderUpdateBodyMetadataObj0 | string) | undefined;
  reader: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  label?: (string | string) | undefined;
  metadata?:
    | (External$TerminalReaderUpdateBodyMetadataObj0 | string)
    | undefined;
  reader: string;
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
    label: z.union([z.string(), z.string()]).optional(),
    metadata: z
      .union([Schemas$TerminalReaderUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      label: "label",
      metadata: "metadata",
      reader: "reader",
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
    label: z.union([z.string(), z.string()]).optional(),
    metadata: z
      .union([Schemas$TerminalReaderUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      label: "label",
      metadata: "metadata",
      reader: "reader",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CancelActionRequest
 */
export type CancelActionRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  reader: string;
};

/**
 * @internal
 * CancelActionRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelActionRequest = {
  expand?: string[] | undefined;
  reader: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelActionRequest
 */
const SchemaIn$CancelActionRequest: z.ZodType<
  CancelActionRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      reader: "reader",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelActionRequest
 */
const SchemaOut$CancelActionRequest: z.ZodType<
  External$CancelActionRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelActionRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      reader: "reader",
    });
  });

export const Schemas$CancelActionRequest = {
  in: SchemaIn$CancelActionRequest,
  out: SchemaOut$CancelActionRequest,
};

/**
 * ProcessPaymentIntentRequest
 */
export type ProcessPaymentIntentRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * PaymentIntent ID
   */
  paymentIntent: string;
  /**
   * Configuration overrides
   */
  processConfig?:
    | TerminalReaderProcessPaymentIntentBodyProcessConfig
    | undefined;
  reader: string;
};

/**
 * @internal
 * ProcessPaymentIntentRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProcessPaymentIntentRequest = {
  expand?: string[] | undefined;
  payment_intent: string;
  process_config?:
    | External$TerminalReaderProcessPaymentIntentBodyProcessConfig
    | undefined;
  reader: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProcessPaymentIntentRequest
 */
const SchemaIn$ProcessPaymentIntentRequest: z.ZodType<
  ProcessPaymentIntentRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    payment_intent: z.string(),
    process_config:
      Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfig.in.optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      payment_intent: "paymentIntent",
      process_config: "processConfig",
      reader: "reader",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProcessPaymentIntentRequest
 */
const SchemaOut$ProcessPaymentIntentRequest: z.ZodType<
  External$ProcessPaymentIntentRequest, // output type of this zod object
  z.ZodTypeDef,
  ProcessPaymentIntentRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    paymentIntent: z.string(),
    processConfig:
      Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfig.out.optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      paymentIntent: "payment_intent",
      processConfig: "process_config",
      reader: "reader",
    });
  });

export const Schemas$ProcessPaymentIntentRequest = {
  in: SchemaIn$ProcessPaymentIntentRequest,
  out: SchemaOut$ProcessPaymentIntentRequest,
};

/**
 * ProcessSetupIntentRequest
 */
export type ProcessSetupIntentRequest = {
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
   */
  allowRedisplay: "always" | "limited" | "unspecified";
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Configuration overrides
   */
  processConfig?: TerminalReaderProcessSetupIntentBodyProcessConfig | undefined;
  /**
   * SetupIntent ID
   */
  setupIntent: string;
  reader: string;
};

/**
 * @internal
 * ProcessSetupIntentRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProcessSetupIntentRequest = {
  allow_redisplay: "always" | "limited" | "unspecified";
  expand?: string[] | undefined;
  process_config?:
    | External$TerminalReaderProcessSetupIntentBodyProcessConfig
    | undefined;
  setup_intent: string;
  reader: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProcessSetupIntentRequest
 */
const SchemaIn$ProcessSetupIntentRequest: z.ZodType<
  ProcessSetupIntentRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redisplay: z.enum(["always", "limited", "unspecified"]),
    expand: z.array(z.string()).optional(),
    process_config:
      Schemas$TerminalReaderProcessSetupIntentBodyProcessConfig.in.optional(),
    setup_intent: z.string(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redisplay: "allowRedisplay",
      expand: "expand",
      process_config: "processConfig",
      setup_intent: "setupIntent",
      reader: "reader",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProcessSetupIntentRequest
 */
const SchemaOut$ProcessSetupIntentRequest: z.ZodType<
  External$ProcessSetupIntentRequest, // output type of this zod object
  z.ZodTypeDef,
  ProcessSetupIntentRequest // the object to be transformed
> = z
  .object({
    allowRedisplay: z.enum(["always", "limited", "unspecified"]),
    expand: z.array(z.string()).optional(),
    processConfig:
      Schemas$TerminalReaderProcessSetupIntentBodyProcessConfig.out.optional(),
    setupIntent: z.string(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedisplay: "allow_redisplay",
      expand: "expand",
      processConfig: "process_config",
      setupIntent: "setup_intent",
      reader: "reader",
    });
  });

export const Schemas$ProcessSetupIntentRequest = {
  in: SchemaIn$ProcessSetupIntentRequest,
  out: SchemaOut$ProcessSetupIntentRequest,
};

/**
 * RefundPaymentRequest
 */
export type RefundPaymentRequest = {
  /**
   * A positive integer in __cents__ representing how much of this charge to refund.
   */
  amount?: number | undefined;
  /**
   * ID of the Charge to refund.
   */
  charge?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TerminalReaderRefundPaymentBodyMetadata | undefined;
  /**
   * ID of the PaymentIntent to refund.
   */
  paymentIntent?: string | undefined;
  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refundApplicationFee?: boolean | undefined;
  /**
   * Configuration overrides
   */
  refundPaymentConfig?:
    | TerminalReaderRefundPaymentBodyRefundPaymentConfig
    | undefined;
  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount). A transfer can be reversed only by the application that created the charge.
   */
  reverseTransfer?: boolean | undefined;
  reader: string;
};

/**
 * @internal
 * RefundPaymentRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundPaymentRequest = {
  amount?: number | undefined;
  charge?: string | undefined;
  expand?: string[] | undefined;
  metadata?: External$TerminalReaderRefundPaymentBodyMetadata | undefined;
  payment_intent?: string | undefined;
  refund_application_fee?: boolean | undefined;
  refund_payment_config?:
    | External$TerminalReaderRefundPaymentBodyRefundPaymentConfig
    | undefined;
  reverse_transfer?: boolean | undefined;
  reader: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundPaymentRequest
 */
const SchemaIn$RefundPaymentRequest: z.ZodType<
  RefundPaymentRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    charge: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TerminalReaderRefundPaymentBodyMetadata.in.optional(),
    payment_intent: z.string().optional(),
    refund_application_fee: z.boolean().optional(),
    refund_payment_config:
      Schemas$TerminalReaderRefundPaymentBodyRefundPaymentConfig.in.optional(),
    reverse_transfer: z.boolean().optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      charge: "charge",
      expand: "expand",
      metadata: "metadata",
      payment_intent: "paymentIntent",
      refund_application_fee: "refundApplicationFee",
      refund_payment_config: "refundPaymentConfig",
      reverse_transfer: "reverseTransfer",
      reader: "reader",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundPaymentRequest
 */
const SchemaOut$RefundPaymentRequest: z.ZodType<
  External$RefundPaymentRequest, // output type of this zod object
  z.ZodTypeDef,
  RefundPaymentRequest // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    charge: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TerminalReaderRefundPaymentBodyMetadata.out.optional(),
    paymentIntent: z.string().optional(),
    refundApplicationFee: z.boolean().optional(),
    refundPaymentConfig:
      Schemas$TerminalReaderRefundPaymentBodyRefundPaymentConfig.out.optional(),
    reverseTransfer: z.boolean().optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      charge: "charge",
      expand: "expand",
      metadata: "metadata",
      paymentIntent: "payment_intent",
      refundApplicationFee: "refund_application_fee",
      refundPaymentConfig: "refund_payment_config",
      reverseTransfer: "reverse_transfer",
      reader: "reader",
    });
  });

export const Schemas$RefundPaymentRequest = {
  in: SchemaIn$RefundPaymentRequest,
  out: SchemaOut$RefundPaymentRequest,
};

/**
 * SetReaderDisplayRequest
 */
export type SetReaderDisplayRequest = {
  /**
   * Cart
   */
  cart?: TerminalReaderSetReaderDisplayBodyCart | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Type
   */
  type: "cart";
  reader: string;
};

/**
 * @internal
 * SetReaderDisplayRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetReaderDisplayRequest = {
  cart?: External$TerminalReaderSetReaderDisplayBodyCart | undefined;
  expand?: string[] | undefined;
  type: "cart";
  reader: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetReaderDisplayRequest
 */
const SchemaIn$SetReaderDisplayRequest: z.ZodType<
  SetReaderDisplayRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cart: Schemas$TerminalReaderSetReaderDisplayBodyCart.in.optional(),
    expand: z.array(z.string()).optional(),
    type: z.enum(["cart"]),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cart: "cart",
      expand: "expand",
      type: "type",
      reader: "reader",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetReaderDisplayRequest
 */
const SchemaOut$SetReaderDisplayRequest: z.ZodType<
  External$SetReaderDisplayRequest, // output type of this zod object
  z.ZodTypeDef,
  SetReaderDisplayRequest // the object to be transformed
> = z
  .object({
    cart: Schemas$TerminalReaderSetReaderDisplayBodyCart.out.optional(),
    expand: z.array(z.string()).optional(),
    type: z.enum(["cart"]),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cart: "cart",
      expand: "expand",
      type: "type",
      reader: "reader",
    });
  });

export const Schemas$SetReaderDisplayRequest = {
  in: SchemaIn$SetReaderDisplayRequest,
  out: SchemaOut$SetReaderDisplayRequest,
};
