FROM ubuntu
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y --no-install-recommends build-essential autoconf automake libtool zlib1g-dev libjpeg-dev libncurses-dev libssl-dev libcurl4-openssl-dev python-software-properties python-dev libexpat-dev libtiff-dev libx11-dev wget git nodejs npm ca-certificates
RUN git clone git://github.com/DuoSoftware/DVP-FSManager.git /usr/local/src/fsmanager
RUN cd /usr/local/src/fsmanager; npm install
RUN git clone -b v1.2.stable https://freeswitch.org/stash/scm/fs/freeswitch.git /usr/local/src/freeswitch
RUN cd /usr/local/src/freeswitch; ./bootstrap.sh -j
RUN cd /usr/local/src/freeswitch; ./configure --prefix=/opt/freeswitch
RUN cd /usr/local/src/freeswitch; make; make install
RUN cd /usr/local/src/freeswitch; make all cd-sounds-install cd-moh-install


