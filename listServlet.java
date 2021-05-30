package net.javaguides.reservation.controller;
import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.javaguides.reservation.dao.listDao;
import net.javaguides.reservation.model.list;
@WebServlet("/reservation")
public class listServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private listDao llistDao = new listDao();
    public listServlet() {
        super();
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    	    throws ServletException, IOException {
    	response.getWriter().append("Served at: ").append(request.getContextPath());
    	RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/listreservation.jsp");
    	dispatcher.forward(request, response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    	String name = request.getParameter("name");
    	String npeople = request.getParameter("npeople");
    	String date = request.getParameter("date");
    	String time = request.getParameter("time");
		list llist = new list();		
		llist.setName(name);
		llist.setNpeople(npeople);
		llist.setDate(date);
		llist.setTime(time);
		try {
			llistDao.reservationlist(llist);
		}catch (Exception e) {
			e.printStackTrace();
		}
		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/listdetails.jsp");
    	dispatcher.forward(request, response);
	}
}
	
