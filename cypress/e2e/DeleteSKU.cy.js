describe("Delete SKU Button", () => {
  it.only("Test Close Button", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.wait(8000);
    cy.get("button").contains("Delete").click();
    cy.get("button").contains("No").click();
  });

  it.only("Test Delete Button", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.wait(8000);
    cy.get("button").contains("Delete").click();
    cy.get("input[type=submit]").should('have.value', 'Yes').click();
  });
});
