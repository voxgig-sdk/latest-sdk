# Latest SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

LatestUtility.registrar = ->(u) {
  u.clean = LatestUtilities::Clean
  u.clean_add = LatestUtilities::CleanAdd
  u.clean_explain = LatestUtilities::CleanExplain
  u.done = LatestUtilities::Done
  u.make_error = LatestUtilities::MakeError
  u.feature_add = LatestUtilities::FeatureAdd
  u.feature_hook = LatestUtilities::FeatureHook
  u.feature_init = LatestUtilities::FeatureInit
  u.fetcher = LatestUtilities::Fetcher
  u.make_fetch_def = LatestUtilities::MakeFetchDef
  u.make_context = LatestUtilities::MakeContext
  u.make_options = LatestUtilities::MakeOptions
  u.make_request = LatestUtilities::MakeRequest
  u.make_response = LatestUtilities::MakeResponse
  u.make_result = LatestUtilities::MakeResult
  u.make_point = LatestUtilities::MakePoint
  u.make_spec = LatestUtilities::MakeSpec
  u.make_url = LatestUtilities::MakeUrl
  u.param = LatestUtilities::Param
  u.prepare_auth = LatestUtilities::PrepareAuth
  u.prepare_body = LatestUtilities::PrepareBody
  u.prepare_headers = LatestUtilities::PrepareHeaders
  u.prepare_method = LatestUtilities::PrepareMethod
  u.prepare_params = LatestUtilities::PrepareParams
  u.prepare_path = LatestUtilities::PreparePath
  u.prepare_query = LatestUtilities::PrepareQuery
  u.graphql_body = LatestUtilities::GraphqlBody
  u.graphql_errors = LatestUtilities::GraphqlErrors
  u.result_basic = LatestUtilities::ResultBasic
  u.result_body = LatestUtilities::ResultBody
  u.result_headers = LatestUtilities::ResultHeaders
  u.transform_request = LatestUtilities::TransformRequest
  u.transform_response = LatestUtilities::TransformResponse
}
