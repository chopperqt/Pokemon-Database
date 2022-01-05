export function formatName(name: string) {
    if (typeof name !== 'string') { 
        return ''
    }
     const firstLetters = name[0].toUpperCase()

    return firstLetters + name.slice(1,name.length)
}