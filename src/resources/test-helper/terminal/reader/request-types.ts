import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent,
  Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent,
  TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent,
} from "@sideko-inc/stripe/types/test-helper-terminal-reader-present-payment-method-body-card-present";
import {
  External$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent,
  Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent,
  TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent,
} from "@sideko-inc/stripe/types/test-helper-terminal-reader-present-payment-method-body-interac-present";
import * as z from "zod";

/**
 * PresentPaymentMethodRequest
 */
export type PresentPaymentMethodRequest = {
  /**
   * Simulated on-reader tip amount.
   */
  amountTip?: number | undefined;
  /**
   * Simulated data for the card_present payment method.
   */
  cardPresent?:
    | TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Simulated data for the interac_present payment method.
   */
  interacPresent?:
    | TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent
    | undefined;
  /**
   * Simulated payment type.
   */
  type?: ("card_present" | "interac_present") | undefined;
  reader: string;
};

/**
 * @internal
 * PresentPaymentMethodRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PresentPaymentMethodRequest = {
  amount_tip?: number | undefined;
  card_present?:
    | External$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent
    | undefined;
  expand?: string[] | undefined;
  interac_present?:
    | External$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent
    | undefined;
  type?: ("card_present" | "interac_present") | undefined;
  reader: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PresentPaymentMethodRequest
 */
const SchemaIn$PresentPaymentMethodRequest: z.ZodType<
  PresentPaymentMethodRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_tip: z.number().int().optional(),
    card_present:
      Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent.in.optional(),
    expand: z.array(z.string()).optional(),
    interac_present:
      Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent.in.optional(),
    type: z.enum(["card_present", "interac_present"]).optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_tip: "amountTip",
      card_present: "cardPresent",
      expand: "expand",
      interac_present: "interacPresent",
      type: "type",
      reader: "reader",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PresentPaymentMethodRequest
 */
const SchemaOut$PresentPaymentMethodRequest: z.ZodType<
  External$PresentPaymentMethodRequest, // output type of this zod object
  z.ZodTypeDef,
  PresentPaymentMethodRequest // the object to be transformed
> = z
  .object({
    amountTip: z.number().int().optional(),
    cardPresent:
      Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent.out.optional(),
    expand: z.array(z.string()).optional(),
    interacPresent:
      Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent.out.optional(),
    type: z.enum(["card_present", "interac_present"]).optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountTip: "amount_tip",
      cardPresent: "card_present",
      expand: "expand",
      interacPresent: "interac_present",
      type: "type",
      reader: "reader",
    });
  });

export const Schemas$PresentPaymentMethodRequest = {
  in: SchemaIn$PresentPaymentMethodRequest,
  out: SchemaOut$PresentPaymentMethodRequest,
};
