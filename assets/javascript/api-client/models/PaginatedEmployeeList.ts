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

import { exists, mapValues } from '../runtime';
import type { Employee } from './Employee';
import {
    EmployeeFromJSON,
    EmployeeFromJSONTyped,
    EmployeeToJSON,
} from './Employee';

/**
 * 
 * @export
 * @interface PaginatedEmployeeList
 */
export interface PaginatedEmployeeList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedEmployeeList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEmployeeList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEmployeeList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Employee>}
     * @memberof PaginatedEmployeeList
     */
    results?: Array<Employee>;
}

/**
 * Check if a given object implements the PaginatedEmployeeList interface.
 */
export function instanceOfPaginatedEmployeeList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedEmployeeListFromJSON(json: any): PaginatedEmployeeList {
    return PaginatedEmployeeListFromJSONTyped(json, false);
}

export function PaginatedEmployeeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedEmployeeList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(EmployeeFromJSON)),
    };
}

export function PaginatedEmployeeListToJSON(value?: PaginatedEmployeeList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(EmployeeToJSON)),
    };
}
