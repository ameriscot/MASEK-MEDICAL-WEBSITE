import Base from '../Base'

class ContactPage extends Base {

    get title() {
        return $('h1')
    }

    get firstName() {
        return $('#et_pb_contact_first_name_0')
    }

    get lastName() {
        return $('#et_pb_contact_last_name_0')
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

    fillForm(first, last, email, phone, message) {
        this.firstName.setValue(first)
        this.lastName.setValue(last)
        this.emailAddress.setValue(email)
        this.phoneNumber.setValue(phone)
        this.message.setValue(message)
    }

    submitForm() {
        this.submitButton.click()
    }

}

export default new ContactPage()