function estrela(){
    var preloader = document.querySelector('.loader');
    preloader.classList.add("loader-finish");

    var star = document.getElementById('num').value;
    
    document.getElementById('par2').innerHTML = "";
    for(var i = 0; i < star; i++){
        for(var j = 0; j <= i; j++){
            document.getElementById('par2').innerHTML += '<img src="imagens/star.png" alt="estrelas" height="25" width="25">';
        }
        document.getElementById('par2').innerHTML += "<br>";
    }
}