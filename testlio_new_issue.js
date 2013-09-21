

script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = chrome.extension.getURL('test.js');
	script.innerHTML = '<!--Testlio  New  Issue extension-->';
	document.documentElement.appendChild(script);
