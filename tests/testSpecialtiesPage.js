import App from '../page-objects/App'
import SpecialtiesPage from '../page-objects/pages/SpecialtiesPage'

describe('Open Masek Medical Specialties Page', () => {
    it('Should load the Specialties page', () => {
        App.openSpecialtiesPage()
    })

    it('Should submit Get In Touch form', () => {
        SpecialtiesPage.fillForm('Eric Ouellette', 'ericjon97@gmail.com', '8609286656', 'My test message')
        SpecialtiesPage.pauseLong()
        // ContactPage.submitForm()
        // expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })

})
