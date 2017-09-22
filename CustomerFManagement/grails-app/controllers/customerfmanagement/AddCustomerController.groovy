package customerfmanagement

class AddCustomerController {
	def AddCustomerService
	static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() { }
	
	def addCustomer() {
		if(request.getMethod() !='POST'){
			render 'error'
		}
		render(contentType: 'text/json'){
			def customer = AddCustomerService.addCustomer(request.JSON)
			println customer
			customer
		}
	}
	
}
