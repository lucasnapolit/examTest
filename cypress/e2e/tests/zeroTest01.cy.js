
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
    
    it("tipos de Clicks",()=>{
      cy.contains("Buttons").click()
      cy.get("#doubleClickBtn").dblclick()
      cy.get("#doubleClickMessage").should("have.text","You have done a double click")
      cy.get("#rightClickBtn").rightclick()
      cy.get("#rightClickMessage").should("have.text","You have done a right click")
      cy.get("div[class='mt-4']:eq(1)").find("button").click()
      cy.get("#dynamicClickMessage").should("have.text","You have done a dynamic click")

    })

    it("links",()=>{
      cy.contains("Links").click()
      cy.get("#simpleLink").invoke("removeAttr","target")
      cy.get("#simpleLink").click()
      cy.url().should("eq","https://demoqa.com/")
      cy.go("back")
      cy.get("#dynamicLink").invoke("removeAttr","target")
      cy.get("#dynamicLink").click()
      cy.url().should("eq","https://demoqa.com/")
      cy.go("back")


    })

    it.only("manejando Reponses de APIS",()=>{
      
      cy.contains("Links").click()
      cy.get("#created").click()
      cy.request("GET","https://demoqa.com/created").its("status").should("eq",201)
      cy.get("#linkResponse").should("have.text","Link has responded with staus 201 and status text Created")
      cy.get("#no-content").click()
      cy.request("GET","https://demoqa.com/no-content").its("status").should("eq",204)
      cy.get("#linkResponse").should("have.text","Link has responded with staus 204 and status text No Content")
      cy.get("#moved").click()
      cy.request("GET","https://demoqa.com/moved").its("status").should("eq",301)
      cy.get("#linkResponse").should("have.text","Link has responded with staus 301 and status text Moved Permanently")
      cy.get("#bad-request").click()
      cy.request({method:"GET",url:"https://demoqa.com/bad-request",failOnStatusCode: false}).its("status").should("eq",400)
      cy.get("#linkResponse").should("have.text","Link has responded with staus 400 and status text Bad Request")
      cy.get("#unauthorized").click()
      cy.request({method:"GET",url:"https://demoqa.com/unauthorized",failOnStatusCode: false}).its("status").should("eq",401)
      cy.get("#linkResponse").should("have.text","Link has responded with staus 401 and status text Unauthorized")
      cy.get("#forbidden").click() 
      cy.request({method:"GET",url:"https://demoqa.com/forbidden",failOnStatusCode: false}).its("status").should("eq",403)
      cy.get("#linkResponse").should("have.text","Link has responded with staus 403 and status text Forbidden")
      cy.get("#invalid-url").click()
      cy.request({method:"GET",url:"https://demoqa.com/invalid-url",failOnStatusCode: false}).its("status").should("eq",404)
      cy.get("#linkResponse").should("have.text","Link has responded with staus 404 and status text Not Found")
      

    })

})