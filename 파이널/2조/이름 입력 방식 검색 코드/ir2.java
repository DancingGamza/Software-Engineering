package is;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
@WebServlet("/servlett")
public class ir2 extends HttpServlet 
{
     int i;
    Connection con;
    PreparedStatement pst;
    ResultSet rs;
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        try {
            i++;
            PrintWriter out = response.getWriter();
            response.setContentType("text/html");
            
            String tag= request.getParameter("q");
            Class.forName("com.mysql.jdbc.Driver");            
            con=DriverManager.getConnection("jdbc:mysql://localhost/industry","root","123qqpp!!");
           
            pst = con.prepareStatement("select id,name,location1,location2,visitable,details,tag,category from company where name = ? ");
            
            pst.setString(1, tag);
           
            
            
            rs = pst.executeQuery();
            out.println("<table width=60% border= 1   >");
            out.println("<tr><td colspan=8 " );
            out.println("<center><h2>Result of Search Page</h2></center>");	
            out.println("</td></tr>");
            out.println("<tr>");
            out.println("<th>Industry id</th>");
            out.println("<th>Industry name</th>");
            out.println("<th>Location1</th>");
            out.println("<th>Location2</th>");
            out.println("<th>Visitable time</th>");
            out.println("<th>Industry details</th>");
            out.println("<th>Tag</th>");
            out.println("<th>Category</th>");
            out.println("</tr>");
              
              while(rs.next())
              {
            	  out.println("<tr>");
                  out.println("<td>" + rs.getInt("id") + "</td> ");
                  out.println("<td>" + rs.getString("name") + "</td> ");
                  out.println("<td>" + rs.getString("location1") + "</td> ");
                  out.println("<td>" + rs.getString("location2") + "</td> ");
                  out.println("<td>" + rs.getString("visitable") + "</td> ");
                  out.println("<td>" + rs.getString("details") + "</td> ");
                  out.println("<td>" + rs.getString("tag") + "</td> ");
                  out.println("<td>" + rs.getString("category") + "</td> ");
                  
                  out.println("</tr>");
                  
              }
              out.println("</table>");
        
               } 
            catch (ClassNotFoundException ex) {
           
        }catch (Exception e) 
        { throw new ServletException("error", e); }
    }
    
    public void destory()
    {
        i = 0;
    }
 
    
}