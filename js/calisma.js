/* //storage control
 const localx = localStorage.getItem("urun")
 if(localx != null){
     sessionStorage.setItem("urun",localx)
 }
 //session control 
 const userCek = sessionStorage.getItem("urun")

 if(userCek == null){

     window.location.href = "index.html";
 }else{
     //session true
     const objY = JSON.parse(userCek)
     const urunler = `
     <img class="urunresim" src=`+objY.images[0].normal+` alt="">
     <h2 class="baslik">`+objY.productName+`</h2>
     <p class="aciklama">`+objY.description+`</p>
     <input type="number" name="count" id="count" placeholder="Adet Giriniz..">
     <p class="price">`+objY.price+`₺</p>
     <button type="submit" class="btn btn-primary" id="btnSepet">Sepete Ekle</button>`

     $("#detay").append(urunler);

 }
 */
 $(document).ready(function () {
    const item = localStorage.getItem("sepetim");
    const itemjson = JSON.parse(item);
    $(".urunresim").attr("src", itemjson.images[0].normal);
    $(".baslik").text(itemjson.productName);
    $(".aciklama").text(itemjson.description);
    $(".price").text(itemjson.price + " ₺");
  
    
  });
  
