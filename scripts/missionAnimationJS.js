let isAnimantionStarted = false
const missionPhone = document.querySelector('.mission__img');
const style = missionPhone.style.transform

console.log('transform:', style)

function startAnimation(obj, step){
    let transformX = 12;
    let transformY = -36;
    let deg = 90;


    const intervalMoveX = setInterval(moveX, step);
    const intervalMoveY = setInterval(moveY, step);
    const intervalRotate = setInterval(rotate, step);

    function moveY(){
        if(transformY >= 120 ){
            clearInterval(intervalMoveY);
        }else{
            transformY++
            obj.style.transform = `rotate(${deg}deg) translate(${transformY}%, ${transformX}%)`;
        }
    }
    function moveX(){
        if(transformX <= -12){
            clearInterval(intervalMoveX);
        }else{
            transformX--
            obj.style.transform = `rotate(${deg}deg) translate(${transformY}%, ${transformX}%)`;
        }
    }
    function rotate(){
        if(deg <= 0){
            clearInterval(intervalRotate);
        }else{
            deg--
            obj.style.transform = `rotate(${deg}deg) translate(${transformY}%, ${transformX}%)`;
        }
    }
}


function onScroll() {
    const screenWidth = document.documentElement.clientWidth;
    const missionText = document.querySelector('.mission__text');
    const missionPhone = document.querySelector('.mission__img');
    const missionCoordinates = document.querySelector('.main__mission').getBoundingClientRect();
    const missionTop = missionCoordinates.top;

    if(missionTop <= 0 && !isAnimantionStarted && screenWidth >= 900){
        isAnimantionStarted = true
        missionText.classList.add('text-animation');
        startAnimation(missionPhone, 20)
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

