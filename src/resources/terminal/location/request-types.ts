import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TerminalLocationCreateBodyAddress,
  Schemas$TerminalLocationCreateBodyAddress,
  TerminalLocationCreateBodyAddress,
} from "@sideko-inc/stripe/types/terminal-location-create-body-address";
import {
  External$TerminalLocationCreateBodyMetadataObj0,
  Schemas$TerminalLocationCreateBodyMetadataObj0,
  TerminalLocationCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/terminal-location-create-body-metadata-obj0";
import {
  External$TerminalLocationUpdateBodyAddress,
  Schemas$TerminalLocationUpdateBodyAddress,
  TerminalLocationUpdateBodyAddress,
} from "@sideko-inc/stripe/types/terminal-location-update-body-address";
import {
  External$TerminalLocationUpdateBodyMetadataObj0,
  Schemas$TerminalLocationUpdateBodyMetadataObj0,
  TerminalLocationUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/terminal-location-update-body-metadata-obj0";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data: Record<string, any>;
  location: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data: Record<string, any>;
  location: string;
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
    location: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      location: "location",
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
    location: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      location: "location",
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
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
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
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
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
  location: string;
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
  location: string;
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
    location: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      location: "location",
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
    location: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      location: "location",
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
   * The full address of the location.
   */
  address: TerminalLocationCreateBodyAddress;
  /**
   * The ID of a configuration that will be used to customize all readers in this location.
   */
  configurationOverrides?: string | undefined;
  /**
   * A name for the location. Maximum length is 1000 characters.
   */
  displayName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TerminalLocationCreateBodyMetadataObj0 | string) | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  address: External$TerminalLocationCreateBodyAddress;
  configuration_overrides?: string | undefined;
  display_name: string;
  expand?: string[] | undefined;
  metadata?:
    | (External$TerminalLocationCreateBodyMetadataObj0 | string)
    | undefined;
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
    address: Schemas$TerminalLocationCreateBodyAddress.in,
    configuration_overrides: z.string().optional(),
    display_name: z.string(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TerminalLocationCreateBodyMetadataObj0.in, z.string()])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      configuration_overrides: "configurationOverrides",
      display_name: "displayName",
      expand: "expand",
      metadata: "metadata",
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
    address: Schemas$TerminalLocationCreateBodyAddress.out,
    configurationOverrides: z.string().optional(),
    displayName: z.string(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TerminalLocationCreateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      configurationOverrides: "configuration_overrides",
      displayName: "display_name",
      expand: "expand",
      metadata: "metadata",
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
   * The full address of the location. You can't change the location's `country`. If you need to modify the `country` field, create a new `Location` object and re-register any existing readers to that location.
   */
  address?: TerminalLocationUpdateBodyAddress | undefined;
  /**
   * The ID of a configuration that will be used to customize all readers in this location.
   */
  configurationOverrides?: (string | string) | undefined;
  /**
   * A name for the location.
   */
  displayName?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TerminalLocationUpdateBodyMetadataObj0 | string) | undefined;
  location: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  address?: External$TerminalLocationUpdateBodyAddress | undefined;
  configuration_overrides?: (string | string) | undefined;
  display_name?: string | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$TerminalLocationUpdateBodyMetadataObj0 | string)
    | undefined;
  location: string;
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
    address: Schemas$TerminalLocationUpdateBodyAddress.in.optional(),
    configuration_overrides: z.union([z.string(), z.string()]).optional(),
    display_name: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TerminalLocationUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    location: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      configuration_overrides: "configurationOverrides",
      display_name: "displayName",
      expand: "expand",
      metadata: "metadata",
      location: "location",
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
    address: Schemas$TerminalLocationUpdateBodyAddress.out.optional(),
    configurationOverrides: z.union([z.string(), z.string()]).optional(),
    displayName: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TerminalLocationUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    location: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      configurationOverrides: "configuration_overrides",
      displayName: "display_name",
      expand: "expand",
      metadata: "metadata",
      location: "location",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
