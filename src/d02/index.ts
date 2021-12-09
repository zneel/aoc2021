import { parseSubInstructions } from '../utils/read'

export const part1 = (input: string[]) => {
    const { vertical, horizontal } = parseSubInstructions(input).reduce(
        (acc, curr) => {
            if (curr.forward) acc.horizontal += curr.forward
            if (curr.up) acc.vertical -= curr.up
            if (curr.down) acc.vertical += curr.down
            return acc
        },
        { vertical: 0, horizontal: 0 },
    )

    return horizontal * vertical
}

export const part2 = (input: string[]) => {
    const { vertical, horizontal, aim } = parseSubInstructions(input).reduce(
        (acc, curr) => {
            if (curr.down) acc.aim += curr.down
            if (curr.up) acc.aim -= curr.up
            if (curr.forward) {
                acc.horizontal += curr.forward
                acc.vertical += acc.aim * curr.forward
            }
            return acc
        },
        { vertical: 0, horizontal: 0, aim: 0 },
    )
    return horizontal * vertical
}
