// Typed models for the Latest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Product {
  api?: string
  category: string
  cycle: string
  date?: string | null
  discontinued?: string | boolean | null
  eol?: string | boolean | null
  extended_support_until?: string | null
  extra?: Record<string, any> | null
  has_versions: boolean
  label?: string | null
  latest?: string | null
  latest_date?: string | null
  lts?: boolean
  name: string
  release_date?: string | null
  slug: string
  status: string
  status_label?: string
  support_until?: string | null
  url?: string
}

export interface ProductListMatch {
  slug: string
}

export interface Stack {
  branch?: string | null
  days_left?: number | null
  ending?: boolean
  eol?: string | boolean | null
  input?: string
  latest?: string | null
  message?: string
  product?: string | null
  state?: string
  status?: string | null
  url?: string | null
  version?: string | null
}

export interface StackListMatch {
  s: string
}

export interface Stat {
}

export interface StatLoadMatch {
}

export interface Statistic {
}

export interface StatisticLoadMatch {
}

