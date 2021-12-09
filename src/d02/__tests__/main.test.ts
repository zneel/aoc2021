import { parseSubInstructions } from '../../utils/read'
import { part1, part2 } from '../index'

describe('d02', () => {
    const input = `forward 5
    down 5
    forward 8
    up 3
    down 8
    forward 2`
        .split('\n')
        .map((el) => el.trim())

    it('should parse correctly', () => {
        const instructions = parseSubInstructions(input)
        console.error(instructions)
        expect(instructions[0].forward).toEqual(5)
        expect(instructions[1].down).toEqual(5)
        expect(instructions[2].forward).toEqual(8)
        expect(instructions[3].up).toEqual(3)
        expect(instructions[4].down).toEqual(8)
        expect(instructions[5].forward).toEqual(2)
    })

    it('part1 should pass', () => {
        expect(part1(input)).toEqual(150)
    })

    it('part2 should pass', () => {
        expect(part2(input)).toEqual(900)
    })
})
