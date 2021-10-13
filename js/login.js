/*  let item;
function fncGoToDetail(i) { 
    console.log(`sendSt`, i)
    const data = item.bilgiler[i]
    const sendst =JSON.stringify(data)
    console.log(`sendst`, sendst)
    localStorage.setItem("urun",sendst)
   window.location.href = "urundetay.html";
  }   */
  $(document).ready(function () {
    //Login Form Submit
$("#loginForm").submit(function (e) { 
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();

    const url ="https://www.jsonbulut.com//json/userLogin.php";
    const pushObj = {
        ref : "941a10ba728df6591038f46c98f1898d",
        userEmail:  email,
        userPass : password,
        face : "no"
    };
   

        $.ajax({
            type: "get",
            url: url,
            data: pushObj,
            dataType: "json",
            success: function (res) {
                const status = res.user[0].durum;
                const msg = res.user[0].mesaj;
                if(status){
                    const item = res.user[0];
                    //console.log('item :>> ', item);
                    //const userId = item.bilgiler.userId

                    //remember me control
                    if( $("#remember").is(':checked') ) {
                        localStorage.setItem("userId",JSON.stringify(item.bilgiler))
                    }
                    //session create
                    sessionStorage.setItem("userId",JSON.stringify(item.bilgiler))
                    //redirect
                    alert(msg)
                    window.location.href = "index.html";

                }else {
                    alert(msg)
                }
            }
        });
        
}); 

    }); 





            
