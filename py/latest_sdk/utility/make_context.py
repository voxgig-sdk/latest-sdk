# Latest SDK utility: make_context

from latest_sdk.core.context import LatestContext


def make_context_util(ctxmap, basectx):
    return LatestContext(ctxmap, basectx)
