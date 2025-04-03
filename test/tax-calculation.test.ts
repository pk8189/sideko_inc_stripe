import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.tax.calculation.get", () => {
  test.concurrent(
    "GET /v1/tax/calculations/{calculation} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.tax.calculation
          .get({ data: {}, calculation: "string" })
          .asResponse(),
        client.tax.calculation.get({ data: {}, calculation: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.tax.calculation.create", () => {
  test.concurrent(
    "POST /v1/tax/calculations | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.tax.calculation
          .create({ currency: "string", lineItems: [{ amount: 123 }] })
          .asResponse(),
        client.tax.calculation.create({
          currency: "string",
          lineItems: [{ amount: 123 }],
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
