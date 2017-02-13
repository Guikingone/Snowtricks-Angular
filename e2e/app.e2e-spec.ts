import { SnowtricksAngularPage } from './app.po';

describe('snowtricks-angular App', function() {
  let page: SnowtricksAngularPage;

  beforeEach(() => {
    page = new SnowtricksAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
