describe("The angular-pouchdb wrapper service", function() {

	describe("has a put function", function() {

		var db;
		var doc = { _id: '1', value: 'test' };

		beforeEach(function() {
			var $injector = angular.injector(['ng', 'pouchdb']);
			var pouchDB = $injector.get('pouchDB');
			db = pouchDB('testdb');
		});

		afterEach(function(done) {
			db.destroy(done);
		});



		// This is the only real test for angular-couchdb.
		// It checks for the existence of 'catch' and 'finally' on the promise.

		it("that returns an Angular promise", function() {

			var promise = db.put(doc);
			expect(promise.catch).toBeDefined();
			expect(promise.finally).toBeDefined();
		});



		// Below are some tests that use the promise (but are more tests for couchdb in general)

		it("that creates a new document if it doesn't exist", function(done) {

			function assertDocExists(done) {
				db.get(doc._id)
				.then(function(found) {
					expect(found.value).toEqual('test');
				})
				.catch(function() {
					fail('doc not found');
				})
				.finally(done);
			}

			// db is empty at this point
			
			db.put(doc)
			.then(function(res) {
				expect(res.ok).toBe(true);
				assertDocExists(done);
			})
			.catch(function(err) {
				fail('put failed');
				done();
			});
		});

		it("that updates a document if it already exists", function(done) {
			
			function updateDoc(rev, done) {
				db.put({ value: 'new' }, doc._id, rev)
				.then(function(res) {
					expect(res.ok).toBe(true);
					done();
				})
				.catch(function() {
					fail('put failed');
					done();
				})
				.finally(done);				
			}

			function assertDocChange(done) {
				db.get(doc._id)
				.then(function(found) {
					expect(found.value).toEqual('new');
					done();
				});
			}

			// insert new doc
			db.put(doc)
			.then(function(res) {
				// update existing doc
				updateDoc(res.rev, function() {
					assertDocChange(done);
				});
			})
			.catch(function() {
				fail('put failed');
				done();
			});

		});
	});


});