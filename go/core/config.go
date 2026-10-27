package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Latest",
			"slug": "latest",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://latestat.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"product": map[string]any{},
				"stack": map[string]any{},
				"stat": map[string]any{},
				"statistic": map[string]any{},
			},
		},
		"entity": map[string]any{
			"product": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "api",
						"title": "Api",
						"type": "`$STRING`",
						"format": "uri",
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "cycle",
						"title": "Cycle",
						"type": "`$STRING`",
						"req": true,
						"short": "Branch name as used in URLs, e.g.",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Release date of that version.",
						"format": "date",
					},
					map[string]any{
						"name": "discontinued",
						"title": "Discontinued",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "eol",
						"title": "Eol",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "End-of-life date, or true/false when the vendor gives no date, or null when unknown.",
					},
					map[string]any{
						"name": "extended_support_until",
						"title": "Extended Support Until",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Paid extended support (ESU, ELS, Ubuntu Pro...).",
						"format": "date",
					},
					map[string]any{
						"name": "extra",
						"title": "Extra",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "has_versions",
						"title": "Has Versions",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "False for products tracked by support dates only (no version numbers), so latest is always null.",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Display name when it differs, e.g.",
					},
					map[string]any{
						"name": "latest",
						"title": "Latest",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": []any{
									"`$ONE`",
									[]any{
										"`$STRING`",
										"`$NULL`",
									},
								},
							},
						},
						"short": "Newest release in this branch.",
					},
					map[string]any{
						"name": "latest_date",
						"title": "Latest Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"format": "date",
					},
					map[string]any{
						"name": "lts",
						"title": "Lts",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "release_date",
						"title": "Release Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"format": "date",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "active: full support · security: security fixes only · eol: no fixes · current/older: products without support dates (GitHub releases).",
					},
					map[string]any{
						"name": "status_label",
						"title": "Status Label",
						"type": "`$STRING`",
						"short": "The vendor's own name for the phase.",
					},
					map[string]any{
						"name": "support_until",
						"title": "Support Until",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "End of active support (then security fixes only).",
						"format": "date",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"format": "uri",
					},
				},
				"name": "product",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/{slug}.json",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "{slug}.json",
									},
								},
								"parts": []any{
									"api",
									"{slug}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "php",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"slug",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/products.json",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "products.json",
									},
								},
								"parts": []any{
									"api",
									"products.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.products`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cat",
											"orig": "cat",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "p",
											"orig": "p",
											"type": "`$STRING`",
											"kind": "query",
											"example": "php,nodejs,postgresql",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"stack": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "branch",
						"title": "Branch",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "days_left",
						"title": "Days Left",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "ending",
						"title": "Ending",
						"type": "`$BOOLEAN`",
						"short": "Still supported, but support ends within 183 days.",
					},
					map[string]any{
						"name": "eol",
						"title": "Eol",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "latest",
						"title": "Latest",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Newest release in your branch.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"short": "Plain-English explanation and what to do.",
					},
					map[string]any{
						"name": "product",
						"title": "Product",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Slug, or null when the line was not recognized.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"format": "uri",
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"name": "stack",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/stack.json",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "stack.json",
									},
								},
								"parts": []any{
									"api",
									"stack.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "s",
											"orig": "s",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "php:8.3.4,ubuntu:22.04,nginx:1.24.0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"s",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"stat": map[string]any{
				"fields": []any{},
				"name": "stat",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/stats.json",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "stats.json",
									},
								},
								"parts": []any{
									"api",
									"stats.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"statistic": map[string]any{
				"fields": []any{},
				"name": "statistic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/stats/wordpress-php.json",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "stats",
									},
									map[string]any{
										"lit": "wordpress-php.json",
									},
								},
								"parts": []any{
									"api",
									"stats",
									"wordpress-php.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
