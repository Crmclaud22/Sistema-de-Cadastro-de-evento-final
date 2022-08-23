//var dataISOAno - new Date("2022");
//console.log(dateIsoAno);

let dataAtual = new Date(2022,8,20);
//console.log(dataAtual);
let dataEvento = new Date(2022,9,10)

let listaParticipantes = ["Claudio","Roberto","Claudia","Claudete","Adilson"];
let idadeParticipantes = 15
let numeroParticipantes = 0

    if (dataEvento>dataAtual) {
        console.log("Agendar Evento")
    
         }  else {console.log("data invalida")
    }  

    console.log("-------------------------------------------------")
    //console.log("Comecei a entender")

    if (idadeParticipantes >= 18) {
        console.log("Entrada Permitida")
    } else {
        console.log("Idade Invalida")
    }
    console.log("-------------------------------------------------")
    console.log(listaParticipantes)
    console.log("-------------------------------------------------")
    numeroParticipantes =listaParticipantes.length 
    if (numeroParticipantes < 100)  {
        console.log("permitir cadastro")
     } else {
        console.log("Cadastro excedido")
     }

        
    
        
    