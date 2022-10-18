describe("UC03 - JSONPLACEHOLDER INDEX", function () {
    it("Acessando o site", () => {
        cy.visit("https://jsonplaceholder.typicode.com/");
        cy.wait(500);
        cy.xpath("/html/body/div/section[1]/div/span").contains("{JSON} Placeholder");
        cy.get("#run-button").click();
        cy.xpath("/html/body/div/main/h2[2]").contains("Resources");
        cy.xpath("/html/body/div/main/table[1]/tbody/tr[1]/td[1]/a").contains("/posts");
        cy.xpath("/html/body/div/main/table[1]/tbody/tr[2]/td[1]/a").contains("comments");
        cy.xpath("/html/body/div/main/table[1]/tbody/tr[3]/td[1]/a").contains("albums");
        cy.xpath("/html/body/div/main/table[1]/tbody/tr[4]/td[1]/a").contains("photos");
        cy.xpath("/html/body/div/main/table[1]/tbody/tr[5]/td[1]/a").contains("todos");
        cy.xpath("/html/body/div/main/table[1]/tbody/tr[6]/td[1]/a").contains("users");
        cy.wait(2000);
    });
});
