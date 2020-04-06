class App {
    openHomePage() {
        browser.url('https://www.masekmedical.com/')
    }

    openAboutPage() {
        browser.url('https://www.masekmedical.com/about/')
    }

    openSpecialtiesPage() {
        browser.url('https://www.masekmedical.com/specialties/')
    }

    openContactPage() {
        browser.url('https://www.masekmedical.com/contact/')
    }

}

export default new App()