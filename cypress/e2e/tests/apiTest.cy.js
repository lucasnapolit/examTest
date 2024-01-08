describe("api test",()=>{

    it("my api test",()=>{

        cy.request({

            method:"GET",
            url:"https://rickandmortyapi.com/api",
            

        }).then((response)=>{
            expect(response.status).to.eq(200)
        })


    })


})