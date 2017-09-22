package customerfmanagement

import grails.transaction.Transactional

@Transactional
class DeleteCustomerService {

    def deleteCustomer(customer) {
		def customerToDelete = Customer.executeUpdate("delete Customer as c where c.cid=:cid", [cid: customer.cid] )
		println customerToDelete
		return Customer.findAll()
    }
}
