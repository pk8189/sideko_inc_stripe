import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$SourceCreateBodyMandate,
  Schemas$SourceCreateBodyMandate,
  SourceCreateBodyMandate,
} from "@sideko-inc/stripe/types/source-create-body-mandate";
import {
  External$SourceCreateBodyMetadata,
  Schemas$SourceCreateBodyMetadata,
  SourceCreateBodyMetadata,
} from "@sideko-inc/stripe/types/source-create-body-metadata";
import {
  External$SourceCreateBodyOwner,
  Schemas$SourceCreateBodyOwner,
  SourceCreateBodyOwner,
} from "@sideko-inc/stripe/types/source-create-body-owner";
import {
  External$SourceCreateBodyReceiver,
  Schemas$SourceCreateBodyReceiver,
  SourceCreateBodyReceiver,
} from "@sideko-inc/stripe/types/source-create-body-receiver";
import {
  External$SourceCreateBodyRedirect,
  Schemas$SourceCreateBodyRedirect,
  SourceCreateBodyRedirect,
} from "@sideko-inc/stripe/types/source-create-body-redirect";
import {
  External$SourceCreateBodySourceOrder,
  Schemas$SourceCreateBodySourceOrder,
  SourceCreateBodySourceOrder,
} from "@sideko-inc/stripe/types/source-create-body-source-order";
import {
  External$SourceUpdateBodyMandate,
  Schemas$SourceUpdateBodyMandate,
  SourceUpdateBodyMandate,
} from "@sideko-inc/stripe/types/source-update-body-mandate";
import {
  External$SourceUpdateBodyMetadataObj0,
  Schemas$SourceUpdateBodyMetadataObj0,
  SourceUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/source-update-body-metadata-obj0";
import {
  External$SourceUpdateBodyOwner,
  Schemas$SourceUpdateBodyOwner,
  SourceUpdateBodyOwner,
} from "@sideko-inc/stripe/types/source-update-body-owner";
import {
  External$SourceUpdateBodySourceOrder,
  Schemas$SourceUpdateBodySourceOrder,
  SourceUpdateBodySourceOrder,
} from "@sideko-inc/stripe/types/source-update-body-source-order";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  data: Record<string, any>;
  source: string;
  /**
   * The client secret of the source. Required if a publishable key is used to retrieve the source.
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
  source: string;
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
    source: z.string(),
    client_secret: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      source: "source",
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
    source: z.string(),
    clientSecret: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      source: "source",
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
   * Amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources. Not supported for `receiver` type sources, where charge amount may not be specified until funds land.
   */
  amount?: number | undefined;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready.
   */
  currency?: string | undefined;
  /**
   * The `Customer` to whom the original source is attached to. Must be set when the original source is not a `Source` (e.g., `Card`).
   */
  customer?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The authentication `flow` of the source to create. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. It is generally inferred unless a type supports multiple flows.
   */
  flow?: ("code_verification" | "none" | "receiver" | "redirect") | undefined;
  /**
   * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
   */
  mandate?: SourceCreateBodyMandate | undefined;
  metadata?: SourceCreateBodyMetadata | undefined;
  /**
   * The source to share.
   */
  originalSource?: string | undefined;
  /**
   * Information about the owner of the payment instrument that may be used or required by particular source types.
   */
  owner?: SourceCreateBodyOwner | undefined;
  /**
   * Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).
   */
  receiver?: SourceCreateBodyReceiver | undefined;
  /**
   * Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).
   */
  redirect?: SourceCreateBodyRedirect | undefined;
  /**
   * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
   */
  sourceOrder?: SourceCreateBodySourceOrder | undefined;
  /**
   * An arbitrary string to be displayed on your customer's statement. As an example, if your website is `RunClub` and the item you're charging for is a race ticket, you may want to specify a `statement_descriptor` of `RunClub 5K race ticket.` While many payment types will display this information, some may not display it at all.
   */
  statementDescriptor?: string | undefined;
  /**
   * An optional token used to create the source. When passed, token properties will override source parameters.
   */
  token?: string | undefined;
  /**
   * The `type` of the source to create. Required unless `customer` and `original_source` are specified (see the [Cloning card Sources](https://stripe.com/docs/sources/connect#cloning-card-sources) guide)
   */
  type?: string | undefined;
  usage?: ("reusable" | "single_use") | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  amount?: number | undefined;
  currency?: string | undefined;
  customer?: string | undefined;
  expand?: string[] | undefined;
  flow?: ("code_verification" | "none" | "receiver" | "redirect") | undefined;
  mandate?: External$SourceCreateBodyMandate | undefined;
  metadata?: External$SourceCreateBodyMetadata | undefined;
  original_source?: string | undefined;
  owner?: External$SourceCreateBodyOwner | undefined;
  receiver?: External$SourceCreateBodyReceiver | undefined;
  redirect?: External$SourceCreateBodyRedirect | undefined;
  source_order?: External$SourceCreateBodySourceOrder | undefined;
  statement_descriptor?: string | undefined;
  token?: string | undefined;
  type?: string | undefined;
  usage?: ("reusable" | "single_use") | undefined;
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
    currency: z.string().optional(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flow: z
      .enum(["code_verification", "none", "receiver", "redirect"])
      .optional(),
    mandate: Schemas$SourceCreateBodyMandate.in.optional(),
    metadata: Schemas$SourceCreateBodyMetadata.in.optional(),
    original_source: z.string().optional(),
    owner: Schemas$SourceCreateBodyOwner.in.optional(),
    receiver: Schemas$SourceCreateBodyReceiver.in.optional(),
    redirect: Schemas$SourceCreateBodyRedirect.in.optional(),
    source_order: Schemas$SourceCreateBodySourceOrder.in.optional(),
    statement_descriptor: z.string().optional(),
    token: z.string().optional(),
    type: z.string().optional(),
    usage: z.enum(["reusable", "single_use"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      expand: "expand",
      flow: "flow",
      mandate: "mandate",
      metadata: "metadata",
      original_source: "originalSource",
      owner: "owner",
      receiver: "receiver",
      redirect: "redirect",
      source_order: "sourceOrder",
      statement_descriptor: "statementDescriptor",
      token: "token",
      type: "type",
      usage: "usage",
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
    currency: z.string().optional(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flow: z
      .enum(["code_verification", "none", "receiver", "redirect"])
      .optional(),
    mandate: Schemas$SourceCreateBodyMandate.out.optional(),
    metadata: Schemas$SourceCreateBodyMetadata.out.optional(),
    originalSource: z.string().optional(),
    owner: Schemas$SourceCreateBodyOwner.out.optional(),
    receiver: Schemas$SourceCreateBodyReceiver.out.optional(),
    redirect: Schemas$SourceCreateBodyRedirect.out.optional(),
    sourceOrder: Schemas$SourceCreateBodySourceOrder.out.optional(),
    statementDescriptor: z.string().optional(),
    token: z.string().optional(),
    type: z.string().optional(),
    usage: z.enum(["reusable", "single_use"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      expand: "expand",
      flow: "flow",
      mandate: "mandate",
      metadata: "metadata",
      originalSource: "original_source",
      owner: "owner",
      receiver: "receiver",
      redirect: "redirect",
      sourceOrder: "source_order",
      statementDescriptor: "statement_descriptor",
      token: "token",
      type: "type",
      usage: "usage",
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
   * Amount associated with the source.
   */
  amount?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
   */
  mandate?: SourceUpdateBodyMandate | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (SourceUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Information about the owner of the payment instrument that may be used or required by particular source types.
   */
  owner?: SourceUpdateBodyOwner | undefined;
  /**
   * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
   */
  sourceOrder?: SourceUpdateBodySourceOrder | undefined;
  source: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  amount?: number | undefined;
  expand?: string[] | undefined;
  mandate?: External$SourceUpdateBodyMandate | undefined;
  metadata?: (External$SourceUpdateBodyMetadataObj0 | string) | undefined;
  owner?: External$SourceUpdateBodyOwner | undefined;
  source_order?: External$SourceUpdateBodySourceOrder | undefined;
  source: string;
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
    amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    mandate: Schemas$SourceUpdateBodyMandate.in.optional(),
    metadata: z
      .union([Schemas$SourceUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    owner: Schemas$SourceUpdateBodyOwner.in.optional(),
    source_order: Schemas$SourceUpdateBodySourceOrder.in.optional(),
    source: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      mandate: "mandate",
      metadata: "metadata",
      owner: "owner",
      source_order: "sourceOrder",
      source: "source",
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
    amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    mandate: Schemas$SourceUpdateBodyMandate.out.optional(),
    metadata: z
      .union([Schemas$SourceUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    owner: Schemas$SourceUpdateBodyOwner.out.optional(),
    sourceOrder: Schemas$SourceUpdateBodySourceOrder.out.optional(),
    source: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      mandate: "mandate",
      metadata: "metadata",
      owner: "owner",
      sourceOrder: "source_order",
      source: "source",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * VerifyRequest
 */
export type VerifyRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The values needed to verify the source.
   */
  values: string[];
  source: string;
};

/**
 * @internal
 * VerifyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VerifyRequest = {
  expand?: string[] | undefined;
  values: string[];
  source: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VerifyRequest
 */
const SchemaIn$VerifyRequest: z.ZodType<
  VerifyRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    values: z.array(z.string()),
    source: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      values: "values",
      source: "source",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VerifyRequest
 */
const SchemaOut$VerifyRequest: z.ZodType<
  External$VerifyRequest, // output type of this zod object
  z.ZodTypeDef,
  VerifyRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    values: z.array(z.string()),
    source: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      values: "values",
      source: "source",
    });
  });

export const Schemas$VerifyRequest = {
  in: SchemaIn$VerifyRequest,
  out: SchemaOut$VerifyRequest,
};
