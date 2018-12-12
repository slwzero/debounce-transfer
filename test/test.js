var debounceTransfer = require('..')

describe('Call times', function () {
    var fn
    var debounce
    beforeEach(function () {
        fn = jasmine.createSpy('fn')
        debounce = debounceTransfer(fn)
        jasmine.clock().install()
    })

    afterEach(function () {
        jasmine.clock().uninstall()
    })
    
    it('one call', function () {
        debounce()
        debounce()
        debounce()
        expect(fn).toHaveBeenCalledTimes(1)
        jasmine.clock().tick(300)
        debounce()
        expect(fn).toHaveBeenCalledTimes(2)

    })

    it('multiple call', function () {
        debounce()
        debounce()
        debounce()
        debounce()
        expect(fn).toHaveBeenCalledTimes(1)
        jasmine.clock().tick(300)
        debounce()
        expect(fn).toHaveBeenCalledTimes(2)
    })
})

describe('Debounce at first', function () {
    var fn
    var debounce
    beforeEach(function () {
        fn = jasmine.createSpy('fn')
        debounce = debounceTransfer(fn, 300, true)
        jasmine.clock().install()
    })

    afterEach(function () {
        jasmine.clock().uninstall()
    })
    
    it('one call', function () {
        debounce()
        debounce()
        debounce()
        expect(fn).toHaveBeenCalledTimes(0)
        jasmine.clock().tick(300)
        debounce()
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('multiple call', function () {
        debounce()
        debounce()
        debounce()
        debounce()
        expect(fn).toHaveBeenCalledTimes(0)
        jasmine.clock().tick(300)
        debounce()
        expect(fn).toHaveBeenCalledTimes(1)
    })
})

describe('Bind this and proxy arguments:', function () {
    var fn
    var debounce
    beforeEach(function () {
        // fn = jasmine.createSpy('fn')
        jasmine.clock().install()
    })

    afterEach(function () {
        jasmine.clock().uninstall()
    })

    it('this', function () {
        var fakeContext = {}
        debounce = debounceTransfer(function () {
            return this
        })
        var result = debounce.call(fakeContext) === fakeContext
        expect(result).toBe(true)
    })

    it('argument', function () {
        
    })
})