import App from '../page-objects/App'
import AboutPage from '../page-objects/pages/AboutPage'

describe('Open Masek Medical About Page', () => {
    it('Should load the About page', () => {
        App.openAboutPage()
    })

    it('Should submit Get In Touch form', () => {
        AboutPage.fillForm('Eric Ouellette', 'ericjon97@gmail.com', '8609286656', 'My test message')
        AboutPage.pauseLong()
        // ContactPage.submitForm()
        // expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })

})
