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
![image](https://user-images.githubusercontent.com/74705447/120143426-10ff3b80-c21b-11eb-9e16-694af39e597b.png)
### 5- 2. 산업체 검색
![image](https://user-images.githubusercontent.com/74705447/120143614-62a7c600-c21b-11eb-89bc-f4cb5bb8fc3c.png)
### 5- 2.1 태그 선택 방식
![image](https://user-images.githubusercontent.com/74705447/120143650-73f0d280-c21b-11eb-9bae-254b47e81da7.png)
![image](https://user-images.githubusercontent.com/74705447/120143664-7ce1a400-c21b-11eb-9c27-90722281f73f.png)

### 5- 2.2 산업체 이름 입력 방식
![image](https://user-images.githubusercontent.com/74705447/120143681-866b0c00-c21b-11eb-9f2b-abbfc72daf43.png)
![image](https://user-images.githubusercontent.com/74705447/120143696-8e2ab080-c21b-11eb-9c9b-5ca78ba129a2.png)

### 5- 3. 산업체 방문 예약
![image](https://user-images.githubusercontent.com/74705447/120143396-06dd3d00-c21b-11eb-9c0c-a68478404501.png)
![image](https://user-images.githubusercontent.com/74705447/120143304-d7c6cb80-c21a-11eb-84fb-0f28b5550f03.png)
![image](https://user-images.githubusercontent.com/74705447/120143322-e2816080-c21a-11eb-8d08-82550ce26ab7.png)
![image](https://user-images.githubusercontent.com/74705447/120143349-f0cf7c80-c21a-11eb-9a1f-84d2ed2af9bc.png)
### 5- 4. 산업체 방문 알림
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









