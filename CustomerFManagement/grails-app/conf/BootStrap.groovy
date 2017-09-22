import customerfmanagement.Customer

class BootStrap {

    def init = { servletContext ->
		if (Customer.count() == 0) {
			new Customer(firstName: 'Disha',
			lastName: 'Garg',
			company: 'SAP',
			address: '123, Mainstreet, Vancouver',
			emailAddress: 'd.garg@sap.com',
			cid: 20001).save()
			
			new Customer(firstName: 'Sam',
			lastName: 'Mackenzie',
			company: 'SAP',
			address: '123, Mainstreet, Vancouver',
			emailAddress: 's.mac@sap.com',
			cid: 20002).save()
			
			new Customer(firstName: 'Wen',
			lastName: 'Nyugen',
			company: 'SAP',
			address: '123, Mainstreet, Vancouver',
			emailAddress: 'n.wen@sap.com',
			cid: 20003).save()
		}
    }
    def destroy = {
    }
}
