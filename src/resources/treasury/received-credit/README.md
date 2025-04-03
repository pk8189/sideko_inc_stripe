
### list <a name="list"></a>
List all ReceivedCredits

<p>Returns a list of ReceivedCredits.</p>

**API Endpoint**: `GET /v1/treasury/received_credits`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.treasury.receivedCredit.list({
  data: {},
  financialAccount: "string",
});
```

### get <a name="get"></a>
Retrieve a ReceivedCredit

<p>Retrieves the details of an existing ReceivedCredit by passing the unique ReceivedCredit ID from the ReceivedCredit list.</p>

**API Endpoint**: `GET /v1/treasury/received_credits/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.treasury.receivedCredit.get({
  data: {},
  id: "string",
});
```
