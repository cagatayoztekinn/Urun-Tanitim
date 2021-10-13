let userId;
if (JSON.parse(localStorage.getItem("userId")) != null) {
  userId = JSON.parse(localStorage.getItem("userId"));
} else if (JSON.parse(sessionStorage.getItem("userId") != null)) {
  userId = JSON.parse(sessionStorage.getItem("userId"));
}
$(document).ready(function () {
  const url8 = "https://www.jsonbulut.com/json/orderList.php";

  const data8 = {
    ref: "941a10ba728df6591038f46c98f1898d",
    musterilerID: userId,
  };
  $.ajax({
    type: "get",
    url: url8,
    data: data8,
    dataType: "json",
    success: function (response) {
      let html = ``;
      let profileHtml = ``;
      let item = response.orderList[0];
      for (let i = 19; i < item.length-6; i++) {
        console.log(item[i]);
        html += `<div class="cart-container">
        <div class="row" >
          <div class="col-lg-2">
            <img
              src="${item[i].normal}"
              alt=""
              width="125"
              height="125"
              class="cart-img"
            />
          </div>
          <div class="col-lg-10">
            <h1 class="cart-item-title">${item[i].urun_adi}</h1>
            <span class="cart-item-price">${item[i].fiyat} TL</span>
          </div>
        </div>
        </div>`;
      }
      $("#cart-list").append(html);

      for (let i = 19; i < item.length-6 ; i++) {
        console.log(item[i]);
        profileHtml += `
        <div class="cartContainer">
        <img src="${item[i].thumb}" alt="${item[i].kisa_aciklama}">
        <div class="textContainer">
          <h4 class="itemTitle">
          ${item[i].urun_adi}</h4>
          <span class="itemPrice">${item[i].fiyat} ₺</span>
        </div>
      </div>`;
      }
      $("#cartMain").append(profileHtml);
    },
  });
});
