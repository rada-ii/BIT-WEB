$(function () {
  let gallery = $('#gallery');
  let images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
  let title = $('<h1>').text('My Image Gallery');
  let currentIndex = 0;

  gallery.before(title);
  showImage();

  $('#next-btn').click(function () {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage();
  });

  function showImage() {
    let randomWidth = Math.floor(Math.random() * 400) + 100;
    let randomHeight = Math.floor(Math.random() * 400) + 100;
    let img = $('<img>').attr('src', images[currentIndex]);
    img.css({
      width: randomWidth + 'px',
      height: randomHeight + 'px',
    });
    if (randomWidth < 200) {
      img.css('border', '5px solid green');
    }
    gallery.html(img);
    changeTitleColor();
  }

  function changeTitleColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    title.css('color', color);
  }
});
