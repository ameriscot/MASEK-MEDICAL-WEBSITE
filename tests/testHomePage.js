import App from '../page-objects/App'
import HomePage from '../page-objects/pages/HomePage'

describe('Open Masek Medical Home Page', () => {
    it('Should load the home page', () => {
        App.openHomePage()
    })

    it('Should submit Get In Touch form', () => {
        HomePage.fillForm('Eric Ouellette', 'ericjon97@gmail.com', '8609286656', 'My test message')
        HomePage.pauseLong()
        // ContactPage.submitForm()
        // expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })

})
