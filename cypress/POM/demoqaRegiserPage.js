export class registerDemoQa{

    elements={
        firstName:"#firstName",
        lastName:"#lastName",
        email:"#userEmail",
        gender:"#gender-radio-1",
        mobile:"#userNumber",
        dOb:"#dateOfBirthInput",
        month:".react-datepicker__month-select",
        year:".react-datepicker__year-select",
        day:".react-datepicker__day--022",
        Hobbies:"",
        materias:".css-1hwfws3:eq(0)",
        submit:"#submit",
        close:"#closeLargeModal"
    



    }


    seleccionarFecha(){
        cy.get(this.elements.dOb).click()
        cy.get(this.elements.month).select("February")
        cy.get(this.elements.year).select("1992")
        cy.get(this.elements.day).click()
    }
    seleccionarMaterias(){
        cy.get(this.elements.materias).click().type("e")
        cy.get("#react-select-2-option-0").click()
        cy.get(this.elements.materias).click().type("e")
        cy.get("#react-select-2-option-1").click()
        cy.get(this.elements.materias).click().type("e")
        cy.get("#react-select-2-option-2").click()
        
    }
    seleccionarHobbies(){
        cy.get("#hobbies-checkbox-1").check( {force: true})
        cy.get("#hobbies-checkbox-2").check( {force: true})
        cy.get("#hobbies-checkbox-3").check( {force: true})
    }
    subirImagen(){
        cy.get("#uploadPicture").selectFile("cypress\\downloads\\sampleFile.jpeg")

    }
    insertarAdress(){
        cy.get("#currentAddress").type("calle 38 N1557")
    }
    seleccionarState(){
        cy.get("#state div .css-1hwfws3").click({force: true}).type("Rajasthan")
        cy.contains("Rajasthan").click({force: true})
       
        cy.get("#city").click({force:true})
        cy.get("#city div .css-1hwfws3>*>*>*:eq(0)").click({force: true})
       

    }
    insertarNombre(){
        cy.get(this.elements.firstName).type("lucas")
    }
    insertarApellido(){
        cy.get(this.elements.lastName).type("napoli")
    }
    insertarEmail(){
        cy.get(this.elements.email).type("asd@ho.com")
    }
    selectGender(){
        cy.get(this.elements.gender).check({force: true})
    }

     insertarMobile(){
        cy.get(this.elements.mobile).type("12345678911")

}
    submit(){
        cy.get(this.elements.submit).click({force:true})
    }
    closemodal(){
        cy.get(this.elements.close).click()
    }
}