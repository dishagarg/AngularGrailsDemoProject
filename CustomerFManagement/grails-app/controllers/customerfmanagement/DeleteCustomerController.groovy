package customerfmanagement

class DeleteCustomerController {
	def DeleteCustomerService
	static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() { }
	
	def deleteCustomer() {
		if(request.getMethod() !='POST'){
			render 'error'
		}
		render(contentType: 'text/json'){
			def customer = DeleteCustomerService.deleteCustomer(request.JSON)
			customer
		}
	}
	
}
