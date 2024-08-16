class cl_persona {
 constructor(n,tm){
        this.nombre = n
        this.tipomoneda= tm
    }

    pasaje(){

        if (this.tipomoneda==1)
        
        return 1

        else if(this.tipomoneda==2)
           
        return 40
    }

    recibecaramelo(){

        if (this.tipomoneda==1)
            return this.nombre+", "
        else return ""
    }

}

class cl_taxista {  
  
  constructor(){
    this.cantinicialdo = 20
    this.cantinicialbs = 600
    this.acpagodo = 0
    this.acpagobs = 0
    this.cntcaramelos = 0
    this.cntpagobs = 0
    this.cntpersonas = 0
  }

  procesar(p){
    this.cntpersonas++
    if(p.tipomoneda==1){
      this.acpagodo+=p.pasaje()
      this.cntcaramelos++
    }
    else if (p.tipomoneda==2){
      this.acpagobs+=p.pasaje()
      this.cntpagobs++
    }
  }
  montofinaldo(){
    return (this.cantinicialdo + this.acpagodo)
  }
  montofinalbs(){
    return (this.cantinicialbs + this.acpagobs)
  }
  porcentajepagobs(){

    return (this.cntpagobs/this.cntpersonas)*100
  }

}

let persona1 = new cl_persona ("Peter",1)
let persona2 = new cl_persona ("Fatima",2)
let persona3 = new cl_persona ("Paul",1)
let persona4 = new cl_persona ("Pedro",1)
let persona5 = new cl_persona ("Rita",2)
let persona6 = new cl_persona ("Linda",1)
let persona7 = new cl_persona ("Carmen",2)
let persona8 = new cl_persona ("Robert",1)
let persona9 = new cl_persona ("Flor",1)
let persona10 = new cl_persona ("Fran",1)

    let taxista = new cl_taxista ()
    taxista.procesar(persona1)
    taxista.procesar(persona2)
    taxista.procesar(persona3)
    taxista.procesar(persona4)
    taxista.procesar(persona5)
    taxista.procesar(persona6)
    taxista.procesar(persona7)
    taxista.procesar(persona8)
    taxista.procesar(persona9)
    taxista.procesar(persona10)

    let salida = document.getElementById("salida")
    salida.innerHTML = `

    <br> 
    <br> ${persona1.recibecaramelo()}
    ${persona2.recibecaramelo()}
    ${persona3.recibecaramelo()}
    ${persona4.recibecaramelo()}
    ${persona5.recibecaramelo()}
    ${persona6.recibecaramelo()}
    ${persona7.recibecaramelo()}
    ${persona8.recibecaramelo()}
    ${persona9.recibecaramelo()}
    ${persona10.recibecaramelo()}
    recibieron caramelos
    <br> El taxista al final tiene ${taxista.montofinaldo()}$ y Bs. ${taxista.montofinalbs()} 

    <br> Se repartieron ${taxista.cntcaramelos} caramelos

    <br> El ${taxista.porcentajepagobs()}% de los pasajeros pago en Bs.
    `
