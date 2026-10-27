<?php
declare(strict_types=1);

// Latest SDK base feature

class LatestBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(LatestContext $ctx, array $options): void {}
    public function PostConstruct(LatestContext $ctx): void {}
    public function PostConstructEntity(LatestContext $ctx): void {}
    public function SetData(LatestContext $ctx): void {}
    public function GetData(LatestContext $ctx): void {}
    public function GetMatch(LatestContext $ctx): void {}
    public function SetMatch(LatestContext $ctx): void {}
    public function PrePoint(LatestContext $ctx): void {}
    public function PreSpec(LatestContext $ctx): void {}
    public function PreRequest(LatestContext $ctx): void {}
    public function PreResponse(LatestContext $ctx): void {}
    public function PreResult(LatestContext $ctx): void {}
    public function PreDone(LatestContext $ctx): void {}
    public function PreUnexpected(LatestContext $ctx): void {}
}
