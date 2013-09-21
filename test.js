var newIssueForm= document.getElementById('new-issue-form');
var tabbedMarkdownInput = document.getElementById('tabbed-markdown-input');
var textS ="**Environment:** \n" +
 "Device: \n" +
 "iOS: \n" +
 "Build number: \n" +
 "Account logged in:\n\n" +
 "**Steps to reproduce:** \n\n" +
 "**Expected result:**\n\n" +
 "**Actual result:** \n\n" +
 "**Logs (for crashes):** \n\n" +
 "**Screenshots or videos:** \n\n";
tabbedMarkdownInput.innerHTML=textS;
tabbedMarkdownInput.setAttribute("rows","15");