import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.treasury.outboundPayment.list", () => {
  test.concurrent(
    "GET /v1/treasury/outbound_payments | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundPayment
          .list({ data: {}, financialAccount: "string" })
          .asResponse(),
        client.treasury.outboundPayment.list({
          data: {},
          financialAccount: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.outboundPayment.get", () => {
  test.concurrent(
    "GET /v1/treasury/outbound_payments/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundPayment
          .get({ data: {}, id: "string" })
          .asResponse(),
        client.treasury.outboundPayment.get({ data: {}, id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.outboundPayment.create", () => {
  test.concurrent(
    "POST /v1/treasury/outbound_payments | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundPayment
          .create({
            amount: 123,
            currency: "string",
            financialAccount: "string",
          })
          .asResponse(),
        client.treasury.outboundPayment.create({
          amount: 123,
          currency: "string",
          financialAccount: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.outboundPayment.cancel", () => {
  test.concurrent(
    "POST /v1/treasury/outbound_payments/{id}/cancel | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundPayment.cancel({ id: "string" }).asResponse(),
        client.treasury.outboundPayment.cancel({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
