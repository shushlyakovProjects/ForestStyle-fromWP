var scrollY;
const header_block = document.querySelector('.header_block');
window.addEventListener("scroll", function(){
  var scrollY = window.pageYOffset;
  if(scrollY>=100)header_block.style.cssText = `background-color: rgba(0, 0, 0, 1); height: 70px;`;
  if(scrollY<100)header_block.style.cssText = `background-color: rgba(0, 0, 0, 0); height: 80px;`;
})
