FROM images.opencadc.org/library/cadc-tomcat:1

COPY build/libs/science-portal.war /usr/share/tomcat/webapps/
