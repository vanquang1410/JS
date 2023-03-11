export const isMobileScreen = () => {
    return window.innerWidth < 768
}

export const isWideScreen = () => {
    return window.innerWidth >= 1280
}

export const isDesktopScreen = () => {
    return window.innerWidth >= 992 && window.innerWidth <= 1024
}

export const isTableScreen = () => {
    return window.innerWidth >= 768 && window.innerWidth < 992
}

export const isMaxTableScreen = () => {
    return window.innerWidth < 992
}
export const isSmallScreen = () => {
    console.log(window.innerWidth)
    return window.innerWidth <= 1024
}
