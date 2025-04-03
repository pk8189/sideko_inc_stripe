import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments
 */
export type AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments =
  {
    requested?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments =
  {
    in: SchemaIn$AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments,
    out: SchemaOut$AccountUpdateBodyCapabilitiesNzBankAccountBecsDebitPayments,
  };
