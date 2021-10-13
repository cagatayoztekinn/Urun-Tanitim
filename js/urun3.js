/* let item;
function fncGoToDetail(i) { 
    console.log(`sendSt`, i)
    const data = item.bilgiler[i]
    const sendst =JSON.stringify(data)
    console.log(`sendst`, sendst)
    localStorage.setItem("urun",sendst)
   window.location.href = "urundetay.html";
  }
    const url2 = "https://www.jsonbulut.com/json/product.php"
    const data2 = {
        ref : "941a10ba728df6591038f46c98f1898d",
        start: 0,
        count :6,
        
    }
    let html =``
    $.ajax({
        type: "get",
        url: url2,
        data: data2,
        dataType: "json",
        success: function (res) {
            const status = res.Products[0].durum;
            const msg = res.Products[0].mesaj;
        if(status){
             item = res.Products[0];
            console.log('item :>> ', item);
            console.log(`item bilgiler`, item.bilgiler)

            for (let i = 0; i < item.bilgiler.length-3; i++) {
                const data = item.bilgiler[i]
                const sendst =JSON.stringify(data)
                html += `
                
                <div class="FirstCard">
                <img src="`+data.images[0].normal+`"class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">`+data.productName+`</h5>
                  <p class="card-text">`+data.brief+`</p>
                  <a onclick="fncGoToDetail(`+i+`)" href="#" id="local" class="btn btn-primary">Ürüne Git</a>

                </div>
              </div>`
            } 

            $("#urun3").append(html);
            
           } else{
            alert(msg)
        }
       
    }

    }); */
    let item = [];
$(document).ready(function () {
  const itemCount = 3;
  const url = "https://www.jsonbulut.com/json/product.php";
  const data = {
    ref: "941a10ba728df6591038f46c98f1898d",
    start: 0,
    count: itemCount,
    order: "desc",
  };
  $.ajax({
    type: "get",
    url: url,
    data: data,
    dataType: "json",
    success: function (response) {
      const items = response.Products[0].bilgiler;
      item = items;
      let html = ``;
      for (let i = 0; i < items.length; i++) {
        html += `
        <div class="FirstCard">
                <img src=${items[i].images[0].normal} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${items[i].productName}</h5>
                  <p class="card-text">${items[i].brief}</p>
                  <a onclick="fncClick(`+i+`)" href="urundetay.html" id="local" class="btn btn-primary">Ürüne Git</a>

                </div>
              </div>
        `;
      }
      $("#urun3").html(html);
    },
  });
});

function fncClick(i) {
  let itempage = JSON.stringify(item[i]);
  localStorage.removeItem("sepetim");
  sessionStorage.removeItem("sepetim");
  localStorage.setItem("sepetim", itempage);
  sessionStorage.setItem("sepetim", itempage);
}