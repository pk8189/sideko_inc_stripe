import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.forwarding.request.list", () => {
  test.concurrent(
    "GET /v1/forwarding/requests | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.forwarding.request.list({ data: {} }).asResponse(),
        client.forwarding.request.list({ data: {} }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.forwarding.request.get", () => {
  test.concurrent(
    "GET /v1/forwarding/requests/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.forwarding.request.get({ data: {}, id: "string" }).asResponse(),
        client.forwarding.request.get({ data: {}, id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.forwarding.request.create", () => {
  test.concurrent(
    "POST /v1/forwarding/requests | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.forwarding.request
          .create({
            paymentMethod: "string",
            replacements: ["card_cvc"],
            url: "string",
          })
          .asResponse(),
        client.forwarding.request.create({
          paymentMethod: "string",
          replacements: ["card_cvc"],
          url: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
