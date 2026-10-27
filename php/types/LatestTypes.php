<?php
declare(strict_types=1);

// Typed models for the Latest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Product entity data model. */
class Product
{
    public ?string $api = null;
    public string $category;
    public string $cycle;
    public mixed $date = null;
    public mixed $discontinued = null;
    public mixed $eol = null;
    public mixed $extended_support_until = null;
    public mixed $extra = null;
    public bool $has_versions;
    public mixed $label = null;
    public mixed $latest = null;
    public mixed $latest_date = null;
    public ?bool $lts = null;
    public string $name;
    public mixed $release_date = null;
    public string $slug;
    public string $status;
    public ?string $status_label = null;
    public mixed $support_until = null;
    public ?string $url = null;
}

/** Request payload for Product#list. */
class ProductListMatch
{
    public string $slug;
}

/** Stack entity data model. */
class Stack
{
    public mixed $branch = null;
    public mixed $days_left = null;
    public ?bool $ending = null;
    public mixed $eol = null;
    public ?string $input = null;
    public mixed $latest = null;
    public ?string $message = null;
    public mixed $product = null;
    public ?string $state = null;
    public mixed $status = null;
    public mixed $url = null;
    public mixed $version = null;
}

/** Request payload for Stack#list. */
class StackListMatch
{
    public string $s;
}

/** Stat entity data model. */
class Stat
{
}

/** Request payload for Stat#load. */
class StatLoadMatch
{
}

/** Statistic entity data model. */
class Statistic
{
}

/** Request payload for Statistic#load. */
class StatisticLoadMatch
{
}

