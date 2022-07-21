
function onScroll() {
    const missionText = document.querySelector('.mission__text');
    const missionPhone = document.querySelector('.mission__img');
    const missionCoordinates = document.querySelector('.main__mission').getBoundingClientRect();
    const missionTop = missionCoordinates.top;

    if(missionTop <= 0 ){
        missionText.classList.add('text-animation');
        missionPhone.classList.add('phone-animation');
    }else{
        missionText.classList.remove('text-animation');
        missionPhone.classList.remove('phone-animation');
    }
}
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
        func.apply(this, arguments);
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
const onScrollTrottle = throttle(onScroll, 1000);
document.addEventListener('scroll', onScrollTrottle);


//вращаем телефон по скролу
// function onScrollROtate() {
//     const missionPhone = document.querySelector('.mission__img');
//     const missionCoordinates = missionPhone.getBoundingClientRect();
//     const transformValue = `rotate(${missionCoordinates.y}deg)`
//     missionPhone.style.transform = transformValue
// } 
// document.addEventListener('scroll', onScrollROtate);


