
// https://developers.brevo.com/docs/how-it-works
import axios from "axios";
import type { EmailTemplatesListResponse, SendEmailProps } from "../types/brevo";


export class BrevoClient {
    private _apiKey: string;
    private _baseUrl: string;

    constructor(apiKey: string) {
        this._apiKey = apiKey;
        this._baseUrl = 'https://api.brevo.com/v3';
    }

    async listEmailTemplates(options?: {
        limit?: number;
        offset?: number;
        sort?: 'desc' | 'asc';
    }): Promise<EmailTemplatesListResponse> {
        const templates = await axios.get<EmailTemplatesListResponse>(
            `${this._baseUrl}/smtp/templates`,
            {
                params: {
                    limit: options?.limit ?? 50,
                    offset: options?.offset ?? 0,
                    sort: options?.sort ?? 'desc'
                },
                headers: {
                    accept: 'application/json',
                    'api-key': this._apiKey,
                }
            }
        );
        return templates.data;
    }

    async sendEmail(options: SendEmailProps) {
        await axios.post(`${this._baseUrl}/smtp/email`, options, {
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'api-key': this._apiKey
            }
        });
    }
}
