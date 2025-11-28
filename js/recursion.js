export function steamrollArray(arr) {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const flattend = steamrollArray(arr[i])
            result.push(...flattend)
        } else {
            result.push(arr[i])
        }
    }
    return result



}