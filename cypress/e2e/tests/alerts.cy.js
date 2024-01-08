
describe("handleing alerts",()=>{


    it("ok alerts",()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get(".btn.btn-danger").click()
        cy.on("window:alert",(contenedor)=>{
            expect(contenedor).to.equal("I am an alert box!")
        })        
        

    })
    it("ok and cancel  alerts",()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get(".analystic[href='#CancelTab']").click()
        cy.get(".btn.btn-primary").click()
        cy.on("window:confirm",(contenedor)=>{
            expect(contenedor).to.equal("Press a Button !")
        })        
        

    })

    it.only("prompt window",()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get(".analystic[href='#Textbox']").click()
        cy.get(".btn.btn-info").click()
        cy.window().then((variable)=>{
            cy.stub(variable,"prompt").returns("asd")
        })


    })
})