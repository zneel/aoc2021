import { part1, part2 } from '../index'

describe('d01', () => {
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
    it('part2 should pass', () => {
        expect(part2(input)).toEqual(5)
    })
})
