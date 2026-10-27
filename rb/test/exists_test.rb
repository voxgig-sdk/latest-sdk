# Latest SDK exists test

require "minitest/autorun"
require_relative "../Latest_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = LatestSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
