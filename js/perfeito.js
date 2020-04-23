function perfeito(){
    var num = document.getElementById('num').value;
    var soma = 0;

    if(num <= 0){
        alert('Digite um valor válido...')
    }else{
        for(var i = 1; i < num; i++){
            var result = num % i;
            if(result == 0){
                soma += i;
            }
        }
    
        if(soma == num){
            document.getElementById('text').value = "O número " + num + " é PERFEITO";
        }else{
            document.getElementById('text').value = "O número " + num + " NÃO é PERFEITO"
        }
    }
}