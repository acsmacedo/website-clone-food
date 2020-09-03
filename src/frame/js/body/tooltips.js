// ********************************************* version 1.0.0
export function tooltips() { 
  const target = getComputedStyle(document.documentElement).getPropertyValue('--tooltips');
  const targetOptions = getComputedStyle(document.documentElement).getPropertyValue('--tooltips-options');

  if (target) { 
    const targetList = document.querySelectorAll(target);
    const targetOptionsList = targetOptions.trim().split(', ');
    
    targetList.forEach((el, i) => {
      const child = el.firstElementChild;
      const heightChild = child.clientHeight;
      child.classList.add('hide');

      if (targetOptionsList[i].includes('click')) {
        el.addEventListener('click', function(e) {
          const position = 'tooltips-' + bestPosition(e.target, e.target.firstElementChild);
          
          child.classList.remove('tooltips-right', 'tooltips-left', 'tooltips-top', 'tooltips-bottom');
          child.style.removeProperty('top');
          child.style.removeProperty('bottom');
          child.style.removeProperty('right');
          child.style.removeProperty('left');
          
          positionValue(position, el, child, heightChild);
          child.classList.add(position);
          child.classList.toggle('hide');

          el.hasAttribute('data-active') ? 
          el.removeAttribute('data-active'): 
          el.setAttribute('data-active', 'true');
        })
      } 
      
      if (targetOptionsList[i].includes('over')){
        el.addEventListener('mouseenter', function(e) {
          const position = 'tooltips-' + bestPosition(e.target, e.target.firstElementChild);

          positionValue(position, el, child, heightChild);
          child.classList.add(position);
          child.classList.toggle('hide');
        })
  
        el.addEventListener('mouseleave', function() {
          child.classList.add('hide');
          child.classList.remove('tooltips-right', 'tooltips-left', 'tooltips-top', 'tooltips-bottom');
          child.style.removeProperty('top');
          child.style.removeProperty('bottom');
          child.style.removeProperty('right');
          child.style.removeProperty('left');
        })
      }

      if (targetOptionsList[i].includes('stop')) {
        child.addEventListener('click', function(e) { 
          e.stopPropagation();
        })
      } else {
        child.addEventListener('click', function(e) {
          e.stopPropagation();
          child.classList.add('hide');
          child.classList.remove('tooltips-right', 'tooltips-left', 'tooltips-top', 'tooltips-bottom');
          child.style.removeProperty('top');
          child.style.removeProperty('bottom');
          child.style.removeProperty('right');
          child.style.removeProperty('left');
          el.removeAttribute('data-active');
        })
      }
    })
  }
}


function positionValue(position, element, child, heightChild) {
  const widthElement = element.clientWidth;
  const heightElement = element.clientHeight;
  const widthChild = child.clientWidth;
  
  if(position == 'tooltips-top' || position == 'tooltips-bottom') {
    const diff = (widthElement - widthChild) / 2;
    child.style.left = diff + 'px';
  }

  if(position == 'tooltips-left' || position == 'tooltips-right') {
    const diff = (heightElement - heightChild) / 2;
    child.style.top = diff + 'px';
  }
}


function bestPosition(element, child) {
  const widthWindow = window.innerWidth;
  const heightWindow = window.innerHeight;
  const widthElement = element.clientWidth;
  const heightElement = element.clientHeight;
  const widthChild = child.clientWidth;
  const heightChild = child.clientHeight;
  
  const top = element.offsetTop - window.scrollY;
  const bottom = heightWindow - heightElement - top;
  const left = element.offsetLeft;
  const right = widthWindow - widthElement - left + 2;

  const diffTop = top - heightChild;
  const diffBottom = bottom - heightChild;
  const diffLeft = left - widthChild;
  const diffRight = right - widthChild;
  
  const obj = { diffTop, diffBottom, diffRight, diffLeft };
  const array = [ diffTop, diffBottom, diffRight, diffLeft ];
  
  const big = Math.max(...array);
  
  for (const key in obj) {
    if (obj[key] == big) {
      return key.slice(4).toLocaleLowerCase();
    }
  }
}
