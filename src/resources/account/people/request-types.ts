import { zodTransform } from "@sideko-inc/stripe/core";
import {
  AccountPeopleCreateBodyAdditionalTosAcceptances,
  External$AccountPeopleCreateBodyAdditionalTosAcceptances,
  Schemas$AccountPeopleCreateBodyAdditionalTosAcceptances,
} from "@sideko-inc/stripe/types/account-people-create-body-additional-tos-acceptances";
import {
  AccountPeopleCreateBodyAddress,
  External$AccountPeopleCreateBodyAddress,
  Schemas$AccountPeopleCreateBodyAddress,
} from "@sideko-inc/stripe/types/account-people-create-body-address";
import {
  AccountPeopleCreateBodyAddressKana,
  External$AccountPeopleCreateBodyAddressKana,
  Schemas$AccountPeopleCreateBodyAddressKana,
} from "@sideko-inc/stripe/types/account-people-create-body-address-kana";
import {
  AccountPeopleCreateBodyAddressKanji,
  External$AccountPeopleCreateBodyAddressKanji,
  Schemas$AccountPeopleCreateBodyAddressKanji,
} from "@sideko-inc/stripe/types/account-people-create-body-address-kanji";
import {
  AccountPeopleCreateBodyDobObj0,
  External$AccountPeopleCreateBodyDobObj0,
  Schemas$AccountPeopleCreateBodyDobObj0,
} from "@sideko-inc/stripe/types/account-people-create-body-dob-obj0";
import {
  AccountPeopleCreateBodyDocuments,
  External$AccountPeopleCreateBodyDocuments,
  Schemas$AccountPeopleCreateBodyDocuments,
} from "@sideko-inc/stripe/types/account-people-create-body-documents";
import {
  AccountPeopleCreateBodyMetadataObj0,
  External$AccountPeopleCreateBodyMetadataObj0,
  Schemas$AccountPeopleCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/account-people-create-body-metadata-obj0";
import {
  AccountPeopleCreateBodyRegisteredAddress,
  External$AccountPeopleCreateBodyRegisteredAddress,
  Schemas$AccountPeopleCreateBodyRegisteredAddress,
} from "@sideko-inc/stripe/types/account-people-create-body-registered-address";
import {
  AccountPeopleCreateBodyRelationship,
  External$AccountPeopleCreateBodyRelationship,
  Schemas$AccountPeopleCreateBodyRelationship,
} from "@sideko-inc/stripe/types/account-people-create-body-relationship";
import {
  AccountPeopleCreateBodyVerification,
  External$AccountPeopleCreateBodyVerification,
  Schemas$AccountPeopleCreateBodyVerification,
} from "@sideko-inc/stripe/types/account-people-create-body-verification";
import {
  AccountPeopleListRelationship,
  External$AccountPeopleListRelationship,
  Schemas$AccountPeopleListRelationship,
} from "@sideko-inc/stripe/types/account-people-list-relationship";
import {
  AccountPeopleUpdateBodyAdditionalTosAcceptances,
  External$AccountPeopleUpdateBodyAdditionalTosAcceptances,
  Schemas$AccountPeopleUpdateBodyAdditionalTosAcceptances,
} from "@sideko-inc/stripe/types/account-people-update-body-additional-tos-acceptances";
import {
  AccountPeopleUpdateBodyAddress,
  External$AccountPeopleUpdateBodyAddress,
  Schemas$AccountPeopleUpdateBodyAddress,
} from "@sideko-inc/stripe/types/account-people-update-body-address";
import {
  AccountPeopleUpdateBodyAddressKana,
  External$AccountPeopleUpdateBodyAddressKana,
  Schemas$AccountPeopleUpdateBodyAddressKana,
} from "@sideko-inc/stripe/types/account-people-update-body-address-kana";
import {
  AccountPeopleUpdateBodyAddressKanji,
  External$AccountPeopleUpdateBodyAddressKanji,
  Schemas$AccountPeopleUpdateBodyAddressKanji,
} from "@sideko-inc/stripe/types/account-people-update-body-address-kanji";
import {
  AccountPeopleUpdateBodyDobObj0,
  External$AccountPeopleUpdateBodyDobObj0,
  Schemas$AccountPeopleUpdateBodyDobObj0,
} from "@sideko-inc/stripe/types/account-people-update-body-dob-obj0";
import {
  AccountPeopleUpdateBodyDocuments,
  External$AccountPeopleUpdateBodyDocuments,
  Schemas$AccountPeopleUpdateBodyDocuments,
} from "@sideko-inc/stripe/types/account-people-update-body-documents";
import {
  AccountPeopleUpdateBodyMetadataObj0,
  External$AccountPeopleUpdateBodyMetadataObj0,
  Schemas$AccountPeopleUpdateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/account-people-update-body-metadata-obj0";
import {
  AccountPeopleUpdateBodyRegisteredAddress,
  External$AccountPeopleUpdateBodyRegisteredAddress,
  Schemas$AccountPeopleUpdateBodyRegisteredAddress,
} from "@sideko-inc/stripe/types/account-people-update-body-registered-address";
import {
  AccountPeopleUpdateBodyRelationship,
  External$AccountPeopleUpdateBodyRelationship,
  Schemas$AccountPeopleUpdateBodyRelationship,
} from "@sideko-inc/stripe/types/account-people-update-body-relationship";
import {
  AccountPeopleUpdateBodyVerification,
  External$AccountPeopleUpdateBodyVerification,
  Schemas$AccountPeopleUpdateBodyVerification,
} from "@sideko-inc/stripe/types/account-people-update-body-verification";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data: Record<string, any>;
  account: string;
  person: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data: Record<string, any>;
  account: string;
  person: string;
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
    account: z.string(),
    person: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
      person: "person",
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
    account: z.string(),
    person: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
      person: "person",
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
  account: string;
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
   * Filters on the list of people returned based on the person's relationship to the account's company.
   */
  relationship?: AccountPeopleListRelationship | undefined;
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
  account: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  relationship?: External$AccountPeopleListRelationship | undefined;
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
    account: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    relationship: Schemas$AccountPeopleListRelationship.in.optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      relationship: "relationship",
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
    account: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    relationship: Schemas$AccountPeopleListRelationship.out.optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      relationship: "relationship",
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
  account: string;
  person: string;
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
  account: string;
  person: string;
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
    account: z.string(),
    person: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
      person: "person",
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
    account: z.string(),
    person: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
      person: "person",
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
   * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
   */
  additionalTosAcceptances?:
    | AccountPeopleCreateBodyAdditionalTosAcceptances
    | undefined;
  /**
   * The person's address.
   */
  address?: AccountPeopleCreateBodyAddress | undefined;
  /**
   * The Kana variation of the person's address (Japan only).
   */
  addressKana?: AccountPeopleCreateBodyAddressKana | undefined;
  /**
   * The Kanji variation of the person's address (Japan only).
   */
  addressKanji?: AccountPeopleCreateBodyAddressKanji | undefined;
  /**
   * The person's date of birth.
   */
  dob?: (AccountPeopleCreateBodyDobObj0 | string) | undefined;
  /**
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: AccountPeopleCreateBodyDocuments | undefined;
  /**
   * The person's email address.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The person's first name.
   */
  firstName?: string | undefined;
  /**
   * The Kana variation of the person's first name (Japan only).
   */
  firstNameKana?: string | undefined;
  /**
   * The Kanji variation of the person's first name (Japan only).
   */
  firstNameKanji?: string | undefined;
  /**
   * A list of alternate names or aliases that the person is known by.
   */
  fullNameAliases?: (string[] | string) | undefined;
  /**
   * The person's gender (International regulations require either "male" or "female").
   */
  gender?: string | undefined;
  /**
   * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
   */
  idNumber?: string | undefined;
  /**
   * The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
   */
  idNumberSecondary?: string | undefined;
  /**
   * The person's last name.
   */
  lastName?: string | undefined;
  /**
   * The Kana variation of the person's last name (Japan only).
   */
  lastNameKana?: string | undefined;
  /**
   * The Kanji variation of the person's last name (Japan only).
   */
  lastNameKanji?: string | undefined;
  /**
   * The person's maiden name.
   */
  maidenName?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (AccountPeopleCreateBodyMetadataObj0 | string) | undefined;
  /**
   * The country where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), or "XX" if unavailable.
   */
  nationality?: string | undefined;
  /**
   * A [person token](https://docs.stripe.com/connect/account-tokens), used to securely provide details to the person.
   */
  personToken?: string | undefined;
  /**
   * The person's phone number.
   */
  phone?: string | undefined;
  /**
   * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
   */
  politicalExposure?: ("existing" | "none") | undefined;
  /**
   * The person's registered address.
   */
  registeredAddress?: AccountPeopleCreateBodyRegisteredAddress | undefined;
  /**
   * The relationship that this person has with the account's legal entity.
   */
  relationship?: AccountPeopleCreateBodyRelationship | undefined;
  /**
   * The last four digits of the person's Social Security number (U.S. only).
   */
  ssnLast4?: string | undefined;
  /**
   * The person's verification status.
   */
  verification?: AccountPeopleCreateBodyVerification | undefined;
  account: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  additional_tos_acceptances?:
    | External$AccountPeopleCreateBodyAdditionalTosAcceptances
    | undefined;
  address?: External$AccountPeopleCreateBodyAddress | undefined;
  address_kana?: External$AccountPeopleCreateBodyAddressKana | undefined;
  address_kanji?: External$AccountPeopleCreateBodyAddressKanji | undefined;
  dob?: (External$AccountPeopleCreateBodyDobObj0 | string) | undefined;
  documents?: External$AccountPeopleCreateBodyDocuments | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  first_name?: string | undefined;
  first_name_kana?: string | undefined;
  first_name_kanji?: string | undefined;
  full_name_aliases?: (string[] | string) | undefined;
  gender?: string | undefined;
  id_number?: string | undefined;
  id_number_secondary?: string | undefined;
  last_name?: string | undefined;
  last_name_kana?: string | undefined;
  last_name_kanji?: string | undefined;
  maiden_name?: string | undefined;
  metadata?:
    | (External$AccountPeopleCreateBodyMetadataObj0 | string)
    | undefined;
  nationality?: string | undefined;
  person_token?: string | undefined;
  phone?: string | undefined;
  political_exposure?: ("existing" | "none") | undefined;
  registered_address?:
    | External$AccountPeopleCreateBodyRegisteredAddress
    | undefined;
  relationship?: External$AccountPeopleCreateBodyRelationship | undefined;
  ssn_last_4?: string | undefined;
  verification?: External$AccountPeopleCreateBodyVerification | undefined;
  account: string;
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
    additional_tos_acceptances:
      Schemas$AccountPeopleCreateBodyAdditionalTosAcceptances.in.optional(),
    address: Schemas$AccountPeopleCreateBodyAddress.in.optional(),
    address_kana: Schemas$AccountPeopleCreateBodyAddressKana.in.optional(),
    address_kanji: Schemas$AccountPeopleCreateBodyAddressKanji.in.optional(),
    dob: z
      .union([Schemas$AccountPeopleCreateBodyDobObj0.in, z.string()])
      .optional(),
    documents: Schemas$AccountPeopleCreateBodyDocuments.in.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    first_name: z.string().optional(),
    first_name_kana: z.string().optional(),
    first_name_kanji: z.string().optional(),
    full_name_aliases: z.union([z.array(z.string()), z.string()]).optional(),
    gender: z.string().optional(),
    id_number: z.string().optional(),
    id_number_secondary: z.string().optional(),
    last_name: z.string().optional(),
    last_name_kana: z.string().optional(),
    last_name_kanji: z.string().optional(),
    maiden_name: z.string().optional(),
    metadata: z
      .union([Schemas$AccountPeopleCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    nationality: z.string().optional(),
    person_token: z.string().optional(),
    phone: z.string().optional(),
    political_exposure: z.enum(["existing", "none"]).optional(),
    registered_address:
      Schemas$AccountPeopleCreateBodyRegisteredAddress.in.optional(),
    relationship: Schemas$AccountPeopleCreateBodyRelationship.in.optional(),
    ssn_last_4: z.string().optional(),
    verification: Schemas$AccountPeopleCreateBodyVerification.in.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_tos_acceptances: "additionalTosAcceptances",
      address: "address",
      address_kana: "addressKana",
      address_kanji: "addressKanji",
      dob: "dob",
      documents: "documents",
      email: "email",
      expand: "expand",
      first_name: "firstName",
      first_name_kana: "firstNameKana",
      first_name_kanji: "firstNameKanji",
      full_name_aliases: "fullNameAliases",
      gender: "gender",
      id_number: "idNumber",
      id_number_secondary: "idNumberSecondary",
      last_name: "lastName",
      last_name_kana: "lastNameKana",
      last_name_kanji: "lastNameKanji",
      maiden_name: "maidenName",
      metadata: "metadata",
      nationality: "nationality",
      person_token: "personToken",
      phone: "phone",
      political_exposure: "politicalExposure",
      registered_address: "registeredAddress",
      relationship: "relationship",
      ssn_last_4: "ssnLast4",
      verification: "verification",
      account: "account",
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
    additionalTosAcceptances:
      Schemas$AccountPeopleCreateBodyAdditionalTosAcceptances.out.optional(),
    address: Schemas$AccountPeopleCreateBodyAddress.out.optional(),
    addressKana: Schemas$AccountPeopleCreateBodyAddressKana.out.optional(),
    addressKanji: Schemas$AccountPeopleCreateBodyAddressKanji.out.optional(),
    dob: z
      .union([Schemas$AccountPeopleCreateBodyDobObj0.out, z.string()])
      .optional(),
    documents: Schemas$AccountPeopleCreateBodyDocuments.out.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    firstName: z.string().optional(),
    firstNameKana: z.string().optional(),
    firstNameKanji: z.string().optional(),
    fullNameAliases: z.union([z.array(z.string()), z.string()]).optional(),
    gender: z.string().optional(),
    idNumber: z.string().optional(),
    idNumberSecondary: z.string().optional(),
    lastName: z.string().optional(),
    lastNameKana: z.string().optional(),
    lastNameKanji: z.string().optional(),
    maidenName: z.string().optional(),
    metadata: z
      .union([Schemas$AccountPeopleCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    nationality: z.string().optional(),
    personToken: z.string().optional(),
    phone: z.string().optional(),
    politicalExposure: z.enum(["existing", "none"]).optional(),
    registeredAddress:
      Schemas$AccountPeopleCreateBodyRegisteredAddress.out.optional(),
    relationship: Schemas$AccountPeopleCreateBodyRelationship.out.optional(),
    ssnLast4: z.string().optional(),
    verification: Schemas$AccountPeopleCreateBodyVerification.out.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalTosAcceptances: "additional_tos_acceptances",
      address: "address",
      addressKana: "address_kana",
      addressKanji: "address_kanji",
      dob: "dob",
      documents: "documents",
      email: "email",
      expand: "expand",
      firstName: "first_name",
      firstNameKana: "first_name_kana",
      firstNameKanji: "first_name_kanji",
      fullNameAliases: "full_name_aliases",
      gender: "gender",
      idNumber: "id_number",
      idNumberSecondary: "id_number_secondary",
      lastName: "last_name",
      lastNameKana: "last_name_kana",
      lastNameKanji: "last_name_kanji",
      maidenName: "maiden_name",
      metadata: "metadata",
      nationality: "nationality",
      personToken: "person_token",
      phone: "phone",
      politicalExposure: "political_exposure",
      registeredAddress: "registered_address",
      relationship: "relationship",
      ssnLast4: "ssn_last_4",
      verification: "verification",
      account: "account",
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
   * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
   */
  additionalTosAcceptances?:
    | AccountPeopleUpdateBodyAdditionalTosAcceptances
    | undefined;
  /**
   * The person's address.
   */
  address?: AccountPeopleUpdateBodyAddress | undefined;
  /**
   * The Kana variation of the person's address (Japan only).
   */
  addressKana?: AccountPeopleUpdateBodyAddressKana | undefined;
  /**
   * The Kanji variation of the person's address (Japan only).
   */
  addressKanji?: AccountPeopleUpdateBodyAddressKanji | undefined;
  /**
   * The person's date of birth.
   */
  dob?: (AccountPeopleUpdateBodyDobObj0 | string) | undefined;
  /**
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: AccountPeopleUpdateBodyDocuments | undefined;
  /**
   * The person's email address.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The person's first name.
   */
  firstName?: string | undefined;
  /**
   * The Kana variation of the person's first name (Japan only).
   */
  firstNameKana?: string | undefined;
  /**
   * The Kanji variation of the person's first name (Japan only).
   */
  firstNameKanji?: string | undefined;
  /**
   * A list of alternate names or aliases that the person is known by.
   */
  fullNameAliases?: (string[] | string) | undefined;
  /**
   * The person's gender (International regulations require either "male" or "female").
   */
  gender?: string | undefined;
  /**
   * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
   */
  idNumber?: string | undefined;
  /**
   * The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
   */
  idNumberSecondary?: string | undefined;
  /**
   * The person's last name.
   */
  lastName?: string | undefined;
  /**
   * The Kana variation of the person's last name (Japan only).
   */
  lastNameKana?: string | undefined;
  /**
   * The Kanji variation of the person's last name (Japan only).
   */
  lastNameKanji?: string | undefined;
  /**
   * The person's maiden name.
   */
  maidenName?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (AccountPeopleUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * The country where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), or "XX" if unavailable.
   */
  nationality?: string | undefined;
  /**
   * A [person token](https://docs.stripe.com/connect/account-tokens), used to securely provide details to the person.
   */
  personToken?: string | undefined;
  /**
   * The person's phone number.
   */
  phone?: string | undefined;
  /**
   * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
   */
  politicalExposure?: ("existing" | "none") | undefined;
  /**
   * The person's registered address.
   */
  registeredAddress?: AccountPeopleUpdateBodyRegisteredAddress | undefined;
  /**
   * The relationship that this person has with the account's legal entity.
   */
  relationship?: AccountPeopleUpdateBodyRelationship | undefined;
  /**
   * The last four digits of the person's Social Security number (U.S. only).
   */
  ssnLast4?: string | undefined;
  /**
   * The person's verification status.
   */
  verification?: AccountPeopleUpdateBodyVerification | undefined;
  account: string;
  person: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  additional_tos_acceptances?:
    | External$AccountPeopleUpdateBodyAdditionalTosAcceptances
    | undefined;
  address?: External$AccountPeopleUpdateBodyAddress | undefined;
  address_kana?: External$AccountPeopleUpdateBodyAddressKana | undefined;
  address_kanji?: External$AccountPeopleUpdateBodyAddressKanji | undefined;
  dob?: (External$AccountPeopleUpdateBodyDobObj0 | string) | undefined;
  documents?: External$AccountPeopleUpdateBodyDocuments | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  first_name?: string | undefined;
  first_name_kana?: string | undefined;
  first_name_kanji?: string | undefined;
  full_name_aliases?: (string[] | string) | undefined;
  gender?: string | undefined;
  id_number?: string | undefined;
  id_number_secondary?: string | undefined;
  last_name?: string | undefined;
  last_name_kana?: string | undefined;
  last_name_kanji?: string | undefined;
  maiden_name?: string | undefined;
  metadata?:
    | (External$AccountPeopleUpdateBodyMetadataObj0 | string)
    | undefined;
  nationality?: string | undefined;
  person_token?: string | undefined;
  phone?: string | undefined;
  political_exposure?: ("existing" | "none") | undefined;
  registered_address?:
    | External$AccountPeopleUpdateBodyRegisteredAddress
    | undefined;
  relationship?: External$AccountPeopleUpdateBodyRelationship | undefined;
  ssn_last_4?: string | undefined;
  verification?: External$AccountPeopleUpdateBodyVerification | undefined;
  account: string;
  person: string;
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
    additional_tos_acceptances:
      Schemas$AccountPeopleUpdateBodyAdditionalTosAcceptances.in.optional(),
    address: Schemas$AccountPeopleUpdateBodyAddress.in.optional(),
    address_kana: Schemas$AccountPeopleUpdateBodyAddressKana.in.optional(),
    address_kanji: Schemas$AccountPeopleUpdateBodyAddressKanji.in.optional(),
    dob: z
      .union([Schemas$AccountPeopleUpdateBodyDobObj0.in, z.string()])
      .optional(),
    documents: Schemas$AccountPeopleUpdateBodyDocuments.in.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    first_name: z.string().optional(),
    first_name_kana: z.string().optional(),
    first_name_kanji: z.string().optional(),
    full_name_aliases: z.union([z.array(z.string()), z.string()]).optional(),
    gender: z.string().optional(),
    id_number: z.string().optional(),
    id_number_secondary: z.string().optional(),
    last_name: z.string().optional(),
    last_name_kana: z.string().optional(),
    last_name_kanji: z.string().optional(),
    maiden_name: z.string().optional(),
    metadata: z
      .union([Schemas$AccountPeopleUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    nationality: z.string().optional(),
    person_token: z.string().optional(),
    phone: z.string().optional(),
    political_exposure: z.enum(["existing", "none"]).optional(),
    registered_address:
      Schemas$AccountPeopleUpdateBodyRegisteredAddress.in.optional(),
    relationship: Schemas$AccountPeopleUpdateBodyRelationship.in.optional(),
    ssn_last_4: z.string().optional(),
    verification: Schemas$AccountPeopleUpdateBodyVerification.in.optional(),
    account: z.string(),
    person: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_tos_acceptances: "additionalTosAcceptances",
      address: "address",
      address_kana: "addressKana",
      address_kanji: "addressKanji",
      dob: "dob",
      documents: "documents",
      email: "email",
      expand: "expand",
      first_name: "firstName",
      first_name_kana: "firstNameKana",
      first_name_kanji: "firstNameKanji",
      full_name_aliases: "fullNameAliases",
      gender: "gender",
      id_number: "idNumber",
      id_number_secondary: "idNumberSecondary",
      last_name: "lastName",
      last_name_kana: "lastNameKana",
      last_name_kanji: "lastNameKanji",
      maiden_name: "maidenName",
      metadata: "metadata",
      nationality: "nationality",
      person_token: "personToken",
      phone: "phone",
      political_exposure: "politicalExposure",
      registered_address: "registeredAddress",
      relationship: "relationship",
      ssn_last_4: "ssnLast4",
      verification: "verification",
      account: "account",
      person: "person",
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
    additionalTosAcceptances:
      Schemas$AccountPeopleUpdateBodyAdditionalTosAcceptances.out.optional(),
    address: Schemas$AccountPeopleUpdateBodyAddress.out.optional(),
    addressKana: Schemas$AccountPeopleUpdateBodyAddressKana.out.optional(),
    addressKanji: Schemas$AccountPeopleUpdateBodyAddressKanji.out.optional(),
    dob: z
      .union([Schemas$AccountPeopleUpdateBodyDobObj0.out, z.string()])
      .optional(),
    documents: Schemas$AccountPeopleUpdateBodyDocuments.out.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    firstName: z.string().optional(),
    firstNameKana: z.string().optional(),
    firstNameKanji: z.string().optional(),
    fullNameAliases: z.union([z.array(z.string()), z.string()]).optional(),
    gender: z.string().optional(),
    idNumber: z.string().optional(),
    idNumberSecondary: z.string().optional(),
    lastName: z.string().optional(),
    lastNameKana: z.string().optional(),
    lastNameKanji: z.string().optional(),
    maidenName: z.string().optional(),
    metadata: z
      .union([Schemas$AccountPeopleUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    nationality: z.string().optional(),
    personToken: z.string().optional(),
    phone: z.string().optional(),
    politicalExposure: z.enum(["existing", "none"]).optional(),
    registeredAddress:
      Schemas$AccountPeopleUpdateBodyRegisteredAddress.out.optional(),
    relationship: Schemas$AccountPeopleUpdateBodyRelationship.out.optional(),
    ssnLast4: z.string().optional(),
    verification: Schemas$AccountPeopleUpdateBodyVerification.out.optional(),
    account: z.string(),
    person: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalTosAcceptances: "additional_tos_acceptances",
      address: "address",
      addressKana: "address_kana",
      addressKanji: "address_kanji",
      dob: "dob",
      documents: "documents",
      email: "email",
      expand: "expand",
      firstName: "first_name",
      firstNameKana: "first_name_kana",
      firstNameKanji: "first_name_kanji",
      fullNameAliases: "full_name_aliases",
      gender: "gender",
      idNumber: "id_number",
      idNumberSecondary: "id_number_secondary",
      lastName: "last_name",
      lastNameKana: "last_name_kana",
      lastNameKanji: "last_name_kanji",
      maidenName: "maiden_name",
      metadata: "metadata",
      nationality: "nationality",
      personToken: "person_token",
      phone: "phone",
      politicalExposure: "political_exposure",
      registeredAddress: "registered_address",
      relationship: "relationship",
      ssnLast4: "ssn_last_4",
      verification: "verification",
      account: "account",
      person: "person",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
