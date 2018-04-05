// Tests for the calculator.
exports.config = {
  //directConnect: true,

  framework: 'jasmine2',

  specs: [
    'biggerSpec.js','spec.js'
  ],

//  capabilities: {     'browserName': 'chrome'  },
seleniumAddress: 'http://localhost:4444/wd/hub',
  multiCapabilities: [
	// D:\Program Files\Mozilla Firefox30
	// { browserName: 'firefox', firefoxPath: 'C:/Program Files/Mozilla Firefox/firefox.exe' },
	// { browserName: 'firefox', firefoxPath: 'd:/Program Files/Mozilla Firefox30/firefox.exe' },
		//{browserName: 'internet explorer'},
		{browserName: 'MicrosoftEdge'},
		{browserName: 'firefox'},
		{browserName: 'chrome'}
	//{ browserName: 'chrome', 	"chromeOptions": { binary: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe', }}
  ],
};
