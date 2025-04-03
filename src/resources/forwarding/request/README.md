
### list <a name="list"></a>
List all ForwardingRequests

<p>Lists all ForwardingRequest objects.</p>

**API Endpoint**: `GET /v1/forwarding/requests`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.forwarding.request.list({ data: {} });
```

### get <a name="get"></a>
Retrieve a ForwardingRequest

<p>Retrieves a ForwardingRequest object.</p>

**API Endpoint**: `GET /v1/forwarding/requests/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.forwarding.request.get({ data: {}, id: "string" });
```

### create <a name="create"></a>
Create a ForwardingRequest

<p>Creates a ForwardingRequest object.</p>

**API Endpoint**: `POST /v1/forwarding/requests`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  token: process.env["API_TOKEN"]!!,
});
const res = await client.forwarding.request.create({
  paymentMethod: "string",
  replacements: ["card_cvc"],
  url: "string",
});
```
