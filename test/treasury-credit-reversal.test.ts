import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.treasury.creditReversal.list", () => {
  test.concurrent(
    "GET /v1/treasury/credit_reversals | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.creditReversal
          .list({ data: {}, financialAccount: "string" })
          .asResponse(),
        client.treasury.creditReversal.list({
          data: {},
          financialAccount: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.creditReversal.get", () => {
  test.concurrent(
    "GET /v1/treasury/credit_reversals/{credit_reversal} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.creditReversal
          .get({ data: {}, creditReversal: "string" })
          .asResponse(),
        client.treasury.creditReversal.get({
          data: {},
          creditReversal: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.creditReversal.create", () => {
  test.concurrent(
    "POST /v1/treasury/credit_reversals | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.creditReversal
          .create({ receivedCredit: "string" })
          .asResponse(),
        client.treasury.creditReversal.create({ receivedCredit: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
