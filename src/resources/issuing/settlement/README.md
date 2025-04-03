
### get <a name="get"></a>
Retrieve a settlement

<p>Retrieves an Issuing <code>Settlement</code> object.</p>

**API Endpoint**: `GET /v1/issuing/settlements/{settlement}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.issuing.settlement.get({
  data: {},
  settlement: "string",
});
```

### update <a name="update"></a>
Update a settlement

<p>Updates the specified Issuing <code>Settlement</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

**API Endpoint**: `POST /v1/issuing/settlements/{settlement}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.issuing.settlement.update({ settlement: "string" });
```
