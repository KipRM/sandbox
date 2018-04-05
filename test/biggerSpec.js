// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var operator = element(by.model('operator'));
  var goButton = element(by.id('gobutton'));
  // var result = element(by.xpath('//h2[contains(@class,'ng')]'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function calc(a, op, b) {
    firstNumber.sendKeys(a);
    operator.sendKeys(op);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
//    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.get('http://localhost:3456');
	//ptor = protractor.getInstance();
  });

  it('should have a history', function() {
    calc(1, "+", 2);
    calc(3, "+", 4);

    expect(history.count()).toEqual(2);
	
	expect(history.last().getText()).toContain('1 + 2');
	expect(history.last().getText()).toContain('3');
    expect(history.first().getText()).toContain('3 + 4'); 
	expect(history.first().getText()).toContain('7');

    calc(5, "+", 6);
    expect(history.first().getText()).toContain('5 + 6'); 
	expect(history.first().getText()).toContain('11');
	expect(latestResult.getText()).toContain('11');
	//expect(result.getText()).toContain('11');
	//expect(element(by.xpath('//h2[contains(@class,'ng')]')).getText()).toEqual('11');

	calc(4, "/", 2);
    expect(history.first().getText()).toContain('4 / 2'); 
	expect(history.first().getText()).toContain('2');
	expect(latestResult.getText()).toContain('2');
	

	calc(24, "%", 5);
    expect(history.first().getText()).toContain('24 % 5'); 
	expect(history.first().getText()).toContain('4');
	expect(latestResult.getText()).toContain('4');
	

	calc(7, "*", 2);
    expect(history.first().getText()).toContain('7 * 2'); 
	expect(history.first().getText()).toContain('14');
	expect(latestResult.getText()).toContain('14');
	

	calc(7, "-", 2);
    expect(history.first().getText()).toContain('7 - 2'); 
	expect(history.first().getText()).toContain('5');
	expect(latestResult.getText()).toContain('5');
	

    expect(history.count()).toEqual(7);
  });
});