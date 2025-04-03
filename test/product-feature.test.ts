import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.product.feature.delete", () => {
  test.concurrent(
    "DELETE /v1/products/{product}/features/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.product.feature
          .delete({ data: {}, id: "string", product: "string" })
          .asResponse(),
        client.product.feature.delete({
          data: {},
          id: "string",
          product: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.product.feature.list", () => {
  test.concurrent(
    "GET /v1/products/{product}/features | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.product.feature
          .list({ data: {}, product: "string" })
          .asResponse(),
        client.product.feature.list({ data: {}, product: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.product.feature.get", () => {
  test.concurrent(
    "GET /v1/products/{product}/features/{id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.product.feature
          .get({ data: {}, id: "string", product: "string" })
          .asResponse(),
        client.product.feature.get({
          data: {},
          id: "string",
          product: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.product.feature.create", () => {
  test.concurrent(
    "POST /v1/products/{product}/features | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.product.feature
          .create({ entitlementFeature: "string", product: "string" })
          .asResponse(),
        client.product.feature.create({
          entitlementFeature: "string",
          product: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
