package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewProductEntityFunc func(client *LatestSDK, entopts map[string]any) LatestEntity

var NewStackEntityFunc func(client *LatestSDK, entopts map[string]any) LatestEntity

var NewStatEntityFunc func(client *LatestSDK, entopts map[string]any) LatestEntity

var NewStatisticEntityFunc func(client *LatestSDK, entopts map[string]any) LatestEntity

