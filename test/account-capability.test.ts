import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.account.capability.list", () => {
  test.concurrent(
    "GET /v1/accounts/{account}/capabilities | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.capability
          .list({ data: {}, account: "string" })
          .asResponse(),
        client.account.capability.list({ data: {}, account: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.account.capability.get", () => {
  test.concurrent(
    "GET /v1/accounts/{account}/capabilities/{capability} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.capability
          .get({ data: {}, account: "string", capability: "string" })
          .asResponse(),
        client.account.capability.get({
          data: {},
          account: "string",
          capability: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.account.capability.create", () => {
  test.concurrent(
    "POST /v1/accounts/{account}/capabilities/{capability} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.capability
          .create({ account: "string", capability: "string" })
          .asResponse(),
        client.account.capability.create({
          account: "string",
          capability: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
