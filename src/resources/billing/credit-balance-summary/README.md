
### get <a name="get"></a>
Retrieve the credit balance summary for a customer

<p>Retrieves the credit balance summary for a customer.</p>

**API Endpoint**: `GET /v1/billing/credit_balance_summary`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.billing.creditBalanceSummary.get({
  data: {},
  customer: "string",
  filter: { type: "applicability_scope" },
});
```
