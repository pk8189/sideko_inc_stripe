import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IdentityVerificationSessionCreateBodyMetadata,
  IdentityVerificationSessionCreateBodyMetadata,
  Schemas$IdentityVerificationSessionCreateBodyMetadata,
} from "@sideko-inc/stripe/types/identity-verification-session-create-body-metadata";
import {
  External$IdentityVerificationSessionCreateBodyOptions,
  IdentityVerificationSessionCreateBodyOptions,
  Schemas$IdentityVerificationSessionCreateBodyOptions,
} from "@sideko-inc/stripe/types/identity-verification-session-create-body-options";
import {
  External$IdentityVerificationSessionCreateBodyProvidedDetails,
  IdentityVerificationSessionCreateBodyProvidedDetails,
  Schemas$IdentityVerificationSessionCreateBodyProvidedDetails,
} from "@sideko-inc/stripe/types/identity-verification-session-create-body-provided-details";
import {
  External$IdentityVerificationSessionListCreatedObj0,
  IdentityVerificationSessionListCreatedObj0,
  Schemas$IdentityVerificationSessionListCreatedObj0,
} from "@sideko-inc/stripe/types/identity-verification-session-list-created-obj0";
import {
  External$IdentityVerificationSessionUpdateBodyMetadata,
  IdentityVerificationSessionUpdateBodyMetadata,
  Schemas$IdentityVerificationSessionUpdateBodyMetadata,
} from "@sideko-inc/stripe/types/identity-verification-session-update-body-metadata";
import {
  External$IdentityVerificationSessionUpdateBodyOptions,
  IdentityVerificationSessionUpdateBodyOptions,
  Schemas$IdentityVerificationSessionUpdateBodyOptions,
} from "@sideko-inc/stripe/types/identity-verification-session-update-body-options";
import {
  External$IdentityVerificationSessionUpdateBodyProvidedDetails,
  IdentityVerificationSessionUpdateBodyProvidedDetails,
  Schemas$IdentityVerificationSessionUpdateBodyProvidedDetails,
} from "@sideko-inc/stripe/types/identity-verification-session-update-body-provided-details";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
   */
  clientReferenceId?: string | undefined;
  /**
   * Only return VerificationSessions that were created during the given date interval.
   */
  created?: (IdentityVerificationSessionListCreatedObj0 | number) | undefined;
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
  relatedCustomer?: string | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return VerificationSessions with this status. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
   */
  status?:
    | ("canceled" | "processing" | "requires_input" | "verified")
    | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  data: Record<string, any>;
  client_reference_id?: string | undefined;
  created?:
    | (External$IdentityVerificationSessionListCreatedObj0 | number)
    | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  related_customer?: string | undefined;
  starting_after?: string | undefined;
  status?:
    | ("canceled" | "processing" | "requires_input" | "verified")
    | undefined;
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
    client_reference_id: z.string().optional(),
    created: z
      .union([
        Schemas$IdentityVerificationSessionListCreatedObj0.in,
        z.number().int(),
      ])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    related_customer: z.string().optional(),
    starting_after: z.string().optional(),
    status: z
      .enum(["canceled", "processing", "requires_input", "verified"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      client_reference_id: "clientReferenceId",
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      related_customer: "relatedCustomer",
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
    clientReferenceId: z.string().optional(),
    created: z
      .union([
        Schemas$IdentityVerificationSessionListCreatedObj0.out,
        z.number().int(),
      ])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    relatedCustomer: z.string().optional(),
    startingAfter: z.string().optional(),
    status: z
      .enum(["canceled", "processing", "requires_input", "verified"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      clientReferenceId: "client_reference_id",
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      relatedCustomer: "related_customer",
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
  session: string;
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
  session: string;
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
    session: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
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
    session: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
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
   * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
   */
  clientReferenceId?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IdentityVerificationSessionCreateBodyMetadata | undefined;
  /**
   * A set of options for the session’s verification checks.
   */
  options?: IdentityVerificationSessionCreateBodyOptions | undefined;
  /**
   * Details provided about the user being verified. These details may be shown to the user.
   */
  providedDetails?:
    | IdentityVerificationSessionCreateBodyProvidedDetails
    | undefined;
  /**
   * Customer ID
   */
  relatedCustomer?: string | undefined;
  /**
   * The URL that the user will be redirected to upon completing the verification flow.
   */
  returnUrl?: string | undefined;
  /**
   * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed. You must provide a `type` if not passing `verification_flow`.
   */
  type?: ("document" | "id_number") | undefined;
  /**
   * The ID of a verification flow from the Dashboard. See https://docs.stripe.com/identity/verification-flows.
   */
  verificationFlow?: string | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  client_reference_id?: string | undefined;
  expand?: string[] | undefined;
  metadata?: External$IdentityVerificationSessionCreateBodyMetadata | undefined;
  options?: External$IdentityVerificationSessionCreateBodyOptions | undefined;
  provided_details?:
    | External$IdentityVerificationSessionCreateBodyProvidedDetails
    | undefined;
  related_customer?: string | undefined;
  return_url?: string | undefined;
  type?: ("document" | "id_number") | undefined;
  verification_flow?: string | undefined;
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
    client_reference_id: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$IdentityVerificationSessionCreateBodyMetadata.in.optional(),
    options: Schemas$IdentityVerificationSessionCreateBodyOptions.in.optional(),
    provided_details:
      Schemas$IdentityVerificationSessionCreateBodyProvidedDetails.in.optional(),
    related_customer: z.string().optional(),
    return_url: z.string().optional(),
    type: z.enum(["document", "id_number"]).optional(),
    verification_flow: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      client_reference_id: "clientReferenceId",
      expand: "expand",
      metadata: "metadata",
      options: "options",
      provided_details: "providedDetails",
      related_customer: "relatedCustomer",
      return_url: "returnUrl",
      type: "type",
      verification_flow: "verificationFlow",
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
    clientReferenceId: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$IdentityVerificationSessionCreateBodyMetadata.out.optional(),
    options:
      Schemas$IdentityVerificationSessionCreateBodyOptions.out.optional(),
    providedDetails:
      Schemas$IdentityVerificationSessionCreateBodyProvidedDetails.out.optional(),
    relatedCustomer: z.string().optional(),
    returnUrl: z.string().optional(),
    type: z.enum(["document", "id_number"]).optional(),
    verificationFlow: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientReferenceId: "client_reference_id",
      expand: "expand",
      metadata: "metadata",
      options: "options",
      providedDetails: "provided_details",
      relatedCustomer: "related_customer",
      returnUrl: "return_url",
      type: "type",
      verificationFlow: "verification_flow",
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
  metadata?: IdentityVerificationSessionUpdateBodyMetadata | undefined;
  /**
   * A set of options for the session’s verification checks.
   */
  options?: IdentityVerificationSessionUpdateBodyOptions | undefined;
  /**
   * Details provided about the user being verified. These details may be shown to the user.
   */
  providedDetails?:
    | IdentityVerificationSessionUpdateBodyProvidedDetails
    | undefined;
  /**
   * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
   */
  type?: ("document" | "id_number") | undefined;
  session: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  metadata?: External$IdentityVerificationSessionUpdateBodyMetadata | undefined;
  options?: External$IdentityVerificationSessionUpdateBodyOptions | undefined;
  provided_details?:
    | External$IdentityVerificationSessionUpdateBodyProvidedDetails
    | undefined;
  type?: ("document" | "id_number") | undefined;
  session: string;
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
    metadata:
      Schemas$IdentityVerificationSessionUpdateBodyMetadata.in.optional(),
    options: Schemas$IdentityVerificationSessionUpdateBodyOptions.in.optional(),
    provided_details:
      Schemas$IdentityVerificationSessionUpdateBodyProvidedDetails.in.optional(),
    type: z.enum(["document", "id_number"]).optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      options: "options",
      provided_details: "providedDetails",
      type: "type",
      session: "session",
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
    metadata:
      Schemas$IdentityVerificationSessionUpdateBodyMetadata.out.optional(),
    options:
      Schemas$IdentityVerificationSessionUpdateBodyOptions.out.optional(),
    providedDetails:
      Schemas$IdentityVerificationSessionUpdateBodyProvidedDetails.out.optional(),
    type: z.enum(["document", "id_number"]).optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      options: "options",
      providedDetails: "provided_details",
      type: "type",
      session: "session",
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
  session: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  expand?: string[] | undefined;
  session: string;
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
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      session: "session",
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
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      session: "session",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * RedactRequest
 */
export type RedactRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  session: string;
};

/**
 * @internal
 * RedactRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RedactRequest = {
  expand?: string[] | undefined;
  session: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RedactRequest
 */
const SchemaIn$RedactRequest: z.ZodType<
  RedactRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      session: "session",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RedactRequest
 */
const SchemaOut$RedactRequest: z.ZodType<
  External$RedactRequest, // output type of this zod object
  z.ZodTypeDef,
  RedactRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      session: "session",
    });
  });

export const Schemas$RedactRequest = {
  in: SchemaIn$RedactRequest,
  out: SchemaOut$RedactRequest,
};
