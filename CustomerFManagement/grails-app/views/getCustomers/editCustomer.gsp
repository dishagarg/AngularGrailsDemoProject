<!DOCTYPE html>
	<head>
		<meta name="layout" content="main"/>
		<title>Customers</title>
	</head>
	<body>
		<h1>Edit a Customer</h1>
		<g:form action="edit" name="editCustomerForm">
			<table>
			<tr><td>First Name:</td><td><input id="firstName" name="firstName" type="text"/></td></tr>
			<tr><td>Last Name:</td><td><input id="lastName" name="lastName" type="text"/></td></tr>
			<tr><td>Company Name:</td><td><input id="company" name="company" type="text"/></td></tr>
			<tr><td>Address:</td><td><input id="address" name="address" type="text"/></td></tr>
			<tr><td>Email Address:</td><td><input id="emailAddress" name="emailAddress" type="email"/></td></tr>
			<tr><td colspan="2"><input value="Update" type="submit"/></td></tr>
  		</table>
		</g:form>
	</body>
</html>