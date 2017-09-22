package customerfmanagement

import grails.transaction.Transactional

@Transactional
class UpdateCustomerService {
	def GetCustomersService

    def updateCustomer(cid, customer) {
		def customerToUpdate = GetCustomersService.findByCid(cid)[0]
		customerToUpdate.firstName = customer.firstName
		customerToUpdate.lastName = customer.lastName
		customerToUpdate.company = customer.company
		customerToUpdate.address = customer.address
		customerToUpdate.emailAddress = customer.emailAddress
		//Date should not be changed when signing up
		customerToUpdate.save()
		return Customer.findAll()
    }
}
