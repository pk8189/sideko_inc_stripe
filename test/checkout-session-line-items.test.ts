import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.checkout.session.lineItems.list", () => {
  test.concurrent(
    "GET /v1/checkout/sessions/{session}/line_items | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.checkout.session.lineItems
          .list({ data: {}, session: "string" })
          .asResponse(),
        client.checkout.session.lineItems.list({ data: {}, session: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
