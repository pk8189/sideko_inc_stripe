import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
 */
export type CreditNotePreview1ShippingCost = {
  shippingRate?: string | undefined;
};

/**
 * @internal
 * CreditNotePreview1ShippingCost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotePreview1ShippingCost = {
  shipping_rate?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotePreview1ShippingCost
 */
const SchemaIn$CreditNotePreview1ShippingCost: z.ZodType<
  CreditNotePreview1ShippingCost, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    shipping_rate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_rate: "shippingRate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotePreview1ShippingCost
 */
const SchemaOut$CreditNotePreview1ShippingCost: z.ZodType<
  External$CreditNotePreview1ShippingCost, // output type of this zod object
  z.ZodTypeDef,
  CreditNotePreview1ShippingCost // the object to be transformed
> = z
  .object({
    shippingRate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingRate: "shipping_rate",
    });
  });

export const Schemas$CreditNotePreview1ShippingCost = {
  in: SchemaIn$CreditNotePreview1ShippingCost,
  out: SchemaOut$CreditNotePreview1ShippingCost,
};
