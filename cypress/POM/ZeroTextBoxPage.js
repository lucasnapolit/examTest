
export class TextBoxPage{


    elements={

        name: '#userName',
        Email:"#userEmail",
        currentAdress : "#currentAddress",
        permanentAdress : "#permanentAddress",
        button : '#submit',
        rName: '#name',
        rEmail:'#email',
        rcAdress: '.border > #currentAddress',
        rpAdress :".border > #permanentAddress"






    }


    typeName(name){
        cy.get(this.elements.name).type(name)
    }
    typeEmail(email){
        cy.get(this.elements.Email).type(email)
    }
    typecAdress(cAdress){
        cy.get(this.elements.currentAdress).type(cAdress)
    }
    typepAdress(pAdress){
        cy.get(this.elements.permanentAdress).type(pAdress)
    }    
    submit(){
        cy.get(this.elements.button).click()
    }

    verificarNombre(rName){
        cy.get(this.elements.rName).should("have.text",rName)
    }
    verificarEmail(rEmail){
        cy.get(this.elements.rEmail).should("have.text",rEmail)
    }
    verificarcAdress(rcAdress){
        cy.get(this.elements.rcAdress).should("have.text",rcAdress)
    }
    verificarpAdress(rpAdress){
        cy.get(this.elements.rpAdress).should("have.text",rpAdress)
    }
    
}