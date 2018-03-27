/* eslint-env mocha */

var assert = require('assert')
var FreshBooks = require('../')

describe('Recurring', () => {
	var freshbooks = new FreshBooks('https://freshbooksjs.freshbooks.com/api/2.1/xml-in', '59dbd7310470641ff2332bd016ac2e4e')
	var recurring = new freshbooks.Recurring()

	describe('create()', () => {
		it('should create a new recurring invoice', function(done) {
			recurring.client_id = 2

			recurring.lines.push({
				name: 'Test',
				unit_cost: '5.00',
				quantity: '5',
				type: 'Item',
			})

			recurring.frequency = 'monthly'

			recurring.create(function(err) {
				done(err)
			})
		})
	})

	describe('update()', () => {
		it('should update a recurring invoice', function(done) {
			var id = recurring.recurring_id

			var updatingRecurring = new freshbooks.Recurring()
			updatingRecurring.recurring_id = id
			updatingRecurring.notes = 'Lorem Ipsum'
			updatingRecurring.update(function(err) {
				done(err)
			})
		})
	})

	describe('get()', () => {
		it('should get a recurring invoice', function(done) {
			recurring.get(recurring.recurring_id, function(err, recurring) {
				done(err)
			})
		})
	})

	describe('list()', () => {
		it('should list an array of recurring invoices', function(done) {
			recurring.list({client_id: recurring.client_id}, function(err, invoices) {
				done(err)
			})
		})
	})

	describe('delete()', () => {
		it('should delete a recurring invoice', function(done) {
			recurring.delete(function(err, recurring) {
				done(err)
			})
		})
	})
})
