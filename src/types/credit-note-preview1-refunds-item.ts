import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNotePreview1RefundsItem
 */
export type CreditNotePreview1RefundsItem = {
  amountRefunded?: number | undefined;
  refund?: string | undefined;
};

/**
 * @internal
 * CreditNotePreview1RefundsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotePreview1RefundsItem = {
  amount_refunded?: number | undefined;
  refund?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotePreview1RefundsItem
 */
const SchemaIn$CreditNotePreview1RefundsItem: z.ZodType<
  CreditNotePreview1RefundsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_refunded: z.number().int().optional(),
    refund: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_refunded: "amountRefunded",
      refund: "refund",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotePreview1RefundsItem
 */
const SchemaOut$CreditNotePreview1RefundsItem: z.ZodType<
  External$CreditNotePreview1RefundsItem, // output type of this zod object
  z.ZodTypeDef,
  CreditNotePreview1RefundsItem // the object to be transformed
> = z
  .object({
    amountRefunded: z.number().int().optional(),
    refund: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountRefunded: "amount_refunded",
      refund: "refund",
    });
  });

export const Schemas$CreditNotePreview1RefundsItem = {
  in: SchemaIn$CreditNotePreview1RefundsItem,
  out: SchemaOut$CreditNotePreview1RefundsItem,
};
