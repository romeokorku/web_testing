import Homepage from "./Homepage"


describe('My Second Test Suite', function() {
    before(function() {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
this.data=data                                                  //bcos we cant access the fucntion data outside the block, we introduce the this formula to call the data class.
        })
      })

    })