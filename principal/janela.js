function abrirJanela(){
    const fundoja = document.getElementById('fundo-ja')
    fundoja.classList.add('abrir')
    
    fundoja.addEventListener('click',(e) => {
         if(e.target.id == 'fecha-ja' || e.target.id == 'fundo-ja'){
            fundoja.classList.remove('abrir')
         }

    })


}