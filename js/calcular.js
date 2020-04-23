function calcular() {
    var qtd = Number(document.getElementById('qtd').value);
    var ano = Number(document.getElementById('ano').value);
    var result = 0;

    if (qtd < 2) {
        alert("Por favor, digite um valor acima de 2.\nÉ necesário um casal de chinchilas!");
    }

    for (var i = 1; i <= ano; i++) {
        result = ((qtd * 3));
        document.getElementById('text').value += "Em " + i + " ano" + ": " + result + "\n";
        qtd = result;
    }
}