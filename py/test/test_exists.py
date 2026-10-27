# Latest SDK exists test

import pytest
from latest_sdk import LatestSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = LatestSDK.test(None, None)
        assert testsdk is not None
