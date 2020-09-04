// ********************************************* version 1.0.0
export function menuColapseSidebar() {
  const menu = getComputedStyle(document.documentElement).getPropertyValue('--menu-colapse-sidebar');
  const menuOptions = getComputedStyle(document.documentElement).getPropertyValue('--menu-colapse-sidebar-options');

  if (menu) {
    const menuList = document.querySelectorAll(menu);
    const optionsList = menuOptions.trim().split(', ');
    
    menuList.forEach((el, i) => { 
      const icon = document.createElement('div');
      const overlay = document.createElement('div');
      const close = document.createElement('div');
      //const triggerClose = document.getElementsByClassName('menu-colapse-trigger');
      //const triggerStop = document.getElementsByClassName('menu-colapse-trigger');
      
      const content = el.firstElementChild;
      const contentClone = content.cloneNode(true);
      
      const options = optionsList[i].split(' ');
      const optionsWidth = Number(options[0].slice(0, (options[0].length)-2));
      const optionsSide = 'menu-side-' + options[1];
      
      icon.classList.add('menu-colapse-icon');
      el.appendChild(icon);

      overlay.classList.add('menu-colapse-overlay');
      document.body.insertAdjacentElement('afterbegin', overlay);

      close.classList.add('menu-colapse-close');
      contentClone.insertAdjacentElement('afterbegin', close);
      
      contentClone.classList.add('menu-colapse-content');
      contentClone.classList.add(optionsSide);
      contentClone.classList.add('hide');
      document.body.insertAdjacentElement('afterbegin', contentClone);

      icon.addEventListener('click', function() {
        overlay.style.display = 'flex';
        contentClone.classList.remove('hide');
      })

      overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        contentClone.classList.add('hide');
      })

      close.addEventListener('click', function() {
        overlay.style.display = 'none';
        contentClone.classList.add('hide');
      })
      
      contentClone.addEventListener('click', function() {
        overlay.style.display = 'none';
        contentClone.classList.add('hide');
      })
      /*
      if (triggerStop.length > 0) {
        for(let i = 0; i <triggerStop.length; i++) {
          triggerStop[i].addEventListener('click', function(e) {
            e.stopPropagation();
          })
        }
      }
      */
      /*
      if (triggerClose.length > 0) {
        for(let i = 0; i <triggerClose.length; i++) {
          triggerClose[i].addEventListener('click', function() {
            overlay.style.display = 'none';
            contentClone.classList.add('hide');
          })
        }
      }
      */
      window.addEventListener('load', function() {
        if (optionsWidth <= window.innerWidth) {
          icon.style.display = 'none';
          contentClone.style.display = 'none';
          content.style.display = 'flex';
        }
      })
      
      window.addEventListener('resize', function() {
        if (optionsWidth <= window.innerWidth) {
          overlay.style.display = 'none';
          contentClone.classList.add('hide');
          contentClone.style.display = 'none';
          icon.style.display = 'none';
          content.style.display = 'flex';
        } else {
          contentClone.style.display = 'flex';
          icon.style.display = 'flex';
          content.style.display = 'none';
        }
      })
    })
  }
}
