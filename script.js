//Variáveis globais:

let conteudo = [
    
    {
        titulo: "Briófita",
        corpo: `
        
            <p> São plantas de pequeno porte e de estrutura simples, eles não apresentam vasos condutores, flores e sementes.</p>

            <p> Seus principais representantes são os <strong>Musgos, Hepáticas e Antóceros</strong>. Assim como as Pteridófitas, não possuem sementes, propagando-se por esporos. </p>
            
            <p> Os musgos podem ser encontrados em quase todas as partes do mundo, até mesmo nas regiões congeladas. </p>
        
        `,
        image_src: "imgs/musgo.jpeg",
        image_desc: "Musgo crescendo em floresta, criando algo semelhante a um tapete."

    },
     
    {
        titulo: "Monilófita",
        corpo: `
        
            <p> As pteridófitas são plantas sem sementes que possuem vasos condutores. São representadas pelas samambaias, avencas e cavalinhas. </p>

            <p> As monilófitas são dependentes da dispersão de seus esporos para reprodução, muito presentes em zonas tropicais, subtropicais e temperadas do mundo. Um exemplo dessa denominação é a samambaia. </p>
        
        `,
        image_src: "imgs/samambaia.jpeg",
        image_desc: "Samambaia, representante das monilófitas."

    },

    {
        titulo: "Licófita",
        corpo: `
        
            <p> As pteridófitas são plantas sem sementes que possuem vasos condutores. São representadas pelas samambaias, avencas e cavalinhas. </p>

            <p> As Licófitas são dependentes da dispersão de seus esporos para reprodução, muito presentes em zonas tropicais, subtropicais e temperadas do mundo. Diferente das monilófitas, possuem folhas menores e simples, assim como estrutura de caule e vascularização simplificada. Um exemplo dessa denominação é o Licopódio. </p>
        
        `,
        image_src: "imgs/licopódio.jpg",
        image_desc: "Licopódio, representante das licófitas."

    },

    {
        titulo: "Gimnosperma",
        corpo: `
        
            <p> São um clado constituído por cerca de 1000 espécies de plantas com sementes que não apresentam ovário nem fruto, característica que as diferencia das angiospermas. </p>

            <p> De longe, o maior grupo de gimnospermas extantes são as coníferas, como por exemplo o pinheiro, seguidas pelas cicas, gnetófitas e Ginkgo biloba (a única espécie extante da sua divisão). </p>
        
        `,
        image_src: "imgs/gingko_biloba.jpg",
        image_desc: "Uma Ginkgo Biloba. É considerada uma planta medicinal, em que suas folhas podem servir para melhora da concentração, ajudar a evitar perda de memória, combater a ansiedade e a depressão, promover a saúde do coração, entre outros benefícios."

    },

    {
        titulo: "Angiosperma",
        corpo: `
        
            <p> As angiospermas são plantas complexas que apresentam raiz, caule, folhas, flores, frutos e sementes.

            <p> Elas representam o grupo mais diversificado de plantas, com mais de 250 mil espécies. As angiospermas ocorrem nos mais variados tipos de habitats, desde ambientes aquáticos até áridos. </p>   

            <p> O termo angiosperma deriva do grego angeios, bolsa e sperma, semente. </p>
        
        `,
        image_src: "imgs/laranjeira.jpeg",
        image_desc: "Uma laranja e flores brotando em um pé de laranjeira, uma angioesperma."

    }
]

//Seleção de elementos DOM:

const plantaSelect = document.getElementById("plantaSelect");
const submissionBtn = document.getElementById("submissionBtn");

const resultado = document.getElementById("resultado");

//Funções:

function exibePlanta() {

    //Acessa valor da opção escolhida do elemento select:

    tipoPlanta = plantaSelect.value;

    //Verifica se existe um grupo com o título equivalente ao valor do select. Essa busca é realizada no array com os conteúdos já definidos:
    
    let grupo = conteudo.find(planta => planta.titulo === tipoPlanta);
    console.log(grupo);

    //Se grupo existe, as informações são buscadas do objeto do grupo, e impressas na div de resultado:

    if(grupo) {

        resultado.innerHTML = `
        
            <h1><strong> ${grupo.titulo} </strong></h1>

            <p>${grupo.corpo}</p>

            <figure>
                <img src="${grupo.image_src}">
                <figcaption> ${grupo.image_desc} </figcaption>
            </figure>
        `
    }
}

//Eventos:

submissionBtn.addEventListener("click", () => {exibePlanta()});


