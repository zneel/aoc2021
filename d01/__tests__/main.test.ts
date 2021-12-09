import { part1 } from '../main'

describe('d01', () => {
    it('should pass', () => {
        const input = `
        199
        200
        208
        210
        200
        207
        240
        269
        260
        263
        `
        const r = part1(input)
        expect(r).toBeTruthy()
        expect(r).toEqual(7)
    })
})
