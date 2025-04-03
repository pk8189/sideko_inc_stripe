import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.linkedAccount.owners.list", () => {
  test.concurrent(
    "GET /v1/linked_accounts/{account}/owners | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.linkedAccount.owners
          .list({ data: {}, account: "string", ownership: "string" })
          .asResponse(),
        client.linkedAccount.owners.list({
          data: {},
          account: "string",
          ownership: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
