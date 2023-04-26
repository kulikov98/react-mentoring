/// <reference types="cypress" />

describe("GenreSelect", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("render initial movies list", () => {
    const expectedLength = 10;
    cy.findByTestId("results").children().should("have.length", expectedLength);
  });

  it("should have preselected genre", () => {
    const preselectedGenre = "documentary";
    cy.findByLabelText(preselectedGenre).should("be.checked");
  });

  it("should select genre", () => {
    const genreName = "comedy";
    cy.findByText(genreName).click();
    cy.findByLabelText(genreName).should("be.checked");
  });

  it("should search", () => {
    const expectedLength = 4;
    cy.findByTestId("search-input").type("p").type("{enter}");
    cy.findByTestId("results").children().should("have.length", expectedLength);
  });

  it("should change sort order", () => {
    cy.findByTestId("selected").should("have.text", "Release Date");
    cy.findByTestId("selected").click();
    cy.findByTestId("options").children().eq(0).click();
    cy.findByTestId("selected").should("have.text", "Title");
  });

  it("should select a movie", () => {
    cy.findByTestId("results").children().first().click();
    cy.findByTestId("movie-details").should("be.visible");
  });

  it("should switch back from movie details", () => {
    cy.findByTestId("results").children().first().click();
    cy.findByTestId("movie-details").should("be.visible");
    cy.findByTestId("search-btn").click();
    cy.findByText("find your movie").should("be.visible");
  });
});
