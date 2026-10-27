import { LatestEntityBase } from '../LatestEntityBase';
import type { LatestSDK } from '../LatestSDK';
import type { Control } from '../types';
import type { Product, ProductListMatch } from '../LatestTypes';
declare class ProductEntity extends LatestEntityBase<Product> {
    constructor(client: LatestSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
    list(this: any, reqmatch?: ProductListMatch, ctrl?: Control): Promise<ProductEntity[]>;
}
export { ProductEntity };
