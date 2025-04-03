import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.paymentMethodDomain.list", () => {
  test.concurrent(
    "GET /v1/payment_method_domains | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.paymentMethodDomain.list({ data: {} }).asResponse(),
        client.paymentMethodDomain.list({ data: {} }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.paymentMethodDomain.get", () => {
  test.concurrent(
    "GET /v1/payment_method_domains/{payment_method_domain} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.paymentMethodDomain
          .get({ data: {}, paymentMethodDomain: "string" })
          .asResponse(),
        client.paymentMethodDomain.get({
          data: {},
          paymentMethodDomain: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.paymentMethodDomain.create", () => {
  test.concurrent(
    "POST /v1/payment_method_domains | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.paymentMethodDomain
          .create({ domainName: "string" })
          .asResponse(),
        client.paymentMethodDomain.create({ domainName: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.paymentMethodDomain.update", () => {
  test.concurrent(
    "POST /v1/payment_method_domains/{payment_method_domain} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.paymentMethodDomain
          .update({ paymentMethodDomain: "string" })
          .asResponse(),
        client.paymentMethodDomain.update({ paymentMethodDomain: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.paymentMethodDomain.validate", () => {
  test.concurrent(
    "POST /v1/payment_method_domains/{payment_method_domain}/validate | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.paymentMethodDomain
          .validate({ paymentMethodDomain: "string" })
          .asResponse(),
        client.paymentMethodDomain.validate({ paymentMethodDomain: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
