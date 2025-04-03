import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  key: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  expand?: string[] | undefined;
  key: string;
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
    expand: z.array(z.string()).optional(),
    key: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      key: "key",
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
    expand: z.array(z.string()).optional(),
    key: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      key: "key",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * The ID of the Customer you'd like to modify using the resulting ephemeral key.
   */
  customer?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The ID of the Issuing Card you'd like to access using the resulting ephemeral key.
   */
  issuingCard?: string | undefined;
  /**
   * A single-use token, created by Stripe.js, used for creating ephemeral keys for Issuing Cards without exchanging sensitive information.
   */
  nonce?: string | undefined;
  /**
   * The ID of the Identity VerificationSession you'd like to access using the resulting ephemeral key
   */
  verificationSession?: string | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  customer?: string | undefined;
  expand?: string[] | undefined;
  issuing_card?: string | undefined;
  nonce?: string | undefined;
  verification_session?: string | undefined;
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
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    issuing_card: z.string().optional(),
    nonce: z.string().optional(),
    verification_session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      expand: "expand",
      issuing_card: "issuingCard",
      nonce: "nonce",
      verification_session: "verificationSession",
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
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    issuingCard: z.string().optional(),
    nonce: z.string().optional(),
    verificationSession: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      expand: "expand",
      issuingCard: "issuing_card",
      nonce: "nonce",
      verificationSession: "verification_session",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
