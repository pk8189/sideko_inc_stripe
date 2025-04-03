
### get <a name="get"></a>
Retrieve a Tax Calculation

<p>Retrieves a Tax <code>Calculation</code> object, if the calculation hasn’t expired.</p>

**API Endpoint**: `GET /v1/tax/calculations/{calculation}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.tax.calculation.get({
  data: {},
  calculation: "string",
});
```

### create <a name="create"></a>
Create a Tax Calculation

<p>Calculates tax based on the input and returns a Tax <code>Calculation</code> object.</p>

**API Endpoint**: `POST /v1/tax/calculations`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.tax.calculation.create({
  currency: "string",
  lineItems: [{ amount: 123 }],
});
```
