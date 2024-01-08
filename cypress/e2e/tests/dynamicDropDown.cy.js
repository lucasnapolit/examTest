
import "cypress-iframe"


describe("dropdown test",()=>{


    it("dynamic dropdown test",()=>{

        cy.visit("https://www.yatra.com/",{headers: {"Accept-Encoding":"gzip, deflate"}})
        cy.get("#BE_flight_origin_city").click().clear().type(" New",{delay:400})
        cy.get(".viewport span:last-child").each(($element,index,$list)=>{
            if ($element.text() ==="LGA") {
                cy.wrap($element).click()

            }

        })
    })

    it("another non dynamic dropdown test",()=>{

         cy.visit("https://www.centraldepasajes.com.ar/cdp/pasajes-micro.aspx?gclid=Cj0KCQiAtOmsBhCnARIsAGPa5yZosaRP5niqnc1_ePP-o3W_EMO72zy5N2zZ9aEvva4l7ThUdEGR6GUaAkJnEALw_wcB")
         cy.get("#select2-PadOrigen-container").click()
         cy.get("input[placeholder='Ingresá desde dónde viajás'][role='textbox']").click().type("mendoza")
         cy.get(".select2-results__option").each(($valor,index,$list)=>{
            if($valor.text()==="(SRA) San Rafael (Mendoza) (Argentina)"){
                cy.wrap($valor).click()
            }
         })
         cy.get("#select2-PadDestino-container").click().type("Buenos Aires")
        
         cy.get(".select2-results__option").each(($valor,index,$list)=>{
            if($valor.text()==="(MDP) Mar del Plata Terminal (Buenos Aires) (Argentina)"){
                cy.wrap($valor).click()
            }
         })
         cy.xpath("//label[normalize-space()='Ida y vuelta']//span[@class='checkmark']").click()
         cy.get('#fechaPartida').click()
         cy.get('#cdp-calendar-container > .date-picker-wrapper > .month-wrapper > .month1 > tbody > :nth-child(2) > :nth-child(4) > .day').click()
         cy.get('#cdp-calendar-container-regreso > .date-picker-wrapper > .month-wrapper > .month1 > tbody > :nth-child(5) > :nth-child(4) > .day').click()
         cy.get('#btnCons').click()
         cy.get('.modal-footer > .btn').click
   
        }) 




    it.only("datepiker",()=>{
        cy.visit("https://demoqa.com/date-picker")
        cy.get("#datePickerMonthYearInput").click()
        cy.get('.react-datepicker__month-select').select(3)
        cy.get('.react-datepicker__year-select').select("1992")
        cy.get('.react-datepicker__day--022').click()
        cy.get('#dateAndTimePickerInput').click()
        cy.xpath("//div[@class='react-datepicker__month-dropdown']//div[2]").click()

    })


})