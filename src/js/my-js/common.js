function disabledBody(bool) {
    if (bool) {
        document.body.style.height = '100vh'
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.height = 'unset'
        document.body.style.overflow = 'unset'
    }
}