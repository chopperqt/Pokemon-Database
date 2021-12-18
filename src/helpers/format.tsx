export function formatName(name: string) {
     const firstLetters = name[0].toUpperCase()

    return firstLetters + name.slice(1,name.length)
}