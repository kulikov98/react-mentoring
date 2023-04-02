/// <reference types="cypress" />

describe("GenreSelect", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should render all genres", () => {
    const expectedLength = 5;
    cy.findByTestId("genres").children().should("have.length", expectedLength);
  });

  it("should have preselected genre", () => {
    const preselectedGenre = 'crime';
    cy.findByLabelText(preselectedGenre).should("be.checked");
  });

  it("should select genre", () => {
    const genreName = 'comedy';
    cy.findByText(genreName).click();
    cy.findByLabelText(genreName).should("be.checked");
  });
});
