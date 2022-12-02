
http://localhost:8888/account-service/development

http://localhost:8080/getMessage

force refresh properties on target service
send a post request to http://localhost:8080/actuator/refresh   

open gitbash
curl --location --request POST 'http://localhost:8080/actuator/refresh'


spring.profiles.active=prod

 

java -jar target\account-service-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod


