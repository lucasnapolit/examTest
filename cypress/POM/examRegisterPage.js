export class ExamRegsiterPage {


elements={

    firstName:"input[placeholder='First Name']",
    lastName:"input[placeholder='Last Name']",
    address:"textarea[ng-model$='Adress']",
    mail:"input[type='email']",
    phone:"input[type='tel']",
    password:"#firstpassword",
    repassword:"#secondpassword",
    gender:"input[value='Male']",
    languages:"#msdd",
    skills:"#Skills",
    country:"span[role='combobox']",
    year:"#yearbox",
    month:"select[placeholder='Month']",
    day:"#daybox",
    submit:"#submitbtn",
    criket:"#checkbox1",
    movies:"#checkbox2",
    hockey:"#checkbox3",
    img:"#imagesrc"
    
    
    


}

visitUrl(){
    cy.visit("https://demo.automationtesting.in/Register.html")
}

firstNameInsert(name){
    cy.get(this.elements.firstName).type(name)
}
lastNameInsert(lastname){
    cy.get(this.elements.lastName).type(lastname)
}
firstNameInsert(name){
    cy.get(this.elements.firstName).type(name)
}
phoneInsert(phone){
    cy.get(this.elements.phone).type(phone)
}
addressInsert(address){
    cy.get(this.elements.address).type(address)
}
mailInsert(mail){
    cy.get(this.elements.mail).type(mail)
}
passwordInsert(password){
    cy.get(this.elements.password).type(password)
}

repasswordInsert(password){
    cy.get(this.elements.repassword).type(password)
}
genderSelect(){
    cy.get(this.elements.gender).check()
}
languageSelect(){
     cy.get(this.elements.languages).click()
     cy.get(".ng-scope >a").each(($lang,index,$list)=>{
        if($lang.text()==="English"){
            cy.wrap($lang).click()
        }
     })
}
skills(skills){
    cy.get(this.elements.skills).select(skills)
}

selectCountry(){
    cy.get(this.elements.country).click()
    cy.get(".select2-results__option").each(($element,index,$list)=>{
        if($element.text()==="Japan"){
            cy.wrap($element).click()
        }
    })
}

selectDate(year,month,day){
    cy.get(this.elements.year).select(year)
    cy.get(this.elements.month).select(month)
    cy.get(this.elements.day).select(day)
}

checkHobbie(){

    cy.get(this.elements.criket).check()
    cy.get(this.elements.hockey).check()
}
imgUpload(){
    cy.get(this.elements.img).selectFile("C:\\Users\\Usuario\\Downloads\\transferReceipt.pdf")

}
submitAction(){
    cy.get(this.elements.submit).click()
}
}
