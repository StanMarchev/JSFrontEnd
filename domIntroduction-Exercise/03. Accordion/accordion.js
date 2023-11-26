function toggle() {
    const btn = document.getElementsByClassName('button')[0]
    const moreInfo = document.getElementById('extra')

    if (btn.textContent === 'More'){
        moreInfo.style.display = 'block'
        btn.textContent = 'Less'
    } else {
        moreInfo.style.display = 'none'
        btn.textContent = 'More'
    }
}