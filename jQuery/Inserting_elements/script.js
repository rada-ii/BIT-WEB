$(document).ready(function () {
  let gallery = $('#gallery');
  let images = [
    'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ];
  let title = $('<h1>').text('My Amazing Gallery');

  gallery.before(title);

  images.forEach(function (img) {
    let image = $('<img>').attr('src', img);
    let randomWidth = Math.floor(Math.random() * 400) + 100;
    // let randomHeight = Math.floor(Math.random() * 400) + 100;
    image.css({
      'object-fit': 'cover',
      width: randomWidth + 'px',
      height: '200px',
    });
    if (randomWidth < 200) {
      image.css('border', '5px solid green');
    }
    gallery.append(image);
  });
});
