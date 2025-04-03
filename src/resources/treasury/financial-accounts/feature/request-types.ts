import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing,
  TreasuryFinancialAccountsFeatureCreateBodyCardIssuing,
} from "@sideko-inc/stripe/types/treasury-financial-accounts-feature-create-body-card-issuing";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance,
  TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance,
} from "@sideko-inc/stripe/types/treasury-financial-accounts-feature-create-body-deposit-insurance";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses,
  TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses,
} from "@sideko-inc/stripe/types/treasury-financial-accounts-feature-create-body-financial-addresses";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers,
  TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers,
} from "@sideko-inc/stripe/types/treasury-financial-accounts-feature-create-body-inbound-transfers";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows,
  TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows,
} from "@sideko-inc/stripe/types/treasury-financial-accounts-feature-create-body-intra-stripe-flows";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments,
} from "@sideko-inc/stripe/types/treasury-financial-accounts-feature-create-body-outbound-payments";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers,
} from "@sideko-inc/stripe/types/treasury-financial-accounts-feature-create-body-outbound-transfers";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  financialAccount: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  data: Record<string, any>;
  financial_account: string;
  expand?: string[] | undefined;
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
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

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount.
   */
  cardIssuing?:
    | TreasuryFinancialAccountsFeatureCreateBodyCardIssuing
    | undefined;
  /**
   * Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount.
   */
  depositInsurance?:
    | TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Contains Features that add FinancialAddresses to the FinancialAccount.
   */
  financialAddresses?:
    | TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses
    | undefined;
  /**
   * Contains settings related to adding funds to a FinancialAccount from another Account with the same owner.
   */
  inboundTransfers?:
    | TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers
    | undefined;
  /**
   * Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment).
   */
  intraStripeFlows?:
    | TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows
    | undefined;
  /**
   * Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money.
   */
  outboundPayments?:
    | TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments
    | undefined;
  /**
   * Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner.
   */
  outboundTransfers?:
    | TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers
    | undefined;
  financialAccount: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  card_issuing?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing
    | undefined;
  deposit_insurance?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance
    | undefined;
  expand?: string[] | undefined;
  financial_addresses?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses
    | undefined;
  inbound_transfers?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers
    | undefined;
  intra_stripe_flows?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows
    | undefined;
  outbound_payments?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments
    | undefined;
  outbound_transfers?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers
    | undefined;
  financial_account: string;
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
    card_issuing:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing.in.optional(),
    deposit_insurance:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance.in.optional(),
    expand: z.array(z.string()).optional(),
    financial_addresses:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses.in.optional(),
    inbound_transfers:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers.in.optional(),
    intra_stripe_flows:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows.in.optional(),
    outbound_payments:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments.in.optional(),
    outbound_transfers:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers.in.optional(),
    financial_account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_issuing: "cardIssuing",
      deposit_insurance: "depositInsurance",
      expand: "expand",
      financial_addresses: "financialAddresses",
      inbound_transfers: "inboundTransfers",
      intra_stripe_flows: "intraStripeFlows",
      outbound_payments: "outboundPayments",
      outbound_transfers: "outboundTransfers",
      financial_account: "financialAccount",
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
    cardIssuing:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing.out.optional(),
    depositInsurance:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance.out.optional(),
    expand: z.array(z.string()).optional(),
    financialAddresses:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses.out.optional(),
    inboundTransfers:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers.out.optional(),
    intraStripeFlows:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows.out.optional(),
    outboundPayments:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments.out.optional(),
    outboundTransfers:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers.out.optional(),
    financialAccount: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardIssuing: "card_issuing",
      depositInsurance: "deposit_insurance",
      expand: "expand",
      financialAddresses: "financial_addresses",
      inboundTransfers: "inbound_transfers",
      intraStripeFlows: "intra_stripe_flows",
      outboundPayments: "outbound_payments",
      outboundTransfers: "outbound_transfers",
      financialAccount: "financial_account",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
