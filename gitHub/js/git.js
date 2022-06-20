// menu에 hover 했을 때 텍스트 색의 변화
const menu = document.querySelectorAll(".menu_over");
// span_tag 에 밑줄
const span = document.querySelectorAll(".span_tag");
// select에 hover 했을 때 배경 색의 변화
const select = document.querySelectorAll("select");
console.log(select)

// span 반복문
for(let i = 0; i < span.length; i++){
    span[i].onmouseover = () => {
        span[i].classList.toggle("line");
    }
}

for(let i = 0; i < span.length; i++){
    span[i].onmouseout = () => {
        span[i].classList.toggle("line");
    }
}

// menu 반복문
for(let i = 0; i < menu.length; i++){
    menu[i].onmouseover = () => {
        menu[i].classList.toggle("menu_over_out");
    }
}

for(let i = 0; i < menu.length; i++){
    menu[i].onmouseout = () => {
        menu[i].classList.toggle("menu_over_out");
    }
}

// select 반복문
for(let i = 0; i < select.length; i++){
    select[i].onmouseover = () => {
        select[i].classList.toggle("selected");
    }
}

for(let i = 0; i < select.length; i++){
    select[i].onmouseout = () => {
        select[i].classList.toggle("selected");
    }
}


