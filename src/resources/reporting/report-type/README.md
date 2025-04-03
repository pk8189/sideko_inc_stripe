
### list <a name="list"></a>
List all Report Types

<p>Returns a full list of Report Types.</p>

**API Endpoint**: `GET /v1/reporting/report_types`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.reporting.reportType.list({ data: {} });
```

### get <a name="get"></a>
Retrieve a Report Type

<p>Retrieves the details of a Report Type. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>

**API Endpoint**: `GET /v1/reporting/report_types/{report_type}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.reporting.reportType.get({
  data: {},
  reportType: "string",
});
```
