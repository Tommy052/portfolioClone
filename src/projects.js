'use srict';

//porject 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  if(filter == null){
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);
} )

function handleActiveSelection(target){
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter){
  projects.forEach((project) => {
    if(filter === 'all' || filter === project.dataset.type){
      project.style.display = 'block';
    }else{
      project.style.display = 'none';
    }
  } )
  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}


//home observerentry 관련 로직 처리
// const about = document.querySelector('#about');
// const skills = document.querySelector('#skills');
// const testimonials = document.querySelector('#testimonial');
// const work = document.querySelector('#work');
// const contact = document.querySelector('#contact');
// const navItems = document.querySelectorAll('.header__menu__item');
// const home_observer = new IntersectionObserver((entries, home_observer) => {  
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       console.log(navItems);
//       navItems.forEach(navItem => {
//         console.log(navItem.dataset.link);
//         if(navItem.dataset.link === entry.target.id){
//           navItem.classList.add('active');
//         }else{
//           navItem.classList.remove('active');
//         }
//       }
//       )
//     }
//   })
// } )
// home_observer.observe(work);
// home_observer.observe(skills);
// home_observer.observe(testimonials);
// home_observer.observe(contact);
// home_observer.observe(about);