var acc = document.querySelectorAll(".accordion");

acc.forEach(elem => {
    elem.addEventListener('click' , function (){
        elem.classList.toggle("active");
        elem.nextElementSibling.classList.toggle('active')
    })

    // if(elem.classList.contains('active')){
    //     elem.classList.remove('active')
    // }
})
