// ********************************************* version 1.0.0
export function modal() { 
  const target = getComputedStyle(document.documentElement).getPropertyValue('--modal');

  if (target) {
    const targetList = document.querySelectorAll(target);
    
    targetList.forEach(el => {
      const overlay = document.createElement('div');
      const close = document.createElement('div');
      
      el.style.display = 'flex';
      el.classList.add('hide');
      overlay.classList.add('menu-modal-overlay');
      el.insertAdjacentElement('beforeend', overlay);

      close.classList.add('menu-modal-close');
      el.firstElementChild.firstElementChild.insertAdjacentElement('afterbegin', close);

      close.addEventListener('click', function() {
        el.classList.add('hide');
      })

      overlay.addEventListener('click', function() {
        el.classList.add('hide');
      })

      window.addEventListener('resize', function() {
        changeHeight(el);
      })
      
      window.addEventListener('load', function() {
        changeHeight(el);
      })
    })
  }
}


export function openModal() {
  const target = getComputedStyle(document.documentElement).getPropertyValue('--open-modal');
  const targetOptions = getComputedStyle(document.documentElement).getPropertyValue('--open-modal-options');

  if (target) {
    const btn = target.trim().split(', ');
    const modal = targetOptions.trim().split(', ');
    
    for (let i = 0;i < btn.length; i++) {
      const btnItem = document.querySelectorAll(btn[i]);
      const modalItem = document.querySelector(modal[i]);
      
      btnItem.forEach(el => {
        el.addEventListener('click', function() {
          modalItem.classList.remove('hide');
          changeScroll(modalItem);
        })
      })
    }
  }
}


function changeHeight(el) {
  const children = el.firstElementChild.children;
  const firstHeight = children[1] ? children[0].clientHeight : 0;
  const content = children[1] ? children[1] : children[0];
  const lastHeight = children[2] ? children[2].clientHeight : 0;
  
  const windowHeight = window.innerHeight;
  const maxHeight = windowHeight - firstHeight - lastHeight - 36;
  content.style.maxHeight = maxHeight + 'px';
}


function changeScroll(el) {
  const children = el.firstElementChild.children;
  const content = children[1] ? children[1] : children[0];
  const contentScroll = content.scrollHeight;
  const contentHeight = content.clientHeight;
  
  if(contentScroll > contentHeight) {
    content.style.overflowY = 'scroll';
  } else {
    content.style.overflowY = 'hidden';
  }
}
