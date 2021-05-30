<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Industry visit reservation</title>
</head>
<body>
 <div align="center">
  <h1>Reservation Form</h1>
  <form action="<%= request.getContextPath() %>/reservation" method="post">
   <table style="with: 80%">   
    <tr>
     <td>name</td>
     <td><input type="text" name="name" /></td>
    </tr>
    <tr>
     <td>npeople</td>
     <td><input type="text" name="npeople" /></td>
    </tr>
    <tr>
     <td>date</td>
     <td><input type="text" name="date" /></td>
    </tr>
    <tr>
     <td>time</td>
     <td><input type="text" name="time" /></td>
    </tr>
   </table>
   <input type="submit" value="Submit" />
  </form>
 </div>
</body>
</html>