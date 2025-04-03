import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IssuingTransactionListCreatedObj0,
  IssuingTransactionListCreatedObj0,
  Schemas$IssuingTransactionListCreatedObj0,
} from "@sideko-inc/stripe/types/issuing-transaction-list-created-obj0";
import {
  External$IssuingTransactionUpdateBodyMetadataObj0,
  IssuingTransactionUpdateBodyMetadataObj0,
  Schemas$IssuingTransactionUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/issuing-transaction-update-body-metadata-obj0";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * Only return transactions that belong to the given card.
   */
  card?: string | undefined;
  /**
   * Only return transactions that belong to the given cardholder.
   */
  cardholder?: string | undefined;
  /**
   * Only return transactions that were created during the given date interval.
   */
  created?: (IssuingTransactionListCreatedObj0 | number) | undefined;
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
   * Only return transactions that have the given type. One of `capture` or `refund`.
   */
  type?: ("capture" | "refund") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  data: Record<string, any>;
  card?: string | undefined;
  cardholder?: string | undefined;
  created?: (External$IssuingTransactionListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  type?: ("capture" | "refund") | undefined;
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
    card: z.string().optional(),
    cardholder: z.string().optional(),
    created: z
      .union([Schemas$IssuingTransactionListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    type: z.enum(["capture", "refund"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
      cardholder: "cardholder",
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      type: "type",
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
    card: z.string().optional(),
    cardholder: z.string().optional(),
    created: z
      .union([Schemas$IssuingTransactionListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    type: z.enum(["capture", "refund"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
      cardholder: "cardholder",
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      type: "type",
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
  transaction: string;
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
  transaction: string;
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
    transaction: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      transaction: "transaction",
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
    transaction: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      transaction: "transaction",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
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
  metadata?: (IssuingTransactionUpdateBodyMetadataObj0 | string) | undefined;
  transaction: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  metadata?:
    | (External$IssuingTransactionUpdateBodyMetadataObj0 | string)
    | undefined;
  transaction: string;
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
      .union([Schemas$IssuingTransactionUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    transaction: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      transaction: "transaction",
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
      .union([Schemas$IssuingTransactionUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    transaction: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      transaction: "transaction",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
