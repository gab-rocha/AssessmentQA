import { PageModel } from '../utils/page-model.ts';

export class PricingPage extends PageModel {

    //Title
    get mainTitle() {
        return this.page.getByTestId('heading').first();
    }

    //Content for Business
    get sectionBusiness() {
        return this.page.getByText('For Business');
    }
    get optionSmallTeams() {
        return this.page.getByTestId('flexbox').getByText('Small Teams');
    }
    get optionEnterprise() {
        return this.page.getByTestId('flexbox').getByText('Enterprise').first();
    }
    get optionVILT() {
        return this.page.getByTestId('flexbox').getByText('VILT');
    }

    //Content for Individuals
    get sectionIndividuals() {
        return this.page.getByText('For Individuals');
    }
    get optionMonthly() {
        return this.page.getByTestId('flexbox').getByText('Monthly');
    }
    get optionYearly() {
        return this.page.getByTestId('flexbox').getByText('Yearly');
    }

    get buttonStartNow() {
        return this.page.getByTestId('button-label').getByText('Start Now');
    }

    //Checkout form
    get inputFirstName() {
        return this.page.getByPlaceholder('First Name');
    }
    get inputLastName() {
        return this.page.getByPlaceholder('Last Name');
    }
    get inputEmail() {
        return this.page.getByPlaceholder('Your email address');
    }
    get inputPassword() {
        return this.page.getByPlaceholder('Password');
    }
    get checkboxReCaptcha() {
        return this.page.getByTitle('reCAPTCHA').first();
    }
    get buttonSignup() {
        return this.page.getByText('Sign up with Email');
    }
}