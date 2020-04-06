import Base from '../Base'

class Navbar extends Base {
    get homeLink() {
        return $('#menu-item-53')
    }
    
    get aboutLink() {
        return $('#menu-item-52')
    }

    get clientsLink() {
        return $('#menu-item-290')    
    }

    get specialtiesLink() {
        return $('#menu-item-48')
    }

    get contactLink() {
        return $('#menu-item-50')
    }

    get twitterLink() {
        return $('#et-secondary-menu > ul:nth-child(1) > li.et-social-icon.et-social-twitter')
    }

    get linkedInLink() {
        return $('#et-secondary-menu > ul:nth-child(1) > li.et-social-icon.et-social-linkedin')
    }

    clickHomeLink() {
        this.homeLink.waitForExist()
        this.homeLink.click()
        this.pauseShort()
    }

    clickAboutLink() {
        this.aboutLink.waitForExist()
        this.aboutLink.click()
        this.pauseShort()
    }

    clickClientsLink() {
        this.clientsLink.waitForExist()
        this.clientsLink.click()
        this.pauseShort()
    }

    clickSpecialtiesLink() {
        this.specialtiesLink.waitForExist()
        this.specialtiesLink.click()
        this.pauseShort()
    }

    clickContactLink() {
        this.contactLink.waitForExist()
        this.contactLink.click()
        this.pauseShort()
    }

    clickTwitterLink() {
        this.twitterLink.waitForExist()
        this.twitterLink.click()
        this.pauseShort()
    }

    clickLinkedInLink() {
        this.linkedInLink.waitForExist()
        this.linkedInLink.click()
        this.pauseShort()
    }

}

export default new Navbar()