<!DOCTYPE html>
	<head>
		<meta name="layout" content="main"/>
		<title>Customers</title>
	</head>
	<body>
		<h1>List of Customers</h1>
		<table>
			<thead>
				<td>First Name</td>
				<td>Last Name</td>
				<td>Company Name</td>
				<td>Address</td>
				<td>Email Address</td>
			</thead>
			<tbody>
				<g:each in="${customerList}" var="customer" status="i">
					<tr>
						<td>${customer.firstName}</td>
						<td>${customer.lastName}</td>
						<td>${customer.company}</td>
						<td>${customer.address}</td>
						<td>${customer.emailAddress}</td>
					</tr>
				</g:each>
			</tbody>
  		</table>
  		<input type="button" name="add" value="Add"/>
  		<input type="button" name="delete" value="Delete"/>
  		<input type="button" name="edit" value="Edit"/>
	</body>
</html>