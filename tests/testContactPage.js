import App from '../page-objects/App'
import ContactPage from '../page-objects/pages/ContactPage'

describe('Open Masek Medical Contact Page', () => {
    it('Should load the contact page', () => {
        App.openContactPage()
    })

    it('Should submit feedback form', () => {
        ContactPage.fillForm('Eric', 'Ouellette', 'ericjon97@gmail.com', '8609286656', 'My test message')
        ContactPage.pauseLong()
        // ContactPage.submitForm()
        // expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })

})
