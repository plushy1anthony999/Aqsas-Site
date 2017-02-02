FROM ubuntu:latest
RUN apt-get -y update && apt-get install -y python3 python3-pip apache2 && pip3 install virtualenvwrapper && mkvirtualenv django-app-env && pip3 install django
CMD /bin/bash
