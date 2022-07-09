describe("Buy Product Button", () => {
  it.only("Test Values", () => {
    cy.visit("http://localhost:3000/products");
    cy.wait(8000);
    cy.get("button").contains("Buy").click();

    cy.get("input[name='qty']")
      .type("0.3")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Value must be greater than or equal to 1."
        );
      });

    cy.get("input[name='qty']")
      .clear()
      .type("010")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq("");
      });

    cy.get("input[name='qty']")
      .clear()
      .type("0999")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Value must be less than or equal to " + $input.attr("max") + "."
        );
      });
  });

  it.only("Test Close Button", () => {
    cy.visit("http://localhost:3000/products");
    cy.wait(8000);
    cy.get("button").contains("Buy").click();
    cy.get("button").contains("Close").click();
  });

  it.only("Submit Fail", () => {
    cy.visit("http://localhost:3000/products");
    cy.wait(8000);
    cy.get("button").contains("Buy").click();

    cy.get("input[name='qty']")
      .clear()
      .type("099999")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Value must be less than or equal to " + $input.attr("max") + "."
        );
      });

    cy.get("form[id='BuyProductForm']").submit();
  });
});
