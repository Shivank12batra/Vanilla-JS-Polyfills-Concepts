// throttle is almost same as debounce with the key being that in throttling, the action is
// triggered after the specific time set interval, irrespective of whether the user invokes
// an action during that time interval or not

const throttle = (func, delay) => {
    let isThrottled = false

    return function(...args) {
        if (isThrottled) {
            return
        }
        isThrottled = true
        func.apply(this, args)

        setTimeout(() => {
            isThrottled = false
        }, delay)
    }
}

const makeAPICall = () => {
    console.log('api call made!')
}

const throttleAPI = throttle(makeAPICall, 5000)

