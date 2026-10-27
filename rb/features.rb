# Latest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module LatestFeatures
  def self.make_feature(name)
    case name
    when "base"
      LatestBaseFeature.new
    when "ratelimit"
      LatestRatelimitFeature.new
    when "retry"
      LatestRetryFeature.new
    when "test"
      LatestTestFeature.new
    when "timeout"
      LatestTimeoutFeature.new
    else
      LatestBaseFeature.new
    end
  end
end
