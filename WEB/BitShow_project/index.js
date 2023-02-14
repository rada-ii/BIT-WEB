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

$.ajax({
  url: 'https://api.tvmaze.com/shows',
  method: 'GET',
  dataType: 'json',
  success: function (data) {
    for (let i = 0; i < data.length; i++) {
      allShows.push(new Show(data[i]));
    }

    let rowDiv = $('<div class="row gy-2"></div>');
    let currentRow = rowDiv.clone();
    for (let i = 0; i <= 50; i++) {
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
      if ((i + 1) % 4 == 0 || i == 50) {
        $('#main-section').append(currentRow);
        currentRow = rowDiv.clone();
      }
    }
  },
});
