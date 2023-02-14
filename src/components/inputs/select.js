const selects = document.querySelectorAll('.select')

selects.forEach(select => {
    const wrap = select.querySelector('.select__wrap__select')
    const text = select.querySelector('.select__wrap__select__text')
    const options = select.querySelectorAll('.option')

    wrap.onclick = () => {
        select.classList.toggle('open')
    }

    options.forEach(option => {
        option.onclick = () => {
            select.classList.remove('open')
            select.classList.add('success')
            text.innerHTML = option.innerHTML
        }
    })

})