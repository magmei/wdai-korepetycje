const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('nav ul li');
const slidePage = document.querySelector(".slidepage");
const nextBtnFirst = document.querySelector(".nextBtn");
const prevBtnSecond = document.querySelector(".prev-1");
const nextBtnSecond = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const submitBtn = document.querySelector(".submit");
const progressCheck = document.querySelectorAll(".pgbar-step .check");
const bullet = document.querySelectorAll(".pgbar-step .bullet");
const email_re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

let max = 3;
let cur = 1; 

nextBtnFirst.addEventListener("click", () => {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    if (fname != "" && lname != "") {
        document.getElementById("err1").classList.remove("active");
        slidePage.style.marginLeft= "-33.32%";
        bullet[cur - 1].classList.add("active");
        progressCheck[cur-1].classList.add("active");
        cur += 1;
    } else {
        document.getElementById("err1").classList.add("active");
    }
    
})
nextBtnSecond.addEventListener("click", () => {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if (email_re.test(email) && phone != "") {
        document.getElementById("err2").classList.remove("active");
        slidePage.style.marginLeft= "-66.65%";
        bullet[cur - 1].classList.add("active");
        progressCheck[cur-1].classList.add("active");
        cur += 1;
    } else {
        document.getElementById("err2").classList.add("active");
    }
})
submitBtn.addEventListener("click", () => {
    bullet[cur - 1].classList.add("active");
    progressCheck[cur-1].classList.add("active");
    cur += 1;
    setTimeout(() =>{
        alert("Dziękujemy za wypełnienie formularza.");
        location.reload();
    }, 800)
})

prevBtnSecond.addEventListener("click", () => {
    slidePage.style.marginLeft= "0%";
    bullet[cur - 2].classList.remove("active");
    progressCheck[cur-2].classList.remove("active");
    cur -= 1;
})
prevBtnThird.addEventListener("click", () => {
    slidePage.style.marginLeft= "-33.32%";
    bullet[cur - 2].classList.remove("active");
    progressCheck[cur-2].classList.remove("active");
    cur -= 1;
})

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(scrollY >= (sectionTop - sectionHeight)) {
            current = section.getAttribute('id');

        }
    })
    navList.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
})
