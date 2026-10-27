package voxgiglatestsdk

import (
	"github.com/voxgig-sdk/latest-sdk/go/core"
	"github.com/voxgig-sdk/latest-sdk/go/entity"
	"github.com/voxgig-sdk/latest-sdk/go/feature"
	_ "github.com/voxgig-sdk/latest-sdk/go/utility"
)

// Type aliases preserve external API.
type LatestSDK = core.LatestSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type LatestEntity = core.LatestEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type LatestError = core.LatestError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewProductEntityFunc = func(client *core.LatestSDK, entopts map[string]any) core.LatestEntity {
		return entity.NewProductEntity(client, entopts)
	}
	core.NewStackEntityFunc = func(client *core.LatestSDK, entopts map[string]any) core.LatestEntity {
		return entity.NewStackEntity(client, entopts)
	}
	core.NewStatEntityFunc = func(client *core.LatestSDK, entopts map[string]any) core.LatestEntity {
		return entity.NewStatEntity(client, entopts)
	}
	core.NewStatisticEntityFunc = func(client *core.LatestSDK, entopts map[string]any) core.LatestEntity {
		return entity.NewStatisticEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewLatestSDK = core.NewLatestSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewLatestSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *LatestSDK  { return NewLatestSDK(nil) }
func Test() *LatestSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
