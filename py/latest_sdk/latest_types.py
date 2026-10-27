# Typed models for the Latest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ProductRequired(TypedDict):
    category: str
    cycle: str
    has_versions: bool
    name: str
    slug: str
    status: str


class Product(ProductRequired, total=False):
    api: str
    date: str | None
    discontinued: str | bool | None
    eol: str | bool | None
    extended_support_until: str | None
    extra: dict | None
    label: str | None
    latest: str | None
    latest_date: str | None
    lts: bool
    release_date: str | None
    status_label: str
    support_until: str | None
    url: str


class ProductListMatch(TypedDict):
    slug: str


class Stack(TypedDict, total=False):
    branch: str | None
    days_left: int | None
    ending: bool
    eol: str | bool | None
    input: str
    latest: str | None
    message: str
    product: str | None
    state: str
    status: str | None
    url: str | None
    version: str | None


class StackListMatch(TypedDict):
    s: str


class Stat(TypedDict):
    pass


class StatLoadMatch(TypedDict):
    pass


class Statistic(TypedDict):
    pass


class StatisticLoadMatch(TypedDict):
    pass
