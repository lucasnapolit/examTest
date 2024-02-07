describe("last practice time",()=>{

    it("ultima test",()=>{

        cy.visit("https://www.yatra.com/",{headers: {"Accept-Encoding":"gzip, deflate"}})
        cy.get("#BE_flight_origin_city").click().clear().type(" New",{delay:400})
        cy.get(".viewport span:last-child").each(($value,index,$list)=>{
            if($value.have.text()==="newyourk"){
                cy.wrap($value).click()
            }
        })




    })


})