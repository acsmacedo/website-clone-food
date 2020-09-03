// ********************************************* version 1.0.0
export function incrementNumbers() {
  const target = getComputedStyle(document.documentElement).getPropertyValue('--increment-numbers');
  const targetOptions = getComputedStyle(document.documentElement).getPropertyValue('--increment-numbers-options');

  if (target) {
    const targetList = document.querySelectorAll(target);
    const targetOptionsList = targetOptions.trim().split(',');

    targetList.forEach((el, i) => {
      const number = Number(targetOptionsList[i].trim());
      let initial = 0;
      const interval = Math.ceil(number / 100);
      
      el.innerHTML = 0;

      const myLoop = function() {           
        let time = setTimeout(function() {   
          el.innerHTML = initial;
                             
          if (initial <= number) { 
            if ((initial + interval) > number) {
              initial += (Math.ceil((number - initial) / 10))
            } else {
              initial += interval; 
            }          
            myLoop();             
          }
        }, 100)

        if (initial == number) {
          clearTimeout(time);
        }
      }

      window.addEventListener('scroll', function() {
        const height = el.offsetTop;
        if (height <= (window.scrollY + window.innerHeight - (window.innerHeight * 0.2))) {
          myLoop();
          console.log(height);
        } else {
          el.innerHTML = 0;
          initial = 0;
        }
      })
    })
  }
}
