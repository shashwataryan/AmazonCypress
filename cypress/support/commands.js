/// <reference types="cypress"/>

import 'cypress-iframe';
import FlightBooking from '../e2e/PageObjects/FlightBooking';
import SignIn from '../e2e/PageObjects/SignIn';
import { email, password } from '../support/constants';

const signin=new SignIn();
const flightbooking=new FlightBooking();

Cypress.Commands.add('visitAmazon', () => {
  cy.visit("https://www.amazon.in/");
});

Cypress.Commands.add('signInCustom', () => {
  
  
        signin.emailInput(email);
        signin.clickContinue();
        signin.passwordInput(password);
        signin.clickFinalSignIn();
        signin.welcomeMessage().should('contain',
            `Hello, Shashwat`);
});

Cypress.Commands.add('selectDateFromCalendar', (userDate) => {
const desireddate = new Date(userDate);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month=months[desireddate.getMonth()];
var year=desireddate.getFullYear();
var date=desireddate.getDate();
var desiredMonthYear=month+" "+year.toString(10);
var c=0,x=0,y=0;
var userid="1_"+desireddate.getMonth()+"-"+year;

flightbooking.getMonthYear().each((text)=>{
  
cy.wrap(text).invoke('text').then((text1)=>
{ c++;
  if(!(desiredMonthYear.toUpperCase() === text1.toUpperCase()) && c%2==0 && x==0)
  {
    flightbooking.clickArrow();
  }

  if(desiredMonthYear.toUpperCase() === text1.toUpperCase())
  {
    cy.get(`div[id="${userid}"] [class="_8bd51405"] [class*="ca600550"][role="button"]`).each((text2)=>
    {
    cy.wrap(text2).invoke('text').then((text3)=>
    {
    if(text3.includes(date)&& y!=1)
    {
    cy.get(`div[id="${userid}"] [class="_8bd51405"] [class*="ca600550"][role="button"]`).eq(date-1).click()
    y=1;
    }
    });
    });
  x=1;
  }
});
});
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

  
  // Usage in your test:
  