import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "product",
    "accessor": "Product",
    "op": "list",
    "method": "GET",
    "path": "/api/{slug}.json",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "php"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "slug": "x",
      "name": "x",
      "category": "x",
      "url": "x",
      "has_versions": true,
      "tags": [
        "x"
      ],
      "checked_at": "2026-01-01T00:00:00Z",
      "source": "x",
      "cycles": [
        {
          "cycle": "x",
          "label": "x",
          "release_date": "2026-01-01",
          "latest": "x",
          "latest_date": "2026-01-01",
          "lts": true,
          "status": "active",
          "status_label": "x",
          "support_until": "2026-01-01",
          "eol": "x",
          "extended_support_until": "2026-01-01",
          "discontinued": "x",
          "extra": {}
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "list",
    "method": "GET",
    "path": "/api/products.json",
    "args": [],
    "select": {
      "cat": "v1",
      "p": "php,nodejs,postgresql"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "cat",
      "p"
    ],
    "queryArgs": [
      {
        "name": "cat",
        "wire": "cat"
      },
      {
        "name": "p",
        "wire": "p"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "generated_at": "2026-01-01T00:00:00Z",
      "count": 1,
      "products": [
        {
          "slug": "x",
          "name": "x",
          "category": "x",
          "latest": "8.5.10",
          "date": "2026-01-01",
          "has_versions": true,
          "url": "x",
          "api": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "stack",
    "accessor": "Stack",
    "op": "list",
    "method": "GET",
    "path": "/api/stack.json",
    "args": [],
    "select": {
      "s": "php:8.3.4,ubuntu:22.04,nginx:1.24.0"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "s"
    ],
    "queryArgs": [
      {
        "name": "s",
        "wire": "s"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "grade": "A",
      "summary": {
        "checked": 1,
        "eol": 1,
        "behind": 1,
        "security": 1,
        "ending": 1,
        "current": 1,
        "notfound": 1
      },
      "url": "x",
      "feed": "x",
      "items": [
        {
          "input": "x",
          "product": "x",
          "version": "x",
          "state": "current",
          "message": "x",
          "branch": "x",
          "latest": "x",
          "status": "active",
          "eol": "x",
          "ending": true,
          "days_left": 1,
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "stat",
    "accessor": "Stat",
    "op": "load",
    "method": "GET",
    "path": "/api/stats.json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "statistic",
    "accessor": "Statistic",
    "op": "load",
    "method": "GET",
    "path": "/api/stats/wordpress-php.json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
