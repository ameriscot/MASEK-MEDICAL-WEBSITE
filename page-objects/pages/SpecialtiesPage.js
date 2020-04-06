import Base from '../Base'

class SpecialtiesPage extends Base {

    get title() {
        return $('h1')
    }
    
    get fullName() {
        return $('#et_pb_contact_name_0')
    }

    get emailAddress() {
        return $('#et_pb_contact_email_0')
    }

    get phoneNumber() {
        return $('#et_pb_contact_phone_0')
    }

    get message() {
        return $('#et_pb_contact_message_0')
    }

    get submitButton() {
        return $('#et_pb_contact_form_0 > div.et_pb_contact > form > div > button')
    }

    fillForm(name, email, phone, message) {
        this.fullName.setValue(name)
        this.emailAddress.setValue(email)
        this.phoneNumber.setValue(phone)
        this.message.setValue(message)
    }

    submitForm() {
        this.submitButton.click()
    }

}

export default new SpecialtiesPage()