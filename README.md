# emails

This typescript library makes integrating email sending in your project blazing fast and without headaches.

> With Brevo you can send 300 free emails/day, a perfect alternative to Mailgun.


We will also see how to set up your email integration with just your domain name, no need for email hosting.


## Installing

Using npm:
```
$ npm i @cuecodes/emails --save
```

## Prerequisites

Register and get your API KEY from Brevo.  
You can find how to in their 
[documentation](https://help.brevo.com/hc/en-us/articles/209467485-Create-and-manage-your-API-keys).


## Example

Creating the client:

emails.ts
```ts
import { BrevoClient } from "@cuecodes/emails";
import type { EmailTemplates } from "@cuecodes/emails";

/*
 * Pro Tip:
 * 
 * Declare your template ids and their corresponding placeholders.
 * This will give you a nice autocomplete when sending the emails ✨✨✨
*/
interface MyExampleEmailTemplates extends EmailTemplates {
    1: {
        name: string;
    },
    2: {
        email: string;
    }
}
const client = new BrevoClient<MyExampleEmailTemplates>("YOUR_API_KEY");

export const getClient = () => client;

```

Using the client:
```ts
import { getClient } from "./emails"

// Example:
const sendTestEmail = async () => {
    await getClient().sendEmail({
        templateId: 1,
        params: {
            // ❤️ We have autocomplete here ❤️
            name: "John"
        },
        to: [{
            email: "example@example.com",
            name: "John Doe"
        }]
    })
        .then(() => console.log("Sent!"))
        .catch((err) => console.error("Error :(", err));
}
```

## Send emails from your domain

> You don't need to buy an email hosting, you can do this for free!

Let's say you bought the domain acme and you probably want to send emails from contact@acme.com. 

Check out my post and know how :)   
[Iconic Polar: How to send emails with your domain](TODO)
