import { LatestEntityBase } from '../LatestEntityBase';
import type { LatestSDK } from '../LatestSDK';
import type { Control } from '../types';
import type { Stat, StatLoadMatch } from '../LatestTypes';
declare class StatEntity extends LatestEntityBase<Stat> {
    constructor(client: LatestSDK, entopts: any);
    make(this: StatEntity): StatEntity;
    load(this: any, reqmatch?: StatLoadMatch, ctrl?: Control): Promise<StatEntity>;
}
export { StatEntity };
