# Latest SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Latest",
            "slug": "latest",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://latestat.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "product": {},
                "stack": {},
                "stat": {},
                "statistic": {},
            },
        },
        "entity": {
      "product": {
        "fields": [
          {
            "name": "api",
            "title": "Api",
            "type": "`$STRING`",
            "format": "uri",
          },
          {
            "name": "category",
            "title": "Category",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "cycle",
            "title": "Cycle",
            "type": "`$STRING`",
            "req": True,
            "short": "Branch name as used in URLs, e.g.",
          },
          {
            "name": "date",
            "title": "Date",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "short": "Release date of that version.",
            "format": "date",
          },
          {
            "name": "discontinued",
            "title": "Discontinued",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "eol",
            "title": "Eol",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "short": "End-of-life date, or true/false when the vendor gives no date, or null when unknown.",
          },
          {
            "name": "extended_support_until",
            "title": "Extended Support Until",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "short": "Paid extended support (ESU, ELS, Ubuntu Pro...).",
            "format": "date",
          },
          {
            "name": "extra",
            "title": "Extra",
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "has_versions",
            "title": "Has Versions",
            "type": "`$BOOLEAN`",
            "req": True,
            "short": "False for products tracked by support dates only (no version numbers), so latest is always null.",
          },
          {
            "name": "label",
            "title": "Label",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "short": "Display name when it differs, e.g.",
          },
          {
            "name": "latest",
            "title": "Latest",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "op": {
              "list": {
                "req": True,
                "type": [
                  "`$ONE`",
                  [
                    "`$STRING`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "short": "Newest release in this branch.",
          },
          {
            "name": "latest_date",
            "title": "Latest Date",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "format": "date",
          },
          {
            "name": "lts",
            "title": "Lts",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "release_date",
            "title": "Release Date",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "format": "date",
          },
          {
            "name": "slug",
            "title": "Slug",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "active: full support · security: security fixes only · eol: no fixes · current/older: products without support dates (GitHub releases).",
          },
          {
            "name": "status_label",
            "title": "Status Label",
            "type": "`$STRING`",
            "short": "The vendor's own name for the phase.",
          },
          {
            "name": "support_until",
            "title": "Support Until",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "short": "End of active support (then security fixes only).",
            "format": "date",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "format": "uri",
          },
        ],
        "name": "product",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/{slug}.json",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "{slug}.json",
                  },
                ],
                "parts": [
                  "api",
                  "{slug}.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "slug",
                      "orig": "slug",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "php",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "slug",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/products.json",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "products.json",
                  },
                ],
                "parts": [
                  "api",
                  "products.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.products`",
                },
                "args": {
                  "query": [
                    {
                      "name": "cat",
                      "orig": "cat",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "p",
                      "orig": "p",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "php,nodejs,postgresql",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "stack": {
        "fields": [
          {
            "name": "branch",
            "title": "Branch",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "days_left",
            "title": "Days Left",
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "ending",
            "title": "Ending",
            "type": "`$BOOLEAN`",
            "short": "Still supported, but support ends within 183 days.",
          },
          {
            "name": "eol",
            "title": "Eol",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "input",
            "title": "Input",
            "type": "`$STRING`",
          },
          {
            "name": "latest",
            "title": "Latest",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "short": "Newest release in your branch.",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$STRING`",
            "short": "Plain-English explanation and what to do.",
          },
          {
            "name": "product",
            "title": "Product",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "short": "Slug, or null when the line was not recognized.",
          },
          {
            "name": "state",
            "title": "State",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "title": "Status",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "url",
            "title": "Url",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "format": "uri",
          },
          {
            "name": "version",
            "title": "Version",
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
        ],
        "name": "stack",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/stack.json",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "stack.json",
                  },
                ],
                "parts": [
                  "api",
                  "stack.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "s",
                      "orig": "s",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "php:8.3.4,ubuntu:22.04,nginx:1.24.0",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "s",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "stat": {
        "fields": [],
        "name": "stat",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/stats.json",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "stats.json",
                  },
                ],
                "parts": [
                  "api",
                  "stats.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "statistic": {
        "fields": [],
        "name": "statistic",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/stats/wordpress-php.json",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "stats",
                  },
                  {
                    "lit": "wordpress-php.json",
                  },
                ],
                "parts": [
                  "api",
                  "stats",
                  "wordpress-php.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
