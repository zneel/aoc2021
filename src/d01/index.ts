export const part1 = (input: number[]) => {
    return input.reduce((acc, curr, i, arr) => {
        return arr[i - 1] && arr[i - 1] < curr ? (acc += 1) : acc
    }, 0)
}

export const part2 = (input: number[]) => {
    return input
        .map((_, i) => input.slice(i, i + 3).reduce((a, b) => a + b), 0)
        .reduce((acc, curr, i, arr) => {
            return arr[i - 1] && arr[i - 1] < curr ? (acc += 1) : acc
        }, 0)
}
