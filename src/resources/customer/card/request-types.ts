import { zodTransform } from "@sideko-inc/stripe/core";
import {
  CustomerCardCreateBodyBankAccountObj0,
  External$CustomerCardCreateBodyBankAccountObj0,
  Schemas$CustomerCardCreateBodyBankAccountObj0,
} from "@sideko-inc/stripe/types/customer-card-create-body-bank-account-obj0";
import {
  CustomerCardCreateBodyCardObj0,
  External$CustomerCardCreateBodyCardObj0,
  Schemas$CustomerCardCreateBodyCardObj0,
} from "@sideko-inc/stripe/types/customer-card-create-body-card-obj0";
import {
  CustomerCardCreateBodyMetadata,
  External$CustomerCardCreateBodyMetadata,
  Schemas$CustomerCardCreateBodyMetadata,
} from "@sideko-inc/stripe/types/customer-card-create-body-metadata";
import {
  CustomerCardUpdateBodyMetadataObj0,
  External$CustomerCardUpdateBodyMetadataObj0,
  Schemas$CustomerCardUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/customer-card-update-body-metadata-obj0";
import {
  CustomerCardUpdateBodyOwner,
  External$CustomerCardUpdateBodyOwner,
  Schemas$CustomerCardUpdateBodyOwner,
} from "@sideko-inc/stripe/types/customer-card-update-body-owner";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  customer: string;
  id: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  expand?: string[] | undefined;
  customer: string;
  id: string;
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
    customer: z.string(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      customer: "customer",
      id: "id",
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
    customer: z.string(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      customer: "customer",
      id: "id",
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
  customer: string;
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
  customer: string;
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
    customer: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
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
    customer: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
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
  customer: string;
  id: string;
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
  customer: string;
  id: string;
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
    customer: z.string(),
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
      id: "id",
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
    customer: z.string(),
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
      id: "id",
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
   * A token returned by [Stripe.js](https://stripe.com/docs/js) representing the user’s Alipay account details.
   */
  alipayAccount?: string | undefined;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: (CustomerCardCreateBodyBankAccountObj0 | string) | undefined;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: (CustomerCardCreateBodyCardObj0 | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: CustomerCardCreateBodyMetadata | undefined;
  /**
   * Please refer to full [documentation](https://stripe.com/docs/api) instead.
   */
  source?: string | undefined;
  customer: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  alipay_account?: string | undefined;
  bank_account?:
    | (External$CustomerCardCreateBodyBankAccountObj0 | string)
    | undefined;
  card?: (External$CustomerCardCreateBodyCardObj0 | string) | undefined;
  expand?: string[] | undefined;
  metadata?: External$CustomerCardCreateBodyMetadata | undefined;
  source?: string | undefined;
  customer: string;
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
    alipay_account: z.string().optional(),
    bank_account: z
      .union([Schemas$CustomerCardCreateBodyBankAccountObj0.in, z.string()])
      .optional(),
    card: z
      .union([Schemas$CustomerCardCreateBodyCardObj0.in, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$CustomerCardCreateBodyMetadata.in.optional(),
    source: z.string().optional(),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alipay_account: "alipayAccount",
      bank_account: "bankAccount",
      card: "card",
      expand: "expand",
      metadata: "metadata",
      source: "source",
      customer: "customer",
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
    alipayAccount: z.string().optional(),
    bankAccount: z
      .union([Schemas$CustomerCardCreateBodyBankAccountObj0.out, z.string()])
      .optional(),
    card: z
      .union([Schemas$CustomerCardCreateBodyCardObj0.out, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$CustomerCardCreateBodyMetadata.out.optional(),
    source: z.string().optional(),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alipayAccount: "alipay_account",
      bankAccount: "bank_account",
      card: "card",
      expand: "expand",
      metadata: "metadata",
      source: "source",
      customer: "customer",
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
   * The name of the person or business that owns the bank account.
   */
  accountHolderName?: string | undefined;
  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountHolderType?: ("company" | "individual") | undefined;
  /**
   * City/District/Suburb/Town/Village.
   */
  addressCity?: string | undefined;
  /**
   * Billing address country, if provided when creating card.
   */
  addressCountry?: string | undefined;
  /**
   * Address line 1 (Street address/PO Box/Company name).
   */
  addressLine1?: string | undefined;
  /**
   * Address line 2 (Apartment/Suite/Unit/Building).
   */
  addressLine2?: string | undefined;
  /**
   * State/County/Province/Region.
   */
  addressState?: string | undefined;
  /**
   * ZIP or postal code.
   */
  addressZip?: string | undefined;
  /**
   * Two digit number representing the card’s expiration month.
   */
  expMonth?: string | undefined;
  /**
   * Four digit number representing the card’s expiration year.
   */
  expYear?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CustomerCardUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Cardholder name.
   */
  name?: string | undefined;
  owner?: CustomerCardUpdateBodyOwner | undefined;
  customer: string;
  id: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  account_holder_name?: string | undefined;
  account_holder_type?: ("company" | "individual") | undefined;
  address_city?: string | undefined;
  address_country?: string | undefined;
  address_line1?: string | undefined;
  address_line2?: string | undefined;
  address_state?: string | undefined;
  address_zip?: string | undefined;
  exp_month?: string | undefined;
  exp_year?: string | undefined;
  expand?: string[] | undefined;
  metadata?: (External$CustomerCardUpdateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;
  owner?: External$CustomerCardUpdateBodyOwner | undefined;
  customer: string;
  id: string;
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
    account_holder_name: z.string().optional(),
    account_holder_type: z.enum(["company", "individual"]).optional(),
    address_city: z.string().optional(),
    address_country: z.string().optional(),
    address_line1: z.string().optional(),
    address_line2: z.string().optional(),
    address_state: z.string().optional(),
    address_zip: z.string().optional(),
    exp_month: z.string().optional(),
    exp_year: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$CustomerCardUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
    owner: Schemas$CustomerCardUpdateBodyOwner.in.optional(),
    customer: z.string(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_name: "accountHolderName",
      account_holder_type: "accountHolderType",
      address_city: "addressCity",
      address_country: "addressCountry",
      address_line1: "addressLine1",
      address_line2: "addressLine2",
      address_state: "addressState",
      address_zip: "addressZip",
      exp_month: "expMonth",
      exp_year: "expYear",
      expand: "expand",
      metadata: "metadata",
      name: "name",
      owner: "owner",
      customer: "customer",
      id: "id",
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
    accountHolderName: z.string().optional(),
    accountHolderType: z.enum(["company", "individual"]).optional(),
    addressCity: z.string().optional(),
    addressCountry: z.string().optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    addressState: z.string().optional(),
    addressZip: z.string().optional(),
    expMonth: z.string().optional(),
    expYear: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$CustomerCardUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
    owner: Schemas$CustomerCardUpdateBodyOwner.out.optional(),
    customer: z.string(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderName: "account_holder_name",
      accountHolderType: "account_holder_type",
      addressCity: "address_city",
      addressCountry: "address_country",
      addressLine1: "address_line1",
      addressLine2: "address_line2",
      addressState: "address_state",
      addressZip: "address_zip",
      expMonth: "exp_month",
      expYear: "exp_year",
      expand: "expand",
      metadata: "metadata",
      name: "name",
      owner: "owner",
      customer: "customer",
      id: "id",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
