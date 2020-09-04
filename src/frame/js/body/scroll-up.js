// ********************************************* version 1.0.0
export function scrollUp() {
  const target = getComputedStyle(document.documentElement).getPropertyValue('--scroll-up');
  const targetOptions = getComputedStyle(document.documentElement).getPropertyValue('--scroll-up-options');
  
  if (target) {
    const targetList = document.querySelectorAll(target);
    const targetOptionsList = targetOptions.trim().split(',');
    
    targetList.forEach((el, i) => { 
      const margin = targetOptionsList[i].trim();
      
      el.addEventListener('click', function() {
        window.scrollTo(0, 0);
      })
      
      if (margin != "") {
        el.style.display = 'none';
        
        document.addEventListener('scroll', function() {
          if (window.scrollY >= (window.innerHeight + Number(margin))) {
            el.style.display = 'flex';
          } else {
            el.style.display = 'none';
          }
        })
      }
    })
  }
}
