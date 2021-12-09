import { readFileSync } from 'fs'

export const rf = (input: string) => readFileSync(input, 'utf8')
export type Instructions = 'forward' | 'down' | 'up'
export const parseSubInstructions = (
    input: string[],
): Partial<Record<Instructions, number>>[] => {
    const pairs = input.map((val: string) => {
        const [k, v] = val.split(' ')
        return {
            [k]: Number(v),
        }
    })

    return pairs
}
