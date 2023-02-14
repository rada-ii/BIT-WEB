$(document).ready(function () {
  var gallery = $('#gallery');
  var images = [
    'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ];
  var title = $('<h1>').text('My Image Gallery').css('text-align', 'center');
  var btn = $('#next-btn');
  var container = $('#container');

  container.css({
    width: '1200px',
    margin: 'auto',
  });
  gallery.before(title);
  btn.css('text-align', 'center');
  btn.css({
    display: 'block',
    margin: 'auto',
    'margin-top': '20px',
  });

  images.forEach(function (image) {
    img = $('<img>').attr('src', image);
    img.css({
      display: 'inline-block',
      height: '200px',
      'margin-left': '10px',
      'margin-right': '10px',
    });
    gallery.append(img);
  });
  btn.on('click', function () {
    changeTitleColor();
    changeImageSize();
  });

  function changeTitleColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    title.css('color', color);
  }
  function changeImageSize() {
    var img = $('img');
    var randomWidth = Math.floor(Math.random() * 400) + 100;
    var randomHeight = Math.floor(Math.random() * 400) + 100;
    img.css({
      width: randomWidth + 'px',
      height: randomHeight + 'px',
    });
    if (randomWidth < 200) {
      img.css('border', '5px solid green');
    } else {
      img.css('border', 'none');
    }
  }
});
