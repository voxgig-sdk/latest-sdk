-- Typed models for the Latest SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Product
---@field api? string
---@field category string
---@field cycle string
---@field date? string|nil
---@field discontinued? string|boolean|nil
---@field eol? string|boolean|nil
---@field extended_support_until? string|nil
---@field extra? table|nil
---@field has_versions boolean
---@field label? string|nil
---@field latest? string|nil
---@field latest_date? string|nil
---@field lts? boolean
---@field name string
---@field release_date? string|nil
---@field slug string
---@field status string
---@field status_label? string
---@field support_until? string|nil
---@field url? string

---@class ProductListMatch
---@field slug string

---@class Stack
---@field branch? string|nil
---@field days_left? number|nil
---@field ending? boolean
---@field eol? string|boolean|nil
---@field input? string
---@field latest? string|nil
---@field message? string
---@field product? string|nil
---@field state? string
---@field status? string|nil
---@field url? string|nil
---@field version? string|nil

---@class StackListMatch
---@field s string

---@class Stat

---@class StatLoadMatch

---@class Statistic

---@class StatisticLoadMatch

local M = {}

return M
