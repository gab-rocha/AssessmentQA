import { PageModel } from '../utils/page-model.ts';

export class LibraryPage extends PageModel {

    //Title
    get mainTitle() {
        return this.page.getByTestId('library-main-title');
    }

    //Search
    get searchInput() {
        return this.page.locator('.react-autosuggest__input');
    }

    async clickCourseSuggestion(course) {
        await this.page.getByTestId('search-result-suggestion').getByText(course).first().click();
    }

    // Results
    get resultsCounter() {
        return this.page.getByTestId('search-showing-results-counter');
    }

    get sectionContent() {
        return this.page.getByTestId(new RegExp('entity-card-lp-.*')).getByText('COURSE').first();
    }
}