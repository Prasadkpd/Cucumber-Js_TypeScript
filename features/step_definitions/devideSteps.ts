import { When, Then, Given } from "@cucumber/cucumber";
import {expect} from "chai";
import { Calculator } from "../../src/calculator";

interface World {
    calculator: Calculator;
    actual: number;
}

Given("a calculator", function (this: World) {
    this.calculator = new Calculator();
});

When("I want to divide (int) by (int)", function(n1:number, n2: number) {
   this.actual = this.calculator.divide(n1, n2); 
});

Then("the result is (int)", function(expected: number) {
    expect(this.actual).to.be.equal(expected);
});

Then('the result is {int}', (int: number) => {
    Then('the result is {float}', (float: number) => {
        return 'pending';
    })
})
