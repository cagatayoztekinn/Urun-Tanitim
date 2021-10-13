if (
    sessionStorage.getItem("userId") != null ||
    localStorage.getItem("userId") != null
  ) {
    html = `
        <a href="user.html">Profilim</a>
        <a href="sepet.html">Sepetim</a>
        <a href="index.html" onclick=fncExit()>Çıkış Yap</a>
        `
    $("#login").html(html);
  } else {
    html = `
      <a href="login.html"> Giriş Yap </a>
      <a href="register.html"> Kayıt Ol </a>
      `
    $("#login").html(html);
  }
  
  function fncExit() {
    /*   localStorage.removeItem("userId");
    sessionStorage.removeItem("userId"); */
    /* 
    localStorage.clear();
    sessionStorage.clear(); */
    const answer = confirm("Çıkmak istediğinden emin misin ?")
    if(answer ==true){

    //storage romove all
    localStorage.clear();

    //single item remove
    sessionStorage.removeItem("userId");

    //all session remove
    sessionStorage.clear();

    //redirect
    window.location.href = "index.html"
    }
    return false
  }
  