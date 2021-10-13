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
                  <a href="news.html"   class="btn btn-primary"> Habere Git</a>
                </div>
              </div>
        `;
      }
      $("#haber3").html(html);
    },
  });
  
});
