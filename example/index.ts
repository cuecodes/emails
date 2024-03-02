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


// Example:
export const sendDemoEmail = () => {
    client.sendEmail({
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
