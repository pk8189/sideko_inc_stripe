
### get <a name="get"></a>
Retrieve a ConfirmationToken

<p>Retrieves an existing ConfirmationToken object</p>

**API Endpoint**: `GET /v1/confirmation_tokens/{confirmation_token}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.confirmationToken.get({
  data: {},
  confirmationToken: "string",
});
```
