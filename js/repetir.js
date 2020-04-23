function repetir(){
    var f = document.getElementById('fruta').value;
    var n = Number(document.getElementById('num').value);

    for(var i = 0; i < n; i++){
        document.getElementById('tarea').value += (f + " * ");
    }
}