/// <reference types="cypress"/>

const elements=
{
     dropdown:
     {
        countryDropDown: 'span[id="address-ui-widgets-countryCode"]',
        countryDropDownList: 'a[class="a-dropdown-link"]'
     },

    input:
    {
        fullName:'input[id="address-ui-widgets-enterAddressFullName"]',
        pinCode: 'input[id="address-ui-widgets-enterAddressPostalCode"]',
        mobile:'input[id="address-ui-widgets-enterAddressPhoneNumber"]',
        address: 'input[id="address-ui-widgets-enterAddressLine1"]',
    },

    button:
    {
        addAddress: 'span[id="address-ui-widgets-form-submit-button"]'
    },

    message:
    {
        addressSavedMessage: 'h4[class="a-alert-heading"]'
    }
}

export default class Address
{
    clickYourAddress()
    {
      return cy.contains('Your Addresses').click();
    }
    
    clickAddAddress()
    {
        return cy.contains('Add address').click();
    }
    
    selectCountryFromDropDownList(country)
    {
     cy.get(elements.dropdown.countryDropDown).click();
     cy.get(elements.dropdown.countryDropDownList).then((list)=>
        {
        cy.wait(2000).wrap(list).contains(new RegExp("^"+country+"$","g")).click({force:true});
        })
  
    }

    enterFullName()
    {
        return cy.get(elements.input.fullName).type("Shashwat Aryan");
    }
    
    enterMobileNumner()
    {
        return cy.get(elements.input.mobile).type("9876543210");
    }

    enterPinCode()
    {
        return cy.get(elements.input.pinCode).type("831001");
    }
    
    enterAddress()
    {
        return cy.get(elements.input.address).type("118 KD Flats, C.H.Area");
    }

    clickAddAddressButton()
    {
        return cy.get(elements.button.addAddress).click();
    }

    verifyAddressSaved()
    {
        return cy.get(elements.message.addressSavedMessage);
    }
}