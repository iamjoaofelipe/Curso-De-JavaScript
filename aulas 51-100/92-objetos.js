// objetos em JavaScript.
var minhaReceita = {
    "descrição": "exemplo",
    "preço": 15.6,
    "ingredientes": {
      "massa": {
        "manteiga": "100 grs",
        "sal": "1 cucharadita",
        "agua": "1 taza"
      },
      "cobertura": {
        "açucar": "120 grs",
        "chocolate": "4 cucharadas",  
      }
    }
  };
  console.log(minhaReceita.descrição);
  console.log(minhaReceita.preço);
  console.log(minhaReceita.ingredientes);
  console.log(minhaReceita.ingredientes.massa);
  console.log(minhaReceita.ingredientes.massa.manteiga);
  console.log(minhaReceita.ingredientes.massa.sal);
  console.log(minhaReceita.ingredientes.massa.agua);
  console.log(minhaReceita.ingredientes.massa["manteiga"]);
  console.log(minhaReceita.ingredientes.massa["sal"]);
  console.log(minhaReceita.ingredientes.massa["agua"]);
  console.log(minhaReceita.ingredientes.cobertura);
  console.log(minhaReceita.ingredientes.cobertura.açucar);
  console.log(minhaReceita.ingredientes.cobertura.chocolate);
 
 

