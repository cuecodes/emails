import { BrevoClient, EmailTemplates } from "../src";
import { expectNotType, expectType } from "tsd";

jest.mock("axios");

describe("BrevoClient", () => {

    it('Email parameters should error when incorrect payload', () => {
        expectNotType<EmailTemplates>({
            [1]: {
                propA: 1
            },
            [2]: {
                propB: false
            },
            [3]: 2
        });

        expectNotType<EmailTemplates>({
            [1]: {
                propA: 1,
                propC: false
            },
            ["OtherKey"]: {}
        });
    })

    it('Email parameters should not error when correct payload', () => {
        expectType<EmailTemplates>({
            [1]: {
                propA: 1,
                propC: false
            },
            [2]: {
                propB: false
            }
        })
    })

    it('Generic send type works', async () => {
        const client = new BrevoClient("api-key");
        await client.sendEmail({
            to: [{ email: "test@test.com" }],
            templateId: 1,
            params: {
                propA: 1,
            },
        });
    })

    it('Generic send type works', async () => {
        const client = new BrevoClient<{
            1: { propA: number; },
            2: { propB: boolean; }
        }>("api-key");
        await client.sendEmail({
            to: [{ email: "test@test.com" }],
            templateId: 1,
            params: {
                propA: 2
                // propB can't be added as it is not under the 1 key.
            },
        });
    })
});

