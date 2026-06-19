
const produtos = [
    //? Cardápio Geral (Assados Doces Café Mistos Sucos Executivos Refrigerante)___________________________________________________________________________
    //& Comidas -> assados doces mistos executivos | Bebidas -> refrigerantes agua sucos cafe
    //? ASSADOS
    {
        id: 1,
        nome: "Dog Especial",
        preco: 10.00,
        imagem: "../img/veg.jpg",
        unidades: ["bpk"], // Unidade Biopark
        categorias: ["assados"]
    },
    {
        id: 2,
        nome: "Dog Cheddar",
        preco: 9.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["assados"]
    },
    {
        id: 3,
        nome: "Dog Simples",
        preco: 8.00,
        imagem: "../img/queijo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["assados"]
    },
    {
        id: 4,
        nome: "Roceta",
        preco: 29.90,
        imagem: "../img/veg.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["assados"]
    },
    {
        id: 5,
        nome: "Hambúrguer Simples",
        preco: 15.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["assados"]
    },
    {
        id: 6,
        nome: "Hambúrguer Duplo",
        preco: 18.00,
        imagem: "../img/queijo.jpg",
        unidades: ["bpk"],
        categorias: ["assados"]
    },
    {
        id: 7,
        nome: "Assado Strogonoff",
        preco: 13.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },
    {
        id: 8,
        nome: "Coxinha",
        preco: 8.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"], 
        categorias: ["assados"]
    },
    {
        id: 9,
        nome: "Pastel",
        preco: 15.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },
    {
        id: 10,
        nome: "Enrolado de Presunto e Queijo",
        preco: 8.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },
    {
        id: 11,
        nome: "Enrolado de Salsicha",
        preco: 8.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },
    {
        id: 12,
        nome: "Risoles",
        preco: 8.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },
    {
        id: 13,
        nome: "Esfiha de Frango",
        preco: 9.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },
    {
        id: 14,
        nome: "Queijo e Requeijão",
        preco: 8.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },
    {
        id: 15,
        nome: "Cento de Salgados",
        preco: 85.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },
    {
        id: 16,
        nome: "Assado de Calabresa",
        preco: 8.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"], 
        categorias: ["assados"]
    },
    {
        id: 17,
        nome: "Pão de Queijo Trad.",
        ingredientes: "2 unidades: R$5.00",
        preco: 3.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"], 
        categorias: ["assados"]
    },
    {
        id: 18,
        nome: "Pão de Queijo Rec.",
        preco: 3.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"], 
        categorias: ["assados"]
    },
    {
        id: 19,
        nome: "Empadão",
        preco: 10.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },
    {
        id: 20,
        nome: "Empadinha",
        preco: 9.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },
    {
        id: 21,
        nome: "Sanduíche Natural",
        preco: 8.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"], 
        categorias: ["assados"]
    },
    {
        id: 22,
        nome: "Sanduíche Natural com adicionais",
        preco: 8.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["assados"]
    },

    //? DOCES__________________________________________

    {
        id: 23,
        nome: "Bombom Aberto",
        preco: 11.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["doces"]
    },
    {
        id: 24,
        nome: "Cone",
        preco: 12.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["doces"]
    },
    {
        id: 25,
        nome: "Chocomusse",
        preco: 8.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"], 
        categorias: ["doces"]
    },
    {
        id: 26,
        nome: "Donuts",
        preco: 8.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"], 
        categorias: ["doces"]
    },
    {
        id: 27,
        nome: "Fatia de Bolo",
        preco: 4.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"], 
        categorias: ["doces"]
    },
    {
        id: 28,
        nome: "Pedaço de Brownie (Grande):",
        preco: 12.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["doces"]
    },
    {
        id: 29,
        nome: "Pedaço de Brownie (Pequeno)",
        preco: 5.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["doces"]
    },

    //? MISTOS__________________________________________
    {
        id: 30,
        nome: "Pão, Requeijão, Ovo, Presunto e Queijo",
        preco: 10.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["mistos"]
    },
    {
        id: 31,
        nome: "Pão, Requeijão, Ovo e Queijo",
        preco: 9.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["mistos"]
    },
    {
        id: 32,
        nome: "Pão, Requeijão, Queijo e Presunto:",
        preco: 8.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["mistos"]
    },
    {
        id: 33,
        nome: "Pão, Requeijão, Ovo, Queijo, Presunto e Tomate",
        preco: 11.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["mistos"]
    },
    {
        id: 34,
        nome: "Pão, Requeijão, Queijo, Presunto e Ovo (Duplo)",
        preco: 16.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["mistos"]
    },

    //? CAFÉ__________________________________________
    {
        id: 35,
        nome: "Café Expresso",
        preco: 6.99,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["cafe"]
    },
    {
        id: 36,
        nome: "Café Duplo",
        preco: 7.99,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["cafe"]
    },
    {
        id: 37,
        nome: "Carioca",
        preco: 4.99,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["cafe"]
    },
    {
        id: 38,
        nome: "Capuccino Capuccino Italiano",
        preco: 11.99,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["cafe"]
    },
    {
        id: 39,
        nome: "Capuccino Brasileiro",
        preco: 10.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["cafe"]
    },
    {
        id: 40,
        nome: "Chocolate Quente",
        preco: 13.99,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"], 
        categorias: ["cafe"]
    },

    //? SUCOS__________________________________________

    {
        id: 41,
        nome: "Abacaxi com Hortelã",
        preco: 8.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["sucos"]
    },
    {
        id: 42,
        nome: "Abacaxi com Hortelã ao Leite",
        preco: 9.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["sucos"]
    },
    {
        id: 43,
        nome: "Morango",
        preco: 8.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["sucos"]
    },
    {
        id: 44,
        nome: "Morango só Leite",
        preco: 9.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["sucos"]
    },
    {
        id: 45,
        nome: "Maracujá",
        preco: 8.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["sucos"]
    },
    {
        id: 46,
        nome: "Maracujá ao Leite",
        preco: 9.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["sucos"]
    },
    {
        id: 47,
        nome: "Soda Italiana",
        preco: 10.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["sucos"]
    },

    //? EXECUTIVOS__________________________________________

    {
        id: 48,
        nome: "Strogonoff",
        ingredientes:"Arroz, batata palha e strogonoff de carne",
        preco: 20.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["executivos"]
    },
    {
        id: 49,
        nome: "Bife Acebolado",
        ingredientes:"Arroz, feijão, batata rústica, bife acebolado e salada",
        preco: 29.90,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["executivos"]
    },

    //? REFRIGERANTE__________________________________________

    {
        id: 50,
        nome: "Mini Coca 200ml",
        preco: 3.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 51,
        nome: "Mini Coca 200ml Zero",
        preco: 3.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 52,
        nome: "Coca Lata",
        preco: 6.0,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 53,
        nome: "Coca Zero",
        preco: 6.0,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 54,
        nome: "Coca 2L",
        preco: 14.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 55,
        nome: "Coca Zero 2L",
        preco: 14.0,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 56,
        nome: "Monster Vários Sabores",
        preco: 12.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 57,
        nome: "Del Valle",
        preco: 5.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 58,
        nome: "Água Tônica",
        preco: 6.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["agua"]
    },
    {
        id: 59,
        nome: "Chá Copo",
        preco: 4.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["agua"]
    },
    {
        id: 60,
        nome: "Chá Garrafa",
        preco: 7.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["agua"]
    },
    {
        id: 61,
        nome: "Tubaína",
        preco: 5.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 62,
        nome: "Tubario",
        preco: 2.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 63,
        nome: "Tuba Guaraná",
        preco: 2.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk"],
        categorias: ["refrigerante"]
    },
    {
        id: 64,
        nome: "Água Sferrie c/ Gás",
        preco: 3.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["agua"]
    },
    {
        id: 65,
        nome: "Água Sferrie s/ Gás",
        preco: 2.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["agua"]
    },
    {
        id: 66,
        nome: "Água Cristal c/ Gás",
        preco: 4.50,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["agua"]
    },
    {
        id: 67,
        nome: "Água Cristal s/ Gás",
        preco: 4.00,
        imagem: "../img/bolo.jpg",
        unidades: ["bpk", "cantina-bpk"],
        categorias: ["agua"]
    },


    //^ Cardápio Encomendas (Fritos Sanduíches Assados Doces) ___________________________________________________________________________
    //& Combos -> combo-frito combo-assado combo-doce
    //^ FRITOS__________________________________________
    {
        id: 68,
        nome: "Salgados Fritos (100 un.)",
        ingredientes:"Opções:<br>• coxinha de frango<br>• bolinha de queijo<br>• pastel de carne<br>• palitinho de carne<br>• enroladinho de salsicha<br>• trouxinha de presunto e queijo<br>• quibe",
        preco: 85.00,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-frito"]
    },
    {
        id: 69,
        nome: "Combo (45 un.)",
        ingredientes:"Composição:<br>• 25 fritos<br>• 10 mini pizzas<br>• 10 empadinhas",
        preco: 85.00,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-frito"]
    },
    {
        id: 70,
        nome: "Mini Hambúrguer (un.)",
        ingredientes:"Encomendas a partir de 25 unidades ( R$ 105.00 ).",
        preco: 4.20,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-frito"]
    },
    {
        id: 71,
        nome: "Mini Sanduíche com Patê de Frango (un.)",
        ingredientes:"Encomendas a partir de 25 unidades ( 80.00 ).",
        preco: 3.20,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-frito"]
    },
    
    //^ ASSADOS__________________________________________
    {
        id: 72,
        nome: "Mini Pizza (100 un.)",
        preco: 220.00,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-assado"]
    },{
        id: 73,
        nome: "Empadinha (100 un.)",
        preco: 220.00,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-assado"]
    },
    {
        id: 74,
        nome: "Assadinhos (100 un.)",
        preco: 160.00,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-assado"]
    },
    {
        id: 75,
        nome: "Mini Esfirras (100 un.",
        preco: 160.00,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-assado"]
    },
    {
        id: 76,
        nome: "Pão de Queijo (100 un.)",
        preco: 120.00,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-assado"]
    },

    //^ DOCES__________________________________________
    {
        id: 77,
        nome: "Cookies (100 un.)",
        preco: 120.00,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-doce"]
    },
    {
        id: 78,
        nome: "Cupcakes (100 un.)",
        ingredientes:"Encomendas a partir de 30 unidades.",
        preco: 350.00,
        imagem: "../img/bolo.jpg",
        unidades: ["encomendas"],
        categorias: ["combo-doce"]
    },
    
    //! Cantina Biopark (*produtos que não estão em cardápio geral!!!!*)___________________________________________________________________________
    //& mistos assados doces sucos
    {
        id: 79,
        nome: "Hamburgão",
        preco: 9.00,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["mistos"]
    },
    {
        id: 80,
        nome: "Esfirra Média",
        preco: 5.00,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["assados"]
    },
    {
        id: 81,
        nome: "Assado Médio de Calabresa",
        preco: 6.00,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["assados"]
    },
    {
        id: 82,
        nome: "Assado Médio de Pizza",
        preco: 6.00,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["assados"]
    },
    {
        id: 83,
        nome: "Croissant",
        preco: 9.00,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["doces"]
    },
    {
        id: 84,
        nome: "Açaí Tradicional",
        preco: 12.00,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["doces"]
    },
    {
        id: 85,
        nome: "Açaí Leitinho",
        preco: 13.00,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["doces"]
    },
    {
        id: 86,
        nome: "Geladinho",
        preco: 6.00,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["doces"]
    },
    {
        id: 87,
        nome: "Docinhos",
        preco: 6.00,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["doces"]
    },
    {
        id: 88,
        nome: "Banoffe",
        preco: 7.50,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["doces"]
    },
    {
        id: 89,
        nome: "Suco Tampico Laranja",
        preco: 5.00,
        imagem: "../img/bolo.jpg",
        unidades: ["cantina-bpk"],
        categorias: ["sucos"]
    },
    {
        id: 90,
        nome: "Mini pizza",
        preco: 9.00,
        imagem: "",
        unidades:["cantina-bpk"],
        categorias:["assados"]
    },
    {
        id: 91,
        nome: "Bombom de morango",
        preco: 10.00,
        imagem: "",
        unidades:["cantina-bpk"],
        categorias:["doces"]
    }
];