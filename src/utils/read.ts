import { readFileSync } from 'fs'

export const rf = (input: string) => readFileSync(input, 'utf8')
