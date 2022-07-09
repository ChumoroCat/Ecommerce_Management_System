describe("Buy SKU Button", () => {
  it.only("Test Values", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.wait(8000);
    cy.get("button").contains("Quick Buy").click();

    cy.get("input[name='qty']")
      .type("0.3")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Value must be greater than or equal to 1."
        );
      });

    cy.get("input[name='qty']")
      .clear()
      .type("999")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq("");
      });

    cy.get("input[name='qty']")
      .clear()
      .type("01000")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Value must be less than or equal to 999."
        );
      });
  });

  it.only("Submit Fail", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.wait(8000);
    cy.get("button").contains("Quick Buy").click();

    cy.get("input[name='qty']")
      .clear()
      .type("9999")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Value must be less than or equal to 999."
        );
        cy.get("form[id='BuySKUForm']").submit();
      });
  });

  it.only("Test Close Button", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.wait(8000);
    cy.get("button").contains("Quick Buy").click();
    cy.get("button").contains("Close").click();
  });
});
