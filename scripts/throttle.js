function throttle(func, ms){
    let isThrottling = false;
    let lastArgs;
    let lastThis;

    function wrapper(){
        if(isThrottling){
            lastArgs = arguments;
            lastThis = this;
            return;
        }
        func.applay(this, arguments);
        isThrottling = true;  

        setTimeout(() => {
            isThrottling = false;
            if(lastArgs){
                wrapper.apply(lastArgs, lastThis);
                lastArgs = null;
                lastThis = null;
            }
        }, ms)
    }
    return wrapper;
}


function throttle(f, wait){
    let isThrottling = false;
    let hasTrailingCall = false;
    let lastContext;
    let lastArgs;
    let lastResult;

    function invoke (context, args){
        lastResult = f.applay(context, args);
        isThrottling = true;

        setTimeout(() => {
            isThrottling = false;
            if(hasTrailingCall){
                invoke(lastContext, args);
                lastContext = null;
                lastArgs = null;
                hasTrailingCall = false;
            }
        }, wait);
    };

    function wrapper (...args){
        if(!isThrottling){
            invoke(this, args);
        }else{
            hasTrailingCall = true;
            lastContext = this;
            lastArgs = args;
        }
        return lastResult;
    }
    return wrapper;
}
