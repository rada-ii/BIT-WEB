// <!-- Events propagation, stopping and preventing default

// Create page containing gallery
// Gallery contains six pictures
// At least one of the pictures should have width of 300px

// Add event listeners to all images on page
// User can click on image and in that moment image will get 1px red border

// If Image width is not 300px event propagation should be stopped!

// Register event listener on document object, which listen for clicks
// When click occurs it should print in console on which element user clicked

//  -->
let images = document.querySelectorAll(".pho");
console.log(images);
// images.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     // console.log("nesto");
//     a;
//   });
// });

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    console.log(event.target.offsetWidth);
    if (event.target.offsetWidth > 300) {
      event.stopPropagation();
      return;
    }

    event.target.style.border = "1px solid red";
  });
});
