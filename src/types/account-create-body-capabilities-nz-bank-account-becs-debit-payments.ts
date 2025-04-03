import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments
 */
export type AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments =
  {
    requested?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments: z.ZodType<
  AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments =
  {
    in: SchemaIn$AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments,
    out: SchemaOut$AccountCreateBodyCapabilitiesNzBankAccountBecsDebitPayments,
  };
