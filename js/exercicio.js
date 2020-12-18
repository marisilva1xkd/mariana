//exercicio

// 1. Declare um variavelde nome color.
  var color;
  

//2. Que tipo de dado é a variavel acima?
     console.log(typeof color);

 /*
  
 * 3 Declare uma variavela atribua valores para cada um dos dados.
         >name: string
         >age: number
         >isAdmin: Booolean 
         >stars: number (Float) */ 
     
    let name ="mariana"
    let age = "18"
    let aiAdmin =true;
    let start = 2.5;
/**
   * 4- Avariavel persor é de que tipo de dado?
    * const perso - { }
*/
 //const person = {}
 //console.log(typeof person)

   
 /*
 5. Declare uma variavel de tipo arry, de nome students e atribua á ele nenhum valor, ou seja somente o array vazia.
 */
var students = []
console.log()
/**
* 6 Retribua valor para a variável acima, colocando dentro dela o obejetivo da questão 3.
 */
  
  const person = {
    name: "mariana",
    age: 18,
    aiAdmin: true,
     start: 2.5,
  }
 console.log(
     `nome: ${person.name} idade:${person.age} start:${person.start} aiAdmin:${person.aiAdmin}`
     
 )
 /**
  * 7 Reatribua valor para variavel coloque dentro dela o objetivo da questão 4.
  **/
 console.log(typeof students)
 students = [
     person
 ]
 console.log(students)
 /* 
 * 8 Coloque no consolo o valor da porsição zero do Arrays acima.
 */
console.log(students[0])

/**
 * 9 crie uma nova person e coloque na posição 1 doArry student
*/
const morty ={
    nome: "mariana",
    age: 18,
    start: 15,
    isAdmin:false
 }

 /**
  * 10 Mostre no console a seguinte mansagem:
  * nome: <name> Idade <age> qualificação: <start> administrado: < isAdmin> 
**/
 students = [
     person,
     morty
 ]
 console.log(students)
 