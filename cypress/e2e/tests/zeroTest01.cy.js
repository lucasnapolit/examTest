import {TextBoxPage} from "..//..//POM/ZeroTextBoxPage"
const rActions = new TextBoxPage()
import textBox from "..//..//fixtures/textBox.json"

describe("Practice ELEMENTS",()=>{

    beforeEach(()=>{

        cy.visit("https://demoqa.com/elements")
    })

    it("text box practice ",()=>{
      cy.contains("Text Box").click()
      rActions.typeName(textBox.name)
      rActions.typeEmail(textBox.email)
      rActions.typecAdress(textBox.cAdress)
      rActions.typepAdress(textBox.pAdress)
      rActions.submit()
      rActions.verificarNombre(textBox.rName)
      rActions.verificarNombre(textBox.rName)
      rActions.verificarcAdress(textBox.rcAdress)
      rActions.verificarpAdress(textBox.rpAdress)
    })

    it("checkbox practice",()=>{
      cy.contains("Radio Button").click()
      cy.get("input[id='yesRadio']").check( {force: true})
      cy.get('.text-success').should("have.text","Yes")
      cy.get("input[id='impressiveRadio']").check( {force: true})
      cy.get('.text-success').should("have.text","Impressive")
      cy.get("input[id='noRadio']").check( {force: true})
      cy.get('.text-success').should("have.text","Impressive")
      

    })

    it("Agregando un nuevo usuario a tablas",()=>{
      cy.contains("Web Tables").click()
      cy.get("#addNewRecordButton").click()
      cy.get(".modal-header").should("have.text","Registration Form×Close")
    
      cy.get("#firstName").type("lucas")
      cy.get("#lastName").type("napoli")
      cy.get("#userEmail").type("lucasnapolia@hsd.com")
      cy.get("#age").type(32)
      cy.get("#salary").type(1550)
      cy.get("#department").type("juninxD")
      cy.get("#submit").click()
      cy.get ("div[class='rt-table']").contains("div","lucas").should("be.visible")
      cy.get ("div[class='rt-table']").contains("div","napoli").should("be.visible")
      cy.get ("div[class='rt-table']").contains("div","juninxD").should("be.visible")
    })
    
    
})