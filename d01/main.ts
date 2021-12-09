import { readFileSync } from 'fs'

const rf = (input: string) => readFileSync(input, 'utf8')
const data = rf('d01/input')
/**
 * part 1
 * @param input
 * @returns
 */
export const part1 = (input: string) => {
    const depths = input.split('\n').map((e) => Number(e))
    return depths.reduce((acc, curr, i) => {
        return depths[i - 1] && depths[i - 1] < curr ? (acc += 1) : acc
    }, 0)
}

console.log(part1(data))
