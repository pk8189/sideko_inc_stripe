import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$PaymentMethodConfigurationCreateBodyAcssDebit,
  PaymentMethodConfigurationCreateBodyAcssDebit,
  Schemas$PaymentMethodConfigurationCreateBodyAcssDebit,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-acss-debit";
import {
  External$PaymentMethodConfigurationCreateBodyAffirm,
  PaymentMethodConfigurationCreateBodyAffirm,
  Schemas$PaymentMethodConfigurationCreateBodyAffirm,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-affirm";
import {
  External$PaymentMethodConfigurationCreateBodyAfterpayClearpay,
  PaymentMethodConfigurationCreateBodyAfterpayClearpay,
  Schemas$PaymentMethodConfigurationCreateBodyAfterpayClearpay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-afterpay-clearpay";
import {
  External$PaymentMethodConfigurationCreateBodyAlipay,
  PaymentMethodConfigurationCreateBodyAlipay,
  Schemas$PaymentMethodConfigurationCreateBodyAlipay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-alipay";
import {
  External$PaymentMethodConfigurationCreateBodyAlma,
  PaymentMethodConfigurationCreateBodyAlma,
  Schemas$PaymentMethodConfigurationCreateBodyAlma,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-alma";
import {
  External$PaymentMethodConfigurationCreateBodyAmazonPay,
  PaymentMethodConfigurationCreateBodyAmazonPay,
  Schemas$PaymentMethodConfigurationCreateBodyAmazonPay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-amazon-pay";
import {
  External$PaymentMethodConfigurationCreateBodyApplePay,
  PaymentMethodConfigurationCreateBodyApplePay,
  Schemas$PaymentMethodConfigurationCreateBodyApplePay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-apple-pay";
import {
  External$PaymentMethodConfigurationCreateBodyApplePayLater,
  PaymentMethodConfigurationCreateBodyApplePayLater,
  Schemas$PaymentMethodConfigurationCreateBodyApplePayLater,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-apple-pay-later";
import {
  External$PaymentMethodConfigurationCreateBodyAuBecsDebit,
  PaymentMethodConfigurationCreateBodyAuBecsDebit,
  Schemas$PaymentMethodConfigurationCreateBodyAuBecsDebit,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-au-becs-debit";
import {
  External$PaymentMethodConfigurationCreateBodyBacsDebit,
  PaymentMethodConfigurationCreateBodyBacsDebit,
  Schemas$PaymentMethodConfigurationCreateBodyBacsDebit,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-bacs-debit";
import {
  External$PaymentMethodConfigurationCreateBodyBancontact,
  PaymentMethodConfigurationCreateBodyBancontact,
  Schemas$PaymentMethodConfigurationCreateBodyBancontact,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-bancontact";
import {
  External$PaymentMethodConfigurationCreateBodyBillie,
  PaymentMethodConfigurationCreateBodyBillie,
  Schemas$PaymentMethodConfigurationCreateBodyBillie,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-billie";
import {
  External$PaymentMethodConfigurationCreateBodyBlik,
  PaymentMethodConfigurationCreateBodyBlik,
  Schemas$PaymentMethodConfigurationCreateBodyBlik,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-blik";
import {
  External$PaymentMethodConfigurationCreateBodyBoleto,
  PaymentMethodConfigurationCreateBodyBoleto,
  Schemas$PaymentMethodConfigurationCreateBodyBoleto,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-boleto";
import {
  External$PaymentMethodConfigurationCreateBodyCard,
  PaymentMethodConfigurationCreateBodyCard,
  Schemas$PaymentMethodConfigurationCreateBodyCard,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-card";
import {
  External$PaymentMethodConfigurationCreateBodyCartesBancaires,
  PaymentMethodConfigurationCreateBodyCartesBancaires,
  Schemas$PaymentMethodConfigurationCreateBodyCartesBancaires,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-cartes-bancaires";
import {
  External$PaymentMethodConfigurationCreateBodyCashapp,
  PaymentMethodConfigurationCreateBodyCashapp,
  Schemas$PaymentMethodConfigurationCreateBodyCashapp,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-cashapp";
import {
  External$PaymentMethodConfigurationCreateBodyCustomerBalance,
  PaymentMethodConfigurationCreateBodyCustomerBalance,
  Schemas$PaymentMethodConfigurationCreateBodyCustomerBalance,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-customer-balance";
import {
  External$PaymentMethodConfigurationCreateBodyEps,
  PaymentMethodConfigurationCreateBodyEps,
  Schemas$PaymentMethodConfigurationCreateBodyEps,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-eps";
import {
  External$PaymentMethodConfigurationCreateBodyFpx,
  PaymentMethodConfigurationCreateBodyFpx,
  Schemas$PaymentMethodConfigurationCreateBodyFpx,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-fpx";
import {
  External$PaymentMethodConfigurationCreateBodyGiropay,
  PaymentMethodConfigurationCreateBodyGiropay,
  Schemas$PaymentMethodConfigurationCreateBodyGiropay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-giropay";
import {
  External$PaymentMethodConfigurationCreateBodyGooglePay,
  PaymentMethodConfigurationCreateBodyGooglePay,
  Schemas$PaymentMethodConfigurationCreateBodyGooglePay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-google-pay";
import {
  External$PaymentMethodConfigurationCreateBodyGrabpay,
  PaymentMethodConfigurationCreateBodyGrabpay,
  Schemas$PaymentMethodConfigurationCreateBodyGrabpay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-grabpay";
import {
  External$PaymentMethodConfigurationCreateBodyIdeal,
  PaymentMethodConfigurationCreateBodyIdeal,
  Schemas$PaymentMethodConfigurationCreateBodyIdeal,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-ideal";
import {
  External$PaymentMethodConfigurationCreateBodyJcb,
  PaymentMethodConfigurationCreateBodyJcb,
  Schemas$PaymentMethodConfigurationCreateBodyJcb,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-jcb";
import {
  External$PaymentMethodConfigurationCreateBodyKlarna,
  PaymentMethodConfigurationCreateBodyKlarna,
  Schemas$PaymentMethodConfigurationCreateBodyKlarna,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-klarna";
import {
  External$PaymentMethodConfigurationCreateBodyKonbini,
  PaymentMethodConfigurationCreateBodyKonbini,
  Schemas$PaymentMethodConfigurationCreateBodyKonbini,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-konbini";
import {
  External$PaymentMethodConfigurationCreateBodyLink,
  PaymentMethodConfigurationCreateBodyLink,
  Schemas$PaymentMethodConfigurationCreateBodyLink,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-link";
import {
  External$PaymentMethodConfigurationCreateBodyMobilepay,
  PaymentMethodConfigurationCreateBodyMobilepay,
  Schemas$PaymentMethodConfigurationCreateBodyMobilepay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-mobilepay";
import {
  External$PaymentMethodConfigurationCreateBodyMultibanco,
  PaymentMethodConfigurationCreateBodyMultibanco,
  Schemas$PaymentMethodConfigurationCreateBodyMultibanco,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-multibanco";
import {
  External$PaymentMethodConfigurationCreateBodyNzBankAccount,
  PaymentMethodConfigurationCreateBodyNzBankAccount,
  Schemas$PaymentMethodConfigurationCreateBodyNzBankAccount,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-nz-bank-account";
import {
  External$PaymentMethodConfigurationCreateBodyOxxo,
  PaymentMethodConfigurationCreateBodyOxxo,
  Schemas$PaymentMethodConfigurationCreateBodyOxxo,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-oxxo";
import {
  External$PaymentMethodConfigurationCreateBodyP24,
  PaymentMethodConfigurationCreateBodyP24,
  Schemas$PaymentMethodConfigurationCreateBodyP24,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-p24";
import {
  External$PaymentMethodConfigurationCreateBodyPayByBank,
  PaymentMethodConfigurationCreateBodyPayByBank,
  Schemas$PaymentMethodConfigurationCreateBodyPayByBank,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-pay-by-bank";
import {
  External$PaymentMethodConfigurationCreateBodyPaynow,
  PaymentMethodConfigurationCreateBodyPaynow,
  Schemas$PaymentMethodConfigurationCreateBodyPaynow,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-paynow";
import {
  External$PaymentMethodConfigurationCreateBodyPaypal,
  PaymentMethodConfigurationCreateBodyPaypal,
  Schemas$PaymentMethodConfigurationCreateBodyPaypal,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-paypal";
import {
  External$PaymentMethodConfigurationCreateBodyPromptpay,
  PaymentMethodConfigurationCreateBodyPromptpay,
  Schemas$PaymentMethodConfigurationCreateBodyPromptpay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-promptpay";
import {
  External$PaymentMethodConfigurationCreateBodyRevolutPay,
  PaymentMethodConfigurationCreateBodyRevolutPay,
  Schemas$PaymentMethodConfigurationCreateBodyRevolutPay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-revolut-pay";
import {
  External$PaymentMethodConfigurationCreateBodySatispay,
  PaymentMethodConfigurationCreateBodySatispay,
  Schemas$PaymentMethodConfigurationCreateBodySatispay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-satispay";
import {
  External$PaymentMethodConfigurationCreateBodySepaDebit,
  PaymentMethodConfigurationCreateBodySepaDebit,
  Schemas$PaymentMethodConfigurationCreateBodySepaDebit,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-sepa-debit";
import {
  External$PaymentMethodConfigurationCreateBodySofort,
  PaymentMethodConfigurationCreateBodySofort,
  Schemas$PaymentMethodConfigurationCreateBodySofort,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-sofort";
import {
  External$PaymentMethodConfigurationCreateBodySwish,
  PaymentMethodConfigurationCreateBodySwish,
  Schemas$PaymentMethodConfigurationCreateBodySwish,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-swish";
import {
  External$PaymentMethodConfigurationCreateBodyTwint,
  PaymentMethodConfigurationCreateBodyTwint,
  Schemas$PaymentMethodConfigurationCreateBodyTwint,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-twint";
import {
  External$PaymentMethodConfigurationCreateBodyUsBankAccount,
  PaymentMethodConfigurationCreateBodyUsBankAccount,
  Schemas$PaymentMethodConfigurationCreateBodyUsBankAccount,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-us-bank-account";
import {
  External$PaymentMethodConfigurationCreateBodyWechatPay,
  PaymentMethodConfigurationCreateBodyWechatPay,
  Schemas$PaymentMethodConfigurationCreateBodyWechatPay,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-wechat-pay";
import {
  External$PaymentMethodConfigurationCreateBodyZip,
  PaymentMethodConfigurationCreateBodyZip,
  Schemas$PaymentMethodConfigurationCreateBodyZip,
} from "@sideko-inc/stripe/types/payment-method-configuration-create-body-zip";
import {
  External$PaymentMethodConfigurationUpdateBodyAcssDebit,
  PaymentMethodConfigurationUpdateBodyAcssDebit,
  Schemas$PaymentMethodConfigurationUpdateBodyAcssDebit,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-acss-debit";
import {
  External$PaymentMethodConfigurationUpdateBodyAffirm,
  PaymentMethodConfigurationUpdateBodyAffirm,
  Schemas$PaymentMethodConfigurationUpdateBodyAffirm,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-affirm";
import {
  External$PaymentMethodConfigurationUpdateBodyAfterpayClearpay,
  PaymentMethodConfigurationUpdateBodyAfterpayClearpay,
  Schemas$PaymentMethodConfigurationUpdateBodyAfterpayClearpay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-afterpay-clearpay";
import {
  External$PaymentMethodConfigurationUpdateBodyAlipay,
  PaymentMethodConfigurationUpdateBodyAlipay,
  Schemas$PaymentMethodConfigurationUpdateBodyAlipay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-alipay";
import {
  External$PaymentMethodConfigurationUpdateBodyAlma,
  PaymentMethodConfigurationUpdateBodyAlma,
  Schemas$PaymentMethodConfigurationUpdateBodyAlma,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-alma";
import {
  External$PaymentMethodConfigurationUpdateBodyAmazonPay,
  PaymentMethodConfigurationUpdateBodyAmazonPay,
  Schemas$PaymentMethodConfigurationUpdateBodyAmazonPay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-amazon-pay";
import {
  External$PaymentMethodConfigurationUpdateBodyApplePay,
  PaymentMethodConfigurationUpdateBodyApplePay,
  Schemas$PaymentMethodConfigurationUpdateBodyApplePay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-apple-pay";
import {
  External$PaymentMethodConfigurationUpdateBodyApplePayLater,
  PaymentMethodConfigurationUpdateBodyApplePayLater,
  Schemas$PaymentMethodConfigurationUpdateBodyApplePayLater,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-apple-pay-later";
import {
  External$PaymentMethodConfigurationUpdateBodyAuBecsDebit,
  PaymentMethodConfigurationUpdateBodyAuBecsDebit,
  Schemas$PaymentMethodConfigurationUpdateBodyAuBecsDebit,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-au-becs-debit";
import {
  External$PaymentMethodConfigurationUpdateBodyBacsDebit,
  PaymentMethodConfigurationUpdateBodyBacsDebit,
  Schemas$PaymentMethodConfigurationUpdateBodyBacsDebit,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-bacs-debit";
import {
  External$PaymentMethodConfigurationUpdateBodyBancontact,
  PaymentMethodConfigurationUpdateBodyBancontact,
  Schemas$PaymentMethodConfigurationUpdateBodyBancontact,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-bancontact";
import {
  External$PaymentMethodConfigurationUpdateBodyBillie,
  PaymentMethodConfigurationUpdateBodyBillie,
  Schemas$PaymentMethodConfigurationUpdateBodyBillie,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-billie";
import {
  External$PaymentMethodConfigurationUpdateBodyBlik,
  PaymentMethodConfigurationUpdateBodyBlik,
  Schemas$PaymentMethodConfigurationUpdateBodyBlik,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-blik";
import {
  External$PaymentMethodConfigurationUpdateBodyBoleto,
  PaymentMethodConfigurationUpdateBodyBoleto,
  Schemas$PaymentMethodConfigurationUpdateBodyBoleto,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-boleto";
import {
  External$PaymentMethodConfigurationUpdateBodyCard,
  PaymentMethodConfigurationUpdateBodyCard,
  Schemas$PaymentMethodConfigurationUpdateBodyCard,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-card";
import {
  External$PaymentMethodConfigurationUpdateBodyCartesBancaires,
  PaymentMethodConfigurationUpdateBodyCartesBancaires,
  Schemas$PaymentMethodConfigurationUpdateBodyCartesBancaires,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-cartes-bancaires";
import {
  External$PaymentMethodConfigurationUpdateBodyCashapp,
  PaymentMethodConfigurationUpdateBodyCashapp,
  Schemas$PaymentMethodConfigurationUpdateBodyCashapp,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-cashapp";
import {
  External$PaymentMethodConfigurationUpdateBodyCustomerBalance,
  PaymentMethodConfigurationUpdateBodyCustomerBalance,
  Schemas$PaymentMethodConfigurationUpdateBodyCustomerBalance,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-customer-balance";
import {
  External$PaymentMethodConfigurationUpdateBodyEps,
  PaymentMethodConfigurationUpdateBodyEps,
  Schemas$PaymentMethodConfigurationUpdateBodyEps,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-eps";
import {
  External$PaymentMethodConfigurationUpdateBodyFpx,
  PaymentMethodConfigurationUpdateBodyFpx,
  Schemas$PaymentMethodConfigurationUpdateBodyFpx,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-fpx";
import {
  External$PaymentMethodConfigurationUpdateBodyGiropay,
  PaymentMethodConfigurationUpdateBodyGiropay,
  Schemas$PaymentMethodConfigurationUpdateBodyGiropay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-giropay";
import {
  External$PaymentMethodConfigurationUpdateBodyGooglePay,
  PaymentMethodConfigurationUpdateBodyGooglePay,
  Schemas$PaymentMethodConfigurationUpdateBodyGooglePay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-google-pay";
import {
  External$PaymentMethodConfigurationUpdateBodyGrabpay,
  PaymentMethodConfigurationUpdateBodyGrabpay,
  Schemas$PaymentMethodConfigurationUpdateBodyGrabpay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-grabpay";
import {
  External$PaymentMethodConfigurationUpdateBodyIdeal,
  PaymentMethodConfigurationUpdateBodyIdeal,
  Schemas$PaymentMethodConfigurationUpdateBodyIdeal,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-ideal";
import {
  External$PaymentMethodConfigurationUpdateBodyJcb,
  PaymentMethodConfigurationUpdateBodyJcb,
  Schemas$PaymentMethodConfigurationUpdateBodyJcb,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-jcb";
import {
  External$PaymentMethodConfigurationUpdateBodyKlarna,
  PaymentMethodConfigurationUpdateBodyKlarna,
  Schemas$PaymentMethodConfigurationUpdateBodyKlarna,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-klarna";
import {
  External$PaymentMethodConfigurationUpdateBodyKonbini,
  PaymentMethodConfigurationUpdateBodyKonbini,
  Schemas$PaymentMethodConfigurationUpdateBodyKonbini,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-konbini";
import {
  External$PaymentMethodConfigurationUpdateBodyLink,
  PaymentMethodConfigurationUpdateBodyLink,
  Schemas$PaymentMethodConfigurationUpdateBodyLink,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-link";
import {
  External$PaymentMethodConfigurationUpdateBodyMobilepay,
  PaymentMethodConfigurationUpdateBodyMobilepay,
  Schemas$PaymentMethodConfigurationUpdateBodyMobilepay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-mobilepay";
import {
  External$PaymentMethodConfigurationUpdateBodyMultibanco,
  PaymentMethodConfigurationUpdateBodyMultibanco,
  Schemas$PaymentMethodConfigurationUpdateBodyMultibanco,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-multibanco";
import {
  External$PaymentMethodConfigurationUpdateBodyNzBankAccount,
  PaymentMethodConfigurationUpdateBodyNzBankAccount,
  Schemas$PaymentMethodConfigurationUpdateBodyNzBankAccount,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-nz-bank-account";
import {
  External$PaymentMethodConfigurationUpdateBodyOxxo,
  PaymentMethodConfigurationUpdateBodyOxxo,
  Schemas$PaymentMethodConfigurationUpdateBodyOxxo,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-oxxo";
import {
  External$PaymentMethodConfigurationUpdateBodyP24,
  PaymentMethodConfigurationUpdateBodyP24,
  Schemas$PaymentMethodConfigurationUpdateBodyP24,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-p24";
import {
  External$PaymentMethodConfigurationUpdateBodyPayByBank,
  PaymentMethodConfigurationUpdateBodyPayByBank,
  Schemas$PaymentMethodConfigurationUpdateBodyPayByBank,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-pay-by-bank";
import {
  External$PaymentMethodConfigurationUpdateBodyPaynow,
  PaymentMethodConfigurationUpdateBodyPaynow,
  Schemas$PaymentMethodConfigurationUpdateBodyPaynow,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-paynow";
import {
  External$PaymentMethodConfigurationUpdateBodyPaypal,
  PaymentMethodConfigurationUpdateBodyPaypal,
  Schemas$PaymentMethodConfigurationUpdateBodyPaypal,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-paypal";
import {
  External$PaymentMethodConfigurationUpdateBodyPromptpay,
  PaymentMethodConfigurationUpdateBodyPromptpay,
  Schemas$PaymentMethodConfigurationUpdateBodyPromptpay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-promptpay";
import {
  External$PaymentMethodConfigurationUpdateBodyRevolutPay,
  PaymentMethodConfigurationUpdateBodyRevolutPay,
  Schemas$PaymentMethodConfigurationUpdateBodyRevolutPay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-revolut-pay";
import {
  External$PaymentMethodConfigurationUpdateBodySatispay,
  PaymentMethodConfigurationUpdateBodySatispay,
  Schemas$PaymentMethodConfigurationUpdateBodySatispay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-satispay";
import {
  External$PaymentMethodConfigurationUpdateBodySepaDebit,
  PaymentMethodConfigurationUpdateBodySepaDebit,
  Schemas$PaymentMethodConfigurationUpdateBodySepaDebit,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-sepa-debit";
import {
  External$PaymentMethodConfigurationUpdateBodySofort,
  PaymentMethodConfigurationUpdateBodySofort,
  Schemas$PaymentMethodConfigurationUpdateBodySofort,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-sofort";
import {
  External$PaymentMethodConfigurationUpdateBodySwish,
  PaymentMethodConfigurationUpdateBodySwish,
  Schemas$PaymentMethodConfigurationUpdateBodySwish,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-swish";
import {
  External$PaymentMethodConfigurationUpdateBodyTwint,
  PaymentMethodConfigurationUpdateBodyTwint,
  Schemas$PaymentMethodConfigurationUpdateBodyTwint,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-twint";
import {
  External$PaymentMethodConfigurationUpdateBodyUsBankAccount,
  PaymentMethodConfigurationUpdateBodyUsBankAccount,
  Schemas$PaymentMethodConfigurationUpdateBodyUsBankAccount,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-us-bank-account";
import {
  External$PaymentMethodConfigurationUpdateBodyWechatPay,
  PaymentMethodConfigurationUpdateBodyWechatPay,
  Schemas$PaymentMethodConfigurationUpdateBodyWechatPay,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-wechat-pay";
import {
  External$PaymentMethodConfigurationUpdateBodyZip,
  PaymentMethodConfigurationUpdateBodyZip,
  Schemas$PaymentMethodConfigurationUpdateBodyZip,
} from "@sideko-inc/stripe/types/payment-method-configuration-update-body-zip";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * The Connect application to filter by.
   */
  application?: (string | string) | undefined;
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
  application?: (string | string) | undefined;
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
    application: z.union([z.string(), z.string()]).optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      application: "application",
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
    application: z.union([z.string(), z.string()]).optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      application: "application",
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
  configuration: string;
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
  configuration: string;
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
    configuration: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      configuration: "configuration",
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
    configuration: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      configuration: "configuration",
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
   * Canadian pre-authorized debit payments, check this [page](https://stripe.com/docs/payments/acss-debit) for more details like country availability.
   */
  acssDebit?: PaymentMethodConfigurationCreateBodyAcssDebit | undefined;
  /**
   * [Affirm](https://www.affirm.com/) gives your customers a way to split purchases over a series of payments. Depending on the purchase, they can pay with four interest-free payments (Split Pay) or pay over a longer term (Installments), which might include interest. Check this [page](https://stripe.com/docs/payments/affirm) for more details like country availability.
   */
  affirm?: PaymentMethodConfigurationCreateBodyAffirm | undefined;
  /**
   * Afterpay gives your customers a way to pay for purchases in installments, check this [page](https://stripe.com/docs/payments/afterpay-clearpay) for more details like country availability. Afterpay is particularly popular among businesses selling fashion, beauty, and sports products.
   */
  afterpayClearpay?:
    | PaymentMethodConfigurationCreateBodyAfterpayClearpay
    | undefined;
  /**
   * Alipay is a digital wallet in China that has more than a billion active users worldwide. Alipay users can pay on the web or on a mobile device using login credentials or their Alipay app. Alipay has a low dispute rate and reduces fraud by authenticating payments using the customer's login credentials. Check this [page](https://stripe.com/docs/payments/alipay) for more details.
   */
  alipay?: PaymentMethodConfigurationCreateBodyAlipay | undefined;
  /**
   * Alma is a Buy Now, Pay Later payment method that offers customers the ability to pay in 2, 3, or 4 installments.
   */
  alma?: PaymentMethodConfigurationCreateBodyAlma | undefined;
  /**
   * Amazon Pay is a wallet payment method that lets your customers check out the same way as on Amazon.
   */
  amazonPay?: PaymentMethodConfigurationCreateBodyAmazonPay | undefined;
  /**
   * Stripe users can accept [Apple Pay](/payments/apple-pay) in iOS applications in iOS 9 and later, and on the web in Safari starting with iOS 10 or macOS Sierra. There are no additional fees to process Apple Pay payments, and the [pricing](/pricing) is the same as other card transactions. Check this [page](https://stripe.com/docs/apple-pay) for more details.
   */
  applePay?: PaymentMethodConfigurationCreateBodyApplePay | undefined;
  /**
   * Apple Pay Later, a payment method for customers to buy now and pay later, gives your customers a way to split purchases into four installments across six weeks.
   */
  applePayLater?: PaymentMethodConfigurationCreateBodyApplePayLater | undefined;
  /**
   * Stripe users in Australia can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with an Australian bank account. Check this [page](https://stripe.com/docs/payments/au-becs-debit) for more details.
   */
  auBecsDebit?: PaymentMethodConfigurationCreateBodyAuBecsDebit | undefined;
  /**
   * Stripe users in the UK can accept Bacs Direct Debit payments from customers with a UK bank account, check this [page](https://stripe.com/docs/payments/payment-methods/bacs-debit) for more details.
   */
  bacsDebit?: PaymentMethodConfigurationCreateBodyBacsDebit | undefined;
  /**
   * Bancontact is the most popular online payment method in Belgium, with over 15 million cards in circulation. [Customers](https://stripe.com/docs/api/customers) use a Bancontact card or mobile app linked to a Belgian bank account to make online payments that are secure, guaranteed, and confirmed immediately. Check this [page](https://stripe.com/docs/payments/bancontact) for more details.
   */
  bancontact?: PaymentMethodConfigurationCreateBodyBancontact | undefined;
  /**
   * Billie is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method that offers businesses Pay by Invoice where they offer payment terms ranging from 7-120 days. Customers are redirected from your website or app, authorize the payment with Billie, then return to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
   */
  billie?: PaymentMethodConfigurationCreateBodyBillie | undefined;
  /**
   * BLIK is a [single use](https://stripe.com/docs/payments/payment-methods#usage) payment method that requires customers to authenticate their payments. When customers want to pay online using BLIK, they request a six-digit code from their banking application and enter it into the payment collection form. Check this [page](https://stripe.com/docs/payments/blik) for more details.
   */
  blik?: PaymentMethodConfigurationCreateBodyBlik | undefined;
  /**
   * Boleto is an official (regulated by the Central Bank of Brazil) payment method in Brazil. Check this [page](https://stripe.com/docs/payments/boleto) for more details.
   */
  boleto?: PaymentMethodConfigurationCreateBodyBoleto | undefined;
  /**
   * Cards are a popular way for consumers and businesses to pay online or in person. Stripe supports global and local card networks.
   */
  card?: PaymentMethodConfigurationCreateBodyCard | undefined;
  /**
   * Cartes Bancaires is France's local card network. More than 95% of these cards are co-branded with either Visa or Mastercard, meaning you can process these cards over either Cartes Bancaires or the Visa or Mastercard networks. Check this [page](https://stripe.com/docs/payments/cartes-bancaires) for more details.
   */
  cartesBancaires?:
    | PaymentMethodConfigurationCreateBodyCartesBancaires
    | undefined;
  /**
   * Cash App is a popular consumer app in the US that allows customers to bank, invest, send, and receive money using their digital wallet. Check this [page](https://stripe.com/docs/payments/cash-app-pay) for more details.
   */
  cashapp?: PaymentMethodConfigurationCreateBodyCashapp | undefined;
  /**
   * Uses a customer’s [cash balance](https://stripe.com/docs/payments/customer-balance) for the payment. The cash balance can be funded via a bank transfer. Check this [page](https://stripe.com/docs/payments/bank-transfers) for more details.
   */
  customerBalance?:
    | PaymentMethodConfigurationCreateBodyCustomerBalance
    | undefined;
  /**
   * EPS is an Austria-based payment method that allows customers to complete transactions online using their bank credentials. EPS is supported by all Austrian banks and is accepted by over 80% of Austrian online retailers. Check this [page](https://stripe.com/docs/payments/eps) for more details.
   */
  eps?: PaymentMethodConfigurationCreateBodyEps | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Financial Process Exchange (FPX) is a Malaysia-based payment method that allows customers to complete transactions online using their bank credentials. Bank Negara Malaysia (BNM), the Central Bank of Malaysia, and eleven other major Malaysian financial institutions are members of the PayNet Group, which owns and operates FPX. It is one of the most popular online payment methods in Malaysia, with nearly 90 million transactions in 2018 according to BNM. Check this [page](https://stripe.com/docs/payments/fpx) for more details.
   */
  fpx?: PaymentMethodConfigurationCreateBodyFpx | undefined;
  /**
   * giropay is a German payment method based on online banking, introduced in 2006. It allows customers to complete transactions online using their online banking environment, with funds debited from their bank account. Depending on their bank, customers confirm payments on giropay using a second factor of authentication or a PIN. giropay accounts for 10% of online checkouts in Germany. Check this [page](https://stripe.com/docs/payments/giropay) for more details.
   */
  giropay?: PaymentMethodConfigurationCreateBodyGiropay | undefined;
  /**
   * Google Pay allows customers to make payments in your app or website using any credit or debit card saved to their Google Account, including those from Google Play, YouTube, Chrome, or an Android device. Use the Google Pay API to request any credit or debit card stored in your customer's Google account. Check this [page](https://stripe.com/docs/google-pay) for more details.
   */
  googlePay?: PaymentMethodConfigurationCreateBodyGooglePay | undefined;
  /**
   * GrabPay is a payment method developed by [Grab](https://www.grab.com/sg/consumer/finance/pay/). GrabPay is a digital wallet - customers maintain a balance in their wallets that they pay out with. Check this [page](https://stripe.com/docs/payments/grabpay) for more details.
   */
  grabpay?: PaymentMethodConfigurationCreateBodyGrabpay | undefined;
  /**
   * iDEAL is a Netherlands-based payment method that allows customers to complete transactions online using their bank credentials. All major Dutch banks are members of Currence, the scheme that operates iDEAL, making it the most popular online payment method in the Netherlands with a share of online transactions close to 55%. Check this [page](https://stripe.com/docs/payments/ideal) for more details.
   */
  ideal?: PaymentMethodConfigurationCreateBodyIdeal | undefined;
  /**
   * JCB is a credit card company based in Japan. JCB is currently available in Japan to businesses approved by JCB, and available to all businesses in Australia, Canada, Hong Kong, Japan, New Zealand, Singapore, Switzerland, United Kingdom, United States, and all countries in the European Economic Area except Iceland. Check this [page](https://support.stripe.com/questions/accepting-japan-credit-bureau-%28jcb%29-payments) for more details.
   */
  jcb?: PaymentMethodConfigurationCreateBodyJcb | undefined;
  /**
   * Klarna gives customers a range of [payment options](https://stripe.com/docs/payments/klarna#payment-options) during checkout. Available payment options vary depending on the customer's billing address and the transaction amount. These payment options make it convenient for customers to purchase items in all price ranges. Check this [page](https://stripe.com/docs/payments/klarna) for more details.
   */
  klarna?: PaymentMethodConfigurationCreateBodyKlarna | undefined;
  /**
   * Konbini allows customers in Japan to pay for bills and online purchases at convenience stores with cash. Check this [page](https://stripe.com/docs/payments/konbini) for more details.
   */
  konbini?: PaymentMethodConfigurationCreateBodyKonbini | undefined;
  /**
   * [Link](https://stripe.com/docs/payments/link) is a payment method network. With Link, users save their payment details once, then reuse that information to pay with one click for any business on the network.
   */
  link?: PaymentMethodConfigurationCreateBodyLink | undefined;
  /**
   * MobilePay is a [single-use](https://stripe.com/docs/payments/payment-methods#usage) card wallet payment method used in Denmark and Finland. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the MobilePay app. Check this [page](https://stripe.com/docs/payments/mobilepay) for more details.
   */
  mobilepay?: PaymentMethodConfigurationCreateBodyMobilepay | undefined;
  /**
   * Stripe users in Europe and the United States can accept Multibanco payments from customers in Portugal using [Sources](https://stripe.com/docs/sources)—a single integration path for creating payments using any supported method.
   */
  multibanco?: PaymentMethodConfigurationCreateBodyMultibanco | undefined;
  /**
   * Configuration name.
   */
  name?: string | undefined;
  /**
   * Stripe users in New Zealand can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with a New Zeland bank account. Check this [page](https://stripe.com/docs/payments/nz-bank-account) for more details.
   */
  nzBankAccount?: PaymentMethodConfigurationCreateBodyNzBankAccount | undefined;
  /**
   * OXXO is a Mexican chain of convenience stores with thousands of locations across Latin America and represents nearly 20% of online transactions in Mexico. OXXO allows customers to pay bills and online purchases in-store with cash. Check this [page](https://stripe.com/docs/payments/oxxo) for more details.
   */
  oxxo?: PaymentMethodConfigurationCreateBodyOxxo | undefined;
  /**
   * Przelewy24 is a Poland-based payment method aggregator that allows customers to complete transactions online using bank transfers and other methods. Bank transfers account for 30% of online payments in Poland and Przelewy24 provides a way for customers to pay with over 165 banks. Check this [page](https://stripe.com/docs/payments/p24) for more details.
   */
  p24?: PaymentMethodConfigurationCreateBodyP24 | undefined;
  /**
   * Configuration's parent configuration. Specify to create a child configuration.
   */
  parent?: string | undefined;
  /**
   * Pay by bank is a redirect payment method backed by bank transfers. A customer is redirected to their bank to authorize a bank transfer for a given amount. This removes a lot of the error risks inherent in waiting for the customer to initiate a transfer themselves, and is less expensive than card payments.
   */
  payByBank?: PaymentMethodConfigurationCreateBodyPayByBank | undefined;
  /**
   * PayNow is a Singapore-based payment method that allows customers to make a payment using their preferred app from participating banks and participating non-bank financial institutions. Check this [page](https://stripe.com/docs/payments/paynow) for more details.
   */
  paynow?: PaymentMethodConfigurationCreateBodyPaynow | undefined;
  /**
   * PayPal, a digital wallet popular with customers in Europe, allows your customers worldwide to pay using their PayPal account. Check this [page](https://stripe.com/docs/payments/paypal) for more details.
   */
  paypal?: PaymentMethodConfigurationCreateBodyPaypal | undefined;
  /**
   * PromptPay is a Thailand-based payment method that allows customers to make a payment using their preferred app from participating banks. Check this [page](https://stripe.com/docs/payments/promptpay) for more details.
   */
  promptpay?: PaymentMethodConfigurationCreateBodyPromptpay | undefined;
  /**
   * Revolut Pay, developed by Revolut, a global finance app, is a digital wallet payment method. Revolut Pay uses the customer’s stored balance or cards to fund the payment, and offers the option for non-Revolut customers to save their details after their first purchase.
   */
  revolutPay?: PaymentMethodConfigurationCreateBodyRevolutPay | undefined;
  /**
   * Satispay is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method where customers are required to [authenticate](/payments/payment-methods#customer-actions) their payment. Customers pay by being redirected from your website or app, authorizing the payment with Satispay, then returning to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
   */
  satispay?: PaymentMethodConfigurationCreateBodySatispay | undefined;
  /**
   * The [Single Euro Payments Area (SEPA)](https://en.wikipedia.org/wiki/Single_Euro_Payments_Area) is an initiative of the European Union to simplify payments within and across member countries. SEPA established and enforced banking standards to allow for the direct debiting of every EUR-denominated bank account within the SEPA region, check this [page](https://stripe.com/docs/payments/sepa-debit) for more details.
   */
  sepaDebit?: PaymentMethodConfigurationCreateBodySepaDebit | undefined;
  /**
   * Stripe users in Europe and the United States can use the [Payment Intents API](https://stripe.com/docs/payments/payment-intents)—a single integration path for creating payments using any supported method—to accept [Sofort](https://www.sofort.com/) payments from customers. Check this [page](https://stripe.com/docs/payments/sofort) for more details.
   */
  sofort?: PaymentMethodConfigurationCreateBodySofort | undefined;
  /**
   * Swish is a [real-time](https://stripe.com/docs/payments/real-time) payment method popular in Sweden. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the Swish mobile app and the Swedish BankID mobile app. Check this [page](https://stripe.com/docs/payments/swish) for more details.
   */
  swish?: PaymentMethodConfigurationCreateBodySwish | undefined;
  /**
   * Twint is a payment method popular in Switzerland. It allows customers to pay using their mobile phone. Check this [page](https://docs.stripe.com/payments/twint) for more details.
   */
  twint?: PaymentMethodConfigurationCreateBodyTwint | undefined;
  /**
   * Stripe users in the United States can accept ACH direct debit payments from customers with a US bank account using the Automated Clearing House (ACH) payments system operated by Nacha. Check this [page](https://stripe.com/docs/payments/ach-direct-debit) for more details.
   */
  usBankAccount?: PaymentMethodConfigurationCreateBodyUsBankAccount | undefined;
  /**
   * WeChat, owned by Tencent, is China's leading mobile app with over 1 billion monthly active users. Chinese consumers can use WeChat Pay to pay for goods and services inside of businesses' apps and websites. WeChat Pay users buy most frequently in gaming, e-commerce, travel, online education, and food/nutrition. Check this [page](https://stripe.com/docs/payments/wechat-pay) for more details.
   */
  wechatPay?: PaymentMethodConfigurationCreateBodyWechatPay | undefined;
  /**
   * Zip gives your customers a way to split purchases over a series of payments. Check this [page](https://stripe.com/docs/payments/zip) for more details like country availability.
   */
  zip?: PaymentMethodConfigurationCreateBodyZip | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  acss_debit?:
    | External$PaymentMethodConfigurationCreateBodyAcssDebit
    | undefined;
  affirm?: External$PaymentMethodConfigurationCreateBodyAffirm | undefined;
  afterpay_clearpay?:
    | External$PaymentMethodConfigurationCreateBodyAfterpayClearpay
    | undefined;
  alipay?: External$PaymentMethodConfigurationCreateBodyAlipay | undefined;
  alma?: External$PaymentMethodConfigurationCreateBodyAlma | undefined;
  amazon_pay?:
    | External$PaymentMethodConfigurationCreateBodyAmazonPay
    | undefined;
  apple_pay?: External$PaymentMethodConfigurationCreateBodyApplePay | undefined;
  apple_pay_later?:
    | External$PaymentMethodConfigurationCreateBodyApplePayLater
    | undefined;
  au_becs_debit?:
    | External$PaymentMethodConfigurationCreateBodyAuBecsDebit
    | undefined;
  bacs_debit?:
    | External$PaymentMethodConfigurationCreateBodyBacsDebit
    | undefined;
  bancontact?:
    | External$PaymentMethodConfigurationCreateBodyBancontact
    | undefined;
  billie?: External$PaymentMethodConfigurationCreateBodyBillie | undefined;
  blik?: External$PaymentMethodConfigurationCreateBodyBlik | undefined;
  boleto?: External$PaymentMethodConfigurationCreateBodyBoleto | undefined;
  card?: External$PaymentMethodConfigurationCreateBodyCard | undefined;
  cartes_bancaires?:
    | External$PaymentMethodConfigurationCreateBodyCartesBancaires
    | undefined;
  cashapp?: External$PaymentMethodConfigurationCreateBodyCashapp | undefined;
  customer_balance?:
    | External$PaymentMethodConfigurationCreateBodyCustomerBalance
    | undefined;
  eps?: External$PaymentMethodConfigurationCreateBodyEps | undefined;
  expand?: string[] | undefined;
  fpx?: External$PaymentMethodConfigurationCreateBodyFpx | undefined;
  giropay?: External$PaymentMethodConfigurationCreateBodyGiropay | undefined;
  google_pay?:
    | External$PaymentMethodConfigurationCreateBodyGooglePay
    | undefined;
  grabpay?: External$PaymentMethodConfigurationCreateBodyGrabpay | undefined;
  ideal?: External$PaymentMethodConfigurationCreateBodyIdeal | undefined;
  jcb?: External$PaymentMethodConfigurationCreateBodyJcb | undefined;
  klarna?: External$PaymentMethodConfigurationCreateBodyKlarna | undefined;
  konbini?: External$PaymentMethodConfigurationCreateBodyKonbini | undefined;
  link?: External$PaymentMethodConfigurationCreateBodyLink | undefined;
  mobilepay?:
    | External$PaymentMethodConfigurationCreateBodyMobilepay
    | undefined;
  multibanco?:
    | External$PaymentMethodConfigurationCreateBodyMultibanco
    | undefined;
  name?: string | undefined;
  nz_bank_account?:
    | External$PaymentMethodConfigurationCreateBodyNzBankAccount
    | undefined;
  oxxo?: External$PaymentMethodConfigurationCreateBodyOxxo | undefined;
  p24?: External$PaymentMethodConfigurationCreateBodyP24 | undefined;
  parent?: string | undefined;
  pay_by_bank?:
    | External$PaymentMethodConfigurationCreateBodyPayByBank
    | undefined;
  paynow?: External$PaymentMethodConfigurationCreateBodyPaynow | undefined;
  paypal?: External$PaymentMethodConfigurationCreateBodyPaypal | undefined;
  promptpay?:
    | External$PaymentMethodConfigurationCreateBodyPromptpay
    | undefined;
  revolut_pay?:
    | External$PaymentMethodConfigurationCreateBodyRevolutPay
    | undefined;
  satispay?: External$PaymentMethodConfigurationCreateBodySatispay | undefined;
  sepa_debit?:
    | External$PaymentMethodConfigurationCreateBodySepaDebit
    | undefined;
  sofort?: External$PaymentMethodConfigurationCreateBodySofort | undefined;
  swish?: External$PaymentMethodConfigurationCreateBodySwish | undefined;
  twint?: External$PaymentMethodConfigurationCreateBodyTwint | undefined;
  us_bank_account?:
    | External$PaymentMethodConfigurationCreateBodyUsBankAccount
    | undefined;
  wechat_pay?:
    | External$PaymentMethodConfigurationCreateBodyWechatPay
    | undefined;
  zip?: External$PaymentMethodConfigurationCreateBodyZip | undefined;
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
    acss_debit:
      Schemas$PaymentMethodConfigurationCreateBodyAcssDebit.in.optional(),
    affirm: Schemas$PaymentMethodConfigurationCreateBodyAffirm.in.optional(),
    afterpay_clearpay:
      Schemas$PaymentMethodConfigurationCreateBodyAfterpayClearpay.in.optional(),
    alipay: Schemas$PaymentMethodConfigurationCreateBodyAlipay.in.optional(),
    alma: Schemas$PaymentMethodConfigurationCreateBodyAlma.in.optional(),
    amazon_pay:
      Schemas$PaymentMethodConfigurationCreateBodyAmazonPay.in.optional(),
    apple_pay:
      Schemas$PaymentMethodConfigurationCreateBodyApplePay.in.optional(),
    apple_pay_later:
      Schemas$PaymentMethodConfigurationCreateBodyApplePayLater.in.optional(),
    au_becs_debit:
      Schemas$PaymentMethodConfigurationCreateBodyAuBecsDebit.in.optional(),
    bacs_debit:
      Schemas$PaymentMethodConfigurationCreateBodyBacsDebit.in.optional(),
    bancontact:
      Schemas$PaymentMethodConfigurationCreateBodyBancontact.in.optional(),
    billie: Schemas$PaymentMethodConfigurationCreateBodyBillie.in.optional(),
    blik: Schemas$PaymentMethodConfigurationCreateBodyBlik.in.optional(),
    boleto: Schemas$PaymentMethodConfigurationCreateBodyBoleto.in.optional(),
    card: Schemas$PaymentMethodConfigurationCreateBodyCard.in.optional(),
    cartes_bancaires:
      Schemas$PaymentMethodConfigurationCreateBodyCartesBancaires.in.optional(),
    cashapp: Schemas$PaymentMethodConfigurationCreateBodyCashapp.in.optional(),
    customer_balance:
      Schemas$PaymentMethodConfigurationCreateBodyCustomerBalance.in.optional(),
    eps: Schemas$PaymentMethodConfigurationCreateBodyEps.in.optional(),
    expand: z.array(z.string()).optional(),
    fpx: Schemas$PaymentMethodConfigurationCreateBodyFpx.in.optional(),
    giropay: Schemas$PaymentMethodConfigurationCreateBodyGiropay.in.optional(),
    google_pay:
      Schemas$PaymentMethodConfigurationCreateBodyGooglePay.in.optional(),
    grabpay: Schemas$PaymentMethodConfigurationCreateBodyGrabpay.in.optional(),
    ideal: Schemas$PaymentMethodConfigurationCreateBodyIdeal.in.optional(),
    jcb: Schemas$PaymentMethodConfigurationCreateBodyJcb.in.optional(),
    klarna: Schemas$PaymentMethodConfigurationCreateBodyKlarna.in.optional(),
    konbini: Schemas$PaymentMethodConfigurationCreateBodyKonbini.in.optional(),
    link: Schemas$PaymentMethodConfigurationCreateBodyLink.in.optional(),
    mobilepay:
      Schemas$PaymentMethodConfigurationCreateBodyMobilepay.in.optional(),
    multibanco:
      Schemas$PaymentMethodConfigurationCreateBodyMultibanco.in.optional(),
    name: z.string().optional(),
    nz_bank_account:
      Schemas$PaymentMethodConfigurationCreateBodyNzBankAccount.in.optional(),
    oxxo: Schemas$PaymentMethodConfigurationCreateBodyOxxo.in.optional(),
    p24: Schemas$PaymentMethodConfigurationCreateBodyP24.in.optional(),
    parent: z.string().optional(),
    pay_by_bank:
      Schemas$PaymentMethodConfigurationCreateBodyPayByBank.in.optional(),
    paynow: Schemas$PaymentMethodConfigurationCreateBodyPaynow.in.optional(),
    paypal: Schemas$PaymentMethodConfigurationCreateBodyPaypal.in.optional(),
    promptpay:
      Schemas$PaymentMethodConfigurationCreateBodyPromptpay.in.optional(),
    revolut_pay:
      Schemas$PaymentMethodConfigurationCreateBodyRevolutPay.in.optional(),
    satispay:
      Schemas$PaymentMethodConfigurationCreateBodySatispay.in.optional(),
    sepa_debit:
      Schemas$PaymentMethodConfigurationCreateBodySepaDebit.in.optional(),
    sofort: Schemas$PaymentMethodConfigurationCreateBodySofort.in.optional(),
    swish: Schemas$PaymentMethodConfigurationCreateBodySwish.in.optional(),
    twint: Schemas$PaymentMethodConfigurationCreateBodyTwint.in.optional(),
    us_bank_account:
      Schemas$PaymentMethodConfigurationCreateBodyUsBankAccount.in.optional(),
    wechat_pay:
      Schemas$PaymentMethodConfigurationCreateBodyWechatPay.in.optional(),
    zip: Schemas$PaymentMethodConfigurationCreateBodyZip.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit: "acssDebit",
      affirm: "affirm",
      afterpay_clearpay: "afterpayClearpay",
      alipay: "alipay",
      alma: "alma",
      amazon_pay: "amazonPay",
      apple_pay: "applePay",
      apple_pay_later: "applePayLater",
      au_becs_debit: "auBecsDebit",
      bacs_debit: "bacsDebit",
      bancontact: "bancontact",
      billie: "billie",
      blik: "blik",
      boleto: "boleto",
      card: "card",
      cartes_bancaires: "cartesBancaires",
      cashapp: "cashapp",
      customer_balance: "customerBalance",
      eps: "eps",
      expand: "expand",
      fpx: "fpx",
      giropay: "giropay",
      google_pay: "googlePay",
      grabpay: "grabpay",
      ideal: "ideal",
      jcb: "jcb",
      klarna: "klarna",
      konbini: "konbini",
      link: "link",
      mobilepay: "mobilepay",
      multibanco: "multibanco",
      name: "name",
      nz_bank_account: "nzBankAccount",
      oxxo: "oxxo",
      p24: "p24",
      parent: "parent",
      pay_by_bank: "payByBank",
      paynow: "paynow",
      paypal: "paypal",
      promptpay: "promptpay",
      revolut_pay: "revolutPay",
      satispay: "satispay",
      sepa_debit: "sepaDebit",
      sofort: "sofort",
      swish: "swish",
      twint: "twint",
      us_bank_account: "usBankAccount",
      wechat_pay: "wechatPay",
      zip: "zip",
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
    acssDebit:
      Schemas$PaymentMethodConfigurationCreateBodyAcssDebit.out.optional(),
    affirm: Schemas$PaymentMethodConfigurationCreateBodyAffirm.out.optional(),
    afterpayClearpay:
      Schemas$PaymentMethodConfigurationCreateBodyAfterpayClearpay.out.optional(),
    alipay: Schemas$PaymentMethodConfigurationCreateBodyAlipay.out.optional(),
    alma: Schemas$PaymentMethodConfigurationCreateBodyAlma.out.optional(),
    amazonPay:
      Schemas$PaymentMethodConfigurationCreateBodyAmazonPay.out.optional(),
    applePay:
      Schemas$PaymentMethodConfigurationCreateBodyApplePay.out.optional(),
    applePayLater:
      Schemas$PaymentMethodConfigurationCreateBodyApplePayLater.out.optional(),
    auBecsDebit:
      Schemas$PaymentMethodConfigurationCreateBodyAuBecsDebit.out.optional(),
    bacsDebit:
      Schemas$PaymentMethodConfigurationCreateBodyBacsDebit.out.optional(),
    bancontact:
      Schemas$PaymentMethodConfigurationCreateBodyBancontact.out.optional(),
    billie: Schemas$PaymentMethodConfigurationCreateBodyBillie.out.optional(),
    blik: Schemas$PaymentMethodConfigurationCreateBodyBlik.out.optional(),
    boleto: Schemas$PaymentMethodConfigurationCreateBodyBoleto.out.optional(),
    card: Schemas$PaymentMethodConfigurationCreateBodyCard.out.optional(),
    cartesBancaires:
      Schemas$PaymentMethodConfigurationCreateBodyCartesBancaires.out.optional(),
    cashapp: Schemas$PaymentMethodConfigurationCreateBodyCashapp.out.optional(),
    customerBalance:
      Schemas$PaymentMethodConfigurationCreateBodyCustomerBalance.out.optional(),
    eps: Schemas$PaymentMethodConfigurationCreateBodyEps.out.optional(),
    expand: z.array(z.string()).optional(),
    fpx: Schemas$PaymentMethodConfigurationCreateBodyFpx.out.optional(),
    giropay: Schemas$PaymentMethodConfigurationCreateBodyGiropay.out.optional(),
    googlePay:
      Schemas$PaymentMethodConfigurationCreateBodyGooglePay.out.optional(),
    grabpay: Schemas$PaymentMethodConfigurationCreateBodyGrabpay.out.optional(),
    ideal: Schemas$PaymentMethodConfigurationCreateBodyIdeal.out.optional(),
    jcb: Schemas$PaymentMethodConfigurationCreateBodyJcb.out.optional(),
    klarna: Schemas$PaymentMethodConfigurationCreateBodyKlarna.out.optional(),
    konbini: Schemas$PaymentMethodConfigurationCreateBodyKonbini.out.optional(),
    link: Schemas$PaymentMethodConfigurationCreateBodyLink.out.optional(),
    mobilepay:
      Schemas$PaymentMethodConfigurationCreateBodyMobilepay.out.optional(),
    multibanco:
      Schemas$PaymentMethodConfigurationCreateBodyMultibanco.out.optional(),
    name: z.string().optional(),
    nzBankAccount:
      Schemas$PaymentMethodConfigurationCreateBodyNzBankAccount.out.optional(),
    oxxo: Schemas$PaymentMethodConfigurationCreateBodyOxxo.out.optional(),
    p24: Schemas$PaymentMethodConfigurationCreateBodyP24.out.optional(),
    parent: z.string().optional(),
    payByBank:
      Schemas$PaymentMethodConfigurationCreateBodyPayByBank.out.optional(),
    paynow: Schemas$PaymentMethodConfigurationCreateBodyPaynow.out.optional(),
    paypal: Schemas$PaymentMethodConfigurationCreateBodyPaypal.out.optional(),
    promptpay:
      Schemas$PaymentMethodConfigurationCreateBodyPromptpay.out.optional(),
    revolutPay:
      Schemas$PaymentMethodConfigurationCreateBodyRevolutPay.out.optional(),
    satispay:
      Schemas$PaymentMethodConfigurationCreateBodySatispay.out.optional(),
    sepaDebit:
      Schemas$PaymentMethodConfigurationCreateBodySepaDebit.out.optional(),
    sofort: Schemas$PaymentMethodConfigurationCreateBodySofort.out.optional(),
    swish: Schemas$PaymentMethodConfigurationCreateBodySwish.out.optional(),
    twint: Schemas$PaymentMethodConfigurationCreateBodyTwint.out.optional(),
    usBankAccount:
      Schemas$PaymentMethodConfigurationCreateBodyUsBankAccount.out.optional(),
    wechatPay:
      Schemas$PaymentMethodConfigurationCreateBodyWechatPay.out.optional(),
    zip: Schemas$PaymentMethodConfigurationCreateBodyZip.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebit: "acss_debit",
      affirm: "affirm",
      afterpayClearpay: "afterpay_clearpay",
      alipay: "alipay",
      alma: "alma",
      amazonPay: "amazon_pay",
      applePay: "apple_pay",
      applePayLater: "apple_pay_later",
      auBecsDebit: "au_becs_debit",
      bacsDebit: "bacs_debit",
      bancontact: "bancontact",
      billie: "billie",
      blik: "blik",
      boleto: "boleto",
      card: "card",
      cartesBancaires: "cartes_bancaires",
      cashapp: "cashapp",
      customerBalance: "customer_balance",
      eps: "eps",
      expand: "expand",
      fpx: "fpx",
      giropay: "giropay",
      googlePay: "google_pay",
      grabpay: "grabpay",
      ideal: "ideal",
      jcb: "jcb",
      klarna: "klarna",
      konbini: "konbini",
      link: "link",
      mobilepay: "mobilepay",
      multibanco: "multibanco",
      name: "name",
      nzBankAccount: "nz_bank_account",
      oxxo: "oxxo",
      p24: "p24",
      parent: "parent",
      payByBank: "pay_by_bank",
      paynow: "paynow",
      paypal: "paypal",
      promptpay: "promptpay",
      revolutPay: "revolut_pay",
      satispay: "satispay",
      sepaDebit: "sepa_debit",
      sofort: "sofort",
      swish: "swish",
      twint: "twint",
      usBankAccount: "us_bank_account",
      wechatPay: "wechat_pay",
      zip: "zip",
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
   * Canadian pre-authorized debit payments, check this [page](https://stripe.com/docs/payments/acss-debit) for more details like country availability.
   */
  acssDebit?: PaymentMethodConfigurationUpdateBodyAcssDebit | undefined;
  /**
   * Whether the configuration can be used for new payments.
   */
  active?: boolean | undefined;
  /**
   * [Affirm](https://www.affirm.com/) gives your customers a way to split purchases over a series of payments. Depending on the purchase, they can pay with four interest-free payments (Split Pay) or pay over a longer term (Installments), which might include interest. Check this [page](https://stripe.com/docs/payments/affirm) for more details like country availability.
   */
  affirm?: PaymentMethodConfigurationUpdateBodyAffirm | undefined;
  /**
   * Afterpay gives your customers a way to pay for purchases in installments, check this [page](https://stripe.com/docs/payments/afterpay-clearpay) for more details like country availability. Afterpay is particularly popular among businesses selling fashion, beauty, and sports products.
   */
  afterpayClearpay?:
    | PaymentMethodConfigurationUpdateBodyAfterpayClearpay
    | undefined;
  /**
   * Alipay is a digital wallet in China that has more than a billion active users worldwide. Alipay users can pay on the web or on a mobile device using login credentials or their Alipay app. Alipay has a low dispute rate and reduces fraud by authenticating payments using the customer's login credentials. Check this [page](https://stripe.com/docs/payments/alipay) for more details.
   */
  alipay?: PaymentMethodConfigurationUpdateBodyAlipay | undefined;
  /**
   * Alma is a Buy Now, Pay Later payment method that offers customers the ability to pay in 2, 3, or 4 installments.
   */
  alma?: PaymentMethodConfigurationUpdateBodyAlma | undefined;
  /**
   * Amazon Pay is a wallet payment method that lets your customers check out the same way as on Amazon.
   */
  amazonPay?: PaymentMethodConfigurationUpdateBodyAmazonPay | undefined;
  /**
   * Stripe users can accept [Apple Pay](/payments/apple-pay) in iOS applications in iOS 9 and later, and on the web in Safari starting with iOS 10 or macOS Sierra. There are no additional fees to process Apple Pay payments, and the [pricing](/pricing) is the same as other card transactions. Check this [page](https://stripe.com/docs/apple-pay) for more details.
   */
  applePay?: PaymentMethodConfigurationUpdateBodyApplePay | undefined;
  /**
   * Apple Pay Later, a payment method for customers to buy now and pay later, gives your customers a way to split purchases into four installments across six weeks.
   */
  applePayLater?: PaymentMethodConfigurationUpdateBodyApplePayLater | undefined;
  /**
   * Stripe users in Australia can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with an Australian bank account. Check this [page](https://stripe.com/docs/payments/au-becs-debit) for more details.
   */
  auBecsDebit?: PaymentMethodConfigurationUpdateBodyAuBecsDebit | undefined;
  /**
   * Stripe users in the UK can accept Bacs Direct Debit payments from customers with a UK bank account, check this [page](https://stripe.com/docs/payments/payment-methods/bacs-debit) for more details.
   */
  bacsDebit?: PaymentMethodConfigurationUpdateBodyBacsDebit | undefined;
  /**
   * Bancontact is the most popular online payment method in Belgium, with over 15 million cards in circulation. [Customers](https://stripe.com/docs/api/customers) use a Bancontact card or mobile app linked to a Belgian bank account to make online payments that are secure, guaranteed, and confirmed immediately. Check this [page](https://stripe.com/docs/payments/bancontact) for more details.
   */
  bancontact?: PaymentMethodConfigurationUpdateBodyBancontact | undefined;
  /**
   * Billie is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method that offers businesses Pay by Invoice where they offer payment terms ranging from 7-120 days. Customers are redirected from your website or app, authorize the payment with Billie, then return to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
   */
  billie?: PaymentMethodConfigurationUpdateBodyBillie | undefined;
  /**
   * BLIK is a [single use](https://stripe.com/docs/payments/payment-methods#usage) payment method that requires customers to authenticate their payments. When customers want to pay online using BLIK, they request a six-digit code from their banking application and enter it into the payment collection form. Check this [page](https://stripe.com/docs/payments/blik) for more details.
   */
  blik?: PaymentMethodConfigurationUpdateBodyBlik | undefined;
  /**
   * Boleto is an official (regulated by the Central Bank of Brazil) payment method in Brazil. Check this [page](https://stripe.com/docs/payments/boleto) for more details.
   */
  boleto?: PaymentMethodConfigurationUpdateBodyBoleto | undefined;
  /**
   * Cards are a popular way for consumers and businesses to pay online or in person. Stripe supports global and local card networks.
   */
  card?: PaymentMethodConfigurationUpdateBodyCard | undefined;
  /**
   * Cartes Bancaires is France's local card network. More than 95% of these cards are co-branded with either Visa or Mastercard, meaning you can process these cards over either Cartes Bancaires or the Visa or Mastercard networks. Check this [page](https://stripe.com/docs/payments/cartes-bancaires) for more details.
   */
  cartesBancaires?:
    | PaymentMethodConfigurationUpdateBodyCartesBancaires
    | undefined;
  /**
   * Cash App is a popular consumer app in the US that allows customers to bank, invest, send, and receive money using their digital wallet. Check this [page](https://stripe.com/docs/payments/cash-app-pay) for more details.
   */
  cashapp?: PaymentMethodConfigurationUpdateBodyCashapp | undefined;
  /**
   * Uses a customer’s [cash balance](https://stripe.com/docs/payments/customer-balance) for the payment. The cash balance can be funded via a bank transfer. Check this [page](https://stripe.com/docs/payments/bank-transfers) for more details.
   */
  customerBalance?:
    | PaymentMethodConfigurationUpdateBodyCustomerBalance
    | undefined;
  /**
   * EPS is an Austria-based payment method that allows customers to complete transactions online using their bank credentials. EPS is supported by all Austrian banks and is accepted by over 80% of Austrian online retailers. Check this [page](https://stripe.com/docs/payments/eps) for more details.
   */
  eps?: PaymentMethodConfigurationUpdateBodyEps | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Financial Process Exchange (FPX) is a Malaysia-based payment method that allows customers to complete transactions online using their bank credentials. Bank Negara Malaysia (BNM), the Central Bank of Malaysia, and eleven other major Malaysian financial institutions are members of the PayNet Group, which owns and operates FPX. It is one of the most popular online payment methods in Malaysia, with nearly 90 million transactions in 2018 according to BNM. Check this [page](https://stripe.com/docs/payments/fpx) for more details.
   */
  fpx?: PaymentMethodConfigurationUpdateBodyFpx | undefined;
  /**
   * giropay is a German payment method based on online banking, introduced in 2006. It allows customers to complete transactions online using their online banking environment, with funds debited from their bank account. Depending on their bank, customers confirm payments on giropay using a second factor of authentication or a PIN. giropay accounts for 10% of online checkouts in Germany. Check this [page](https://stripe.com/docs/payments/giropay) for more details.
   */
  giropay?: PaymentMethodConfigurationUpdateBodyGiropay | undefined;
  /**
   * Google Pay allows customers to make payments in your app or website using any credit or debit card saved to their Google Account, including those from Google Play, YouTube, Chrome, or an Android device. Use the Google Pay API to request any credit or debit card stored in your customer's Google account. Check this [page](https://stripe.com/docs/google-pay) for more details.
   */
  googlePay?: PaymentMethodConfigurationUpdateBodyGooglePay | undefined;
  /**
   * GrabPay is a payment method developed by [Grab](https://www.grab.com/sg/consumer/finance/pay/). GrabPay is a digital wallet - customers maintain a balance in their wallets that they pay out with. Check this [page](https://stripe.com/docs/payments/grabpay) for more details.
   */
  grabpay?: PaymentMethodConfigurationUpdateBodyGrabpay | undefined;
  /**
   * iDEAL is a Netherlands-based payment method that allows customers to complete transactions online using their bank credentials. All major Dutch banks are members of Currence, the scheme that operates iDEAL, making it the most popular online payment method in the Netherlands with a share of online transactions close to 55%. Check this [page](https://stripe.com/docs/payments/ideal) for more details.
   */
  ideal?: PaymentMethodConfigurationUpdateBodyIdeal | undefined;
  /**
   * JCB is a credit card company based in Japan. JCB is currently available in Japan to businesses approved by JCB, and available to all businesses in Australia, Canada, Hong Kong, Japan, New Zealand, Singapore, Switzerland, United Kingdom, United States, and all countries in the European Economic Area except Iceland. Check this [page](https://support.stripe.com/questions/accepting-japan-credit-bureau-%28jcb%29-payments) for more details.
   */
  jcb?: PaymentMethodConfigurationUpdateBodyJcb | undefined;
  /**
   * Klarna gives customers a range of [payment options](https://stripe.com/docs/payments/klarna#payment-options) during checkout. Available payment options vary depending on the customer's billing address and the transaction amount. These payment options make it convenient for customers to purchase items in all price ranges. Check this [page](https://stripe.com/docs/payments/klarna) for more details.
   */
  klarna?: PaymentMethodConfigurationUpdateBodyKlarna | undefined;
  /**
   * Konbini allows customers in Japan to pay for bills and online purchases at convenience stores with cash. Check this [page](https://stripe.com/docs/payments/konbini) for more details.
   */
  konbini?: PaymentMethodConfigurationUpdateBodyKonbini | undefined;
  /**
   * [Link](https://stripe.com/docs/payments/link) is a payment method network. With Link, users save their payment details once, then reuse that information to pay with one click for any business on the network.
   */
  link?: PaymentMethodConfigurationUpdateBodyLink | undefined;
  /**
   * MobilePay is a [single-use](https://stripe.com/docs/payments/payment-methods#usage) card wallet payment method used in Denmark and Finland. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the MobilePay app. Check this [page](https://stripe.com/docs/payments/mobilepay) for more details.
   */
  mobilepay?: PaymentMethodConfigurationUpdateBodyMobilepay | undefined;
  /**
   * Stripe users in Europe and the United States can accept Multibanco payments from customers in Portugal using [Sources](https://stripe.com/docs/sources)—a single integration path for creating payments using any supported method.
   */
  multibanco?: PaymentMethodConfigurationUpdateBodyMultibanco | undefined;
  /**
   * Configuration name.
   */
  name?: string | undefined;
  /**
   * Stripe users in New Zealand can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with a New Zeland bank account. Check this [page](https://stripe.com/docs/payments/nz-bank-account) for more details.
   */
  nzBankAccount?: PaymentMethodConfigurationUpdateBodyNzBankAccount | undefined;
  /**
   * OXXO is a Mexican chain of convenience stores with thousands of locations across Latin America and represents nearly 20% of online transactions in Mexico. OXXO allows customers to pay bills and online purchases in-store with cash. Check this [page](https://stripe.com/docs/payments/oxxo) for more details.
   */
  oxxo?: PaymentMethodConfigurationUpdateBodyOxxo | undefined;
  /**
   * Przelewy24 is a Poland-based payment method aggregator that allows customers to complete transactions online using bank transfers and other methods. Bank transfers account for 30% of online payments in Poland and Przelewy24 provides a way for customers to pay with over 165 banks. Check this [page](https://stripe.com/docs/payments/p24) for more details.
   */
  p24?: PaymentMethodConfigurationUpdateBodyP24 | undefined;
  /**
   * Pay by bank is a redirect payment method backed by bank transfers. A customer is redirected to their bank to authorize a bank transfer for a given amount. This removes a lot of the error risks inherent in waiting for the customer to initiate a transfer themselves, and is less expensive than card payments.
   */
  payByBank?: PaymentMethodConfigurationUpdateBodyPayByBank | undefined;
  /**
   * PayNow is a Singapore-based payment method that allows customers to make a payment using their preferred app from participating banks and participating non-bank financial institutions. Check this [page](https://stripe.com/docs/payments/paynow) for more details.
   */
  paynow?: PaymentMethodConfigurationUpdateBodyPaynow | undefined;
  /**
   * PayPal, a digital wallet popular with customers in Europe, allows your customers worldwide to pay using their PayPal account. Check this [page](https://stripe.com/docs/payments/paypal) for more details.
   */
  paypal?: PaymentMethodConfigurationUpdateBodyPaypal | undefined;
  /**
   * PromptPay is a Thailand-based payment method that allows customers to make a payment using their preferred app from participating banks. Check this [page](https://stripe.com/docs/payments/promptpay) for more details.
   */
  promptpay?: PaymentMethodConfigurationUpdateBodyPromptpay | undefined;
  /**
   * Revolut Pay, developed by Revolut, a global finance app, is a digital wallet payment method. Revolut Pay uses the customer’s stored balance or cards to fund the payment, and offers the option for non-Revolut customers to save their details after their first purchase.
   */
  revolutPay?: PaymentMethodConfigurationUpdateBodyRevolutPay | undefined;
  /**
   * Satispay is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method where customers are required to [authenticate](/payments/payment-methods#customer-actions) their payment. Customers pay by being redirected from your website or app, authorizing the payment with Satispay, then returning to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
   */
  satispay?: PaymentMethodConfigurationUpdateBodySatispay | undefined;
  /**
   * The [Single Euro Payments Area (SEPA)](https://en.wikipedia.org/wiki/Single_Euro_Payments_Area) is an initiative of the European Union to simplify payments within and across member countries. SEPA established and enforced banking standards to allow for the direct debiting of every EUR-denominated bank account within the SEPA region, check this [page](https://stripe.com/docs/payments/sepa-debit) for more details.
   */
  sepaDebit?: PaymentMethodConfigurationUpdateBodySepaDebit | undefined;
  /**
   * Stripe users in Europe and the United States can use the [Payment Intents API](https://stripe.com/docs/payments/payment-intents)—a single integration path for creating payments using any supported method—to accept [Sofort](https://www.sofort.com/) payments from customers. Check this [page](https://stripe.com/docs/payments/sofort) for more details.
   */
  sofort?: PaymentMethodConfigurationUpdateBodySofort | undefined;
  /**
   * Swish is a [real-time](https://stripe.com/docs/payments/real-time) payment method popular in Sweden. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the Swish mobile app and the Swedish BankID mobile app. Check this [page](https://stripe.com/docs/payments/swish) for more details.
   */
  swish?: PaymentMethodConfigurationUpdateBodySwish | undefined;
  /**
   * Twint is a payment method popular in Switzerland. It allows customers to pay using their mobile phone. Check this [page](https://docs.stripe.com/payments/twint) for more details.
   */
  twint?: PaymentMethodConfigurationUpdateBodyTwint | undefined;
  /**
   * Stripe users in the United States can accept ACH direct debit payments from customers with a US bank account using the Automated Clearing House (ACH) payments system operated by Nacha. Check this [page](https://stripe.com/docs/payments/ach-direct-debit) for more details.
   */
  usBankAccount?: PaymentMethodConfigurationUpdateBodyUsBankAccount | undefined;
  /**
   * WeChat, owned by Tencent, is China's leading mobile app with over 1 billion monthly active users. Chinese consumers can use WeChat Pay to pay for goods and services inside of businesses' apps and websites. WeChat Pay users buy most frequently in gaming, e-commerce, travel, online education, and food/nutrition. Check this [page](https://stripe.com/docs/payments/wechat-pay) for more details.
   */
  wechatPay?: PaymentMethodConfigurationUpdateBodyWechatPay | undefined;
  /**
   * Zip gives your customers a way to split purchases over a series of payments. Check this [page](https://stripe.com/docs/payments/zip) for more details like country availability.
   */
  zip?: PaymentMethodConfigurationUpdateBodyZip | undefined;
  configuration: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  acss_debit?:
    | External$PaymentMethodConfigurationUpdateBodyAcssDebit
    | undefined;
  active?: boolean | undefined;
  affirm?: External$PaymentMethodConfigurationUpdateBodyAffirm | undefined;
  afterpay_clearpay?:
    | External$PaymentMethodConfigurationUpdateBodyAfterpayClearpay
    | undefined;
  alipay?: External$PaymentMethodConfigurationUpdateBodyAlipay | undefined;
  alma?: External$PaymentMethodConfigurationUpdateBodyAlma | undefined;
  amazon_pay?:
    | External$PaymentMethodConfigurationUpdateBodyAmazonPay
    | undefined;
  apple_pay?: External$PaymentMethodConfigurationUpdateBodyApplePay | undefined;
  apple_pay_later?:
    | External$PaymentMethodConfigurationUpdateBodyApplePayLater
    | undefined;
  au_becs_debit?:
    | External$PaymentMethodConfigurationUpdateBodyAuBecsDebit
    | undefined;
  bacs_debit?:
    | External$PaymentMethodConfigurationUpdateBodyBacsDebit
    | undefined;
  bancontact?:
    | External$PaymentMethodConfigurationUpdateBodyBancontact
    | undefined;
  billie?: External$PaymentMethodConfigurationUpdateBodyBillie | undefined;
  blik?: External$PaymentMethodConfigurationUpdateBodyBlik | undefined;
  boleto?: External$PaymentMethodConfigurationUpdateBodyBoleto | undefined;
  card?: External$PaymentMethodConfigurationUpdateBodyCard | undefined;
  cartes_bancaires?:
    | External$PaymentMethodConfigurationUpdateBodyCartesBancaires
    | undefined;
  cashapp?: External$PaymentMethodConfigurationUpdateBodyCashapp | undefined;
  customer_balance?:
    | External$PaymentMethodConfigurationUpdateBodyCustomerBalance
    | undefined;
  eps?: External$PaymentMethodConfigurationUpdateBodyEps | undefined;
  expand?: string[] | undefined;
  fpx?: External$PaymentMethodConfigurationUpdateBodyFpx | undefined;
  giropay?: External$PaymentMethodConfigurationUpdateBodyGiropay | undefined;
  google_pay?:
    | External$PaymentMethodConfigurationUpdateBodyGooglePay
    | undefined;
  grabpay?: External$PaymentMethodConfigurationUpdateBodyGrabpay | undefined;
  ideal?: External$PaymentMethodConfigurationUpdateBodyIdeal | undefined;
  jcb?: External$PaymentMethodConfigurationUpdateBodyJcb | undefined;
  klarna?: External$PaymentMethodConfigurationUpdateBodyKlarna | undefined;
  konbini?: External$PaymentMethodConfigurationUpdateBodyKonbini | undefined;
  link?: External$PaymentMethodConfigurationUpdateBodyLink | undefined;
  mobilepay?:
    | External$PaymentMethodConfigurationUpdateBodyMobilepay
    | undefined;
  multibanco?:
    | External$PaymentMethodConfigurationUpdateBodyMultibanco
    | undefined;
  name?: string | undefined;
  nz_bank_account?:
    | External$PaymentMethodConfigurationUpdateBodyNzBankAccount
    | undefined;
  oxxo?: External$PaymentMethodConfigurationUpdateBodyOxxo | undefined;
  p24?: External$PaymentMethodConfigurationUpdateBodyP24 | undefined;
  pay_by_bank?:
    | External$PaymentMethodConfigurationUpdateBodyPayByBank
    | undefined;
  paynow?: External$PaymentMethodConfigurationUpdateBodyPaynow | undefined;
  paypal?: External$PaymentMethodConfigurationUpdateBodyPaypal | undefined;
  promptpay?:
    | External$PaymentMethodConfigurationUpdateBodyPromptpay
    | undefined;
  revolut_pay?:
    | External$PaymentMethodConfigurationUpdateBodyRevolutPay
    | undefined;
  satispay?: External$PaymentMethodConfigurationUpdateBodySatispay | undefined;
  sepa_debit?:
    | External$PaymentMethodConfigurationUpdateBodySepaDebit
    | undefined;
  sofort?: External$PaymentMethodConfigurationUpdateBodySofort | undefined;
  swish?: External$PaymentMethodConfigurationUpdateBodySwish | undefined;
  twint?: External$PaymentMethodConfigurationUpdateBodyTwint | undefined;
  us_bank_account?:
    | External$PaymentMethodConfigurationUpdateBodyUsBankAccount
    | undefined;
  wechat_pay?:
    | External$PaymentMethodConfigurationUpdateBodyWechatPay
    | undefined;
  zip?: External$PaymentMethodConfigurationUpdateBodyZip | undefined;
  configuration: string;
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
    acss_debit:
      Schemas$PaymentMethodConfigurationUpdateBodyAcssDebit.in.optional(),
    active: z.boolean().optional(),
    affirm: Schemas$PaymentMethodConfigurationUpdateBodyAffirm.in.optional(),
    afterpay_clearpay:
      Schemas$PaymentMethodConfigurationUpdateBodyAfterpayClearpay.in.optional(),
    alipay: Schemas$PaymentMethodConfigurationUpdateBodyAlipay.in.optional(),
    alma: Schemas$PaymentMethodConfigurationUpdateBodyAlma.in.optional(),
    amazon_pay:
      Schemas$PaymentMethodConfigurationUpdateBodyAmazonPay.in.optional(),
    apple_pay:
      Schemas$PaymentMethodConfigurationUpdateBodyApplePay.in.optional(),
    apple_pay_later:
      Schemas$PaymentMethodConfigurationUpdateBodyApplePayLater.in.optional(),
    au_becs_debit:
      Schemas$PaymentMethodConfigurationUpdateBodyAuBecsDebit.in.optional(),
    bacs_debit:
      Schemas$PaymentMethodConfigurationUpdateBodyBacsDebit.in.optional(),
    bancontact:
      Schemas$PaymentMethodConfigurationUpdateBodyBancontact.in.optional(),
    billie: Schemas$PaymentMethodConfigurationUpdateBodyBillie.in.optional(),
    blik: Schemas$PaymentMethodConfigurationUpdateBodyBlik.in.optional(),
    boleto: Schemas$PaymentMethodConfigurationUpdateBodyBoleto.in.optional(),
    card: Schemas$PaymentMethodConfigurationUpdateBodyCard.in.optional(),
    cartes_bancaires:
      Schemas$PaymentMethodConfigurationUpdateBodyCartesBancaires.in.optional(),
    cashapp: Schemas$PaymentMethodConfigurationUpdateBodyCashapp.in.optional(),
    customer_balance:
      Schemas$PaymentMethodConfigurationUpdateBodyCustomerBalance.in.optional(),
    eps: Schemas$PaymentMethodConfigurationUpdateBodyEps.in.optional(),
    expand: z.array(z.string()).optional(),
    fpx: Schemas$PaymentMethodConfigurationUpdateBodyFpx.in.optional(),
    giropay: Schemas$PaymentMethodConfigurationUpdateBodyGiropay.in.optional(),
    google_pay:
      Schemas$PaymentMethodConfigurationUpdateBodyGooglePay.in.optional(),
    grabpay: Schemas$PaymentMethodConfigurationUpdateBodyGrabpay.in.optional(),
    ideal: Schemas$PaymentMethodConfigurationUpdateBodyIdeal.in.optional(),
    jcb: Schemas$PaymentMethodConfigurationUpdateBodyJcb.in.optional(),
    klarna: Schemas$PaymentMethodConfigurationUpdateBodyKlarna.in.optional(),
    konbini: Schemas$PaymentMethodConfigurationUpdateBodyKonbini.in.optional(),
    link: Schemas$PaymentMethodConfigurationUpdateBodyLink.in.optional(),
    mobilepay:
      Schemas$PaymentMethodConfigurationUpdateBodyMobilepay.in.optional(),
    multibanco:
      Schemas$PaymentMethodConfigurationUpdateBodyMultibanco.in.optional(),
    name: z.string().optional(),
    nz_bank_account:
      Schemas$PaymentMethodConfigurationUpdateBodyNzBankAccount.in.optional(),
    oxxo: Schemas$PaymentMethodConfigurationUpdateBodyOxxo.in.optional(),
    p24: Schemas$PaymentMethodConfigurationUpdateBodyP24.in.optional(),
    pay_by_bank:
      Schemas$PaymentMethodConfigurationUpdateBodyPayByBank.in.optional(),
    paynow: Schemas$PaymentMethodConfigurationUpdateBodyPaynow.in.optional(),
    paypal: Schemas$PaymentMethodConfigurationUpdateBodyPaypal.in.optional(),
    promptpay:
      Schemas$PaymentMethodConfigurationUpdateBodyPromptpay.in.optional(),
    revolut_pay:
      Schemas$PaymentMethodConfigurationUpdateBodyRevolutPay.in.optional(),
    satispay:
      Schemas$PaymentMethodConfigurationUpdateBodySatispay.in.optional(),
    sepa_debit:
      Schemas$PaymentMethodConfigurationUpdateBodySepaDebit.in.optional(),
    sofort: Schemas$PaymentMethodConfigurationUpdateBodySofort.in.optional(),
    swish: Schemas$PaymentMethodConfigurationUpdateBodySwish.in.optional(),
    twint: Schemas$PaymentMethodConfigurationUpdateBodyTwint.in.optional(),
    us_bank_account:
      Schemas$PaymentMethodConfigurationUpdateBodyUsBankAccount.in.optional(),
    wechat_pay:
      Schemas$PaymentMethodConfigurationUpdateBodyWechatPay.in.optional(),
    zip: Schemas$PaymentMethodConfigurationUpdateBodyZip.in.optional(),
    configuration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit: "acssDebit",
      active: "active",
      affirm: "affirm",
      afterpay_clearpay: "afterpayClearpay",
      alipay: "alipay",
      alma: "alma",
      amazon_pay: "amazonPay",
      apple_pay: "applePay",
      apple_pay_later: "applePayLater",
      au_becs_debit: "auBecsDebit",
      bacs_debit: "bacsDebit",
      bancontact: "bancontact",
      billie: "billie",
      blik: "blik",
      boleto: "boleto",
      card: "card",
      cartes_bancaires: "cartesBancaires",
      cashapp: "cashapp",
      customer_balance: "customerBalance",
      eps: "eps",
      expand: "expand",
      fpx: "fpx",
      giropay: "giropay",
      google_pay: "googlePay",
      grabpay: "grabpay",
      ideal: "ideal",
      jcb: "jcb",
      klarna: "klarna",
      konbini: "konbini",
      link: "link",
      mobilepay: "mobilepay",
      multibanco: "multibanco",
      name: "name",
      nz_bank_account: "nzBankAccount",
      oxxo: "oxxo",
      p24: "p24",
      pay_by_bank: "payByBank",
      paynow: "paynow",
      paypal: "paypal",
      promptpay: "promptpay",
      revolut_pay: "revolutPay",
      satispay: "satispay",
      sepa_debit: "sepaDebit",
      sofort: "sofort",
      swish: "swish",
      twint: "twint",
      us_bank_account: "usBankAccount",
      wechat_pay: "wechatPay",
      zip: "zip",
      configuration: "configuration",
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
    acssDebit:
      Schemas$PaymentMethodConfigurationUpdateBodyAcssDebit.out.optional(),
    active: z.boolean().optional(),
    affirm: Schemas$PaymentMethodConfigurationUpdateBodyAffirm.out.optional(),
    afterpayClearpay:
      Schemas$PaymentMethodConfigurationUpdateBodyAfterpayClearpay.out.optional(),
    alipay: Schemas$PaymentMethodConfigurationUpdateBodyAlipay.out.optional(),
    alma: Schemas$PaymentMethodConfigurationUpdateBodyAlma.out.optional(),
    amazonPay:
      Schemas$PaymentMethodConfigurationUpdateBodyAmazonPay.out.optional(),
    applePay:
      Schemas$PaymentMethodConfigurationUpdateBodyApplePay.out.optional(),
    applePayLater:
      Schemas$PaymentMethodConfigurationUpdateBodyApplePayLater.out.optional(),
    auBecsDebit:
      Schemas$PaymentMethodConfigurationUpdateBodyAuBecsDebit.out.optional(),
    bacsDebit:
      Schemas$PaymentMethodConfigurationUpdateBodyBacsDebit.out.optional(),
    bancontact:
      Schemas$PaymentMethodConfigurationUpdateBodyBancontact.out.optional(),
    billie: Schemas$PaymentMethodConfigurationUpdateBodyBillie.out.optional(),
    blik: Schemas$PaymentMethodConfigurationUpdateBodyBlik.out.optional(),
    boleto: Schemas$PaymentMethodConfigurationUpdateBodyBoleto.out.optional(),
    card: Schemas$PaymentMethodConfigurationUpdateBodyCard.out.optional(),
    cartesBancaires:
      Schemas$PaymentMethodConfigurationUpdateBodyCartesBancaires.out.optional(),
    cashapp: Schemas$PaymentMethodConfigurationUpdateBodyCashapp.out.optional(),
    customerBalance:
      Schemas$PaymentMethodConfigurationUpdateBodyCustomerBalance.out.optional(),
    eps: Schemas$PaymentMethodConfigurationUpdateBodyEps.out.optional(),
    expand: z.array(z.string()).optional(),
    fpx: Schemas$PaymentMethodConfigurationUpdateBodyFpx.out.optional(),
    giropay: Schemas$PaymentMethodConfigurationUpdateBodyGiropay.out.optional(),
    googlePay:
      Schemas$PaymentMethodConfigurationUpdateBodyGooglePay.out.optional(),
    grabpay: Schemas$PaymentMethodConfigurationUpdateBodyGrabpay.out.optional(),
    ideal: Schemas$PaymentMethodConfigurationUpdateBodyIdeal.out.optional(),
    jcb: Schemas$PaymentMethodConfigurationUpdateBodyJcb.out.optional(),
    klarna: Schemas$PaymentMethodConfigurationUpdateBodyKlarna.out.optional(),
    konbini: Schemas$PaymentMethodConfigurationUpdateBodyKonbini.out.optional(),
    link: Schemas$PaymentMethodConfigurationUpdateBodyLink.out.optional(),
    mobilepay:
      Schemas$PaymentMethodConfigurationUpdateBodyMobilepay.out.optional(),
    multibanco:
      Schemas$PaymentMethodConfigurationUpdateBodyMultibanco.out.optional(),
    name: z.string().optional(),
    nzBankAccount:
      Schemas$PaymentMethodConfigurationUpdateBodyNzBankAccount.out.optional(),
    oxxo: Schemas$PaymentMethodConfigurationUpdateBodyOxxo.out.optional(),
    p24: Schemas$PaymentMethodConfigurationUpdateBodyP24.out.optional(),
    payByBank:
      Schemas$PaymentMethodConfigurationUpdateBodyPayByBank.out.optional(),
    paynow: Schemas$PaymentMethodConfigurationUpdateBodyPaynow.out.optional(),
    paypal: Schemas$PaymentMethodConfigurationUpdateBodyPaypal.out.optional(),
    promptpay:
      Schemas$PaymentMethodConfigurationUpdateBodyPromptpay.out.optional(),
    revolutPay:
      Schemas$PaymentMethodConfigurationUpdateBodyRevolutPay.out.optional(),
    satispay:
      Schemas$PaymentMethodConfigurationUpdateBodySatispay.out.optional(),
    sepaDebit:
      Schemas$PaymentMethodConfigurationUpdateBodySepaDebit.out.optional(),
    sofort: Schemas$PaymentMethodConfigurationUpdateBodySofort.out.optional(),
    swish: Schemas$PaymentMethodConfigurationUpdateBodySwish.out.optional(),
    twint: Schemas$PaymentMethodConfigurationUpdateBodyTwint.out.optional(),
    usBankAccount:
      Schemas$PaymentMethodConfigurationUpdateBodyUsBankAccount.out.optional(),
    wechatPay:
      Schemas$PaymentMethodConfigurationUpdateBodyWechatPay.out.optional(),
    zip: Schemas$PaymentMethodConfigurationUpdateBodyZip.out.optional(),
    configuration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebit: "acss_debit",
      active: "active",
      affirm: "affirm",
      afterpayClearpay: "afterpay_clearpay",
      alipay: "alipay",
      alma: "alma",
      amazonPay: "amazon_pay",
      applePay: "apple_pay",
      applePayLater: "apple_pay_later",
      auBecsDebit: "au_becs_debit",
      bacsDebit: "bacs_debit",
      bancontact: "bancontact",
      billie: "billie",
      blik: "blik",
      boleto: "boleto",
      card: "card",
      cartesBancaires: "cartes_bancaires",
      cashapp: "cashapp",
      customerBalance: "customer_balance",
      eps: "eps",
      expand: "expand",
      fpx: "fpx",
      giropay: "giropay",
      googlePay: "google_pay",
      grabpay: "grabpay",
      ideal: "ideal",
      jcb: "jcb",
      klarna: "klarna",
      konbini: "konbini",
      link: "link",
      mobilepay: "mobilepay",
      multibanco: "multibanco",
      name: "name",
      nzBankAccount: "nz_bank_account",
      oxxo: "oxxo",
      p24: "p24",
      payByBank: "pay_by_bank",
      paynow: "paynow",
      paypal: "paypal",
      promptpay: "promptpay",
      revolutPay: "revolut_pay",
      satispay: "satispay",
      sepaDebit: "sepa_debit",
      sofort: "sofort",
      swish: "swish",
      twint: "twint",
      usBankAccount: "us_bank_account",
      wechatPay: "wechat_pay",
      zip: "zip",
      configuration: "configuration",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
