onload = () => {
    document.querySelector('#btn-converter').onclick = converterTemp;
    document.querySelector('#temp-inicial').onfocus = limparErro;
};


function converterTemp() {
    const tempInicial = document.querySelector('#temp-inicial').value;
    const opcao = document.querySelector('#opcoes-temp').value;

    if(isNaN(tempInicial) || tempInicial == "") {
        document.querySelector('#erro').innerHTML = `Informe a temperatura em números`;
    }else {
        if(opcao == "fahrenheit") {
            const tempFinal = ((tempInicial -32) / 1.8).toFixed(1);
            document.querySelector('#resultado').innerHTML = `${tempInicial}F equivale a ${tempFinal}ºC`; 
        }else {
            const tempFinal = ((tempInicial * 1.8) + 32).toFixed(1);
            document.querySelector('#resultado').innerHTML = `${tempInicial}ºC equivale a ${tempFinal}F`;
        };
        
    };
}

function limparErro(){
    document.querySelector('#erro').innerHTML = "";
    document.querySelector('#resultado').innerHTML = "";
    document.querySelector('#temp-inicial').value = "";
};
