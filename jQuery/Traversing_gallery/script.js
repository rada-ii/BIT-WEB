// function selectMiddleImg() {
//   $('#gallery1 .selected').removeClass('selected');
//   $('#gallery2 img:nth-child(2)').addClass('selected');
// }

let currentGallery = 1;
let currentImg = 1;
function selectMiddleImg() {
  $(`#gallery${currentGallery} img:nth-child(${currentImg})`).removeClass(
    'selected'
  );
  currentGallery = currentGallery === 1 ? 2 : 1;
  currentImg = currentGallery === 1 ? 1 : 2;
  $(`#gallery${currentGallery} img:nth-child(${currentImg})`).addClass(
    'selected'
  );
}

// let currentGallery = 1;
// let currentImg = 1;
// function selectMiddleImg() {
//   if (currentGallery === 1) {
//     $(`#gallery${currentGallery} img:nth-child(${currentImg})`).removeClass(
//       'selected'
//     );
//     currentGallery = 2;
//     currentImg = 2;
//     $(`#gallery${currentGallery} img:nth-child(${currentImg})`).addClass(
//       'selected'
//     );
//   } else {
//     $(`#gallery${currentGallery} img:nth-child(${currentImg})`).removeClass(
//       'selected'
//     );
//     currentGallery = 1;
//     currentImg = 1;
//     $(`#gallery${currentGallery} img:nth-child(${currentImg})`).addClass(
//       'selected'
//     );
//   }
// }
