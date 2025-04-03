import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
export type CreditNotePreview1Metadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CreditNotePreview1Metadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotePreview1Metadata = {
  [additionalProperty: string]:
    | External$CreditNotePreview1Metadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotePreview1Metadata
 */
const SchemaIn$CreditNotePreview1Metadata: z.ZodType<
  CreditNotePreview1Metadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotePreview1Metadata
 */
const SchemaOut$CreditNotePreview1Metadata: z.ZodType<
  External$CreditNotePreview1Metadata, // output type of this zod object
  z.ZodTypeDef,
  CreditNotePreview1Metadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CreditNotePreview1Metadata = {
  in: SchemaIn$CreditNotePreview1Metadata,
  out: SchemaOut$CreditNotePreview1Metadata,
};
