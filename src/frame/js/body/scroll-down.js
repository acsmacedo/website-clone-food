// ********************************************* version 1.0.0
export function scrollDown() {
  const target = getComputedStyle(document.documentElement).getPropertyValue('--scroll-down');
  const targetOptions = getComputedStyle(document.documentElement).getPropertyValue('--scroll-down-options');
  
  if (target) { 
    const targetList = document.querySelectorAll(target);
    const targetOptionsList = targetOptions.trim().split(', ');
    
    targetList.forEach((el, i) => { 
      el.addEventListener('click', function() {
        const margin = Number(targetOptionsList[i]);
        window.scrollTo(0, (window.innerHeight + margin));
      })
    })
  }
}
