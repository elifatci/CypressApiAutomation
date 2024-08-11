describe('Pet Test', () => {

    it('Pet POST Info', () => {
 
     const reqBody=
 
     {
        "id": 1090,
        "category": {
          "id": 0,
          "name": "Maria"
        },
        "name": "John",
        "photoUrls": [
          "last"
        ],
        "tags": [
          {
            "id": 10,
            "name": "Free"
          }
        ],
        "status": "available"
      }
     cy.request({
       method: 'POST',
       url: 'https://petstore.swagger.io/v2/pet',
       body: reqBody
     })
     .then((response) => {
       expect(response.status).to.eq(200)
     })
    })  
 
   it('Pet GET Info', () => {
     cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available')
     .then((response) => {
       expect(response.status).to.eq(200)
     })
    })
    
    it('Pet PUT Info', () => {
 
        const reqBody=
    
        {
           "id": 1090,
           "category": {
             "id": 0,
             "name": "Maria"
           },
           "name": "John",
           "photoUrls": [
             "last"
           ],
           "tags": [
             {
               "id": 10,
               "name": "Try"
             }
           ],
           "status": "available"
         }
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/pet',
          body: reqBody
        })
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.tags[0].name).to.eq("Try")
        })
       })
       
       it('Pet PUT Info', () => {
 
        const reqBody=
    
        {
           "id": 1090,
           "category": {
             "id": 0,
             "name": "Free"
           },
           "name": "John",
           "photoUrls": [
             "last"
           ],
           "tags": [
             {
               "id": 10,
               "name": "Doe"
             }
           ],
           "status": "available"
         }
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/pet',
          body: reqBody
        })
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.tags[0].name).to.eq("Doe")
        })
       })    

 })  