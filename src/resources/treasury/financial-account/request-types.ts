import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TreasuryFinancialAccountCloseBodyForwardingSettings,
  Schemas$TreasuryFinancialAccountCloseBodyForwardingSettings,
  TreasuryFinancialAccountCloseBodyForwardingSettings,
} from "@sideko-inc/stripe/types/treasury-financial-account-close-body-forwarding-settings";
import {
  External$TreasuryFinancialAccountCreateBodyFeatures,
  Schemas$TreasuryFinancialAccountCreateBodyFeatures,
  TreasuryFinancialAccountCreateBodyFeatures,
} from "@sideko-inc/stripe/types/treasury-financial-account-create-body-features";
import {
  External$TreasuryFinancialAccountCreateBodyMetadata,
  Schemas$TreasuryFinancialAccountCreateBodyMetadata,
  TreasuryFinancialAccountCreateBodyMetadata,
} from "@sideko-inc/stripe/types/treasury-financial-account-create-body-metadata";
import {
  External$TreasuryFinancialAccountCreateBodyPlatformRestrictions,
  Schemas$TreasuryFinancialAccountCreateBodyPlatformRestrictions,
  TreasuryFinancialAccountCreateBodyPlatformRestrictions,
} from "@sideko-inc/stripe/types/treasury-financial-account-create-body-platform-restrictions";
import {
  External$TreasuryFinancialAccountListCreatedObj0,
  Schemas$TreasuryFinancialAccountListCreatedObj0,
  TreasuryFinancialAccountListCreatedObj0,
} from "@sideko-inc/stripe/types/treasury-financial-account-list-created-obj0";
import {
  External$TreasuryFinancialAccountUpdateBodyFeatures,
  Schemas$TreasuryFinancialAccountUpdateBodyFeatures,
  TreasuryFinancialAccountUpdateBodyFeatures,
} from "@sideko-inc/stripe/types/treasury-financial-account-update-body-features";
import {
  External$TreasuryFinancialAccountUpdateBodyForwardingSettings,
  Schemas$TreasuryFinancialAccountUpdateBodyForwardingSettings,
  TreasuryFinancialAccountUpdateBodyForwardingSettings,
} from "@sideko-inc/stripe/types/treasury-financial-account-update-body-forwarding-settings";
import {
  External$TreasuryFinancialAccountUpdateBodyMetadata,
  Schemas$TreasuryFinancialAccountUpdateBodyMetadata,
  TreasuryFinancialAccountUpdateBodyMetadata,
} from "@sideko-inc/stripe/types/treasury-financial-account-update-body-metadata";
import {
  External$TreasuryFinancialAccountUpdateBodyPlatformRestrictions,
  Schemas$TreasuryFinancialAccountUpdateBodyPlatformRestrictions,
  TreasuryFinancialAccountUpdateBodyPlatformRestrictions,
} from "@sideko-inc/stripe/types/treasury-financial-account-update-body-platform-restrictions";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * Only return FinancialAccounts that were created during the given date interval.
   */
  created?: (TreasuryFinancialAccountListCreatedObj0 | number) | undefined;
  /**
   * An object ID cursor for use in pagination.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit ranging from 1 to 100 (defaults to 10).
   */
  limit?: number | undefined;
  /**
   * An object ID cursor for use in pagination.
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
  created?:
    | (External$TreasuryFinancialAccountListCreatedObj0 | number)
    | undefined;
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
      .union([
        Schemas$TreasuryFinancialAccountListCreatedObj0.in,
        z.number().int(),
      ])
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
      .union([
        Schemas$TreasuryFinancialAccountListCreatedObj0.out,
        z.number().int(),
      ])
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
  financialAccount: string;
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
  financial_account: string;
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
    financial_account: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      financial_account: "financialAccount",
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
    financialAccount: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      financialAccount: "financial_account",
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
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Encodes whether a FinancialAccount has access to a particular feature. Stripe or the platform can control features via the requested field.
   */
  features?: TreasuryFinancialAccountCreateBodyFeatures | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryFinancialAccountCreateBodyMetadata | undefined;
  /**
   * The nickname for the FinancialAccount.
   */
  nickname?: (string | string) | undefined;
  /**
   * The set of functionalities that the platform can restrict on the FinancialAccount.
   */
  platformRestrictions?:
    | TreasuryFinancialAccountCreateBodyPlatformRestrictions
    | undefined;
  /**
   * The currencies the FinancialAccount can hold a balance in.
   */
  supportedCurrencies: string[];
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  expand?: string[] | undefined;
  features?: External$TreasuryFinancialAccountCreateBodyFeatures | undefined;
  metadata?: External$TreasuryFinancialAccountCreateBodyMetadata | undefined;
  nickname?: (string | string) | undefined;
  platform_restrictions?:
    | External$TreasuryFinancialAccountCreateBodyPlatformRestrictions
    | undefined;
  supported_currencies: string[];
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
    expand: z.array(z.string()).optional(),
    features: Schemas$TreasuryFinancialAccountCreateBodyFeatures.in.optional(),
    metadata: Schemas$TreasuryFinancialAccountCreateBodyMetadata.in.optional(),
    nickname: z.union([z.string(), z.string()]).optional(),
    platform_restrictions:
      Schemas$TreasuryFinancialAccountCreateBodyPlatformRestrictions.in.optional(),
    supported_currencies: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      metadata: "metadata",
      nickname: "nickname",
      platform_restrictions: "platformRestrictions",
      supported_currencies: "supportedCurrencies",
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
    expand: z.array(z.string()).optional(),
    features: Schemas$TreasuryFinancialAccountCreateBodyFeatures.out.optional(),
    metadata: Schemas$TreasuryFinancialAccountCreateBodyMetadata.out.optional(),
    nickname: z.union([z.string(), z.string()]).optional(),
    platformRestrictions:
      Schemas$TreasuryFinancialAccountCreateBodyPlatformRestrictions.out.optional(),
    supportedCurrencies: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      metadata: "metadata",
      nickname: "nickname",
      platformRestrictions: "platform_restrictions",
      supportedCurrencies: "supported_currencies",
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
   * Encodes whether a FinancialAccount has access to a particular feature, with a status enum and associated `status_details`. Stripe or the platform may control features via the requested field.
   */
  features?: TreasuryFinancialAccountUpdateBodyFeatures | undefined;
  /**
   * A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0
   */
  forwardingSettings?:
    | TreasuryFinancialAccountUpdateBodyForwardingSettings
    | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryFinancialAccountUpdateBodyMetadata | undefined;
  /**
   * The nickname for the FinancialAccount.
   */
  nickname?: (string | string) | undefined;
  /**
   * The set of functionalities that the platform can restrict on the FinancialAccount.
   */
  platformRestrictions?:
    | TreasuryFinancialAccountUpdateBodyPlatformRestrictions
    | undefined;
  financialAccount: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  features?: External$TreasuryFinancialAccountUpdateBodyFeatures | undefined;
  forwarding_settings?:
    | External$TreasuryFinancialAccountUpdateBodyForwardingSettings
    | undefined;
  metadata?: External$TreasuryFinancialAccountUpdateBodyMetadata | undefined;
  nickname?: (string | string) | undefined;
  platform_restrictions?:
    | External$TreasuryFinancialAccountUpdateBodyPlatformRestrictions
    | undefined;
  financial_account: string;
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
    features: Schemas$TreasuryFinancialAccountUpdateBodyFeatures.in.optional(),
    forwarding_settings:
      Schemas$TreasuryFinancialAccountUpdateBodyForwardingSettings.in.optional(),
    metadata: Schemas$TreasuryFinancialAccountUpdateBodyMetadata.in.optional(),
    nickname: z.union([z.string(), z.string()]).optional(),
    platform_restrictions:
      Schemas$TreasuryFinancialAccountUpdateBodyPlatformRestrictions.in.optional(),
    financial_account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      forwarding_settings: "forwardingSettings",
      metadata: "metadata",
      nickname: "nickname",
      platform_restrictions: "platformRestrictions",
      financial_account: "financialAccount",
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
    features: Schemas$TreasuryFinancialAccountUpdateBodyFeatures.out.optional(),
    forwardingSettings:
      Schemas$TreasuryFinancialAccountUpdateBodyForwardingSettings.out.optional(),
    metadata: Schemas$TreasuryFinancialAccountUpdateBodyMetadata.out.optional(),
    nickname: z.union([z.string(), z.string()]).optional(),
    platformRestrictions:
      Schemas$TreasuryFinancialAccountUpdateBodyPlatformRestrictions.out.optional(),
    financialAccount: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      forwardingSettings: "forwarding_settings",
      metadata: "metadata",
      nickname: "nickname",
      platformRestrictions: "platform_restrictions",
      financialAccount: "financial_account",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CloseRequest
 */
export type CloseRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0
   */
  forwardingSettings?:
    | TreasuryFinancialAccountCloseBodyForwardingSettings
    | undefined;
  financialAccount: string;
};

/**
 * @internal
 * CloseRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CloseRequest = {
  expand?: string[] | undefined;
  forwarding_settings?:
    | External$TreasuryFinancialAccountCloseBodyForwardingSettings
    | undefined;
  financial_account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CloseRequest
 */
const SchemaIn$CloseRequest: z.ZodType<
  CloseRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    forwarding_settings:
      Schemas$TreasuryFinancialAccountCloseBodyForwardingSettings.in.optional(),
    financial_account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      forwarding_settings: "forwardingSettings",
      financial_account: "financialAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CloseRequest
 */
const SchemaOut$CloseRequest: z.ZodType<
  External$CloseRequest, // output type of this zod object
  z.ZodTypeDef,
  CloseRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    forwardingSettings:
      Schemas$TreasuryFinancialAccountCloseBodyForwardingSettings.out.optional(),
    financialAccount: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      forwardingSettings: "forwarding_settings",
      financialAccount: "financial_account",
    });
  });

export const Schemas$CloseRequest = {
  in: SchemaIn$CloseRequest,
  out: SchemaOut$CloseRequest,
};
