import { part1 } from '../index'

describe('d02', () => {
    const input = `199
    200
    208
    210
    200
    207
    240
    269
    260
    263`
        .split('\n')
        .map(Number)
    it('part1 should pass', () => {
        expect(part1(input)).toEqual(7)
    })
})
