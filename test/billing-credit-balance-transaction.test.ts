import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.billing.creditBalanceTransaction.list", () => {
  test.concurrent(
    "GET /v1/billing/credit_balance_transactions | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditBalanceTransaction
          .list({ data: {}, customer: "string" })
          .asResponse(),
        client.billing.creditBalanceTransaction.list({
          data: {},
          customer: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.billing.creditBalanceTransaction.get", () => {
  test.concurrent(
    "GET /v1/billing/credit_balance_transactions/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.billing.creditBalanceTransaction
          .get({ data: {}, id: "string" })
          .asResponse(),
        client.billing.creditBalanceTransaction.get({ data: {}, id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
