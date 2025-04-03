import { zodTransform } from "@sideko-inc/stripe/core";
import {
  AccountCreateBodyBankAccountObj0,
  External$AccountCreateBodyBankAccountObj0,
  Schemas$AccountCreateBodyBankAccountObj0,
} from "@sideko-inc/stripe/types/account-create-body-bank-account-obj0";
import {
  AccountCreateBodyBusinessProfile,
  External$AccountCreateBodyBusinessProfile,
  Schemas$AccountCreateBodyBusinessProfile,
} from "@sideko-inc/stripe/types/account-create-body-business-profile";
import {
  AccountCreateBodyCapabilities,
  External$AccountCreateBodyCapabilities,
  Schemas$AccountCreateBodyCapabilities,
} from "@sideko-inc/stripe/types/account-create-body-capabilities";
import {
  AccountCreateBodyCompany,
  External$AccountCreateBodyCompany,
  Schemas$AccountCreateBodyCompany,
} from "@sideko-inc/stripe/types/account-create-body-company";
import {
  AccountCreateBodyController,
  External$AccountCreateBodyController,
  Schemas$AccountCreateBodyController,
} from "@sideko-inc/stripe/types/account-create-body-controller";
import {
  AccountCreateBodyDocuments,
  External$AccountCreateBodyDocuments,
  Schemas$AccountCreateBodyDocuments,
} from "@sideko-inc/stripe/types/account-create-body-documents";
import {
  AccountCreateBodyGroups,
  External$AccountCreateBodyGroups,
  Schemas$AccountCreateBodyGroups,
} from "@sideko-inc/stripe/types/account-create-body-groups";
import {
  AccountCreateBodyIndividual,
  External$AccountCreateBodyIndividual,
  Schemas$AccountCreateBodyIndividual,
} from "@sideko-inc/stripe/types/account-create-body-individual";
import {
  AccountCreateBodyMetadataObj0,
  External$AccountCreateBodyMetadataObj0,
  Schemas$AccountCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/account-create-body-metadata-obj0";
import {
  AccountCreateBodySettings,
  External$AccountCreateBodySettings,
  Schemas$AccountCreateBodySettings,
} from "@sideko-inc/stripe/types/account-create-body-settings";
import {
  AccountCreateBodyTosAcceptance,
  External$AccountCreateBodyTosAcceptance,
  Schemas$AccountCreateBodyTosAcceptance,
} from "@sideko-inc/stripe/types/account-create-body-tos-acceptance";
import {
  AccountListCreatedObj0,
  External$AccountListCreatedObj0,
  Schemas$AccountListCreatedObj0,
} from "@sideko-inc/stripe/types/account-list-created-obj0";
import {
  AccountUpdateBodyBusinessProfile,
  External$AccountUpdateBodyBusinessProfile,
  Schemas$AccountUpdateBodyBusinessProfile,
} from "@sideko-inc/stripe/types/account-update-body-business-profile";
import {
  AccountUpdateBodyCapabilities,
  External$AccountUpdateBodyCapabilities,
  Schemas$AccountUpdateBodyCapabilities,
} from "@sideko-inc/stripe/types/account-update-body-capabilities";
import {
  AccountUpdateBodyCompany,
  External$AccountUpdateBodyCompany,
  Schemas$AccountUpdateBodyCompany,
} from "@sideko-inc/stripe/types/account-update-body-company";
import {
  AccountUpdateBodyDocuments,
  External$AccountUpdateBodyDocuments,
  Schemas$AccountUpdateBodyDocuments,
} from "@sideko-inc/stripe/types/account-update-body-documents";
import {
  AccountUpdateBodyGroups,
  External$AccountUpdateBodyGroups,
  Schemas$AccountUpdateBodyGroups,
} from "@sideko-inc/stripe/types/account-update-body-groups";
import {
  AccountUpdateBodyIndividual,
  External$AccountUpdateBodyIndividual,
  Schemas$AccountUpdateBodyIndividual,
} from "@sideko-inc/stripe/types/account-update-body-individual";
import {
  AccountUpdateBodyMetadataObj0,
  External$AccountUpdateBodyMetadataObj0,
  Schemas$AccountUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/account-update-body-metadata-obj0";
import {
  AccountUpdateBodySettings,
  External$AccountUpdateBodySettings,
  Schemas$AccountUpdateBodySettings,
} from "@sideko-inc/stripe/types/account-update-body-settings";
import {
  AccountUpdateBodyTosAcceptance,
  External$AccountUpdateBodyTosAcceptance,
  Schemas$AccountUpdateBodyTosAcceptance,
} from "@sideko-inc/stripe/types/account-update-body-tos-acceptance";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data: Record<string, any>;
  account: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data: Record<string, any>;
  account: string;
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * DetailsRequest
 */
export type DetailsRequest = {
  data: Record<string, any>;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * DetailsRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DetailsRequest = {
  data: Record<string, any>;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DetailsRequest
 */
const SchemaIn$DetailsRequest: z.ZodType<
  DetailsRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DetailsRequest
 */
const SchemaOut$DetailsRequest: z.ZodType<
  External$DetailsRequest, // output type of this zod object
  z.ZodTypeDef,
  DetailsRequest // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      expand: "expand",
    });
  });

export const Schemas$DetailsRequest = {
  in: SchemaIn$DetailsRequest,
  out: SchemaOut$DetailsRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * Only return connected accounts that were created during the given date interval.
   */
  created?: (AccountListCreatedObj0 | number) | undefined;
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
  created?: (External$AccountListCreatedObj0 | number) | undefined;
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
    created: z
      .union([Schemas$AccountListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      created: "created",
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
    created: z
      .union([Schemas$AccountListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      created: "created",
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
  account: string;
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
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
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
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
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
   * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
   */
  accountToken?: string | undefined;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: (AccountCreateBodyBankAccountObj0 | string) | undefined;
  /**
   * Business information about the account.
   */
  businessProfile?: AccountCreateBodyBusinessProfile | undefined;
  /**
   * The business type. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  businessType?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | undefined;
  /**
   * Each key of the dictionary represents a capability, and each capability
   * maps to its settings (for example, whether it has been requested or not). Each
   * capability is inactive until you have provided its specific
   * requirements and Stripe has verified them. An account might have some
   * of its requested capabilities be active and some be inactive.
   *
   * Required when [account.controller.stripe_dashboard.type](/api/accounts/create#create_account-controller-dashboard-type)
   * is `none`, which includes Custom accounts.
   */
  capabilities?: AccountCreateBodyCapabilities | undefined;
  /**
   * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  company?: AccountCreateBodyCompany | undefined;
  /**
   * A hash of configuration describing the account controller's attributes.
   */
  controller?: AccountCreateBodyController | undefined;
  /**
   * The country in which the account holder resides, or in which the business is legally established. This should be an ISO 3166-1 alpha-2 country code. For example, if you are in the United States and the business for which you're creating an account is legally represented in Canada, you would use `CA` as the country for the account being created. Available countries include [Stripe's global markets](https://stripe.com/global) as well as countries where [cross-border payouts](https://stripe.com/docs/connect/cross-border-payouts) are supported.
   */
  country?: string | undefined;
  /**
   * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://docs.stripe.com/payouts).
   */
  defaultCurrency?: string | undefined;
  /**
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: AccountCreateBodyDocuments | undefined;
  /**
   * The email address of the account holder. This is only to make the account easier to identify to you. If [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, Stripe doesn't email the account without your consent.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A card or bank account to attach to the account for receiving [payouts](/connect/bank-debit-card-payouts) (you won’t be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](/js), or a dictionary, as documented in the `external_account` parameter for [bank account](/api#account_create_bank_account) creation. <br><br>By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the [bank account](/api#account_create_bank_account) or [card creation](/api#account_create_card) APIs. After you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  externalAccount?: string | undefined;
  /**
   * A hash of account group type to tokens. These are account groups this account should be added to.
   */
  groups?: AccountCreateBodyGroups | undefined;
  /**
   * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  individual?: AccountCreateBodyIndividual | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (AccountCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Options for customizing how the account functions within Stripe.
   */
  settings?: AccountCreateBodySettings | undefined;
  /**
   * Details on the account's acceptance of the [Stripe Services Agreement](/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
   */
  tosAcceptance?: AccountCreateBodyTosAcceptance | undefined;
  /**
   * The type of Stripe account to create. May be one of `custom`, `express` or `standard`.
   */
  type?: ("custom" | "express" | "standard") | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  account_token?: string | undefined;
  bank_account?:
    | (External$AccountCreateBodyBankAccountObj0 | string)
    | undefined;
  business_profile?: External$AccountCreateBodyBusinessProfile | undefined;
  business_type?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | undefined;
  capabilities?: External$AccountCreateBodyCapabilities | undefined;
  company?: External$AccountCreateBodyCompany | undefined;
  controller?: External$AccountCreateBodyController | undefined;
  country?: string | undefined;
  default_currency?: string | undefined;
  documents?: External$AccountCreateBodyDocuments | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  external_account?: string | undefined;
  groups?: External$AccountCreateBodyGroups | undefined;
  individual?: External$AccountCreateBodyIndividual | undefined;
  metadata?: (External$AccountCreateBodyMetadataObj0 | string) | undefined;
  settings?: External$AccountCreateBodySettings | undefined;
  tos_acceptance?: External$AccountCreateBodyTosAcceptance | undefined;
  type?: ("custom" | "express" | "standard") | undefined;
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
    account_token: z.string().optional(),
    bank_account: z
      .union([Schemas$AccountCreateBodyBankAccountObj0.in, z.string()])
      .optional(),
    business_profile: Schemas$AccountCreateBodyBusinessProfile.in.optional(),
    business_type: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .optional(),
    capabilities: Schemas$AccountCreateBodyCapabilities.in.optional(),
    company: Schemas$AccountCreateBodyCompany.in.optional(),
    controller: Schemas$AccountCreateBodyController.in.optional(),
    country: z.string().optional(),
    default_currency: z.string().optional(),
    documents: Schemas$AccountCreateBodyDocuments.in.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    external_account: z.string().optional(),
    groups: Schemas$AccountCreateBodyGroups.in.optional(),
    individual: Schemas$AccountCreateBodyIndividual.in.optional(),
    metadata: z
      .union([Schemas$AccountCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    settings: Schemas$AccountCreateBodySettings.in.optional(),
    tos_acceptance: Schemas$AccountCreateBodyTosAcceptance.in.optional(),
    type: z.enum(["custom", "express", "standard"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_token: "accountToken",
      bank_account: "bankAccount",
      business_profile: "businessProfile",
      business_type: "businessType",
      capabilities: "capabilities",
      company: "company",
      controller: "controller",
      country: "country",
      default_currency: "defaultCurrency",
      documents: "documents",
      email: "email",
      expand: "expand",
      external_account: "externalAccount",
      groups: "groups",
      individual: "individual",
      metadata: "metadata",
      settings: "settings",
      tos_acceptance: "tosAcceptance",
      type: "type",
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
    accountToken: z.string().optional(),
    bankAccount: z
      .union([Schemas$AccountCreateBodyBankAccountObj0.out, z.string()])
      .optional(),
    businessProfile: Schemas$AccountCreateBodyBusinessProfile.out.optional(),
    businessType: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .optional(),
    capabilities: Schemas$AccountCreateBodyCapabilities.out.optional(),
    company: Schemas$AccountCreateBodyCompany.out.optional(),
    controller: Schemas$AccountCreateBodyController.out.optional(),
    country: z.string().optional(),
    defaultCurrency: z.string().optional(),
    documents: Schemas$AccountCreateBodyDocuments.out.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    externalAccount: z.string().optional(),
    groups: Schemas$AccountCreateBodyGroups.out.optional(),
    individual: Schemas$AccountCreateBodyIndividual.out.optional(),
    metadata: z
      .union([Schemas$AccountCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    settings: Schemas$AccountCreateBodySettings.out.optional(),
    tosAcceptance: Schemas$AccountCreateBodyTosAcceptance.out.optional(),
    type: z.enum(["custom", "express", "standard"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountToken: "account_token",
      bankAccount: "bank_account",
      businessProfile: "business_profile",
      businessType: "business_type",
      capabilities: "capabilities",
      company: "company",
      controller: "controller",
      country: "country",
      defaultCurrency: "default_currency",
      documents: "documents",
      email: "email",
      expand: "expand",
      externalAccount: "external_account",
      groups: "groups",
      individual: "individual",
      metadata: "metadata",
      settings: "settings",
      tosAcceptance: "tos_acceptance",
      type: "type",
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
   * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
   */
  accountToken?: string | undefined;
  /**
   * Business information about the account.
   */
  businessProfile?: AccountUpdateBodyBusinessProfile | undefined;
  /**
   * The business type. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  businessType?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | undefined;
  /**
   * Each key of the dictionary represents a capability, and each capability
   * maps to its settings (for example, whether it has been requested or not). Each
   * capability is inactive until you have provided its specific
   * requirements and Stripe has verified them. An account might have some
   * of its requested capabilities be active and some be inactive.
   *
   * Required when [account.controller.stripe_dashboard.type](/api/accounts/create#create_account-controller-dashboard-type)
   * is `none`, which includes Custom accounts.
   */
  capabilities?: AccountUpdateBodyCapabilities | undefined;
  /**
   * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  company?: AccountUpdateBodyCompany | undefined;
  /**
   * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://docs.stripe.com/payouts).
   */
  defaultCurrency?: string | undefined;
  /**
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: AccountUpdateBodyDocuments | undefined;
  /**
   * The email address of the account holder. This is only to make the account easier to identify to you. If [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, Stripe doesn't email the account without your consent.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A card or bank account to attach to the account for receiving [payouts](/connect/bank-debit-card-payouts) (you won’t be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](/js), or a dictionary, as documented in the `external_account` parameter for [bank account](/api#account_create_bank_account) creation. <br><br>By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the [bank account](/api#account_create_bank_account) or [card creation](/api#account_create_card) APIs. After you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  externalAccount?: string | undefined;
  /**
   * A hash of account group type to tokens. These are account groups this account should be added to.
   */
  groups?: AccountUpdateBodyGroups | undefined;
  /**
   * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  individual?: AccountUpdateBodyIndividual | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (AccountUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Options for customizing how the account functions within Stripe.
   */
  settings?: AccountUpdateBodySettings | undefined;
  /**
   * Details on the account's acceptance of the [Stripe Services Agreement](/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
   */
  tosAcceptance?: AccountUpdateBodyTosAcceptance | undefined;
  account: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  account_token?: string | undefined;
  business_profile?: External$AccountUpdateBodyBusinessProfile | undefined;
  business_type?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | undefined;
  capabilities?: External$AccountUpdateBodyCapabilities | undefined;
  company?: External$AccountUpdateBodyCompany | undefined;
  default_currency?: string | undefined;
  documents?: External$AccountUpdateBodyDocuments | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  external_account?: string | undefined;
  groups?: External$AccountUpdateBodyGroups | undefined;
  individual?: External$AccountUpdateBodyIndividual | undefined;
  metadata?: (External$AccountUpdateBodyMetadataObj0 | string) | undefined;
  settings?: External$AccountUpdateBodySettings | undefined;
  tos_acceptance?: External$AccountUpdateBodyTosAcceptance | undefined;
  account: string;
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
    account_token: z.string().optional(),
    business_profile: Schemas$AccountUpdateBodyBusinessProfile.in.optional(),
    business_type: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .optional(),
    capabilities: Schemas$AccountUpdateBodyCapabilities.in.optional(),
    company: Schemas$AccountUpdateBodyCompany.in.optional(),
    default_currency: z.string().optional(),
    documents: Schemas$AccountUpdateBodyDocuments.in.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    external_account: z.string().optional(),
    groups: Schemas$AccountUpdateBodyGroups.in.optional(),
    individual: Schemas$AccountUpdateBodyIndividual.in.optional(),
    metadata: z
      .union([Schemas$AccountUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    settings: Schemas$AccountUpdateBodySettings.in.optional(),
    tos_acceptance: Schemas$AccountUpdateBodyTosAcceptance.in.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_token: "accountToken",
      business_profile: "businessProfile",
      business_type: "businessType",
      capabilities: "capabilities",
      company: "company",
      default_currency: "defaultCurrency",
      documents: "documents",
      email: "email",
      expand: "expand",
      external_account: "externalAccount",
      groups: "groups",
      individual: "individual",
      metadata: "metadata",
      settings: "settings",
      tos_acceptance: "tosAcceptance",
      account: "account",
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
    accountToken: z.string().optional(),
    businessProfile: Schemas$AccountUpdateBodyBusinessProfile.out.optional(),
    businessType: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .optional(),
    capabilities: Schemas$AccountUpdateBodyCapabilities.out.optional(),
    company: Schemas$AccountUpdateBodyCompany.out.optional(),
    defaultCurrency: z.string().optional(),
    documents: Schemas$AccountUpdateBodyDocuments.out.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    externalAccount: z.string().optional(),
    groups: Schemas$AccountUpdateBodyGroups.out.optional(),
    individual: Schemas$AccountUpdateBodyIndividual.out.optional(),
    metadata: z
      .union([Schemas$AccountUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    settings: Schemas$AccountUpdateBodySettings.out.optional(),
    tosAcceptance: Schemas$AccountUpdateBodyTosAcceptance.out.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountToken: "account_token",
      businessProfile: "business_profile",
      businessType: "business_type",
      capabilities: "capabilities",
      company: "company",
      defaultCurrency: "default_currency",
      documents: "documents",
      email: "email",
      expand: "expand",
      externalAccount: "external_account",
      groups: "groups",
      individual: "individual",
      metadata: "metadata",
      settings: "settings",
      tosAcceptance: "tos_acceptance",
      account: "account",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CreateLoginLinkRequest
 */
export type CreateLoginLinkRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  account: string;
};

/**
 * @internal
 * CreateLoginLinkRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateLoginLinkRequest = {
  expand?: string[] | undefined;
  account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateLoginLinkRequest
 */
const SchemaIn$CreateLoginLinkRequest: z.ZodType<
  CreateLoginLinkRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateLoginLinkRequest
 */
const SchemaOut$CreateLoginLinkRequest: z.ZodType<
  External$CreateLoginLinkRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateLoginLinkRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      account: "account",
    });
  });

export const Schemas$CreateLoginLinkRequest = {
  in: SchemaIn$CreateLoginLinkRequest,
  out: SchemaOut$CreateLoginLinkRequest,
};

/**
 * RejectRequest
 */
export type RejectRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.
   */
  reason: string;
  account: string;
};

/**
 * @internal
 * RejectRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RejectRequest = {
  expand?: string[] | undefined;
  reason: string;
  account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RejectRequest
 */
const SchemaIn$RejectRequest: z.ZodType<
  RejectRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    reason: z.string(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      reason: "reason",
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RejectRequest
 */
const SchemaOut$RejectRequest: z.ZodType<
  External$RejectRequest, // output type of this zod object
  z.ZodTypeDef,
  RejectRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    reason: z.string(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      reason: "reason",
      account: "account",
    });
  });

export const Schemas$RejectRequest = {
  in: SchemaIn$RejectRequest,
  out: SchemaOut$RejectRequest,
};
