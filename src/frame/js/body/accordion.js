// ********************************************* version 1.0.0
export function accordion() {
  const accordionNames = getComputedStyle(document.documentElement).getPropertyValue('--accordion');
  if (accordionNames) { 
    const accordionOptionsList = getComputedStyle(document.documentElement).getPropertyValue('--accordion-options');
    const accordionOptions = accordionOptionsList.trim().split(', ');
    const accordionList = document.querySelectorAll(accordionNames);
    
    for (let i = 0; i < accordionList.length; i++) {
      for (let j =0; j < accordionList[i].children.length; j++) {
        accordionList[i].children[j].children[1].classList.add('hide');
        
        if (accordionOptions[i].includes('open')) {
          accordionList[i].children[0].children[1].classList.remove('hide');
          accordionList[i].children[0].setAttribute('data-active', 'true');
        }
  
        accordionList[i].children[j].children[0].addEventListener('click', function() {
          if(accordionOptions[i].includes('single')) {
            for (let k = 0; k < accordionList[i].children.length; k++) {
              if (k != j) {
                accordionList[i].children[k].children[1].classList.add('hide');
                accordionList[i].children[k].removeAttribute('data-active');
              }
            }
  
            accordionList[i].children[j].hasAttribute('data-active') ?
            accordionList[i].children[j].removeAttribute('data-active') :
            accordionList[i].children[j].setAttribute('data-active', 'true');
  
            accordionList[i].children[j].children[1].classList.toggle('hide');
          } else {
            accordionList[i].children[j].hasAttribute('data-active') ?
            accordionList[i].children[j].removeAttribute('data-active') :
            accordionList[i].children[j].setAttribute('data-active', 'true');
  
            accordionList[i].children[j].children[1].classList.toggle('hide');
            
          }
        })
      } 
    }
  }
}