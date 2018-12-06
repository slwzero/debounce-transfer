var debounceTransfer = require('..')

describe('debounce test case', function () {
    var fn
    var debounce
    beforeEach(function () {
        fn = jasmine.createSpy('fn')
        debounce = debounceTransfer(fn, 500)
        jasmine.clock().install()
    })

    afterEach(function () {
        jasmine.clock().uninstall()
    })
    
    it('test case1', function () {
        debounce()
        jasmine.clock().tick(500)
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('test case2', function () {
        debounce()
        debounce()
        jasmine.clock().tick(500)
        expect(fn).toHaveBeenCalledTimes(1)
    })

})