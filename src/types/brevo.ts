
export interface EmailTemplatesListResponse {
    count: number;
    templates: {
        id: number;
        name: string;
        subject: string;
        isActive: boolean;
        testSent: boolean;
        sender: {
            name: string;
            email: string;
            id: number;
        };
        replyTo: string;
        toField: string;
        tag: string;
        htmlContent: string;
        createdAt: string;
        modifiedAt: string;
    }[];
}

export interface SendEmailProps {
    to: { email: string; name?: string }[];
    bcc?: { email: string; name?: string }[];
    cc?: { email: string; name?: string }[];
    replyTo?: { email: string; name?: string };
    tags?: string[];
    scheduledAt?: string; // Beta
}

export type EmailTemplates = Record<number, Record<string, unknown>>;
