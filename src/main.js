'use srict';

let header = document.querySelector('.header');
let header_height = header.getBoundingClientRect().height;



document.addEventListener('scroll', () => {
  //스크롤 되는 Y 좌표가 headerheight보다 크면 다른 스타일링!
  if(window.scrollY > header_height){
    header.classList.add('header--dark');
    
  }
  else{
    header.classList.remove('header--dark');
  }
}
)

//home 섹션을 아래로 스크롤하면 투명해지게 만들기
const home = document.querySelector('.home__container');
const home_height = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / home_height;
} )

// home 섹션 반으로 지나면 arrow up 버튼 보이게 만들기
const arrow_up = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > home_height / 2){
    arrow_up.style.opacity = 1;
  }else{
    arrow_up.style.opacity = 0;
  }
} )

// navbar 토글버튼 클릭 처리
const navbar_menu = document.querySelector('.header__menu');
const navbar_toggle_btn = document.querySelector('.header__toggle');
navbar_toggle_btn.addEventListener('click', () => { 
  navbar_menu.classList.toggle('open');
} )

// navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbar_menu.addEventListener('click', () => { 
  navbar_menu.classList.remove('open');
} )