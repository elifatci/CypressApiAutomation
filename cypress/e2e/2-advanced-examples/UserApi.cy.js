describe('User Test', () => {

    it('User POST Info', () => {
 
        const reqBody=
 
        {
           "id": 109,
           "username": "Test",
           "firstName": "Name",
           "lastName": "Srname",
           "email": "test@name.com",
           "password": "new",
           "phone": "12121212",
           "userStatus": 10
         }
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/user',
          body: reqBody
        })
        .then((response) => {
          expect(response.status).to.eq(200)
        })
       })  
 
   it('User GET Info', () => {
     cy.request('GET', 'https://petstore.swagger.io/v2/user/Test')
     .then((response) => {
       expect(response.status).to.eq(200)
     })
    }) 

 
    it('User PUT Info', () => {
 
        const reqBody=
    
        {
            "id": 109,
            "username": "Test",
            "firstName": "Name",
            "lastName": "Try",
            "email": "test@name.com",
            "password": "new",
            "phone": "1212121232",
            "userStatus": 10
          }
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/user/deneme',
          body: reqBody
        })
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.phone).to.eq(1212121232)
          expect(response.body.lastName).to.eq('Try')
        })
       })   
 
 })  
