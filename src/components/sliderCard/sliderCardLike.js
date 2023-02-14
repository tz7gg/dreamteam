const likeIcons = document.querySelectorAll('.like')

likeIcons.forEach(icon => {
    icon.onclick = (e) => {
        e.preventDefault();
        icon.classList.toggle('active')
    }
})