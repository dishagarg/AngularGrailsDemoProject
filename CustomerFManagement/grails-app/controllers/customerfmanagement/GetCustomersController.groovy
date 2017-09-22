package customerfmanagement

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional
import groovy.json.*

@Transactional
class GetCustomersController {
	def GetCustomersService
	static allowedMethods = [save: "POST", update: "POST", delete: "POST"]
    def index() { }
	
    def listAll() {
		if(request.getMethod() != 'GET'){
			render 'error'
		}
		
		render (contentType: 'text/json') {
			GetCustomersService.findAllCustomers()
		}
	}
	def listByCid(){
		if(request.getMethod() !='GET'){
			render 'error'
		}
		
		render (contentType: 'text/json') {
			GetCustomersService.findByCid(request.getParameter("cid"))
		}
	}

}
