# Latest SDK utility: make_context
require_relative '../core/context'
module LatestUtilities
  MakeContext = ->(ctxmap, basectx) {
    LatestContext.new(ctxmap, basectx)
  }
end
