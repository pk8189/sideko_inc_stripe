import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.radar.earlyFraudWarning.list", () => {
  test.concurrent(
    "GET /v1/radar/early_fraud_warnings | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.radar.earlyFraudWarning.list({ data: {} }).asResponse(),
        client.radar.earlyFraudWarning.list({ data: {} }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.radar.earlyFraudWarning.get", () => {
  test.concurrent(
    "GET /v1/radar/early_fraud_warnings/{early_fraud_warning} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.radar.earlyFraudWarning
          .get({ data: {}, earlyFraudWarning: "string" })
          .asResponse(),
        client.radar.earlyFraudWarning.get({
          data: {},
          earlyFraudWarning: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
