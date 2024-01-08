import { ExamRegsiterPage } from "../../POM/examRegisterPage";
const rActions = new ExamRegsiterPage()
import examTestData from "../../fixtures/examTestdata.json"

describe("exam Test Suite",()=>{
    it("User Register",()=>{

    rActions.visitUrl()
    rActions.firstNameInsert(examTestData.firstName)
    rActions.lastNameInsert(examTestData.lastName)
    rActions.mailInsert(examTestData.mail)
    rActions.passwordInsert(examTestData.password)
    rActions.repasswordInsert(examTestData.password)
    rActions.genderSelect()
    rActions.phoneInsert(examTestData.phone)
    rActions.selectCountry(examTestData.country)
    rActions.selectDate(examTestData.year,examTestData.month,examTestData.day)
   // rActions.languageSelect(examTestData.languages)
    rActions.skills(examTestData.skills)
    rActions.addressInsert(examTestData.address)
    rActions.checkHobbie()
    rActions.imgUpload()

    })
})