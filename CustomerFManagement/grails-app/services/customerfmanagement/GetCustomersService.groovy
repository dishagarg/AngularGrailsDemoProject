package customerfmanagement

import grails.transaction.Transactional

@Transactional
class GetCustomersService {

    Customer[] findAllCustomers() {
		return Customer.findAll()

    }
    Customer[] findByCid(cid) {
		if(cid in String){
			cid = Integer.parseInt(cid)
		}
		return Customer.findAll("from Customer as c where c.cid=?", [cid])

    }
}
