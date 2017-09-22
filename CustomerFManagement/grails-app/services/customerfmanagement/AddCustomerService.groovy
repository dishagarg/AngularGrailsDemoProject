package customerfmanagement

import grails.transaction.Transactional

@Transactional
class AddCustomerService {

    def addCustomer(customer) {
		def customerInstance = new Customer(customer)
		customerInstance.save(flush: true)
		if (!customerInstance.save()) {
			customerInstance.errors.allErrors.each {
				println it
			}
		}
		return Customer.findAll()
    }
}
