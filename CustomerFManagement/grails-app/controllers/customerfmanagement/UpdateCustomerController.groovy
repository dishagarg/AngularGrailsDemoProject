package customerfmanagement

class UpdateCustomerController {
	def UpdateCustomerService
	static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() { }
	
	def updateCustomer() {
		if(request.getMethod() !='POST'){
			render 'error'
		}
		render(contentType: 'text/json'){
			def customer = UpdateCustomerService.updateCustomer(request.JSON.id, request.JSON.customer)
			customer
		}
	}
	
}
