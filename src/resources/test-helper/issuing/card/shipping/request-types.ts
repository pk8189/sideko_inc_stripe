import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DeliverRequest
 */
export type DeliverRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  card: string;
};

/**
 * @internal
 * DeliverRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeliverRequest = {
  expand?: string[] | undefined;
  card: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeliverRequest
 */
const SchemaIn$DeliverRequest: z.ZodType<
  DeliverRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeliverRequest
 */
const SchemaOut$DeliverRequest: z.ZodType<
  External$DeliverRequest, // output type of this zod object
  z.ZodTypeDef,
  DeliverRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      card: "card",
    });
  });

export const Schemas$DeliverRequest = {
  in: SchemaIn$DeliverRequest,
  out: SchemaOut$DeliverRequest,
};

/**
 * FailRequest
 */
export type FailRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  card: string;
};

/**
 * @internal
 * FailRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FailRequest = {
  expand?: string[] | undefined;
  card: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FailRequest
 */
const SchemaIn$FailRequest: z.ZodType<
  FailRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FailRequest
 */
const SchemaOut$FailRequest: z.ZodType<
  External$FailRequest, // output type of this zod object
  z.ZodTypeDef,
  FailRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      card: "card",
    });
  });

export const Schemas$FailRequest = {
  in: SchemaIn$FailRequest,
  out: SchemaOut$FailRequest,
};

/**
 * ReturnedRequest
 */
export type ReturnedRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  card: string;
};

/**
 * @internal
 * ReturnedRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReturnedRequest = {
  expand?: string[] | undefined;
  card: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReturnedRequest
 */
const SchemaIn$ReturnedRequest: z.ZodType<
  ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReturnedRequest
 */
const SchemaOut$ReturnedRequest: z.ZodType<
  External$ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  ReturnedRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      card: "card",
    });
  });

export const Schemas$ReturnedRequest = {
  in: SchemaIn$ReturnedRequest,
  out: SchemaOut$ReturnedRequest,
};

/**
 * ShipRequest
 */
export type ShipRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  card: string;
};

/**
 * @internal
 * ShipRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShipRequest = {
  expand?: string[] | undefined;
  card: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShipRequest
 */
const SchemaIn$ShipRequest: z.ZodType<
  ShipRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShipRequest
 */
const SchemaOut$ShipRequest: z.ZodType<
  External$ShipRequest, // output type of this zod object
  z.ZodTypeDef,
  ShipRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      card: "card",
    });
  });

export const Schemas$ShipRequest = {
  in: SchemaIn$ShipRequest,
  out: SchemaOut$ShipRequest,
};

/**
 * SubmitRequest
 */
export type SubmitRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  card: string;
};

/**
 * @internal
 * SubmitRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubmitRequest = {
  expand?: string[] | undefined;
  card: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubmitRequest
 */
const SchemaIn$SubmitRequest: z.ZodType<
  SubmitRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubmitRequest
 */
const SchemaOut$SubmitRequest: z.ZodType<
  External$SubmitRequest, // output type of this zod object
  z.ZodTypeDef,
  SubmitRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      card: "card",
    });
  });

export const Schemas$SubmitRequest = {
  in: SchemaIn$SubmitRequest,
  out: SchemaOut$SubmitRequest,
};
