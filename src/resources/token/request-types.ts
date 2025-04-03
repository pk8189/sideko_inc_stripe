import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TokenCreateBodyAccount,
  Schemas$TokenCreateBodyAccount,
  TokenCreateBodyAccount,
} from "@sideko-inc/stripe/types/token-create-body-account";
import {
  External$TokenCreateBodyBankAccount,
  Schemas$TokenCreateBodyBankAccount,
  TokenCreateBodyBankAccount,
} from "@sideko-inc/stripe/types/token-create-body-bank-account";
import {
  External$TokenCreateBodyCardObj0,
  Schemas$TokenCreateBodyCardObj0,
  TokenCreateBodyCardObj0,
} from "@sideko-inc/stripe/types/token-create-body-card-obj0";
import {
  External$TokenCreateBodyCvcUpdate,
  Schemas$TokenCreateBodyCvcUpdate,
  TokenCreateBodyCvcUpdate,
} from "@sideko-inc/stripe/types/token-create-body-cvc-update";
import {
  External$TokenCreateBodyPerson,
  Schemas$TokenCreateBodyPerson,
  TokenCreateBodyPerson,
} from "@sideko-inc/stripe/types/token-create-body-person";
import {
  External$TokenCreateBodyPii,
  Schemas$TokenCreateBodyPii,
  TokenCreateBodyPii,
} from "@sideko-inc/stripe/types/token-create-body-pii";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  data: Record<string, any>;
  token: string;
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
  token: string;
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
    token: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      token: "token",
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
    token: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      token: "token",
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
   * Information for the account this token represents.
   */
  account?: TokenCreateBodyAccount | undefined;
  /**
   * The bank account this token will represent.
   */
  bankAccount?: TokenCreateBodyBankAccount | undefined;
  /**
   * The card this token will represent. If you also pass in a customer, the card must be the ID of a card belonging to the customer. Otherwise, if you do not pass in a customer, this is a dictionary containing a user's credit card details, with the options described below.
   */
  card?: (TokenCreateBodyCardObj0 | string) | undefined;
  /**
   * Create a token for the customer, which is owned by the application's account. You can only use this with an [OAuth access token](https://stripe.com/docs/connect/standard-accounts) or [Stripe-Account header](https://stripe.com/docs/connect/authentication). Learn more about [cloning saved payment methods](https://stripe.com/docs/connect/cloning-saved-payment-methods).
   */
  customer?: string | undefined;
  /**
   * The updated CVC value this token represents.
   */
  cvcUpdate?: TokenCreateBodyCvcUpdate | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Information for the person this token represents.
   */
  person?: TokenCreateBodyPerson | undefined;
  /**
   * The PII this token represents.
   */
  pii?: TokenCreateBodyPii | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  account?: External$TokenCreateBodyAccount | undefined;
  bank_account?: External$TokenCreateBodyBankAccount | undefined;
  card?: (External$TokenCreateBodyCardObj0 | string) | undefined;
  customer?: string | undefined;
  cvc_update?: External$TokenCreateBodyCvcUpdate | undefined;
  expand?: string[] | undefined;
  person?: External$TokenCreateBodyPerson | undefined;
  pii?: External$TokenCreateBodyPii | undefined;
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
    account: Schemas$TokenCreateBodyAccount.in.optional(),
    bank_account: Schemas$TokenCreateBodyBankAccount.in.optional(),
    card: z.union([Schemas$TokenCreateBodyCardObj0.in, z.string()]).optional(),
    customer: z.string().optional(),
    cvc_update: Schemas$TokenCreateBodyCvcUpdate.in.optional(),
    expand: z.array(z.string()).optional(),
    person: Schemas$TokenCreateBodyPerson.in.optional(),
    pii: Schemas$TokenCreateBodyPii.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      bank_account: "bankAccount",
      card: "card",
      customer: "customer",
      cvc_update: "cvcUpdate",
      expand: "expand",
      person: "person",
      pii: "pii",
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
    account: Schemas$TokenCreateBodyAccount.out.optional(),
    bankAccount: Schemas$TokenCreateBodyBankAccount.out.optional(),
    card: z.union([Schemas$TokenCreateBodyCardObj0.out, z.string()]).optional(),
    customer: z.string().optional(),
    cvcUpdate: Schemas$TokenCreateBodyCvcUpdate.out.optional(),
    expand: z.array(z.string()).optional(),
    person: Schemas$TokenCreateBodyPerson.out.optional(),
    pii: Schemas$TokenCreateBodyPii.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      bankAccount: "bank_account",
      card: "card",
      customer: "customer",
      cvcUpdate: "cvc_update",
      expand: "expand",
      person: "person",
      pii: "pii",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
