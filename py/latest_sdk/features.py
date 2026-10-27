# Latest SDK feature factory

from latest_sdk.feature.base_feature import LatestBaseFeature
from latest_sdk.feature.ratelimit_feature import LatestRatelimitFeature
from latest_sdk.feature.retry_feature import LatestRetryFeature
from latest_sdk.feature.test_feature import LatestTestFeature
from latest_sdk.feature.timeout_feature import LatestTimeoutFeature


_FEATURES = {
    "base": lambda: LatestBaseFeature(),
    "ratelimit": lambda: LatestRatelimitFeature(),
    "retry": lambda: LatestRetryFeature(),
    "test": lambda: LatestTestFeature(),
    "timeout": lambda: LatestTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
