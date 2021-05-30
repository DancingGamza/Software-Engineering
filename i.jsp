<%@page import="java.io.PrintWriter"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<!DOCTYPE html>
<html>
    <head>
        <title>select industry</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">      
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>              
    </head>
    <body>
        <div class="container">                       
                    <div class="form-group">
                        <h2>Search industry</h2>
                    </div>
                <br>
                <div class="form-group">
            <form method="get" action="servlett">     
                      <div class="form-group">
                          <h3>Select the tag</h3>
       <%
            Connection con;
            PreparedStatement pst;
            ResultSet rs;
         try
	{
            Class.forName("com.mysql.jdbc.Driver");
            con=DriverManager.getConnection("jdbc:mysql://localhost/industry","root","123qqpp!!");
            pst = con.prepareStatement("select distinct tag from company");
	    rs=pst.executeQuery();          
            if(rs.next())
	   {
	      out.println("<tr>");
              out.println("<td>Choose tag</td>");
	      out.println("<td>");
	      out.println("<select name='combo'>");
	  do{
            String tag = rs.getString("tag");
	    out.println("<option value='"+ tag   +"'>" +  tag +  "</option>");
          }
            while(rs.next());
	   out.println("</select>");
           rs.close();
	   out.println("</td></tr>");
           out.println("</tr><td colspan=2 align=center><input type=submit  value=Retrieve></td></tr>");
           }
           else
            {
           out.println("<tr>");
 	   out.println("<td colspan=2 align=right>");
	   out.println("Sorry table is Empty");
           out.println("</td>");
            }	 
	   out.println("</form>");
	  }
        catch(Exception e)
        {
                 e.printStackTrace(); 
        }	                               
        %>
         </div>                                                 
          </form>                                         
              </div>                     
     </div>
</div> 
    </body>
</html>
