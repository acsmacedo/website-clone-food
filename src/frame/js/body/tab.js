// ********************************************* version 1.0.0
export function tab() {
  const tabNames = getComputedStyle(document.documentElement).getPropertyValue('--tab');
  if (tabNames) { 
    const tabList = document.querySelectorAll(tabNames);

    tabList.forEach( tab => {
      let tabBtn = tab.children[0].children;
      let tabText = tab.children[1].children;
      
      for (let i = 0; i < tabBtn.length; i++) {
        let id = '_' + Math.random().toString(36).substr(2, 9);
        tabBtn[i].setAttribute('data-target', '#' + id);
        tabText[i].id = id;
        
        tabText[i].classList.add('hide');
        tabText[0].classList.remove('hide');
        tabBtn[0].setAttribute('data-active', 'true');
  
        tabBtn[i].addEventListener('click', function(event) {
          event.preventDefault();
          for (let j = 0; j < tabText.length; j++) {
            if(tabBtn[j].hasAttributes('data-active')) {
              tabText[j].classList.add('hide');
              tabBtn[j].removeAttribute('data-active');
            }
          }
          tabText[i].classList.remove('hide');
          tabBtn[i].setAttribute('data-active', 'true');
        })
      }
    })
  }
}