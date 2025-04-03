import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TerminalConfigurationCreateBodyBbposWiseposE,
  Schemas$TerminalConfigurationCreateBodyBbposWiseposE,
  TerminalConfigurationCreateBodyBbposWiseposE,
} from "@sideko-inc/stripe/types/terminal-configuration-create-body-bbpos-wisepos-e";
import {
  External$TerminalConfigurationCreateBodyOfflineObj0,
  Schemas$TerminalConfigurationCreateBodyOfflineObj0,
  TerminalConfigurationCreateBodyOfflineObj0,
} from "@sideko-inc/stripe/types/terminal-configuration-create-body-offline-obj0";
import {
  External$TerminalConfigurationCreateBodyRebootWindow,
  Schemas$TerminalConfigurationCreateBodyRebootWindow,
  TerminalConfigurationCreateBodyRebootWindow,
} from "@sideko-inc/stripe/types/terminal-configuration-create-body-reboot-window";
import {
  External$TerminalConfigurationCreateBodyStripeS700,
  Schemas$TerminalConfigurationCreateBodyStripeS700,
  TerminalConfigurationCreateBodyStripeS700,
} from "@sideko-inc/stripe/types/terminal-configuration-create-body-stripe-s700";
import {
  External$TerminalConfigurationCreateBodyTippingObj0,
  Schemas$TerminalConfigurationCreateBodyTippingObj0,
  TerminalConfigurationCreateBodyTippingObj0,
} from "@sideko-inc/stripe/types/terminal-configuration-create-body-tipping-obj0";
import {
  External$TerminalConfigurationCreateBodyVerifoneP400,
  Schemas$TerminalConfigurationCreateBodyVerifoneP400,
  TerminalConfigurationCreateBodyVerifoneP400,
} from "@sideko-inc/stripe/types/terminal-configuration-create-body-verifone-p400";
import {
  External$TerminalConfigurationCreateBodyWifiObj0,
  Schemas$TerminalConfigurationCreateBodyWifiObj0,
  TerminalConfigurationCreateBodyWifiObj0,
} from "@sideko-inc/stripe/types/terminal-configuration-create-body-wifi-obj0";
import {
  External$TerminalConfigurationUpdateBodyBbposWiseposEObj0,
  Schemas$TerminalConfigurationUpdateBodyBbposWiseposEObj0,
  TerminalConfigurationUpdateBodyBbposWiseposEObj0,
} from "@sideko-inc/stripe/types/terminal-configuration-update-body-bbpos-wisepos-e-obj0";
import {
  External$TerminalConfigurationUpdateBodyOfflineObj0,
  Schemas$TerminalConfigurationUpdateBodyOfflineObj0,
  TerminalConfigurationUpdateBodyOfflineObj0,
} from "@sideko-inc/stripe/types/terminal-configuration-update-body-offline-obj0";
import {
  External$TerminalConfigurationUpdateBodyRebootWindowObj0,
  Schemas$TerminalConfigurationUpdateBodyRebootWindowObj0,
  TerminalConfigurationUpdateBodyRebootWindowObj0,
} from "@sideko-inc/stripe/types/terminal-configuration-update-body-reboot-window-obj0";
import {
  External$TerminalConfigurationUpdateBodyStripeS700Obj0,
  Schemas$TerminalConfigurationUpdateBodyStripeS700Obj0,
  TerminalConfigurationUpdateBodyStripeS700Obj0,
} from "@sideko-inc/stripe/types/terminal-configuration-update-body-stripe-s700-obj0";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0,
  TerminalConfigurationUpdateBodyTippingObj0,
} from "@sideko-inc/stripe/types/terminal-configuration-update-body-tipping-obj0";
import {
  External$TerminalConfigurationUpdateBodyVerifoneP400Obj0,
  Schemas$TerminalConfigurationUpdateBodyVerifoneP400Obj0,
  TerminalConfigurationUpdateBodyVerifoneP400Obj0,
} from "@sideko-inc/stripe/types/terminal-configuration-update-body-verifone-p400-obj0";
import {
  External$TerminalConfigurationUpdateBodyWifiObj0,
  Schemas$TerminalConfigurationUpdateBodyWifiObj0,
  TerminalConfigurationUpdateBodyWifiObj0,
} from "@sideko-inc/stripe/types/terminal-configuration-update-body-wifi-obj0";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data: Record<string, any>;
  configuration: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data: Record<string, any>;
  configuration: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.record(z.string(), z.any()),
    configuration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      configuration: "configuration",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    data: z.record(z.string(), z.any()),
    configuration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      configuration: "configuration",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * if present, only return the account default or non-default configurations.
   */
  isAccountDefault?: boolean | undefined;
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
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  is_account_default?: boolean | undefined;
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
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    is_account_default: z.boolean().optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      ending_before: "endingBefore",
      expand: "expand",
      is_account_default: "isAccountDefault",
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
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    isAccountDefault: z.boolean().optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      endingBefore: "ending_before",
      expand: "expand",
      isAccountDefault: "is_account_default",
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
   * An object containing device type specific settings for BBPOS WisePOS E readers
   */
  bbposWiseposE?: TerminalConfigurationCreateBodyBbposWiseposE | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Name of the configuration
   */
  name?: string | undefined;
  /**
   * Configurations for collecting transactions offline.
   */
  offline?: (TerminalConfigurationCreateBodyOfflineObj0 | string) | undefined;
  /**
   * Reboot time settings for readers that support customized reboot time configuration.
   */
  rebootWindow?: TerminalConfigurationCreateBodyRebootWindow | undefined;
  /**
   * An object containing device type specific settings for Stripe S700 readers
   */
  stripeS700?: TerminalConfigurationCreateBodyStripeS700 | undefined;
  /**
   * Tipping configurations for readers supporting on-reader tips
   */
  tipping?: (TerminalConfigurationCreateBodyTippingObj0 | string) | undefined;
  /**
   * An object containing device type specific settings for Verifone P400 readers
   */
  verifoneP400?: TerminalConfigurationCreateBodyVerifoneP400 | undefined;
  /**
   * Configurations for connecting to a WiFi network.
   */
  wifi?: (TerminalConfigurationCreateBodyWifiObj0 | string) | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  bbpos_wisepos_e?:
    | External$TerminalConfigurationCreateBodyBbposWiseposE
    | undefined;
  expand?: string[] | undefined;
  name?: string | undefined;
  offline?:
    | (External$TerminalConfigurationCreateBodyOfflineObj0 | string)
    | undefined;
  reboot_window?:
    | External$TerminalConfigurationCreateBodyRebootWindow
    | undefined;
  stripe_s700?: External$TerminalConfigurationCreateBodyStripeS700 | undefined;
  tipping?:
    | (External$TerminalConfigurationCreateBodyTippingObj0 | string)
    | undefined;
  verifone_p400?:
    | External$TerminalConfigurationCreateBodyVerifoneP400
    | undefined;
  wifi?:
    | (External$TerminalConfigurationCreateBodyWifiObj0 | string)
    | undefined;
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
    bbpos_wisepos_e:
      Schemas$TerminalConfigurationCreateBodyBbposWiseposE.in.optional(),
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    offline: z
      .union([
        Schemas$TerminalConfigurationCreateBodyOfflineObj0.in,
        z.string(),
      ])
      .optional(),
    reboot_window:
      Schemas$TerminalConfigurationCreateBodyRebootWindow.in.optional(),
    stripe_s700:
      Schemas$TerminalConfigurationCreateBodyStripeS700.in.optional(),
    tipping: z
      .union([
        Schemas$TerminalConfigurationCreateBodyTippingObj0.in,
        z.string(),
      ])
      .optional(),
    verifone_p400:
      Schemas$TerminalConfigurationCreateBodyVerifoneP400.in.optional(),
    wifi: z
      .union([Schemas$TerminalConfigurationCreateBodyWifiObj0.in, z.string()])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bbpos_wisepos_e: "bbposWiseposE",
      expand: "expand",
      name: "name",
      offline: "offline",
      reboot_window: "rebootWindow",
      stripe_s700: "stripeS700",
      tipping: "tipping",
      verifone_p400: "verifoneP400",
      wifi: "wifi",
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
    bbposWiseposE:
      Schemas$TerminalConfigurationCreateBodyBbposWiseposE.out.optional(),
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    offline: z
      .union([
        Schemas$TerminalConfigurationCreateBodyOfflineObj0.out,
        z.string(),
      ])
      .optional(),
    rebootWindow:
      Schemas$TerminalConfigurationCreateBodyRebootWindow.out.optional(),
    stripeS700:
      Schemas$TerminalConfigurationCreateBodyStripeS700.out.optional(),
    tipping: z
      .union([
        Schemas$TerminalConfigurationCreateBodyTippingObj0.out,
        z.string(),
      ])
      .optional(),
    verifoneP400:
      Schemas$TerminalConfigurationCreateBodyVerifoneP400.out.optional(),
    wifi: z
      .union([Schemas$TerminalConfigurationCreateBodyWifiObj0.out, z.string()])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bbposWiseposE: "bbpos_wisepos_e",
      expand: "expand",
      name: "name",
      offline: "offline",
      rebootWindow: "reboot_window",
      stripeS700: "stripe_s700",
      tipping: "tipping",
      verifoneP400: "verifone_p400",
      wifi: "wifi",
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
   * An object containing device type specific settings for BBPOS WisePOS E readers
   */
  bbposWiseposE?:
    | (TerminalConfigurationUpdateBodyBbposWiseposEObj0 | string)
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Name of the configuration
   */
  name?: string | undefined;
  /**
   * Configurations for collecting transactions offline.
   */
  offline?: (TerminalConfigurationUpdateBodyOfflineObj0 | string) | undefined;
  /**
   * Reboot time settings for readers that support customized reboot time configuration.
   */
  rebootWindow?:
    | (TerminalConfigurationUpdateBodyRebootWindowObj0 | string)
    | undefined;
  /**
   * An object containing device type specific settings for Stripe S700 readers
   */
  stripeS700?:
    | (TerminalConfigurationUpdateBodyStripeS700Obj0 | string)
    | undefined;
  /**
   * Tipping configurations for readers supporting on-reader tips
   */
  tipping?: (TerminalConfigurationUpdateBodyTippingObj0 | string) | undefined;
  /**
   * An object containing device type specific settings for Verifone P400 readers
   */
  verifoneP400?:
    | (TerminalConfigurationUpdateBodyVerifoneP400Obj0 | string)
    | undefined;
  /**
   * Configurations for connecting to a WiFi network.
   */
  wifi?: (TerminalConfigurationUpdateBodyWifiObj0 | string) | undefined;
  configuration: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  bbpos_wisepos_e?:
    | (External$TerminalConfigurationUpdateBodyBbposWiseposEObj0 | string)
    | undefined;
  expand?: string[] | undefined;
  name?: string | undefined;
  offline?:
    | (External$TerminalConfigurationUpdateBodyOfflineObj0 | string)
    | undefined;
  reboot_window?:
    | (External$TerminalConfigurationUpdateBodyRebootWindowObj0 | string)
    | undefined;
  stripe_s700?:
    | (External$TerminalConfigurationUpdateBodyStripeS700Obj0 | string)
    | undefined;
  tipping?:
    | (External$TerminalConfigurationUpdateBodyTippingObj0 | string)
    | undefined;
  verifone_p400?:
    | (External$TerminalConfigurationUpdateBodyVerifoneP400Obj0 | string)
    | undefined;
  wifi?:
    | (External$TerminalConfigurationUpdateBodyWifiObj0 | string)
    | undefined;
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
    bbpos_wisepos_e: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyBbposWiseposEObj0.in,
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    offline: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyOfflineObj0.in,
        z.string(),
      ])
      .optional(),
    reboot_window: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyRebootWindowObj0.in,
        z.string(),
      ])
      .optional(),
    stripe_s700: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyStripeS700Obj0.in,
        z.string(),
      ])
      .optional(),
    tipping: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyTippingObj0.in,
        z.string(),
      ])
      .optional(),
    verifone_p400: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyVerifoneP400Obj0.in,
        z.string(),
      ])
      .optional(),
    wifi: z
      .union([Schemas$TerminalConfigurationUpdateBodyWifiObj0.in, z.string()])
      .optional(),
    configuration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bbpos_wisepos_e: "bbposWiseposE",
      expand: "expand",
      name: "name",
      offline: "offline",
      reboot_window: "rebootWindow",
      stripe_s700: "stripeS700",
      tipping: "tipping",
      verifone_p400: "verifoneP400",
      wifi: "wifi",
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
    bbposWiseposE: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyBbposWiseposEObj0.out,
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    offline: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyOfflineObj0.out,
        z.string(),
      ])
      .optional(),
    rebootWindow: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyRebootWindowObj0.out,
        z.string(),
      ])
      .optional(),
    stripeS700: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyStripeS700Obj0.out,
        z.string(),
      ])
      .optional(),
    tipping: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyTippingObj0.out,
        z.string(),
      ])
      .optional(),
    verifoneP400: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyVerifoneP400Obj0.out,
        z.string(),
      ])
      .optional(),
    wifi: z
      .union([Schemas$TerminalConfigurationUpdateBodyWifiObj0.out, z.string()])
      .optional(),
    configuration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bbposWiseposE: "bbpos_wisepos_e",
      expand: "expand",
      name: "name",
      offline: "offline",
      rebootWindow: "reboot_window",
      stripeS700: "stripe_s700",
      tipping: "tipping",
      verifoneP400: "verifone_p400",
      wifi: "wifi",
      configuration: "configuration",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
