describe('User Data Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


    it('sanity check', () => {
        expect(2).to.equal(2)
        expect(1 + 2).to.equal(3)
        expect({}).to.eql({})
        expect({}).not.to.equal({})
    })

    const nameField = () => cy.get('input[name="name"]')
    const emailField = () => cy.get('input[name="email"]')
    const passField = () => cy.get('input[name="password"]')
    const checkBox = () => cy.get('input[name="terms"]')
    const submitButton = () => cy.get('button[id="button"]')


    it('typable name field', () => {
        nameField()
            .should("have.value", "")
            .type("Neo Anderson")
            .should("have.value", "Neo Anderson")
    })

    it('typable email field', () => {
        emailField()
            .should("have.value", "")
            .type("neo.anderson@google.com")
            .should("have.value", "neo.anderson@google.com")
    })

    it('typable password field', () => {
        passField()
            .should("have.value", "")
            .type("password123")
            .should("have.value", "password123")
    })

    it('checkable box', () => {
        checkBox()
            .check()
            .uncheck()
    })

    it('submittable form once completed', () => {
        submitButton()
            .should("be.disabled")
            nameField().type("Neo Anderson")
            emailField().type("neo.anderson@google.com")
            passField().type("password123")
            checkBox().check()
            submitButton().should("not.be.disabled")
    })


})