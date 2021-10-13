$(document).ready(function () {
    const url3 = "https://www.jsonbulut.com/json/advertisement.php"
    const data3 = {
        ref : "941a10ba728df6591038f46c98f1898d",
        advertisementId: 26
        
    }
    
    $.ajax({
        type: "get",
        url: url3,
        data: data3,
        dataType: "json",
        success: function (res) {
            const status = res.reklam[0].durum;
            const msg = res.reklam[0].mesaj;
        if(status){
            const item = res.reklam[0];
            console.log('item :>> ', item);
         
            const BurgerReklam = `
           
            <img src="${item.reklam.dosya}" class="card-img-top " alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.reklam.adi}</h5>
              <p class="card-text">${item.reklam.href}</p>
              <a href="${item.reklam.href}" class="btn btn-primary">Ürüne Git</a>
            </div>
         
            `
            $("#advertisement_card").append(BurgerReklam);
        
        
        }else{alert(msg)

        }
    }
    });
        const data7 = {
            ref: "941a10ba728df6591038f46c98f1898d",
          };
          const url7 = "https://www.jsonbulut.com/json/companyCategory.php";
          $.ajax({
            type: "get",
            url: url7,
            data: data7,
            dataType: "json",
            success: function (response) {
              let html = `<h1>Tüm Kategoriler</h1>`;
              let topCategories = response.Kategoriler[0].Categories.filter(x => x.TopCatogryId === "0");
              console.log(topCategories)
              for (let i = 0; i < topCategories.length; i++) {
                //console.log(response.Kategoriler[0].Categories[i]);
                let subCategories = response.Kategoriler[0].Categories.filter(x => x.TopCatogryId === topCategories[i].CatogryId);
                if (topCategories[i].TopCatogryId == 0) {
                  html += `
                   <div class="btn-group dropend">
                        <a
                      href=""
                      id="category-dropend"
                      class="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ${topCategories[i].CatogryName}
                    </a>
                    `
                    html +=  `<ul class="dropdown-menu" id="category-dropdown">
                    <a href="urunler.html?categoryId=${topCategories[i].CatogryId}"><h5 class="category-title mt-1">${topCategories[i].CatogryName.toUpperCase()}</h5></a>`
                    
                    for (let j = 0; j < subCategories.length; j++) {
                       html+= `<li><a href="urunler.html?categoryId=${subCategories[j].CatogryId}">${subCategories[j].CatogryName}</a></li> `
                        
                    }
                    html += `</ul></div>`
                } 
              }
              $("#dmenu").html(html);
            },
          });
 
      
});