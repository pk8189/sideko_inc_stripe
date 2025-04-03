import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IssuingAuthorizationApproveBodyMetadataObj0,
  IssuingAuthorizationApproveBodyMetadataObj0,
  Schemas$IssuingAuthorizationApproveBodyMetadataObj0,
} from "@sideko-inc/stripe/types/issuing-authorization-approve-body-metadata-obj0";
import {
  External$IssuingAuthorizationDeclineBodyMetadataObj0,
  IssuingAuthorizationDeclineBodyMetadataObj0,
  Schemas$IssuingAuthorizationDeclineBodyMetadataObj0,
} from "@sideko-inc/stripe/types/issuing-authorization-decline-body-metadata-obj0";
import {
  External$IssuingAuthorizationListCreatedObj0,
  IssuingAuthorizationListCreatedObj0,
  Schemas$IssuingAuthorizationListCreatedObj0,
} from "@sideko-inc/stripe/types/issuing-authorization-list-created-obj0";
import {
  External$IssuingAuthorizationUpdateBodyMetadataObj0,
  IssuingAuthorizationUpdateBodyMetadataObj0,
  Schemas$IssuingAuthorizationUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/issuing-authorization-update-body-metadata-obj0";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * Only return authorizations that belong to the given card.
   */
  card?: string | undefined;
  /**
   * Only return authorizations that belong to the given cardholder.
   */
  cardholder?: string | undefined;
  /**
   * Only return authorizations that were created during the given date interval.
   */
  created?: (IssuingAuthorizationListCreatedObj0 | number) | undefined;
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
   * Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
   */
  status?: ("closed" | "expired" | "pending" | "reversed") | undefined;
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
  created?: (External$IssuingAuthorizationListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: ("closed" | "expired" | "pending" | "reversed") | undefined;
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
      .union([Schemas$IssuingAuthorizationListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["closed", "expired", "pending", "reversed"]).optional(),
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
    card: z.string().optional(),
    cardholder: z.string().optional(),
    created: z
      .union([
        Schemas$IssuingAuthorizationListCreatedObj0.out,
        z.number().int(),
      ])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["closed", "expired", "pending", "reversed"]).optional(),
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
  authorization: string;
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
  authorization: string;
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
    authorization: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
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
    authorization: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
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
  metadata?: (IssuingAuthorizationUpdateBodyMetadataObj0 | string) | undefined;
  authorization: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  metadata?:
    | (External$IssuingAuthorizationUpdateBodyMetadataObj0 | string)
    | undefined;
  authorization: string;
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
      .union([
        Schemas$IssuingAuthorizationUpdateBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      authorization: "authorization",
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
      .union([
        Schemas$IssuingAuthorizationUpdateBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      authorization: "authorization",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * ApproveRequest
 */
export type ApproveRequest = {
  /**
   * If the authorization's `pending_request.is_amount_controllable` property is `true`, you may provide this value to control how much to hold for the authorization. Must be positive (use [`decline`](https://stripe.com/docs/api/issuing/authorizations/decline) to decline an authorization request).
   */
  amount?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (IssuingAuthorizationApproveBodyMetadataObj0 | string) | undefined;
  authorization: string;
};

/**
 * @internal
 * ApproveRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApproveRequest = {
  amount?: number | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$IssuingAuthorizationApproveBodyMetadataObj0 | string)
    | undefined;
  authorization: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApproveRequest
 */
const SchemaIn$ApproveRequest: z.ZodType<
  ApproveRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$IssuingAuthorizationApproveBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      metadata: "metadata",
      authorization: "authorization",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApproveRequest
 */
const SchemaOut$ApproveRequest: z.ZodType<
  External$ApproveRequest, // output type of this zod object
  z.ZodTypeDef,
  ApproveRequest // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$IssuingAuthorizationApproveBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      metadata: "metadata",
      authorization: "authorization",
    });
  });

export const Schemas$ApproveRequest = {
  in: SchemaIn$ApproveRequest,
  out: SchemaOut$ApproveRequest,
};

/**
 * DeclineRequest
 */
export type DeclineRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (IssuingAuthorizationDeclineBodyMetadataObj0 | string) | undefined;
  authorization: string;
};

/**
 * @internal
 * DeclineRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeclineRequest = {
  expand?: string[] | undefined;
  metadata?:
    | (External$IssuingAuthorizationDeclineBodyMetadataObj0 | string)
    | undefined;
  authorization: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeclineRequest
 */
const SchemaIn$DeclineRequest: z.ZodType<
  DeclineRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$IssuingAuthorizationDeclineBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      authorization: "authorization",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeclineRequest
 */
const SchemaOut$DeclineRequest: z.ZodType<
  External$DeclineRequest, // output type of this zod object
  z.ZodTypeDef,
  DeclineRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$IssuingAuthorizationDeclineBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      authorization: "authorization",
    });
  });

export const Schemas$DeclineRequest = {
  in: SchemaIn$DeclineRequest,
  out: SchemaOut$DeclineRequest,
};
