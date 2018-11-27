import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () =>{
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

//test using jsdom
describe('index.html', () => {
  it('should say hello', (done) => {
    //content of index.html hold in memory
    const index = fs.readFileSync('./src/index.html', "utf-8");
    // create a virtula DOM in mmeory
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello Mariana");
      done();
      window.close();
    })
  })
})


// note: need to use done() when having asynchronous call function, in this case the
// function in jsdom
