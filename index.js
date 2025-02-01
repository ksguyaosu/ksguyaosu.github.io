let isActiveHide = true
let isActiveAnimate = true


function toggleHidden() {
    const displayNone = 'none'
    const displayFlex = 'flex'

    isActiveHide = !isActiveHide

    if (isActiveHide === false) {
        const elem = document.getElementById('progressBar')
        elem.style.display = displayNone  
    } else if (isActiveHide === true) {
        const elem = document.getElementById('progressBar')
        elem.style.display = displayFlex
    }
}

function toggleAnimate() {

    isActiveAnimate = !isActiveAnimate

    if (isActiveAnimate === false) {
        const elem = document.getElementById('progressBar')        
        elem.classList.add('rotateElement')
    } else if (isActiveAnimate === true) {        
        const elem = document.getElementById('progressBar')  
        elem.classList.remove('rotateElement')
    }
}

function changeValue(value) {
    const elem = document.getElementById('progressBar')
    elem.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#0f7bd3 ${value}%, #ccc 0%)`;
}