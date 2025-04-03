
### list <a name="list"></a>
Retrieve a transaction's line items

<p>Retrieves the line items of a committed standalone transaction as a collection.</p>

**API Endpoint**: `GET /v1/tax/transactions/{transaction}/line_items`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.tax.transaction.lineItems.list({
  data: {},
  transaction: "string",
});
```
