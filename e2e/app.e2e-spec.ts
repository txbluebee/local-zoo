import { LocalZooPage } from './app.po';

describe('local-zoo App', () => {
  let page: LocalZooPage;

  beforeEach(() => {
    page = new LocalZooPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
