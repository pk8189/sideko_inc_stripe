import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.account.bankAccount.delete", () => {
  test.concurrent(
    "DELETE /v1/accounts/{account}/bank_accounts/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.bankAccount
          .delete({ data: {}, account: "string", id: "string" })
          .asResponse(),
        client.account.bankAccount.delete({
          data: {},
          account: "string",
          id: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.account.bankAccount.get", () => {
  test.concurrent(
    "GET /v1/accounts/{account}/bank_accounts/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.bankAccount
          .get({ data: {}, account: "string", id: "string" })
          .asResponse(),
        client.account.bankAccount.get({
          data: {},
          account: "string",
          id: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.account.bankAccount.create", () => {
  test.concurrent(
    "POST /v1/accounts/{account}/bank_accounts | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.bankAccount.create({ account: "string" }).asResponse(),
        client.account.bankAccount.create({ account: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.account.bankAccount.update", () => {
  test.concurrent(
    "POST /v1/accounts/{account}/bank_accounts/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.account.bankAccount
          .update({ account: "string", id: "string" })
          .asResponse(),
        client.account.bankAccount.update({ account: "string", id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
