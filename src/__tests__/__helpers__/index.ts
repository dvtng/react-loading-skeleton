import '@testing-library/jest-dom'

const skeletonSelector = 'span.react-loading-skeleton'

export function getAllSkeletons(): HTMLElement[] {
    return Array.from(document.querySelectorAll<HTMLElement>(skeletonSelector))
}

export function getSkeleton(): HTMLElement {
    const skeleton = document.querySelector<HTMLElement>(skeletonSelector)
    if (!skeleton) throw new Error('Could not find skeleton.')

    return skeleton
}
