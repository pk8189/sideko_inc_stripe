
### delete <a name="delete"></a>
Delete a customer discount

<p>Removes the currently applied discount on a customer.</p>

**API Endpoint**: `DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.customer.subscription.discount.delete({
  data: {},
  customer: "string",
  subscriptionExposedId: "string",
});
```

### list <a name="list"></a>
GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount



**API Endpoint**: `GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.customer.subscription.discount.list({
  data: {},
  customer: "string",
  subscriptionExposedId: "string",
});
```
