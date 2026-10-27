

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LatestSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ProductEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LATEST_TEST_LIVE=TRUE.
  afterEach(liveDelay('LATEST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LatestSDK.test()
    const ent = testsdk.Product()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('product hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of LatestSDK.test(offline).Product().stream('list')) { }
    }, /offline/)

    for await (const _item of LatestSDK.test(offline).Product()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = LatestSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Product().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of LatestSDK.test().Product().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new LatestSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Product().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Product().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LatestSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Product().list({"slug":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LATEST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'product.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"api":{"a":true,"fo":"uri","h":"Api","n":"api","r":false,"t":"`$STRING`","key$":"api","index$":0},"category":{"a":true,"h":"Category","n":"category","r":true,"t":"`$STRING`","key$":"category","index$":1},"cycle":{"a":true,"h":"Cycle","n":"cycle","r":true,"sh":"Branch name as used in URLs, e.g.","t":"`$STRING`","key$":"cycle","index$":2},"date":{"a":true,"fo":"date","h":"Date","n":"date","r":false,"sh":"Release date of that version.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"date","index$":3},"discontinued":{"a":true,"h":"Discontinued","n":"discontinued","r":false,"t":["`$ONE`",["`$STRING`","`$BOOLEAN`","`$NULL`"]],"key$":"discontinued","index$":4},"eol":{"a":true,"h":"Eol","n":"eol","r":false,"sh":"End-of-life date, or true/false when the vendor gives no date, or null when unknown.","t":["`$ONE`",["`$STRING`","`$BOOLEAN`","`$NULL`"]],"key$":"eol","index$":5},"extended_support_until":{"a":true,"fo":"date","h":"Extended Support Until","n":"extended_support_until","r":false,"sh":"Paid extended support (ESU, ELS, Ubuntu Pro...).","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"extended_support_until","index$":6},"extra":{"a":true,"h":"Extra","n":"extra","r":false,"t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"extra","index$":7},"has_versions":{"a":true,"h":"Has Versions","n":"has_versions","r":true,"sh":"False for products tracked by support dates only (no version numbers), so latest is always null.","t":"`$BOOLEAN`","key$":"has_versions","index$":8},"label":{"a":true,"h":"Label","n":"label","r":false,"sh":"Display name when it differs, e.g.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"label","index$":9},"latest":{"a":true,"h":"Latest","n":"latest","op":{"list":{"req":true,"type":["`$ONE`",["`$STRING`","`$NULL`"]]}},"r":false,"sh":"Newest release in this branch.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"latest","index$":10},"latest_date":{"a":true,"fo":"date","h":"Latest Date","n":"latest_date","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"latest_date","index$":11},"lts":{"a":true,"h":"Lts","n":"lts","r":false,"t":"`$BOOLEAN`","key$":"lts","index$":12},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":13},"release_date":{"a":true,"fo":"date","h":"Release Date","n":"release_date","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"release_date","index$":14},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"t":"`$STRING`","key$":"slug","index$":15},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"active: full support · security: security fixes only · eol: no fixes · current/older: products without support dates (GitHub releases).","t":"`$STRING`","key$":"status","index$":16},"status_label":{"a":true,"h":"Status Label","n":"status_label","r":false,"sh":"The vendor's own name for the phase.","t":"`$STRING`","key$":"status_label","index$":17},"support_until":{"a":true,"fo":"date","h":"Support Until","n":"support_until","r":false,"sh":"End of active support (then security fixes only).","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"support_until","index$":18},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":19}},"name":"product","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/{slug}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"php","k":"param","n":"slug","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/{slug}.json","q":{"exist":["slug"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"{slug}.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/products.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cat","or":"cat","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"php,nodejs,postgresql","k":"query","n":"p","or":"p","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/products.json","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"products.json"}],"t":{"req":"`reqdata`","res":"`body.products`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"product","name__orig":"product","Name":"Product","name_":"product","name-":"product","NAME":"PRODUCT","index$":0}, {"active":true,"entity":"product","key$":"BasicProductFlow","kind":"basic","name":"BasicProductFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"product_ref01"}}],"index$":0}]}, 'Product', {"GET /api/{slug}.json":{"protocol":"http","parameters":[{"name":"slug","in":"path","required":true,"description":"Product slug, as in the page URL (latestat.com/php → php).","schema":{"type":"string","pattern":"^[a-z0-9][a-z0-9-]*$"},"example":"php","index$":0}]},"GET /api/products.json":{"protocol":"http","parameters":[{"name":"cat","in":"query","required":false,"description":"A category: lang, framework, database, server-app, os, app, device, service, standard.","schema":{"type":"string","enum":["lang","framework","database","server-app","os","app","device","service","standard"]},"index$":0},{"name":"p","in":"query","required":false,"description":"A hand-picked list of product slugs, comma-separated. Replaces cat.","schema":{"type":"string"},"example":"php,nodejs,postgresql","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let product_ref01_data = Object.values(setup.data.existing.product)[0] as any

    // LIST
    const product_ref01_ent = client.Product()
    const product_ref01_match: any = {}

    const product_ref01_list = (await product_ref01_ent.list(product_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/product/ProductTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = LatestSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['product01','product02','product03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LATEST_TEST_PRODUCT_ENTID': idmap,
    'LATEST_TEST_LIVE': 'FALSE',
    'LATEST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LATEST_TEST_PRODUCT_ENTID']

  const live = 'TRUE' === env.LATEST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LATEST_TEST_PRODUCT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new LatestSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.LATEST_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
