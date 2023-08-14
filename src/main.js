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
