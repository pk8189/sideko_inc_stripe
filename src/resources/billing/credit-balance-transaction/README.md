
### list <a name="list"></a>
List credit balance transactions

<p>Retrieve a list of credit balance transactions.</p>

**API Endpoint**: `GET /v1/billing/credit_balance_transactions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.billing.creditBalanceTransaction.list({
  data: {},
  customer: "string",
});
```

### get <a name="get"></a>
Retrieve a credit balance transaction

<p>Retrieves a credit balance transaction.</p>

**API Endpoint**: `GET /v1/billing/credit_balance_transactions/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.billing.creditBalanceTransaction.get({
  data: {},
  id: "string",
});
```
