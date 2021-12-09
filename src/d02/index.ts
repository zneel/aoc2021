export const part1 = (input: number[]) => {
    return input.reduce((acc, curr, i, arr) => {
        return arr[i - 1] && arr[i - 1] < curr ? (acc += 1) : acc
    }, 0)
}
