export const autoExpand = (element: HTMLTextAreaElement) => {
    element.style.height = 'inherit'

    const height = element.scrollHeight

    element.style.height = `${height}px`
}
