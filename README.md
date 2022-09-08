## OpenVirtual - Web Containers Linux Virtualization

OpenVirtual is an utilitary to download and run Linux Virtual Machines on your local or remote server from the browser through Docker Container Infrastructure.

First, compile OpenVirtual from source-code then begin downloading your Linux distribution image using

```./openvirtual --help```

```./openvirtual --new <linux_distribuiton>```

```./openvirtual --run <linux_distribution>```


Available Linux distros:
```
(XFCE)
ubuntu-xfce
fedora-xfce
arch-xfce

(KDE)
alpine-kde
ubuntu-kde
fedora-kde
arch-kde

(Mate)
alpine-mate
ubuntu-mate
fedora-mate
arch-mate

(i3)
alpine-i3
ubuntu-i3
fedora-i3
arch-i3

(OpenBox)
alpine-openbox
ubuntu-openbox
fedora-openbox
arch-openbox

(IceWm)
alpine-icewm
ubuntu-icewm
fedora-icewm
arch-icewm
```

### Compiling from sources
_Install these dependencies before compiling OpenVirtual_
 - Node.js
 - NPM
 - GNU Make
 - Docker - Containers Infrastructure
 
 
Compile from sources on Ubuntu:
```
$> sudo make install-docker-ubuntu
$> make
```

Compile from sources Fedora/RedHat (CentOS):
```
$> sudo make install-docker-redhat
$> make
```

__Credits:__
OpenVirtual by Gabriel Margarido  
WebTops by: linuxserver.io