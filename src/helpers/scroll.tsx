type IUseScrolled = 'bottom' | 'top'


export function isScrolled(position: IUseScrolled) {
    if (position === 'bottom') {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
            return true
        }

        return false
    }

    return false
}

