import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNotePreview1LinesItemTaxAmountsArr0Item
 */
export type CreditNotePreview1LinesItemTaxAmountsArr0Item = {
  amount: number;
  taxRate: string;
  taxableAmount: number;
};

/**
 * @internal
 * CreditNotePreview1LinesItemTaxAmountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotePreview1LinesItemTaxAmountsArr0Item = {
  amount: number;
  tax_rate: string;
  taxable_amount: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotePreview1LinesItemTaxAmountsArr0Item
 */
const SchemaIn$CreditNotePreview1LinesItemTaxAmountsArr0Item: z.ZodType<
  CreditNotePreview1LinesItemTaxAmountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    tax_rate: z.string(),
    taxable_amount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      tax_rate: "taxRate",
      taxable_amount: "taxableAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotePreview1LinesItemTaxAmountsArr0Item
 */
const SchemaOut$CreditNotePreview1LinesItemTaxAmountsArr0Item: z.ZodType<
  External$CreditNotePreview1LinesItemTaxAmountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  CreditNotePreview1LinesItemTaxAmountsArr0Item // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    taxRate: z.string(),
    taxableAmount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      taxRate: "tax_rate",
      taxableAmount: "taxable_amount",
    });
  });

export const Schemas$CreditNotePreview1LinesItemTaxAmountsArr0Item = {
  in: SchemaIn$CreditNotePreview1LinesItemTaxAmountsArr0Item,
  out: SchemaOut$CreditNotePreview1LinesItemTaxAmountsArr0Item,
};
