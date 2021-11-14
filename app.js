var cronometro 


function tempo(temp){ //passa como parâmetro o tempo escolhido no dropdown
    
   if(temp < 61){ //se for menor que 1 min altera a saída 
      cronometro = temp
      document.getElementById('insereTempo').innerHTML = '01 : 00'
      

   } 
   else{
       cronometro = temp 
        
       document.getElementById('insereTempo').innerHTML = (cronometro / 60) + ' : 00'  // converte o tempo de segundos para min e exibe 
       if(cronometro == null){
          document.getElementById('insereTempo').innerHTML = '00 : 00' // se estiver zerado(não escolheu o tempo ainda), exibir isso
       }else if(cronometro == 300){
        document.getElementById('insereTempo').innerHTML = '0' + (cronometro / 60) + ' : 00' //se escolher tempos menores que 10 min, exibir desta maneira
       }
    
   }
   return cronometro //retorna o valor do tempo
}


document.getElementById('insereTempo').style.color = 'white'


cronometro = tempo() //atualiza o valor do tempo

let start, clicks = 0 // cria variáveis para acessar com mais facilidade o controlador de tempo e, contar a quantidade de vezes que chamamos a função 

function startC(clicks){ //função start cronometro
    document.getElementById('click').play();
    teste = 1;
    if(clicks == 0){ //só executa uma vez
        start = setInterval( funcC, 1000 )
    }
    document.getElementById('dropdownMenuButton1').className = 'btn btn-success dropdown-toggle disabled';
    
}

let cronometro2

let segundos = 60 

function funcC (){ // função geral de exibição e controle na saída do tempo
 
    if(cronometro == 1800){
        cronometro2 = 29
    } else if(cronometro == 900){
        cronometro2 = 14
    }else if(cronometro == 300){
        cronometro2 = 4
    }else if(cronometro == 60){
        cronometro2 = 0
    }

    cronometro -= 1 //decai o contador 
    
    if(cronometro > 0){ // se, for maior que zero, continua a função
        segundos -= 1 //decai o contador de segundos
        
        
        // resumo geral, para cada caso, uma saída
        if(cronometro < 600 && cronometro > 59){ 
            document.getElementById('insereTempo').innerHTML = '0' + cronometro2 + ' : ' + segundos
            if(segundos < 10){
                document.getElementById('insereTempo').innerHTML = cronometro2 + ' : '  + '0' + segundos
            }
        }else if(cronometro < 60 && cronometro > 9){
            document.getElementById('insereTempo').innerHTML = '0' + cronometro2 + ' : ' + segundos
            if(segundos < 10){
                document.getElementById('insereTempo').innerHTML = cronometro2 + ' : '  + '0' + segundos
            }
        }else if(cronometro < 10 && cronometro > 0){
            document.getElementById('insereTempo').innerHTML = '00 : ' + segundos
            if(segundos < 10){
                document.getElementById('insereTempo').innerHTML = '00 : '  + '0' + segundos
            }
        }else{ // 
            document.getElementById('insereTempo').innerHTML = cronometro2 + ' : ' + segundos
            if(segundos < 10){
                document.getElementById('insereTempo').innerHTML = cronometro2 + ' : '  + '0' + segundos
            }
        }

        if(segundos == 0){ //quando segundo chegar a 0, diminui um valor de minuto
            cronometro2 -= 1
            segundos = 60; //reseta o valor de segundos
        }
        
    }else{// zera o cronometro
        setInterval( function espera(){
            location.reload('insereTempo');
        }, 4000 );
        document.getElementById('alarm').play();
    }

}

let teste = 1;

function resetC(){ // zera o cronometro

    setInterval( function espera(){
        location.reload(cronometro); 
    }, 2000 );
    document.getElementById('click').play();
}

function stopC(){ // para o cronometro por meio da variável passada
    document.getElementById('click').play();
    if (teste == 1){
        clearInterval(start);
        console.log(teste);
        clicks = 0;
    }
    teste++;
}
