describe("Form Submits and Pop Up", () => {
  it.only("'Edit SKU' Button (Test Categories)", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.wait(8000);
    cy.get("button").contains("Edit").click();

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

  it.only("'Edit SKU' Button (Test Cost Price)", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.wait(8000);
    cy.get("button").contains("Edit").click();

    cy.get("input[name='costprice']")
      .clear()
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

  it.only("'Edit SKU' Button (Test Sell Price)", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.wait(8000);
    cy.get("button").contains("Edit").click();

    cy.get("input[name='sellprice']")
      .clear()
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

  it.only("'Edit SKU' Button (Fail Submit)", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.wait(8000);
    cy.get("button").contains("Edit").click();

    cy.get("select[name='category']").select("Bags");

    cy.get("input[name='name']").clear().type("H");

    cy.get("input[name='costprice']")
    .clear()
      .type("0.3")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq("Value must be greater than or equal to 1.");
      });

    cy.get("input[name='sellprice']")
      .clear()
      .type("19999")
      .then(($input) => {
        expect($input[0].validationMessage).to.eq("Value must be less than or equal to 9999.");
      });

    cy.get("form[id='EditSKUForm']").submit();
  });

  it.only("Test Close Button", () => {
    cy.visit("http://localhost:3000/createsku");
    cy.wait(8000);
    cy.get("button").contains("Edit").click();
    cy.get("button").contains("Close").click();
  });
});
