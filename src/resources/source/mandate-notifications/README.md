
### get <a name="get"></a>
Retrieve a Source MandateNotification

<p>Retrieves a new Source MandateNotification.</p>

**API Endpoint**: `GET /v1/sources/{source}/mandate_notifications/{mandate_notification}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.source.mandateNotifications.get({
  data: {},
  mandateNotification: "string",
  source: "string",
});
```
