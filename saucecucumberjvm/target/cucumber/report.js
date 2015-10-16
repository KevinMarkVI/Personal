$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com/yourcompany/saucecucumberjvm/guineapig.feature');
formatter.feature({
  "line": 1,
  "name": "Sauce Labs Guinea Pig",
  "description": "",
  "id": "sauce-labs-guinea-pig",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "We want to click on the link and verify it takes us to a new page",
  "description": "",
  "id": "sauce-labs-guinea-pig;we-want-to-click-on-the-link-and-verify-it-takes-us-to-a-new-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Sauce Labs Guinea Pig test page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see a new page",
  "keyword": "Then "
});
formatter.match({
  "location": "GuineaPigSteps.user_is_on_guinea_pig_page()"
});
formatter.result({
  "duration": 367200330,
  "status": "passed"
});
formatter.match({
  "location": "GuineaPigSteps.user_click_on_the_link()"
});
formatter.result({
  "duration": 401724083,
  "status": "passed"
});
formatter.match({
  "location": "GuineaPigSteps.new_page_displayed()"
});
formatter.result({
  "duration": 57760128,
  "status": "passed"
});
});