import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.treasury.transactionEntry.list", () => {
  test.concurrent(
    "GET /v1/treasury/transaction_entries | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.transactionEntry
          .list({ data: {}, financialAccount: "string" })
          .asResponse(),
        client.treasury.transactionEntry.list({
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

describe("tests client.treasury.transactionEntry.get", () => {
  test.concurrent(
    "GET /v1/treasury/transaction_entries/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.transactionEntry
          .get({ data: {}, id: "string" })
          .asResponse(),
        client.treasury.transactionEntry.get({ data: {}, id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
