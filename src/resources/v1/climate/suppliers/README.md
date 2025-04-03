
### list <a name="list"></a>
List suppliers

<p>Lists all available Climate supplier objects.</p>

**API Endpoint**: `GET /v1/climate/suppliers`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.v1.climate.suppliers.list({ data: {} });
```
