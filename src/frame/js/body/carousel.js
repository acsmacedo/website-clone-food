// ********************************************* version 1.0.0
export function carousel() {
  const carouselNames = getComputedStyle(document.documentElement).getPropertyValue('--carousel');
  if (carouselNames) { 
    const carouselList = document.querySelectorAll(carouselNames);

    for (let i = 0; i < carouselList.length; i++) {
      let carouselItems = carouselList[i].children[0].children;
      let itemWidth = carouselItems[0].offsetWidth;
      let itemPosition = [];
  
      let navAll = document.createElement('div');
  
      for (let j = 0; j < carouselItems.length; j++) {
        let navItem = document.createElement('div');
        navAll.appendChild(navItem);
  
        itemPosition.push(j * (itemWidth + 16));
      }
  
      for (let j = 0; j < carouselItems.length; j++) {
        carouselItems[j].style.left = itemPosition[j] + 'px';
      }
  
      carouselList[i].children[0].style.height = carouselItems[0].offsetHeight + 'px';
      
      let nav = document.createElement('nav');
      
      let controlsNext = document.createElement('div');
      let controlsPrev = document.createElement('div');
      nav.appendChild(controlsPrev);
      nav.appendChild(navAll);
      nav.appendChild(controlsNext);
      carouselList[i].appendChild(nav);
  
      let btnPrev = carouselList[i].children[1].children[0];
      let btnNext = carouselList[i].children[1].children[2];
      
      btnPrev.addEventListener('click', function() {
        itemPosition.push(itemPosition.shift());
        
        for (let j = 0; j < carouselItems.length; j++) {
          carouselItems[j].style.left = itemPosition[j] + 'px';
          carouselActive(j);
        }
  
        for (let y = 0; y < btnItems.length; y++) {
          btnItems[y].removeAttribute('data-active');
          if(carouselItems[y].style.left == '0px') {
            btnItems[y].setAttribute('data-active', 'true');
          }
        }
      })
  
      btnNext.addEventListener('click', function() {
        itemPosition.unshift(itemPosition.pop());
        
        for (let j = 0; j < carouselItems.length; j++) {
          carouselItems[j].style.left = itemPosition[j] + 'px';
        }
  
        for (let y = 0; y < btnItems.length; y++) {
          btnItems[y].removeAttribute('data-active');
          if(carouselItems[y].style.left == '0px') {
            btnItems[y].setAttribute('data-active', 'true');
          }
        }
      })
  
      let btnItems = carouselList[i].children[1].children[1].children;
      btnItems[0].setAttribute('data-active', 'true');
  
      for (let j = 0; j < carouselItems.length; j++) {
        btnItems[j].addEventListener('click', function() {
          itemPosition = [];
          for (let k = 0; k < carouselItems.length; k++) {
            itemPosition.push(k * (itemWidth + 16));
          }
          for (let k = 0; k < j; k++) {
            itemPosition.unshift(itemPosition.pop());
          }
          for (let k = 0; k < carouselItems.length; k++) {
            carouselItems[k].style.left = itemPosition[k] + 'px';
          }
          carouselActive(j);
        })
      }
  
      let carouselActive = function (index) {
        for (let y = 0; y < btnItems.length; y++) {
          btnItems[y].removeAttribute('data-active');
        }
        if(carouselItems[index].style.left == '0px') {
          btnItems[index].setAttribute('data-active', 'true');
        }
      }
    }
  }
}