let loadMoreBtn = document.querySelector('#solutions #load-more');
let currentItem = 4;
loadMoreBtn.onclick = () =>{
  let boxes = [...document.querySelectorAll('#solutions .container .box-container .box')];
  for (var i = currentItem; i < currentItem+4; i++) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem += 4;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
}