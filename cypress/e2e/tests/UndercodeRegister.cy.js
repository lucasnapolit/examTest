import { registerPage } from "../../POM/registerPage"
const rActions = new registerPage()
import validtestData from "../../fixtures/validtestData.json"
import invalidtestData  from "../../fixtures/invalidtestData.json"


describe("User Register", () => {

       it("Valid registration ", () => {
              rActions.visitUrl(validtestData.url)
              rActions.insertName(validtestData.name)
              rActions.insertPassword(validtestData.password)
              rActions.insertMail(validtestData.mail)
              rActions.consentCheck()
              rActions.propaCheck()
              rActions.nameValidation().should("contain","disponible")
              rActions.passwordValidation().should("contain","OK")
              rActions.mailValidation().should("have.text","Te enviaremos un correo de confirmación")
              
       })
        it("invalid Register(all)",()=>{
              rActions.visitUrl(validtestData.url)
              rActions.insertName(invalidtestData.name)
              rActions.insertPassword(invalidtestData.password)
              rActions.insertMail(invalidtestData.mail)
              rActions.consentCheck()
              rActions.propaCheck()
              rActions.invalidNameValidation().should("contain","elige")
              rActions.invalidPasswordValidation().should("contain","8")
              rActions.invalidmailValidation().should("have.text","Escribe una dirección de correo correcta")
              rActions.buttonClick()
        })
        it("invalid Register(wrong name)",()=>{
              rActions.visitUrl(validtestData.url)
              rActions.insertName(invalidtestData.name)
              rActions.insertPassword(validtestData.password)
              rActions.insertMail(validtestData.mail)
              rActions.consentCheck()
              rActions.propaCheck()
              rActions.invalidNameValidation().should("contain","elige")
              rActions.passwordValidation().should("contain","OK")
              rActions.mailValidation().should("have.text","Te enviaremos un correo de confirmación")
        })
        it("invalid Register(wrong password)",()=>{
              rActions.visitUrl(validtestData.url)
              rActions.insertName(validtestData.name)
              rActions.insertPassword(invalidtestData.password)
              rActions.insertMail(validtestData.mail)
              rActions.consentCheck()
              rActions.propaCheck()
              rActions.nameValidation().should("contain","disponible")
              rActions.invalidPasswordValidation().should("contain","8")
              rActions.mailValidation().should("have.text","Te enviaremos un correo de confirmación")
              
        })
        it("invalid register(wrong mail) ", () => {
              rActions.visitUrl(validtestData.url)
              rActions.insertName(validtestData.name)
              rActions.insertPassword(validtestData.password)
              rActions.insertMail(invalidtestData.mail)
              rActions.consentCheck()
              rActions.propaCheck()
              rActions.nameValidation().should("contain","disponible")
              rActions.passwordValidation().should("contain","OK")
              rActions.invalidmailValidation().should("have.text","Escribe una dirección de correo correcta")
              
       })
    
})