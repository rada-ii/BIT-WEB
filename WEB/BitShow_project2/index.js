class Show {
  constructor(data) {
    this.id = data.id;
    this.url = data.url;
    this.name = data.name;
    this.type = data.type;
    this.language = data.language;
    this.genres = data.genres;
    this.status = data.status;
    this.runtime = data.runtime;
    this.averageRuntime = data.averageRuntime;
    this.premiered = data.premiered;
    this.ended = data.ended;
    this.officialSite = data.officialSite;
    this.schedule = data.schedule;
    this.rating = data.rating;
    this.weight = data.weight;
    this.network = data.network;
    this.webChannel = data.webChannel;
    this.dvdCountry = data.dvdCountry;
    this.externals = data.externals;
    this.image = data.image;
    this.summary = data.summary;
    this.updated = data.updated;
    this._links = data._links;
  }
}

let allShows = [];
let showLimit = 50;
let page = 0;
let loadMoreBtn = $(
  '<button class="btn btn-primary my-2" id="load-more">Load More <span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></button>'
);

function renderShows(limit) {
  let rowDiv = $('<div class="row gy-2"></div>');
  let currentRow = rowDiv.clone();
  for (let i = page; i < allShows.length && i < page + limit; i++) {
    let currentShow = allShows[i];
    let showDiv = $(
      `<div class="show col-sm-3"> \
        <a href="./info1.html?id=${currentShow.id}" style="text-decoration: none;"> \
          <img src="${currentShow.image.medium}" \
          alt="${currentShow.name}"
          style="width: 100%; border: 1px solid grey;"/> \
          <p class="show-footer" style="border: 1px solid grey;  padding: 5px; text-align: center;">${currentShow.name}</p> \
        </a> \
      </div>`
    );
    currentRow.append(showDiv);
    if ((i + 1 - page) % 4 == 0 || i == allShows.length - 1) {
      $('#main-section').append(currentRow);
      currentRow = rowDiv.clone();
    }
  }
  $('html, body').animate({ scrollTop: $(document).height() }, 100);
}

function loadMoreShows() {
  page += 4;
  renderShows(4);
  if (page >= allShows.length) {
    loadMoreBtn.hide();
  }
}

loadMoreBtn.appendTo('#load-more-container');
loadMoreBtn.click(function () {
  loadMoreShows();
});

$.ajax({
  url: 'https://api.tvmaze.com/shows',
  method: 'GET',
  dataType: 'json',
  success: function (data) {
    for (let i = 0; i < data.length; i++) {
      allShows.push(new Show(data[i]));
    }
    renderShows(showLimit);
    if (allShows.length <= 4) {
      loadMoreBtn.hide();
    }
  },
});

let mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
