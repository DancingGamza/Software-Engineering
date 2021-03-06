# Industrial Visit Planning & Booking System (Search & Reservation part)
## 1. Use cases
저희 프로젝트의 산업체 검색 및 방문 예약 파트는 총 3가지의 Use case로 구분됩니다. 각 Use case에 대한 간략한 설명을 하자면 아래 기술된 사항들과 같습니다.
### 1- Use case 1: 산업체 검색
방문자는 여러 태그를 통해 산업체를 검색할 수 있습니다. 검색된 산업체의 상세정보를 확인할 수 있습니다.
### 1- Use case 2: 산업체 방문 예약
방문을 예약 할 수 있습니다. 예약의 상세정보를 입력할 수 있습니다.
### 1- Use case 3: 마이페이지
방문자는 자신의 예약된 방문 정보를 확인할 수 있습니다.
## 2. Domain Models
### 2- Use case 1: 산업체 검색
### 2.1 태그 선택 방식
### SearchHelper
servlett.java
```java
String tag= request.getParameter("combo");
```
### IndustryDB
i.jsp
```java
	    pst = con.prepareStatement("select distinct tag from company");
	    rs=pst.executeQuery()
```	    
servlett.java
```java
            Class.forName("com.mysql.jdbc.Driver");
            con=DriverManager.getConnection("jdbc:mysql://localhost/industry","root","123qqpp!!");
```
```java         
            pst = con.prepareStatement("select id,name,location1,location2,visitable,details,category from company where tag=?");
            pst.setString(1, tag);
 ```
 ```java
                  out.println("<td>" + rs.getInt("id") + "</td> ");
                  out.println("<td>" + rs.getString("name") + "</td> ");
                  out.println("<td>" + rs.getString("location1") + "</td> ");
                  out.println("<td>" + rs.getString("location2") + "</td> ");
                  out.println("<td>" + rs.getString("visitable") + "</td> ");
                  out.println("<td>" + rs.getString("details") + "</td> ");                 
                  out.println("<td>" + rs.getString("category") + "</td> ");
 ``` 
### 2.2 산업체 이름 입력 방식
### SearchHelper
ir.jsp
```jsp
<input type="text" name="q"/>
```
ir2.java
```java
   String tag= request.getParameter("q");
```
### IndustryDB
ir2.java
```java
            pst = con.prepareStatement("select id,name,location1,location2,visitable,details,tag,category from company where name = ? ");          
            pst.setString(1, tag);	
	    
``` 
```java
	          out.println("<tr>");
                  out.println("<td>" + rs.getInt("id") + "</td> ");
                  out.println("<td>" + rs.getString("name") + "</td> ");
                  out.println("<td>" + rs.getString("location1") + "</td> ");
                  out.println("<td>" + rs.getString("location2") + "</td> ");
                  out.println("<td>" + rs.getString("visitable") + "</td> ");
                  out.println("<td>" + rs.getString("details") + "</td> ");
                  out.println("<td>" + rs.getString("tag") + "</td> ");
                  out.println("<td>" + rs.getString("category") + "</td> ");
```		  
### 2- Use case 2: 산업체 방문 예약
### PostProcessor
listreservation.jsp
```jsp
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
```
listServlet.java
```java
      	String name = request.getParameter("name");
    	String npeople = request.getParameter("npeople");
    	String date = request.getParameter("date");
    	String time = request.getParameter("time");
		  list llist = new list();		
		  llist.setName(name);
		  llist.setNpeople(npeople);
		  llist.setDate(date);
		  llist.setTime(time);v
```	
### ReservationDB
listDao.java
```java    
    String INSERT_USERS_SQL = "INSERT INTO list" +
	" (id, name, npeople, date, time) VALUES " +
				" (?, ?, ?, ?, ?);";
```
```java       
 			preparedStatement.setInt(1, 2);
			preparedStatement.setString(2, llist.getName());
			preparedStatement.setString(3, llist.getNpeople());
			preparedStatement.setString(4, llist.getDate());
			preparedStatement.setString(5, llist.getTime());   
```      
### 2- Use case 3: 마이페이지
### Alarm Operator
index.html
```html
<div class="modal-body">
      visit date: 6/1
      visit time: 2PM
      visit id: 2
      npeople: 1
      industry id: 3
      industry name : GS
      industry location : gstower
    </div>
```
## 3. Sequence Diagram
sequence diagram은 Use case별로 작성되었습니다. 각 use case별 sequence diagram은 다음과 같습니다.
### 3- Use case 1
![image](https://user-images.githubusercontent.com/74705447/120124821-0a5bce80-c1f1-11eb-9604-13f1e1093f4e.png)
![image](https://user-images.githubusercontent.com/74705447/120124906-79392780-c1f1-11eb-99fc-53278ae0f96a.png)
![image](https://user-images.githubusercontent.com/74705447/120124865-43943e80-c1f1-11eb-9c93-435d5ce178d8.png)
### 3- Use case 2
![image](https://user-images.githubusercontent.com/74705447/120124897-71798300-c1f1-11eb-99e5-9d0786089e66.png)
![image](https://user-images.githubusercontent.com/74705447/120124915-80f8cc00-c1f1-11eb-84c8-25f36e5f782f.png)
### 3- Use case 3
![image](https://user-images.githubusercontent.com/74705447/120124946-9a9a1380-c1f1-11eb-9209-1ef99b4380eb.png)
## 4. Class Diagram
Class diagram도 Use case별로 작성되었습니다. 각 use case별 sequence diagram은 다음과 같습니다.
### 4- Use case 1
![image](https://user-images.githubusercontent.com/74705447/120126026-dc2cbd80-c1f5-11eb-87fc-0dd7f5bb23c9.png)
### 4- Use case 2
![image](https://user-images.githubusercontent.com/74705447/120126007-d040fb80-c1f5-11eb-8b7a-f157f23bfb35.png)
### 4- Use case 3
![image](https://user-images.githubusercontent.com/74705447/120125995-c6b79380-c1f5-11eb-8f5a-6621a0cf5104.png)
## 5. 주요 기능
### 5- 1. 서비스 안내
서비스를 한 눈에 알아볼 수 있습니다.
![image](https://user-images.githubusercontent.com/74705447/120143426-10ff3b80-c21b-11eb-9e16-694af39e597b.png)
### 5- 2. 산업체 검색
산업체 검색 방식은 2가지가 있습니다.
산업체DB는 다음과 같습니다.
![image](https://user-images.githubusercontent.com/74705447/120143614-62a7c600-c21b-11eb-89bc-f4cb5bb8fc3c.png)
### 5- 2.1 태그 선택 방식
산업체 태그를 선택하면 산업체가 검색되어 산업체 정보를 볼 수 있습니다.
![image](https://user-images.githubusercontent.com/74705447/120143650-73f0d280-c21b-11eb-9bae-254b47e81da7.png)
![image](https://user-images.githubusercontent.com/74705447/120143664-7ce1a400-c21b-11eb-9c27-90722281f73f.png)
### 5- 2.2 산업체 이름 입력 방식
산업체 이름을 입력하면 산업체가 검색되어 산업체 정보를 볼 수 있습니다.
![image](https://user-images.githubusercontent.com/74705447/120143681-866b0c00-c21b-11eb-9f2b-abbfc72daf43.png)
![image](https://user-images.githubusercontent.com/74705447/120143696-8e2ab080-c21b-11eb-9c9b-5ca78ba129a2.png)
### 5- 3. 산업체 방문 예약
예약 정보를 입력하면 예약DB에 저장됩니다.
![image](https://user-images.githubusercontent.com/74705447/120143396-06dd3d00-c21b-11eb-9c0c-a68478404501.png)
![image](https://user-images.githubusercontent.com/74705447/120143304-d7c6cb80-c21a-11eb-84fb-0f28b5550f03.png)
![image](https://user-images.githubusercontent.com/74705447/120143322-e2816080-c21a-11eb-8d08-82550ce26ab7.png)
![image](https://user-images.githubusercontent.com/74705447/120143349-f0cf7c80-c21a-11eb-9a1f-84d2ed2af9bc.png)
예약DB는 다음과 같습니다.
![image](https://user-images.githubusercontent.com/74705447/120145351-51ac8400-c21e-11eb-979d-74912b1a839a.png)
### 5- 4. 산업체 방문 알림
예약 정보를 손쉽게 확인할 수 있습니다.
![image](https://user-images.githubusercontent.com/74705447/120143729-9d116300-c21b-11eb-91f0-a3c0a3483ddf.png)
![image](https://user-images.githubusercontent.com/74705447/120143743-a69acb00-c21b-11eb-91ca-cbb9b32c9750.png)
## 6. Built With
### 6- 1. 서비스 안내: services.html
### 6- 2. 산업체 검색
### 6- 2.1 태그 선택 방식: servlett.java, i.jsp
### 6- 2.2 산업체 이름 입력 방식: ir2.java, ir.jsp
### 6- 3. 산업체 방문 예약: listServlet.java, listDao.java, list.java, listdetails.jsp, listreservation.jsp
### 6- 4. 산업체 방문 알림: index.html, script.js, styles.css
## 7. Ackonwledgements
이주영: 웹 프로그래밍을 처음 해보게 되어 걱정을 많이 했는데 Java EE IDE, JSP, Apache Tomcat, JSTL, Servlet API 등 새로운 도구들을 사용해볼 수 있는 좋은 기회가 되었습니다. MySQL과 JDBC 연동은 데이터베이스설계와 데이터베이스시스템에서 배웠던 적이 있어 조금이나마 수월하게 할 수 있었고 이번 프로젝트로 더 확실하게 이해할 수 있었습니다. 웹 페이지를 직접 만들어보니 신기하고 재밌었습니다. Use case부터 차근차근 단계를 걸쳐 설계를 하고 구현을 하다보니 목적에 대해 혼란스러워 하지 않고 코드를 작성할 수 있었습니다. 최다 인원이 의견을 조율하여 프로젝트를 진행하였는데 매주 월,목 회의를 통해 원활하게 진행할 수 있었습니다. Use case, Domain Model, Diagram 작성을 어려워하던 저에게 많은 도움을 주신 민지환님께 감사드립니다. 






