
### list <a name="list"></a>
List all active entitlements

<p>Retrieve a list of active entitlements for a customer</p>

**API Endpoint**: `GET /v1/entitlements/active_entitlements`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.entitlement.activeEntitlement.list({
  data: {},
  customer: "string",
});
```

### get <a name="get"></a>
Retrieve an active entitlement

<p>Retrieve an active entitlement</p>

**API Endpoint**: `GET /v1/entitlements/active_entitlements/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.entitlement.activeEntitlement.get({
  data: {},
  id: "string",
});
```
