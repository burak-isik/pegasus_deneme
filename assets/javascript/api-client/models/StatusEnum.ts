/* tslint:disable */
/* eslint-disable */
/**
 * Smart review
 * The most amazing SaaS application the world has ever seen
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const StatusEnum = {
    Active: 'active',
    Canceled: 'canceled',
    Incomplete: 'incomplete',
    IncompleteExpired: 'incomplete_expired',
    PastDue: 'past_due',
    Trialing: 'trialing',
    Unpaid: 'unpaid'
} as const;
export type StatusEnum = typeof StatusEnum[keyof typeof StatusEnum];


export function StatusEnumFromJSON(json: any): StatusEnum {
    return StatusEnumFromJSONTyped(json, false);
}

export function StatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusEnum {
    return json as StatusEnum;
}

export function StatusEnumToJSON(value?: StatusEnum | null): any {
    return value as any;
}

