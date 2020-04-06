import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import AboutPage from '../page-objects/pages/AboutPage'
import SpecialtiesPage from '../page-objects/pages/SpecialtiesPage'
import ContactPage from '../page-objects/pages/ContactPage'

describe('Open Masek Medical Home Page', () => {
    it('Should load the home page', () => {
        App.openHomePage()
    })

    it('Test links in the Navbar', () => {
        Navbar.clickAboutLink()
        expect(browser).toHaveUrl('https://www.masekmedical.com/about/')
        expect(AboutPage.title).toHaveText('About Us')
        Navbar.clickClientsLink()
        expect(browser).toHaveUrl('https://www.masekmedical.com/#clients')
        Navbar.clickSpecialtiesLink()
        expect(browser).toHaveUrl('https://www.masekmedical.com/specialties/')
        expect(SpecialtiesPage.title).toHaveText('Our Expertise')
        Navbar.clickHomeLink()
        expect(browser).toHaveUrl('https://www.masekmedical.com/')
        Navbar.clickContactLink()
        expect(browser).toHaveUrl('https://www.masekmedical.com/contact/')
        expect(ContactPage.title).toHaveText('Get In Touch.')
        Navbar.clickTwitterLink()
        expect(browser).toHaveUrl('https://twitter.com/masekmedical')
        App.openHomePage()
        // Navbar.clickLinkedInLink()
        // expect(browser).toHaveUrl('https://www.linkedin.com/company/masek-medical-inc.')
    })

})
