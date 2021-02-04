type Lista = Array<{
    nome: string,
    qtd: number,
    preco: number,
}>

type EmailPessoa = Array<string>

/* variaveis para gerar um numero aleatorio de listas e email
nesse caso se for 100, será escolhido um numero aleatorio de 0 a 100 */
const qtdLista = 100

const qtdEmail = 50


//funcao para calcular a divisao do total da lista por email
function Calcular(itens: Lista, email: EmailPessoa){
    
    let total: number = 0
    
    itens.forEach(item => { 
         total += (item.qtd * item.preco)
    })


    let totalDivisao = Number((total / email.length).toFixed(2))

    let restoDivisao = (total % email.length)

    let emailMap = new Map<string, number>()

    
    for(let i=0; i < email.length; i++){

        if(i === email.length - restoDivisao){

            let total = Number((totalDivisao + 0.01).toFixed(2))

            restoDivisao--

            emailMap.set(email[i], total)

        } else {
            emailMap.set(email[i], totalDivisao)
        }
    }

    return emailMap
   
}

//função para gerar listas de produtos
function gerarLista(){
    
    let items: Lista = []

    let numeros = Math.floor(Math.random() * qtdLista )

   for (let i=0; i<=numeros; i++){
      
        items.push({
            nome: `Product${i}`,
            qtd:  Math.ceil(Math.random() * 20),
            preco: Math.ceil(Math.random() * 100)
        })     
   } 

   return items

}

//função para gerar emails
function gerarEmails(){

    let email: EmailPessoa = []
  
    let numero = Math.floor(Math.random() * qtdEmail)

    for (let i=0; i <= numero; i++){
        email.push(`CustomName${i}@gmail.com`)
    }

    return email
   
}

const result : Map<string, number> = Calcular(gerarLista(), gerarEmails())
console.log(result) 

