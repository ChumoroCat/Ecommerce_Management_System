describe("Get Data", ()=>{

it.only("GET Data", ()=>{
    cy.visit("http://localhost:3000/createsku");
    cy.intercept('GET', 'https://react-ecommerce-cms-d3834-default-rtdb.asia-southeast1.firebasedatabase.app/sku.json').as('getSKUs');
    cy.wait('@getSKUs');
})

})