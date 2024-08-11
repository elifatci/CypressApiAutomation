describe('Store Test', () => {

    it('Store POST Info', () => {
 
     const reqBody=
 
     {
        "id": 22,
        "petId": 1,
        "quantity": 0,
        "shipDate": "2024-09-11T16:39:17.708Z",
        "status": "available",
        "complete": true
      }
     cy.request({
       method: 'POST',
       url: 'https://petstore.swagger.io/v2/store/order',
       body: reqBody
     })
     .then((response) => {
       expect(response.status).to.eq(200)
       expect(response.body.petId).to.eq(1)
     })
    })  
 
   it('Store GET Info', () => {
     cy.request('GET', 'https://petstore.swagger.io/v2/store/order/22')
     .then((response) => {
       expect(response.status).to.eq(200)
       expect(response.body.quantity).to.eq(0)
     })
    }) 
 
    it('Store DELETE Info', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/store/order/1')
        .then((response) => {
          expect(response.status).to.eq(200)
        })
       })
       
       it('Store DELETE Info', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/store/order/109')
        .then((response) => {
          expect(response.status).to.eq(404)
        })
       })   
 
 })  