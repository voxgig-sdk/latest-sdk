# Latest SDK utility: prepare_body
require_relative 'media'
module LatestUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return LatestUtilities.raw_body(ctx.reqdata) if LatestUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
