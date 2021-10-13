function fncDetail(i) {
    $("#newsModalLabel").text(news[i].title);
    $(".modal-body").html(news[i].l_description);
  }


let news = [];
$(document).ready(function () {
  const data = {
    ref: "941a10ba728df6591038f46c98f1898d",
    start: 0,
    count: 3,
  };


  const url = "https://www.jsonbulut.com/json/news.php";
  $.ajax({
    type: "get",
    url: url,
    data: data,
    dataType: "json",
    success: function (response) {
      let html = ``;
      const news = response.News[0].Haber_Bilgileri;
      for (let i = 0; i < news.length; i++) {
        console.log(news[i]);
        html += `
        <div class="card" style="width: 18rem">
                <img src="`+news[i].picture+`" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">`+news[i].title+`</h5>
                  <p class="card-text">
                  `+news[i].l_description+`
                  </p>
                  <a href="#" onclick="fncDetail(`+i+`)" class="btn btn-primary">Haberi Oku..</a>
                </div>
              </div>
        `;
      }
      $("#newsCard").html(html);
    },
  });
  const dataIndex = {
    ref: "941a10ba728df6591038f46c98f1898d",
    start: 0,
    count: 3,
  };
  /* //! For Index */
  $.ajax({
    type: "get",
    url: url,
    data: dataIndex,
    dataType: "json",
    success: function (response) {
      let html = ``;
      const newsArr = response.News[0].Haber_Bilgileri;
      for (let i = 0; i < newsArr.length; i++) {
        console.log(newsArr[i]);
        html += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 news-card">
        <div class="card-img-top" style="width: 18rem" id="news-card">
          <img src="${newsArr[i].picture}" class="card-img-top" alt="${newsArr[i].title}" />
          <div class="card-body">
            <h5 class="card-title">${newsArr[i].title}</h5>
            <p class="card-text">
              ${newsArr[i].s_description}
            </p>
            <button type="button" class="btn btn-outline-primary" onclick="fncDetail(${i})" data-bs-toggle="modal" data-bs-target="#newsModal">
            Habere Git
          </button>
          </div>
        </div>
      </div>`;
      }
      $("#newsCard").html(html);
    },
  });
});

function fncDetail(i) {
  $("#newsModalLabel").text(news[i].title);
  $(".modal-body").html(news[i].l_description);
}



