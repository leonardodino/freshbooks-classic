/* eslint-env mocha */

var assert = require('assert')
var FreshBooks = require('../')

describe('Expense', () => {
	var freshbooks = new FreshBooks('https://freshbooksjs.freshbooks.com/api/2.1/xml-in', '59dbd7310470641ff2332bd016ac2e4e')
	var expense = new freshbooks.Expense()

	describe('create()', () => {
		it('should create a new expense', function(done) {
			expense.staff_id = 1
			expense.category_id = 1
			expense.amount = '20.00'

			expense.create(function(err, expense) {
				done(err)
			})
		})
	})

	describe('update()', () => {
		it('should update an expense', function(done) {
			expense.amount = '25.00'
			expense.update(function(err, expense) {
				done(err)
			})
		})
	})

	describe('get()', () => {
		it('should get an expense', function(done) {
			expense.get(expense.expense_id, function(err, expense) {
				done(err)
			})
		})
	})

	describe('list()', () => {
		it('should list an array of expenses', function(done) {
			expense.list({client_id: expense.client_id}, function(err, expenses) {
				done(err)
			})
		})
	})

	describe('delete()', () => {
		it('should delete an expense', function(done) {
			expense.delete(function(err, expense) {
				done(err)
			})
		})
	})
})
