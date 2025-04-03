import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.source.sourceTransactions.list", () => {
  test.concurrent(
    "GET /v1/sources/{source}/source_transactions | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.source.sourceTransactions
          .list({ data: {}, source: "string" })
          .asResponse(),
        client.source.sourceTransactions.list({ data: {}, source: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.source.sourceTransactions.get", () => {
  test.concurrent(
    "GET /v1/sources/{source}/source_transactions/{source_transaction} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.source.sourceTransactions
          .get({ data: {}, source: "string", sourceTransaction: "string" })
          .asResponse(),
        client.source.sourceTransactions.get({
          data: {},
          source: "string",
          sourceTransaction: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
