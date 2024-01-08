export class registerPage 
{
   elements=
   {
    
     username : "#nombre" ,
     password : "#pass", 
     mail     :  "#mail" , 
     consent  :  "#consent",
     propa    : "#newsletter" ,
     button   :  "#btn-submit",
     assert1  : ":nth-child(1) > .control-input > .cell_helper",
     assert2  : ":nth-child(2) > .control-input > .cell_helper",
     assert3  : ":nth-child(3) > .control-input > .cell_helper",
     error1   : ":nth-child(1) > .control-input > .cell_helper > .error",
     error2   : ":nth-child(2) > .control-input > .cell_helper > .error",
     error3   : ":nth-child(3) > .control-input > .cell_helper > .error",

   }

   visitUrl(url){
      cy.visit(url)
   }

   insertName(name){
   cy.get( this.elements.username).type(name)
   }
   insertPassword(password){
   cy.get(this.elements.password).type(password)
   }
   insertMail(mail){
    cy.get(this.elements.mail).type(mail)
    }
    consentCheck(){
       cy.get( this.elements.consent).check()
    }
    propaCheck(){
        cy.get(this.elements.propa).check()
    }
    buttonClick(){
       cy.get( this.elements.button).click({force: true})
    }

    nameValidation(){
     return cy.get(this.elements.assert1)
    }
    passwordValidation(){
      return cy.get(this.elements.assert2)
     }
    mailValidation(){
      return cy.get(this.elements.assert3)
    }
    
    invalidNameValidation(){
      return cy.get(this.elements.error1)
    }
    invalidPasswordValidation(){
      return cy.get(this.elements.error2)
    }
    
    invalidmailValidation(){
      return cy.get(this.elements.error3)
    }
    
}

   


