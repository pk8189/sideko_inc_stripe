
### list <a name="list"></a>
List all SetupAttempts

<p>Returns a list of SetupAttempts that associate with a provided SetupIntent.</p>

**API Endpoint**: `GET /v1/setup_attempts`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.setupAttempt.list({ data: {}, setupIntent: "string" });
```
