import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInquiry {
    id: bigint;
    subject: InquiryType;
    fullName: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export enum InquiryType {
    admissions = "admissions",
    other = "other",
    support = "support",
    general = "general"
}
export interface backendInterface {
    deleteContactInquiry(id: bigint): Promise<void>;
    getAllContactInquiries(): Promise<Array<ContactInquiry>>;
    getContactInquiry(id: bigint): Promise<ContactInquiry>;
    submitContactInquiry(fullName: string, email: string, phone: string, subject: InquiryType, message: string, timestamp: bigint): Promise<void>;
}
