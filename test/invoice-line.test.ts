import Stripe, { Environment } from "@sideko-inc/stripe";

describe("tests client.invoice.line.list", () => {
  test.concurrent(
    "GET /v1/invoices/{invoice}/lines | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.invoice.line.list({ data: {}, invoice: "string" }).asResponse(),
        client.invoice.line.list({ data: {}, invoice: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.invoice.line.createMany", () => {
  test.concurrent(
    "POST /v1/invoices/{invoice}/add_lines | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.invoice.line
          .createMany({ lines: [{}], invoice: "string" })
          .asResponse(),
        client.invoice.line.createMany({ lines: [{}], invoice: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.invoice.line.update", () => {
  test.concurrent(
    "POST /v1/invoices/{invoice}/lines/{line_item_id} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.invoice.line
          .update({ invoice: "string", lineItemId: "string" })
          .asResponse(),
        client.invoice.line.update({ invoice: "string", lineItemId: "string" }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.invoice.line.removeMany", () => {
  test.concurrent(
    "POST /v1/invoices/{invoice}/remove_lines | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.invoice.line
          .removeMany({
            lines: [{ behavior: "delete", id: "string" }],
            invoice: "string",
          })
          .asResponse(),
        client.invoice.line.removeMany({
          lines: [{ behavior: "delete", id: "string" }],
          invoice: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.invoice.line.updateMany", () => {
  test.concurrent(
    "POST /v1/invoices/{invoice}/update_lines | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Stripe({
        username: "API_USERNAME",
        password: "API_PASSWORD",
        token: "API_TOKEN",
        environment: Environment.MockServer,
      });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.invoice.line
          .updateMany({ lines: [{ id: "string" }], invoice: "string" })
          .asResponse(),
        client.invoice.line.updateMany({
          lines: [{ id: "string" }],
          invoice: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
