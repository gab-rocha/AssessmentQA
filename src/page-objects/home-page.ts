import { PageModel } from '../utils/page-model.ts';

export class HomePage extends PageModel {

    //Header
    get logoBox() {
        return this.page.getByAltText('QA Logo');
    }
}