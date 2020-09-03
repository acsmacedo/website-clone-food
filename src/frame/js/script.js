import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { scrollDown, tab, menuColapseSidebar } from './frame.js'

scrollDown();
tab();
menuColapseSidebar();


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".menu").style.top = "0";
  } else {
    document.querySelector(".menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}