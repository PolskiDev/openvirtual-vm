# UBUNTU:
# make install-docker-ubuntu all clean

# RED-HAT:
# make install-docker-redhat all clean



# ENV VARIABLES
NPM=npm install --save-dev
TSC=npx tsc
PKG=npx pkg
VM=openvirtual

APT=apt install -y
YUM=yum install -y


# Compile & build
all:
	$(NPM) typescript @types/node pkg
	$(TSC) src/*.ts
	$(PKG) src/$(VM).js -o $(VM)
clean:
	rm -Rf src/*.js



# Install Docker First
install-docker-ubuntu:
	$(APT) docker.io nodejs npm

install-docker-redhat:
	$(YUM) yum-utils nodejs npm
	yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
	$(YUM) docker-ce docker-ce-cli containerd.io docker-compose-plugin


