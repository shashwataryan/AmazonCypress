import FlightBooking from "../PageObjects/FlightBooking";
import HomePage from "../PageObjects/HomePage";
import ListPage from "../PageObjects/ListPage";
import SignIn from "../PageObjects/SignIn";
import { email, password } from '../../support/constants';

const homepage=new HomePage();
const listpage=new ListPage();
const flightbooking=new FlightBooking();
const signin=new SignIn();

describe("Flight Booking",()=>
{
    beforeEach(() => {
        cy.visitAmazon();
    });

    it("Select date from calendar",()=>
    {
    signin.clickSignInButton();
    cy.signInCustom();
    homepage.search("flight ticket booking");
    listpage.clickFlightBooking();
    flightbooking.selectCalendar();
    cy.selectDateFromCalendar("2023-07-27");
    })
})