import { LatestEntityBase } from '../LatestEntityBase';
import type { LatestSDK } from '../LatestSDK';
import type { Control } from '../types';
import type { Stack, StackListMatch } from '../LatestTypes';
declare class StackEntity extends LatestEntityBase<Stack> {
    constructor(client: LatestSDK, entopts: any);
    make(this: StackEntity): StackEntity;
    list(this: any, reqmatch?: StackListMatch, ctrl?: Control): Promise<StackEntity[]>;
}
export { StackEntity };
