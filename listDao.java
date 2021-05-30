package net.javaguides.reservation.dao;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import net.javaguides.reservation.model.list;
public class listDao {
	public int reservationlist(list llist) throws ClassNotFoundException{
		String INSERT_USERS_SQL = "INSERT INTO list" +
	" (id, name, npeople, date, time) VALUES " +
				" (?, ?, ?, ?, ?);";
		int result = 0;
		Class.forName("com.mysql.jdbc.Driver");
		try(Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/reservation?useSSL=false", "root", "123qqpp!!");
			PreparedStatement preparedStatement = connection.prepareStatement(INSERT_USERS_SQL)){
			preparedStatement.setInt(1, 2);
			preparedStatement.setString(2, llist.getName());
			preparedStatement.setString(3, llist.getNpeople());
			preparedStatement.setString(4, llist.getDate());
			preparedStatement.setString(5, llist.getTime());
			System.out.println(preparedStatement);
			result = preparedStatement.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}
}	
			 
		
			
			
	