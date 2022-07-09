describe("Form Submits and Pop Up", () => {
  it.only("'Create SKU' Button (Test Categories)", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.get("button").contains("Create SKU").click();

    cy.get("select[name='category']")
      .select("Bags")
      .should("have.value", "Bags");
    cy.get("select[name='category']")
      .select("Belts")
      .should("have.value", "Belts");
    cy.get("select[name='category']")
      .select("Clothes")
      .should("have.value", "Clothes");
    cy.get("select[name='category']")
      .select("Shoes")
      .should("have.value", "Shoes");
    cy.get("select[name='category']")
      .select("Wallets")
      .should("have.value", "Wallets");
  });

  it.only("'Create SKU' Button (Test Cost Price)", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.get("button").contains("Create SKU").click();

    cy.get("input[name='costprice']")
      .type("3")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq("");
      });

    cy.get("input[name='costprice']")
      .clear()
      .type("0.3")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Value must be greater than or equal to 1."
        );
      });

    cy.get("input[name='costprice']")
      .clear()
      .type("9999")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq("");
      });

    cy.get("input[name='costprice']")
      .clear()
      .type("010000")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Value must be less than or equal to 9999."
        );
      });
  });

  it.only("'Create SKU' Button (Test Sell Price)", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.get("button").contains("Create SKU").click();

    cy.get("input[name='sellprice']")
      .type("3")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq("");
      });

    cy.get("input[name='sellprice']")
      .clear()
      .type("0.3")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Value must be greater than or equal to 1."
        );
      });

    cy.get("input[name='sellprice']")
      .clear()
      .type("9999")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq("");
      });

    cy.get("input[name='sellprice']")
      .clear()
      .type("010000")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Value must be less than or equal to 9999."
        );
      });
  });

});