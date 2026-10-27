import { LatestEntityBase } from '../LatestEntityBase';
import type { LatestSDK } from '../LatestSDK';
import type { Control } from '../types';
import type { Statistic, StatisticLoadMatch } from '../LatestTypes';
declare class StatisticEntity extends LatestEntityBase<Statistic> {
    constructor(client: LatestSDK, entopts: any);
    make(this: StatisticEntity): StatisticEntity;
    load(this: any, reqmatch?: StatisticLoadMatch, ctrl?: Control): Promise<StatisticEntity>;
}
export { StatisticEntity };
