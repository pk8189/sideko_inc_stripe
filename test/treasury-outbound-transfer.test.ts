import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.treasury.outboundTransfer.list", () => {
  test.concurrent(
    "GET /v1/treasury/outbound_transfers | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundTransfer
          .list({ data: {}, financialAccount: "string" })
          .asResponse(),
        client.treasury.outboundTransfer.list({
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

describe("tests client.treasury.outboundTransfer.get", () => {
  test.concurrent(
    "GET /v1/treasury/outbound_transfers/{outbound_transfer} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundTransfer
          .get({ data: {}, outboundTransfer: "string" })
          .asResponse(),
        client.treasury.outboundTransfer.get({
          data: {},
          outboundTransfer: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.treasury.outboundTransfer.create", () => {
  test.concurrent(
    "POST /v1/treasury/outbound_transfers | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundTransfer
          .create({
            amount: 123,
            currency: "string",
            financialAccount: "string",
          })
          .asResponse(),
        client.treasury.outboundTransfer.create({
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

describe("tests client.treasury.outboundTransfer.cancel", () => {
  test.concurrent(
    "POST /v1/treasury/outbound_transfers/{outbound_transfer}/cancel | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.treasury.outboundTransfer
          .cancel({ outboundTransfer: "string" })
          .asResponse(),
        client.treasury.outboundTransfer.cancel({ outboundTransfer: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
