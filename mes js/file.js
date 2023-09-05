const reseauxsociaux = document.querySelector(".home-slider-bis .logo");
const m = document.querySelector(".medias");



reseauxsociaux.addEventListener("click", () => {

    const ariaToggle =
    reseauxsociaux.getAttribute("aria-expanded") === "true" ? "false" : "true";
    reseauxsociaux.setAttribute("aria-expanded", ariaToggle);

    m.classList.toggle("sociaux");
});


// let loadMoreBtn = document.querySelector('#load-more');
// let loadLessBtn = document.querySelector('#load-less');
// let boxes = [...document.querySelectorAll('.product')];
// let boxes1 = document.querySelectorAll('.product:nth-child(n+7)');
// let currentItem = 3;
// let currentList = boxes.length;
// loadMoreBtn.onclick = () =>{
//    for (var i = currentItem; i < currentItem + 3; i++){
//       boxes[i].style.display = 'flex';
//    }
//    currentItem += 3;
//    console.log(currentItem);
//    if(currentItem >= boxes.length){
//     loadMoreBtn.style.display = 'none';
//    }
// }
// loadLessBtn.onclick = () => {
//     boxes1.style.transform = 'scale(0)';
// }

// let preveiwContainer = document.querySelector('.products-preview');
// let previewBox = preveiwContainer.querySelectorAll('.preview');

// document.querySelectorAll('.products-container .product').forEach(product =>{
//   product.onclick = () =>{
//     preveiwContainer.style.display = 'flex';
//     let name = product.getAttribute('data-name');
//     previewBox.forEach(preview =>{
//       let target = preview.getAttribute('data-target');
//       if(name == target){
//         preview.classList.add('active');
//       }
//     });
//   };
// });

// previewBox.forEach(close =>{
//   close.querySelector('.fa-times').onclick = () =>{
//     close.classList.remove('active');
//     preveiwContainer.style.display = 'none';
//   };
// });