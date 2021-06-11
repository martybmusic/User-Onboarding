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


    it('typable field', () => {
        nameField()
            .should("have.value", "")
            .type("Neo Anderson")
            .should("have.value", "Neo Anderson")
    })



})