# Project Overview

This project is a web-based application that reads RSS feeds. This app uses [Jasmine](http://jasmine.github.io/) to test the underlying business logic of the application as well as the event handling and DOM manipulation.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How will I complete this project?

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. First test makes sure that the allFeeds variable has been defined and that it is not empty.
2. Second test loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
3. Third test loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
4. Forth test ensures the menu side menu is hidden by default.
5. Fifth test ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
6. Sixth test ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
7. Seventh test ensures when a new feed is loaded by the loadFeed function that the content actually changes.
