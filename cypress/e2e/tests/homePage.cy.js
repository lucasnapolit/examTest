

describe("sometests",()=>{




   beforeEach(()=>{

    cy.visit("https://www.mediavida.com/")
})

   
  
it("some more test",()=>{
    
    cy.contains("Grupos").click()
    cy.xpath("//a[normalize-space()='League of Legends']").click()
})
})