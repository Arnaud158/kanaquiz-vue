export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
  }
  return shuffled
}

export function cartesianProductMultiple<T>(...sets: T[][]): T[][] {
  if (sets.length === 0) {
    return [[]]
  }
  const firstSet = sets[0]!
  const remainingSets = sets.slice(1)
  const remainingProduct = cartesianProductMultiple(...remainingSets)
  const result: T[][] = []
  for (const element of firstSet) {
    for (const product of remainingProduct) {
      result.push([element, ...product])
    }
  }
  return result
}
