# frozen_string_literal: true

# Typed models for the Latest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Product entity data model.
#
# @!attribute [rw] api
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] cycle
#   @return [String]
#
# @!attribute [rw] date
#   @return [Object, nil]
#
# @!attribute [rw] discontinued
#   @return [Object, nil]
#
# @!attribute [rw] eol
#   @return [Object, nil]
#
# @!attribute [rw] extended_support_until
#   @return [Object, nil]
#
# @!attribute [rw] extra
#   @return [Object, nil]
#
# @!attribute [rw] has_versions
#   @return [Boolean]
#
# @!attribute [rw] label
#   @return [Object, nil]
#
# @!attribute [rw] latest
#   @return [Object, nil]
#
# @!attribute [rw] latest_date
#   @return [Object, nil]
#
# @!attribute [rw] lts
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] release_date
#   @return [Object, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] status_label
#   @return [String, nil]
#
# @!attribute [rw] support_until
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Product = Struct.new(
  :api,
  :category,
  :cycle,
  :date,
  :discontinued,
  :eol,
  :extended_support_until,
  :extra,
  :has_versions,
  :label,
  :latest,
  :latest_date,
  :lts,
  :name,
  :release_date,
  :slug,
  :status,
  :status_label,
  :support_until,
  :url,
  keyword_init: true
)

# Request payload for Product#list.
#
# @!attribute [rw] slug
#   @return [String]
ProductListMatch = Struct.new(
  :slug,
  keyword_init: true
)

# Stack entity data model.
#
# @!attribute [rw] branch
#   @return [Object, nil]
#
# @!attribute [rw] days_left
#   @return [Object, nil]
#
# @!attribute [rw] ending
#   @return [Boolean, nil]
#
# @!attribute [rw] eol
#   @return [Object, nil]
#
# @!attribute [rw] input
#   @return [String, nil]
#
# @!attribute [rw] latest
#   @return [Object, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] product
#   @return [Object, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [Object, nil]
#
# @!attribute [rw] version
#   @return [Object, nil]
Stack = Struct.new(
  :branch,
  :days_left,
  :ending,
  :eol,
  :input,
  :latest,
  :message,
  :product,
  :state,
  :status,
  :url,
  :version,
  keyword_init: true
)

# Request payload for Stack#list.
#
# @!attribute [rw] s
#   @return [String]
StackListMatch = Struct.new(
  :s,
  keyword_init: true
)

# Stat entity data model.
class Stat
end

# Request payload for Stat#load.
class StatLoadMatch
end

# Statistic entity data model.
class Statistic
end

# Request payload for Statistic#load.
class StatisticLoadMatch
end

