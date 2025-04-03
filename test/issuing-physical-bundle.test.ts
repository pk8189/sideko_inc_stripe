import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.issuing.physicalBundle.list", () => {
  test.concurrent(
    "GET /v1/issuing/physical_bundles | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.physicalBundle.list({ data: {} }).asResponse(),
        client.issuing.physicalBundle.list({ data: {} }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.issuing.physicalBundle.get", () => {
  test.concurrent(
    "GET /v1/issuing/physical_bundles/{physical_bundle} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.issuing.physicalBundle
          .get({ data: {}, physicalBundle: "string" })
          .asResponse(),
        client.issuing.physicalBundle.get({
          data: {},
          physicalBundle: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
