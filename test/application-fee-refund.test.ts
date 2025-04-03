import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.applicationFee.refund.get", () => {
  test.concurrent(
    "GET /v1/application_fees/{fee}/refunds/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.applicationFee.refund
          .get({ data: {}, fee: "string", id: "string" })
          .asResponse(),
        client.applicationFee.refund.get({
          data: {},
          fee: "string",
          id: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.applicationFee.refund.list", () => {
  test.concurrent(
    "GET /v1/application_fees/{id}/refunds | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.applicationFee.refund
          .list({ data: {}, id: "string" })
          .asResponse(),
        client.applicationFee.refund.list({ data: {}, id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.applicationFee.refund.update", () => {
  test.concurrent(
    "POST /v1/application_fees/{fee}/refunds/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.applicationFee.refund
          .update({ fee: "string", id: "string" })
          .asResponse(),
        client.applicationFee.refund.update({ fee: "string", id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.applicationFee.refund.create1", () => {
  test.concurrent(
    "POST /v1/application_fees/{id}/refund | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.applicationFee.refund.create1({ id: "string" }).asResponse(),
        client.applicationFee.refund.create1({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.applicationFee.refund.create", () => {
  test.concurrent(
    "POST /v1/application_fees/{id}/refunds | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.applicationFee.refund.create({ id: "string" }).asResponse(),
        client.applicationFee.refund.create({ id: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
