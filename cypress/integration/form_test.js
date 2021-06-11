describe('User Data Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
})

it('sanity check', () => {
    expect(2).to.equal(2)
    expect(1 + 2).to.equal(3)
    expect({}).to.eql({})
    expect({}).not.to.equal({})
})

const nameInput = () => cy.get('input[name="name"]'



)