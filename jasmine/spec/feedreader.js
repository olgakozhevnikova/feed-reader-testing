/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This test makes sure that the allFeeds variable has been defined and that it is not empty.*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url should be defined', function() {
            allFeeds.forEach(item => {
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toBe(0);
            });
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name should be defined', function() {
            allFeeds.forEach(item => {
                expect(item.name).toBeDefined();
                expect(item.name.length).not.toBe(0);
            });
        });
    });

    /* New test suite named "The menu" */
    describe('The menu', function() {
        /* This test ensures the menu element is
         * hidden by default.
         */
        const bodyHasClass = document.body.classList.contains('menu-hidden');

        it('menu element should be hidden by default', function() {
            expect(bodyHasClass).toEqual(true);
        });

        /* This test ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('menu should change visibility when the menu icon is clicked', function() {
            // First click
            $('.menu-icon-link').click();
            expect(bodyHasClass).toEqual(false);

            // Second click
            $('.menu-icon-link').click();
            expect(bodyHasClass).toEqual(true);
        });
    });

    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('feed container should contains an entry element', function() {
            const entries = $('.feed .entry').length;
            expect(entries).toBeGreaterThan(0);
        });
    });

    /* New test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let firstFeed;
        
        let secondFeed;

        beforeEach(function(done) {
            loadFeed(0,function() {
                firstFeed = $('.feed').html;
                done();
            })
        });

        it('content should change when a new feed is loaded', function(done) {
            loadFeed(2, function() {
                secondFeed = $('.feed').html;
                expect(secondFeed).not.toBe(firstFeed);
                done();
            });
        })
    });
}());
