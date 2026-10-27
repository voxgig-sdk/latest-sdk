import { BaseFeature } from './feature/base/BaseFeature';
declare const FEATURE_PLUGINS: Record<string, any[]>;
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        ratelimit: {
            options: {
                active: boolean;
                burst: number;
                rate: number;
            };
            optspec: {
                now: string;
                sleep: string;
            };
            strict: boolean;
            transport: string;
        };
        retry: {
            options: {
                active: boolean;
                factor: number;
                maxDelay: number;
                minDelay: number;
                retries: number;
                statuses: number[];
            };
            optspec: {
                jitter: string;
                sleep: string;
            };
            strict: boolean;
            transport: string;
        };
        test: {
            options: {
                active: boolean;
            };
            optspec: {
                entity: string;
                net: string;
            };
            strict: boolean;
            transport: string;
        };
        timeout: {
            options: {
                active: boolean;
                ms: number;
            };
            optspec: {
                clearTimer: string;
                now: string;
                setTimer: string;
            };
            strict: boolean;
            transport: string;
        };
    };
    options: {
        base: string;
        headers: {
            "content-type": string;
        };
        entity: {
            product: {};
            stack: {};
            stat: {};
            statistic: {};
        };
    };
    entity: {
        product: {
            fields: ({
                name: string;
                title: string;
                type: string;
                format: string;
                req?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                format?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                short: string;
                format: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                format?: undefined;
                req?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                short: string;
                format?: undefined;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                op: {
                    list: {
                        req: boolean;
                        type: (string | string[])[];
                    };
                };
                short: string;
                format?: undefined;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                format: string;
                req?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                format?: undefined;
                req?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                format?: undefined;
                req?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query?: undefined;
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: string;
                            })[];
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        stack: {
            fields: ({
                name: string;
                title: string;
                type: (string | string[])[];
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                format: string;
                short?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        stat: {
            fields: never[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        statistic: {
            fields: never[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config, FEATURE_PLUGINS, };
