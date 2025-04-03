import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.testHelper.confirmationToken.create", () => {
  test.concurrent(
    "POST /v1/test_helpers/confirmation_tokens | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.testHelper.confirmationToken.create().asResponse(),
        client.testHelper.confirmationToken.create(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
