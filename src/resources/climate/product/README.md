
### list <a name="list"></a>
List products

<p>Lists all available Climate product objects.</p>

**API Endpoint**: `GET /v1/climate/products`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.climate.product.list({ data: {} });
```

### get <a name="get"></a>
Retrieve a product

<p>Retrieves the details of a Climate product with the given ID.</p>

**API Endpoint**: `GET /v1/climate/products/{product}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.climate.product.get({ data: {}, product: "string" });
```
