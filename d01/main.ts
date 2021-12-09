import { readFileSync } from 'fs'

const rf = (input: string) => readFileSync(input, 'utf8')
const data = rf('d01/input').split('\n').map(Number)

export const part1 = (input: number[]) => {
    return input.reduce((acc, curr, i, arr) => {
        return arr[i - 1] && arr[i - 1] < curr ? (acc += 1) : acc
    }, 0)
}
export const part2 = (input: number[]) => {
    const measurementWindows = input
        .map((_, i) => input.slice(i, i + 3).reduce((a, b) => a + b), 0)
        .reduce((acc, curr, i, arr) => {
            return arr[i - 1] && arr[i - 1] < curr ? (acc += 1) : acc
        }, 0)

    return measurementWindows
}

console.log(part1(data))
console.log(part2(data))
