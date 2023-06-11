// debounce is an api calling technique when you only want to call an api after a specific
// time interval between two user actions: click of a button, search on an input box

const debounce = (func, delay) => {
    let timeoutId

    return function(...args) {
        clearTimeout(timeoutId)

        setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

const apiCall = () => {
    console.log('api call')
}

const debounceAPICall = debounce(apiCall, 5000)

window.addEventListener('scroll', debounceAPICall)