$('.search').on('keyup', function () {
  let searchValue = $(this).val().toLowerCase();
  let searchResults = allShows.filter(show =>
    show.name.toLowerCase().includes(searchValue)
  );

  $('#search-list').empty();

  $('#main-section').empty();
  let rowDiv = $('<div class="row gy-2"></div>');
  let currentRow = rowDiv.clone();

  for (let i = 0; i < searchResults.length; i++) {
    let currentShow = searchResults[i];
    let showDiv = $(
      `<div class="show col-sm-3"> \
        <a href="./info1.html?id=${currentShow.id}" style="text-decoration: none;"> \
          <img src="${currentShow.image.medium}" \
          alt="${currentShow.name}"
          style="width: 100%; border: 1px solid grey;"/> \
          <p class="show-footer"style="border: 1px solid grey; padding: 5px; text-align: center;">${currentShow.name}</p> \
        </a> \
      </div>`
    );
    currentRow.append(showDiv);
    if ((i + 1) % 4 == 0 || i == searchResults.length - 1) {
      $('#main-section').append(currentRow);
      currentRow = rowDiv.clone();
    }
  }

  if (searchValue.length > 0) {
    for (let i = 0; i < searchResults.length && i < 10; i++) {
      $('#search-list').show();
      let show = searchResults[i];
      $('#search-list').append(
        `<li class="list-group-item"> \
          <a href="./info1.html?id=${show.id}" style="text-decoration: none; color: black;" > \
            ${show.name} \
          </a> \
        </li>`
      );
    }
  } else {
    $('#search-list').hide();
  }
});

$(document).on('click', function (event) {
  if (!$(event.target).is('input')) {
    $('li').hide();
    $('.search').val('');
  }
});
