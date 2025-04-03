
### create <a name="create"></a>
POST /v1/sigma/saved_queries/{id}

<p>Update a previously saved Query object that can subsequently be marked for execution via Query Run.</p>

**API Endpoint**: `POST /v1/sigma/saved_queries/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.v1.sigma.savedQueries.create({ id: "string" });
```
