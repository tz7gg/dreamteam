 const btnsGroup = document.querySelectorAll('.btns-group')

 btnsGroup.forEach(group => {
     const btns = group.querySelectorAll('.btn')
     btns.forEach(btn => {
         btn.onclick = function() {
             btns.forEach(btn => {
                 btn.classList.remove('active')
             })
             this.classList.add('active')
         }
     })
 });