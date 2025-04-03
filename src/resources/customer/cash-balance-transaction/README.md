
### list <a name="list"></a>
List cash balance transactions

<p>Returns a list of transactions that modified the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>

**API Endpoint**: `GET /v1/customers/{customer}/cash_balance_transactions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.customer.cashBalanceTransaction.list({
  data: {},
  customer: "string",
});
```

### get <a name="get"></a>
Retrieve a cash balance transaction

<p>Retrieves a specific cash balance transaction, which updated the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>

**API Endpoint**: `GET /v1/customers/{customer}/cash_balance_transactions/{transaction}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.customer.cashBalanceTransaction.get({
  data: {},
  customer: "string",
  transaction: "string",
});
```
