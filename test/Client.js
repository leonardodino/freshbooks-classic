/* eslint-env mocha */

var assert = require('assert')
var FreshBooks = require('../')

describe('Client', () => {
	var freshbooks = new FreshBooks('https://freshbooksjs.freshbooks.com/api/2.1/xml-in', '59dbd7310470641ff2332bd016ac2e4e')
	var client = new freshbooks.Client()

	describe('create()', () => {
		it('should create a new client', function(done) {
			client.email = 'freshbooks_js2@metacrash.com.au'

			client.create(function(err, client) {
				done(err)
			})
		})
	})

	describe('update()', () => {
		it('should update a client', function(done) {
			client.first_name = 'Test Client 2'

			client.update(function(err, client) {
				done(err)
			})
		})
	})

	describe('get()', () => {
		it('should get a client', function(done) {
			client.get(client.client_id, function(err, client) {
				done(err)
			})
		})
	})

	describe('list()', () => {
		it('should list an array of clients', function(done) {
			client.list({email: 'freshbooks_js@metacrash.com.au'}, function(err, clients) {
				done(err)
			})
		})
	})

	describe('delete()', () => {
		it('should delete an client', function(done) {
			client.delete(function(err, client) {
				done(err)
			})
		})
	})
})
