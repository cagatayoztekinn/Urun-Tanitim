 const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("categoryId");

let items = [];
$(document).ready(function () {
  const url = "https://www.jsonbulut.com/json/product.php";
  const data = {
    ref: "941a10ba728df6591038f46c98f1898d",
    start: 0,
    categoryId: categoryId,
    order: "desc",
  };
  $.ajax({
    type: "get",
    url: url,
    data: data,
    dataType: "json",
    success: function (response) {
      const item = response.Products[0].bilgiler;
      items = item;
      let html = ``;
      if (item != null) {
        for (let i = 0; i < item.length; i++) {
          console.log(item[i]);
          html += `
          <div class="FirstCard">
                <img src="`+item[i].images[0].normal+`"class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">`+item[i].productName+`</h5>
                  <p class="card-text">`+item[i].brief+`</p>
                  <a onclick="fncItem(`+i+`)" href="#" id="local" class="btn btn-primary">Ürüne Git</a>

                </div>
              </div>
          `;
        }
      } else {
        html += `<h3>Aradığınız kategoriye ait ürün bulunamadı!</h3>`;
      }
      $("#product").append(html);
    },
  });
});
function fncItem(i) {
  let itempage = JSON.stringify(items[i]);
  localStorage.removeItem("sepetim");
  sessionStorage.removeItem("sepetim");
  localStorage.setItem("sepetim", itempage);
  sessionStorage.setItem("sepetim", itempage);
  window.location.href = "urundetay.html";
}


          
 