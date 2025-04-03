
### delete <a name="delete"></a>
Delete a subscription discount

<p>Removes the currently applied discount on a subscription.</p>

**API Endpoint**: `DELETE /v1/subscriptions/{subscription_exposed_id}/discount`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.subscriptions.discount.delete({
  data: {},
  subscriptionExposedId: "string",
});
```
