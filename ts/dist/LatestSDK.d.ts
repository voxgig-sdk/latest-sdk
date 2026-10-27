import { ProductEntity } from './entity/ProductEntity';
import { StackEntity } from './entity/StackEntity';
import { StatEntity } from './entity/StatEntity';
import { StatisticEntity } from './entity/StatisticEntity';
export type * from './LatestTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { LatestEntityBase } from './LatestEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class LatestSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Product(entopts?: Record<string, any>): ProductEntity;
    Stack(entopts?: Record<string, any>): StackEntity;
    Stat(entopts?: Record<string, any>): StatEntity;
    Statistic(entopts?: Record<string, any>): StatisticEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): LatestSDK;
    tester(testopts?: any, sdkopts?: any): LatestSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof LatestSDK;
export { stdutil, config, BaseFeature, LatestEntityBase, LatestSDK, SDK, };
export type { DirectResult };
