
### list <a name="list"></a>
List Transactions

<p>Returns a list of Financial Connections <code>Transaction</code> objects.</p>

**API Endpoint**: `GET /v1/financial_connections/transactions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.financialConnections.transaction.list({
  data: {},
  account: "string",
});
```

### get <a name="get"></a>
Retrieve a Transaction

<p>Retrieves the details of a Financial Connections <code>Transaction</code></p>

**API Endpoint**: `GET /v1/financial_connections/transactions/{transaction}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.financialConnections.transaction.get({
  data: {},
  transaction: "string",
});
```
