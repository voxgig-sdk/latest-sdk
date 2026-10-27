
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LatestSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = LatestSDK.test()
    equal(testsdk instanceof LatestSDK, true,
      'LatestSDK.test() must return a client synchronously')
  })

})
