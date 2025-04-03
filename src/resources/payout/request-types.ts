import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$PayoutCreateBodyMetadata,
  PayoutCreateBodyMetadata,
  Schemas$PayoutCreateBodyMetadata,
} from "@sideko-inc/stripe/types/payout-create-body-metadata";
import {
  External$PayoutListArrivalDateObj0,
  PayoutListArrivalDateObj0,
  Schemas$PayoutListArrivalDateObj0,
} from "@sideko-inc/stripe/types/payout-list-arrival-date-obj0";
import {
  External$PayoutListCreatedObj0,
  PayoutListCreatedObj0,
  Schemas$PayoutListCreatedObj0,
} from "@sideko-inc/stripe/types/payout-list-created-obj0";
import {
  External$PayoutReverseBodyMetadata,
  PayoutReverseBodyMetadata,
  Schemas$PayoutReverseBodyMetadata,
} from "@sideko-inc/stripe/types/payout-reverse-body-metadata";
import {
  External$PayoutUpdateBodyMetadataObj0,
  PayoutUpdateBodyMetadataObj0,
  Schemas$PayoutUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/payout-update-body-metadata-obj0";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * Only return payouts that are expected to arrive during the given date interval.
   */
  arrivalDate?: (PayoutListArrivalDateObj0 | number) | undefined;
  /**
   * Only return payouts that were created during the given date interval.
   */
  created?: (PayoutListCreatedObj0 | number) | undefined;
  /**
   * The ID of an external account - only return payouts sent to this external account.
   */
  destination?: string | undefined;
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
   * Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`.
   */
  status?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  data: Record<string, any>;
  arrival_date?: (External$PayoutListArrivalDateObj0 | number) | undefined;
  created?: (External$PayoutListCreatedObj0 | number) | undefined;
  destination?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: string | undefined;
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
    arrival_date: z
      .union([Schemas$PayoutListArrivalDateObj0.in, z.number().int()])
      .optional(),
    created: z
      .union([Schemas$PayoutListCreatedObj0.in, z.number().int()])
      .optional(),
    destination: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      arrival_date: "arrivalDate",
      created: "created",
      destination: "destination",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
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
    arrivalDate: z
      .union([Schemas$PayoutListArrivalDateObj0.out, z.number().int()])
      .optional(),
    created: z
      .union([Schemas$PayoutListCreatedObj0.out, z.number().int()])
      .optional(),
    destination: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      arrivalDate: "arrival_date",
      created: "created",
      destination: "destination",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
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
  payout: string;
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
  payout: string;
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
    payout: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      payout: "payout",
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
    payout: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      payout: "payout",
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
   * A positive integer in cents representing how much to payout.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * The ID of a bank account or a card to send the payout to. If you don't provide a destination, we use the default external account for the specified currency.
   */
  destination?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PayoutCreateBodyMetadata | undefined;
  /**
   * The method used to send this payout, which is `standard` or `instant`. We support `instant` for payouts to debit cards and bank accounts in certain countries. Learn more about [bank support for Instant Payouts](https://stripe.com/docs/payouts/instant-payouts-banks).
   */
  method?: ("instant" | "standard") | undefined;
  /**
   * The balance type of your Stripe balance to draw this payout from. Balances for different payment sources are kept separately. You can find the amounts with the Balances API. One of `bank_account`, `card`, or `fpx`.
   */
  sourceType?: ("bank_account" | "card" | "fpx") | undefined;
  /**
   * A string that displays on the recipient's bank or card statement (up to 22 characters). A `statement_descriptor` that's longer than 22 characters return an error. Most banks truncate this information and display it inconsistently. Some banks might not display it at all.
   */
  statementDescriptor?: string | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  amount: number;
  currency: string;
  description?: string | undefined;
  destination?: string | undefined;
  expand?: string[] | undefined;
  metadata?: External$PayoutCreateBodyMetadata | undefined;
  method?: ("instant" | "standard") | undefined;
  source_type?: ("bank_account" | "card" | "fpx") | undefined;
  statement_descriptor?: string | undefined;
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
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    destination: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$PayoutCreateBodyMetadata.in.optional(),
    method: z.enum(["instant", "standard"]).optional(),
    source_type: z.enum(["bank_account", "card", "fpx"]).optional(),
    statement_descriptor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      destination: "destination",
      expand: "expand",
      metadata: "metadata",
      method: "method",
      source_type: "sourceType",
      statement_descriptor: "statementDescriptor",
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
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    destination: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$PayoutCreateBodyMetadata.out.optional(),
    method: z.enum(["instant", "standard"]).optional(),
    sourceType: z.enum(["bank_account", "card", "fpx"]).optional(),
    statementDescriptor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      destination: "destination",
      expand: "expand",
      metadata: "metadata",
      method: "method",
      sourceType: "source_type",
      statementDescriptor: "statement_descriptor",
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
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (PayoutUpdateBodyMetadataObj0 | string) | undefined;
  payout: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  metadata?: (External$PayoutUpdateBodyMetadataObj0 | string) | undefined;
  payout: string;
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
      .union([Schemas$PayoutUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    payout: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      payout: "payout",
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
      .union([Schemas$PayoutUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    payout: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      payout: "payout",
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
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  payout: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  expand?: string[] | undefined;
  payout: string;
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
    payout: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      payout: "payout",
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
    payout: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      payout: "payout",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * ReverseRequest
 */
export type ReverseRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PayoutReverseBodyMetadata | undefined;
  payout: string;
};

/**
 * @internal
 * ReverseRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReverseRequest = {
  expand?: string[] | undefined;
  metadata?: External$PayoutReverseBodyMetadata | undefined;
  payout: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReverseRequest
 */
const SchemaIn$ReverseRequest: z.ZodType<
  ReverseRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: Schemas$PayoutReverseBodyMetadata.in.optional(),
    payout: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      payout: "payout",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReverseRequest
 */
const SchemaOut$ReverseRequest: z.ZodType<
  External$ReverseRequest, // output type of this zod object
  z.ZodTypeDef,
  ReverseRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: Schemas$PayoutReverseBodyMetadata.out.optional(),
    payout: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      payout: "payout",
    });
  });

export const Schemas$ReverseRequest = {
  in: SchemaIn$ReverseRequest,
  out: SchemaOut$ReverseRequest,
};
