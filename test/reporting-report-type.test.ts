import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.reporting.reportType.list", () => {
  test.concurrent(
    "GET /v1/reporting/report_types | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.reporting.reportType.list({ data: {} }).asResponse(),
        client.reporting.reportType.list({ data: {} }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.reporting.reportType.get", () => {
  test.concurrent(
    "GET /v1/reporting/report_types/{report_type} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.reporting.reportType
          .get({ data: {}, reportType: "string" })
          .asResponse(),
        client.reporting.reportType.get({ data: {}, reportType: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
