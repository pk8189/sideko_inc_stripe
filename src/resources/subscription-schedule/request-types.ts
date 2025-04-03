import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$SubscriptionScheduleCreateBodyDefaultSettings,
  Schemas$SubscriptionScheduleCreateBodyDefaultSettings,
  SubscriptionScheduleCreateBodyDefaultSettings,
} from "@sideko-inc/stripe/types/subscription-schedule-create-body-default-settings";
import {
  External$SubscriptionScheduleCreateBodyMetadataObj0,
  Schemas$SubscriptionScheduleCreateBodyMetadataObj0,
  SubscriptionScheduleCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/subscription-schedule-create-body-metadata-obj0";
import {
  External$SubscriptionScheduleCreateBodyPhasesItem,
  Schemas$SubscriptionScheduleCreateBodyPhasesItem,
  SubscriptionScheduleCreateBodyPhasesItem,
} from "@sideko-inc/stripe/types/subscription-schedule-create-body-phases-item";
import {
  External$SubscriptionScheduleListCanceledAtObj0,
  Schemas$SubscriptionScheduleListCanceledAtObj0,
  SubscriptionScheduleListCanceledAtObj0,
} from "@sideko-inc/stripe/types/subscription-schedule-list-canceled-at-obj0";
import {
  External$SubscriptionScheduleListCompletedAtObj0,
  Schemas$SubscriptionScheduleListCompletedAtObj0,
  SubscriptionScheduleListCompletedAtObj0,
} from "@sideko-inc/stripe/types/subscription-schedule-list-completed-at-obj0";
import {
  External$SubscriptionScheduleListCreatedObj0,
  Schemas$SubscriptionScheduleListCreatedObj0,
  SubscriptionScheduleListCreatedObj0,
} from "@sideko-inc/stripe/types/subscription-schedule-list-created-obj0";
import {
  External$SubscriptionScheduleListReleasedAtObj0,
  Schemas$SubscriptionScheduleListReleasedAtObj0,
  SubscriptionScheduleListReleasedAtObj0,
} from "@sideko-inc/stripe/types/subscription-schedule-list-released-at-obj0";
import {
  External$SubscriptionScheduleUpdateBodyDefaultSettings,
  Schemas$SubscriptionScheduleUpdateBodyDefaultSettings,
  SubscriptionScheduleUpdateBodyDefaultSettings,
} from "@sideko-inc/stripe/types/subscription-schedule-update-body-default-settings";
import {
  External$SubscriptionScheduleUpdateBodyMetadataObj0,
  Schemas$SubscriptionScheduleUpdateBodyMetadataObj0,
  SubscriptionScheduleUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/subscription-schedule-update-body-metadata-obj0";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItem,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItem,
  SubscriptionScheduleUpdateBodyPhasesItem,
} from "@sideko-inc/stripe/types/subscription-schedule-update-body-phases-item";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  data: Record<string, any>;
  /**
   * Only return subscription schedules that were created canceled the given date interval.
   */
  canceledAt?: (SubscriptionScheduleListCanceledAtObj0 | number) | undefined;
  /**
   * Only return subscription schedules that completed during the given date interval.
   */
  completedAt?: (SubscriptionScheduleListCompletedAtObj0 | number) | undefined;
  /**
   * Only return subscription schedules that were created during the given date interval.
   */
  created?: (SubscriptionScheduleListCreatedObj0 | number) | undefined;
  /**
   * Only return subscription schedules for the given customer.
   */
  customer?: string | undefined;
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
   * Only return subscription schedules that were released during the given date interval.
   */
  releasedAt?: (SubscriptionScheduleListReleasedAtObj0 | number) | undefined;
  /**
   * Only return subscription schedules that have not started yet.
   */
  scheduled?: boolean | undefined;
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
  canceled_at?:
    | (External$SubscriptionScheduleListCanceledAtObj0 | number)
    | undefined;
  completed_at?:
    | (External$SubscriptionScheduleListCompletedAtObj0 | number)
    | undefined;
  created?: (External$SubscriptionScheduleListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  released_at?:
    | (External$SubscriptionScheduleListReleasedAtObj0 | number)
    | undefined;
  scheduled?: boolean | undefined;
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
    canceled_at: z
      .union([
        Schemas$SubscriptionScheduleListCanceledAtObj0.in,
        z.number().int(),
      ])
      .optional(),
    completed_at: z
      .union([
        Schemas$SubscriptionScheduleListCompletedAtObj0.in,
        z.number().int(),
      ])
      .optional(),
    created: z
      .union([Schemas$SubscriptionScheduleListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    released_at: z
      .union([
        Schemas$SubscriptionScheduleListReleasedAtObj0.in,
        z.number().int(),
      ])
      .optional(),
    scheduled: z.boolean().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      canceled_at: "canceledAt",
      completed_at: "completedAt",
      created: "created",
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      released_at: "releasedAt",
      scheduled: "scheduled",
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
    canceledAt: z
      .union([
        Schemas$SubscriptionScheduleListCanceledAtObj0.out,
        z.number().int(),
      ])
      .optional(),
    completedAt: z
      .union([
        Schemas$SubscriptionScheduleListCompletedAtObj0.out,
        z.number().int(),
      ])
      .optional(),
    created: z
      .union([
        Schemas$SubscriptionScheduleListCreatedObj0.out,
        z.number().int(),
      ])
      .optional(),
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    releasedAt: z
      .union([
        Schemas$SubscriptionScheduleListReleasedAtObj0.out,
        z.number().int(),
      ])
      .optional(),
    scheduled: z.boolean().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      canceledAt: "canceled_at",
      completedAt: "completed_at",
      created: "created",
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      releasedAt: "released_at",
      scheduled: "scheduled",
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
  schedule: string;
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
  schedule: string;
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
    schedule: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      schedule: "schedule",
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
    schedule: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      schedule: "schedule",
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
   * The identifier of the customer to create the subscription schedule for.
   */
  customer?: string | undefined;
  /**
   * Object representing the subscription schedule's default settings.
   */
  defaultSettings?: SubscriptionScheduleCreateBodyDefaultSettings | undefined;
  /**
   * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
   */
  endBehavior?: ("cancel" | "none" | "release" | "renew") | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Migrate an existing subscription to be managed by a subscription schedule. If this parameter is set, a subscription schedule will be created using the subscription's item(s), set to auto-renew using the subscription's interval. When using this parameter, other parameters (such as phase values) cannot be set. To create a subscription schedule with other modifications, we recommend making two separate API calls.
   */
  fromSubscription?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (SubscriptionScheduleCreateBodyMetadataObj0 | string) | undefined;
  /**
   * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase.
   */
  phases?: SubscriptionScheduleCreateBodyPhasesItem[] | undefined;
  /**
   * When the subscription schedule starts. We recommend using `now` so that it starts the subscription immediately. You can also use a Unix timestamp to backdate the subscription so that it starts on a past date, or set a future date for the subscription to start on.
   */
  startDate?: (number | "now") | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  customer?: string | undefined;
  default_settings?:
    | External$SubscriptionScheduleCreateBodyDefaultSettings
    | undefined;
  end_behavior?: ("cancel" | "none" | "release" | "renew") | undefined;
  expand?: string[] | undefined;
  from_subscription?: string | undefined;
  metadata?:
    | (External$SubscriptionScheduleCreateBodyMetadataObj0 | string)
    | undefined;
  phases?: External$SubscriptionScheduleCreateBodyPhasesItem[] | undefined;
  start_date?: (number | "now") | undefined;
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
    customer: z.string().optional(),
    default_settings:
      Schemas$SubscriptionScheduleCreateBodyDefaultSettings.in.optional(),
    end_behavior: z.enum(["cancel", "none", "release", "renew"]).optional(),
    expand: z.array(z.string()).optional(),
    from_subscription: z.string().optional(),
    metadata: z
      .union([
        Schemas$SubscriptionScheduleCreateBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    phases: z
      .array(Schemas$SubscriptionScheduleCreateBodyPhasesItem.in)
      .optional(),
    start_date: z.union([z.number().int(), z.enum(["now"])]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      default_settings: "defaultSettings",
      end_behavior: "endBehavior",
      expand: "expand",
      from_subscription: "fromSubscription",
      metadata: "metadata",
      phases: "phases",
      start_date: "startDate",
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
    customer: z.string().optional(),
    defaultSettings:
      Schemas$SubscriptionScheduleCreateBodyDefaultSettings.out.optional(),
    endBehavior: z.enum(["cancel", "none", "release", "renew"]).optional(),
    expand: z.array(z.string()).optional(),
    fromSubscription: z.string().optional(),
    metadata: z
      .union([
        Schemas$SubscriptionScheduleCreateBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    phases: z
      .array(Schemas$SubscriptionScheduleCreateBodyPhasesItem.out)
      .optional(),
    startDate: z.union([z.number().int(), z.enum(["now"])]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      defaultSettings: "default_settings",
      endBehavior: "end_behavior",
      expand: "expand",
      fromSubscription: "from_subscription",
      metadata: "metadata",
      phases: "phases",
      startDate: "start_date",
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
   * Object representing the subscription schedule's default settings.
   */
  defaultSettings?: SubscriptionScheduleUpdateBodyDefaultSettings | undefined;
  /**
   * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
   */
  endBehavior?: ("cancel" | "none" | "release" | "renew") | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (SubscriptionScheduleUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase. Note that past phases can be omitted.
   */
  phases?: SubscriptionScheduleUpdateBodyPhasesItem[] | undefined;
  /**
   * If the update changes the current phase, indicates whether the changes should be prorated. The default value is `create_prorations`.
   */
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  schedule: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  default_settings?:
    | External$SubscriptionScheduleUpdateBodyDefaultSettings
    | undefined;
  end_behavior?: ("cancel" | "none" | "release" | "renew") | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$SubscriptionScheduleUpdateBodyMetadataObj0 | string)
    | undefined;
  phases?: External$SubscriptionScheduleUpdateBodyPhasesItem[] | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  schedule: string;
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
    default_settings:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettings.in.optional(),
    end_behavior: z.enum(["cancel", "none", "release", "renew"]).optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$SubscriptionScheduleUpdateBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    phases: z
      .array(Schemas$SubscriptionScheduleUpdateBodyPhasesItem.in)
      .optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_settings: "defaultSettings",
      end_behavior: "endBehavior",
      expand: "expand",
      metadata: "metadata",
      phases: "phases",
      proration_behavior: "prorationBehavior",
      schedule: "schedule",
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
    defaultSettings:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettings.out.optional(),
    endBehavior: z.enum(["cancel", "none", "release", "renew"]).optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$SubscriptionScheduleUpdateBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    phases: z
      .array(Schemas$SubscriptionScheduleUpdateBodyPhasesItem.out)
      .optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultSettings: "default_settings",
      endBehavior: "end_behavior",
      expand: "expand",
      metadata: "metadata",
      phases: "phases",
      prorationBehavior: "proration_behavior",
      schedule: "schedule",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Defaults to `true`.
   */
  invoiceNow?: boolean | undefined;
  /**
   * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Defaults to `true`.
   */
  prorate?: boolean | undefined;
  schedule: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  expand?: string[] | undefined;
  invoice_now?: boolean | undefined;
  prorate?: boolean | undefined;
  schedule: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelRequest
 */
const SchemaIn$CancelRequest: z.ZodType<
  CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice_now: z.boolean().optional(),
    prorate: z.boolean().optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice_now: "invoiceNow",
      prorate: "prorate",
      schedule: "schedule",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelRequest
 */
const SchemaOut$CancelRequest: z.ZodType<
  External$CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoiceNow: z.boolean().optional(),
    prorate: z.boolean().optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceNow: "invoice_now",
      prorate: "prorate",
      schedule: "schedule",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * ReleaseRequest
 */
export type ReleaseRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Keep any cancellation on the subscription that the schedule has set
   */
  preserveCancelDate?: boolean | undefined;
  schedule: string;
};

/**
 * @internal
 * ReleaseRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReleaseRequest = {
  expand?: string[] | undefined;
  preserve_cancel_date?: boolean | undefined;
  schedule: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReleaseRequest
 */
const SchemaIn$ReleaseRequest: z.ZodType<
  ReleaseRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    preserve_cancel_date: z.boolean().optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      preserve_cancel_date: "preserveCancelDate",
      schedule: "schedule",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReleaseRequest
 */
const SchemaOut$ReleaseRequest: z.ZodType<
  External$ReleaseRequest, // output type of this zod object
  z.ZodTypeDef,
  ReleaseRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    preserveCancelDate: z.boolean().optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      preserveCancelDate: "preserve_cancel_date",
      schedule: "schedule",
    });
  });

export const Schemas$ReleaseRequest = {
  in: SchemaIn$ReleaseRequest,
  out: SchemaOut$ReleaseRequest,
};
