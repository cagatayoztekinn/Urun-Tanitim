$(document).ready(function () {
    $("#btnSepet").click(function (e) {
      e.preventDefault();
      const userId = JSON.parse(sessionStorage.getItem("userId"));
      let item = JSON.parse(localStorage.getItem("sepetim"));
      let itemId = item.productId
      const data6 = {
        ref: "941a10ba728df6591038f46c98f1898d",
        customerId: userId,
        productId: itemId,
        html: userId
      };
      const url6 = "https://www.jsonbulut.com/json/orderForm.php";
      if (userId != null) {
        $.ajax({
          type: "get",
          url: url6,
          data: data6,
          dataType: "json",
          success: function (response) {
            let html = `<div class="alert alert-success" role="alert">
            Ürün Başarıyla Sepete Eklenmiştir. Sepete Gitmek için <a href="sepet.html">Tıklayınız!</a>
          </div>`;
            $(".alert-box").append(html);
            alert("Sepetinize eklendi...")
        
          },
          
        });
      } else {
        window.location.href = "register.html";
      }
    });
  });
  