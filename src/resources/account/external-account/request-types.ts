import { zodTransform } from "@sideko-inc/stripe/core";
import {
  AccountExternalAccountCreateBodyBankAccountObj0,
  External$AccountExternalAccountCreateBodyBankAccountObj0,
  Schemas$AccountExternalAccountCreateBodyBankAccountObj0,
} from "@sideko-inc/stripe/types/account-external-account-create-body-bank-account-obj0";
import {
  AccountExternalAccountCreateBodyMetadata,
  External$AccountExternalAccountCreateBodyMetadata,
  Schemas$AccountExternalAccountCreateBodyMetadata,
} from "@sideko-inc/stripe/types/account-external-account-create-body-metadata";
import {
  AccountExternalAccountUpdateBodyDocuments,
  External$AccountExternalAccountUpdateBodyDocuments,
  Schemas$AccountExternalAccountUpdateBodyDocuments,
} from "@sideko-inc/stripe/types/account-external-account-update-body-documents";
import {
  AccountExternalAccountUpdateBodyMetadataObj0,
  External$AccountExternalAccountUpdateBodyMetadataObj0,
  Schemas$AccountExternalAccountUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/account-external-account-update-body-metadata-obj0";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data: Record<string, any>;
  account: string;
  /**
   * Unique identifier for the external account to be deleted.
   */
  id: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data: Record<string, any>;
  account: string;
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
    data: z.record(z.string(), z.any()),
    account: z.string(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
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
    data: z.record(z.string(), z.any()),
    account: z.string(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
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
  account: string;
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
   * Filter external accounts according to a particular object type.
   */
  object?: ("bank_account" | "card") | undefined;
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
  account: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  object?: ("bank_account" | "card") | undefined;
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
    account: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    object: z.enum(["bank_account", "card"]).optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      object: "object",
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
    account: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    object: z.enum(["bank_account", "card"]).optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      object: "object",
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
  account: string;
  /**
   * Unique identifier for the external account to be retrieved.
   */
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
  account: string;
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
    account: z.string(),
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
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
    account: z.string(),
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
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
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?:
    | (AccountExternalAccountCreateBodyBankAccountObj0 | string)
    | undefined;
  /**
   * When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
   */
  defaultForCurrency?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js) or a dictionary containing a user's external account details (with the options shown below). Please refer to full [documentation](https://stripe.com/docs/api/external_accounts) instead.
   */
  externalAccount?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: AccountExternalAccountCreateBodyMetadata | undefined;
  account: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  bank_account?:
    | (External$AccountExternalAccountCreateBodyBankAccountObj0 | string)
    | undefined;
  default_for_currency?: boolean | undefined;
  expand?: string[] | undefined;
  external_account?: string | undefined;
  metadata?: External$AccountExternalAccountCreateBodyMetadata | undefined;
  account: string;
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
    bank_account: z
      .union([
        Schemas$AccountExternalAccountCreateBodyBankAccountObj0.in,
        z.string(),
      ])
      .optional(),
    default_for_currency: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    external_account: z.string().optional(),
    metadata: Schemas$AccountExternalAccountCreateBodyMetadata.in.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account: "bankAccount",
      default_for_currency: "defaultForCurrency",
      expand: "expand",
      external_account: "externalAccount",
      metadata: "metadata",
      account: "account",
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
    bankAccount: z
      .union([
        Schemas$AccountExternalAccountCreateBodyBankAccountObj0.out,
        z.string(),
      ])
      .optional(),
    defaultForCurrency: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    externalAccount: z.string().optional(),
    metadata: Schemas$AccountExternalAccountCreateBodyMetadata.out.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccount: "bank_account",
      defaultForCurrency: "default_for_currency",
      expand: "expand",
      externalAccount: "external_account",
      metadata: "metadata",
      account: "account",
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
   * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
   */
  accountType?: ("checking" | "futsu" | "savings" | "toza") | undefined;
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
   * When set to true, this becomes the default external account for its currency.
   */
  defaultForCurrency?: boolean | undefined;
  /**
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: AccountExternalAccountUpdateBodyDocuments | undefined;
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
  metadata?:
    | (AccountExternalAccountUpdateBodyMetadataObj0 | string)
    | undefined;
  /**
   * Cardholder name.
   */
  name?: string | undefined;
  account: string;
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
  account_type?: ("checking" | "futsu" | "savings" | "toza") | undefined;
  address_city?: string | undefined;
  address_country?: string | undefined;
  address_line1?: string | undefined;
  address_line2?: string | undefined;
  address_state?: string | undefined;
  address_zip?: string | undefined;
  default_for_currency?: boolean | undefined;
  documents?: External$AccountExternalAccountUpdateBodyDocuments | undefined;
  exp_month?: string | undefined;
  exp_year?: string | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$AccountExternalAccountUpdateBodyMetadataObj0 | string)
    | undefined;
  name?: string | undefined;
  account: string;
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
    account_type: z.enum(["checking", "futsu", "savings", "toza"]).optional(),
    address_city: z.string().optional(),
    address_country: z.string().optional(),
    address_line1: z.string().optional(),
    address_line2: z.string().optional(),
    address_state: z.string().optional(),
    address_zip: z.string().optional(),
    default_for_currency: z.boolean().optional(),
    documents: Schemas$AccountExternalAccountUpdateBodyDocuments.in.optional(),
    exp_month: z.string().optional(),
    exp_year: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$AccountExternalAccountUpdateBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    name: z.string().optional(),
    account: z.string(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_name: "accountHolderName",
      account_holder_type: "accountHolderType",
      account_type: "accountType",
      address_city: "addressCity",
      address_country: "addressCountry",
      address_line1: "addressLine1",
      address_line2: "addressLine2",
      address_state: "addressState",
      address_zip: "addressZip",
      default_for_currency: "defaultForCurrency",
      documents: "documents",
      exp_month: "expMonth",
      exp_year: "expYear",
      expand: "expand",
      metadata: "metadata",
      name: "name",
      account: "account",
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
    accountType: z.enum(["checking", "futsu", "savings", "toza"]).optional(),
    addressCity: z.string().optional(),
    addressCountry: z.string().optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    addressState: z.string().optional(),
    addressZip: z.string().optional(),
    defaultForCurrency: z.boolean().optional(),
    documents: Schemas$AccountExternalAccountUpdateBodyDocuments.out.optional(),
    expMonth: z.string().optional(),
    expYear: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$AccountExternalAccountUpdateBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    name: z.string().optional(),
    account: z.string(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderName: "account_holder_name",
      accountHolderType: "account_holder_type",
      accountType: "account_type",
      addressCity: "address_city",
      addressCountry: "address_country",
      addressLine1: "address_line1",
      addressLine2: "address_line2",
      addressState: "address_state",
      addressZip: "address_zip",
      defaultForCurrency: "default_for_currency",
      documents: "documents",
      expMonth: "exp_month",
      expYear: "exp_year",
      expand: "expand",
      metadata: "metadata",
      name: "name",
      account: "account",
      id: "id",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
