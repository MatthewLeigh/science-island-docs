---
sidebar_position: 1
---

# The Basics

You can get an application up and running on your computer. Great! But what happens when you need to run it on another machine — maybe a server, a teammate’s laptop, or a cloud environment? You could use a virtual machine (VM), which emulates an entire operating system, but VMs are bulky, slow to start, and consume a lot of resources. This is where Docker comes in. Instead of virtualizing an entire OS, Docker containers share the host system’s kernel while keeping applications and their dependencies isolated. This makes containers lightweight, fast to start, and highly portable, ensuring your application runs the same way everywhere — without the overhead of traditional VMs.


## Getting Started

Before we do anything else, we need to install Docker locally. You can check if it's installed already by running the following command.

```bash
docker --version
```

If you need to install it, the easiest way to the go to the [Docker Website](https://www.docker.com/get-started/), click `Download Docker Desktop`, and select the appropriate download for your OS. Follow the steps it gives you, making sure to create an account when prompted.

You can test that everything is working correctly by running the following command.

```bash
$ docker run hello-world

Hello from Docker.
This message shows that your installation appears to be working correctly.
...
```

## Getting Started Next Time

When you return to Docker after shutting down your computer, you may get hit with an error like this one.

```bash
error during connect: Get "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/v1.48/containers/json?all=1": open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified.
```

When that happens, the easiest fix is to simply open the `Docker Desktop` app manually.


## Terminology

The following are some key concepts for working with Docker.

| Term         | Definition                                                                                     |
|--------------|-------------------------------------------------------------------------------------------------|
| Image        | A lightweight, standalone, and executable software package that includes everything needed to run a piece of software, including the code, runtime, libraries, and dependencies. It can help to think of an Image as a GitHub Repo for now. |
| Container    | A runtime instance of a Docker image. It is a lightweight, standalone, and secure environment for running applications. |
| Dockerfile   | A text document that contains all the commands to assemble a Docker image.                      |
| Registry     | A storage and distribution system for Docker images, such as Docker Hub.                        |
| Volume       | A mechanism for persisting data generated and used by Docker containers.                        |
| Network      | A way to allow containers to communicate with each other or with external systems.              |


## Basic Commands

The best introduction to Docker is through an example. In this case, we will use the `Busybox` image to run through some basic commands.


### docker pull

To get started, run the `pull` command in the terminal.

```bash
$ docker pull busybox
```

This step is optional. If Docker is unable to find an image locally, it will automatically attempt to pull it for the `Docker Registry` if you call `docker run <image-name>` later.


### docker images
The `pull` command fetches the Busybox `image` from the `Docker registry` and saves it to your system. To view all the images on your system, use the `docker images` command.

```bash
$ docker images
REPOSITORY              TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
busybox                 latest              c51f86c28340        4 weeks ago         1.109 MB
```


### docker run

Once images are saved to the system, we use the `docker run` command to run them.

```bash
$ docker run busybox`
```
In this case, nothing happens (at least we don't see anything happen). In the background, the Docker client:

- Found the Busybox image,
- Loaded the container, and
- Ran a command in the container (we just didn't provide it with a command).

If we try that again, but give it a command this time, we will see it do something.

```bash
$ docker run busybox echo "cool, fun & engaging"
cool, fun & engaging
```


### docker run (multiple commands)

We often want to be able to do more than just give the container a single command to run. We can do this by stringing a few things together in the command line:

- `-i` : The *interactive* flag keep's the container's standard input open, allowing you to interact with it.
- `-t` : The *TTY* flag allocates a pseudo-terminal, making the container behave like a real terminal sessions.
- `sh` : Specifies the the *Bounre Shell* should run inside the container, essentially turning it into a simple Unix-based shell.

```bash
$ docker run -it busybox sh
/# echo "cool"
cool
/# echo "fun"
fun
/# echo "engaging"
engaging
/# exit
```

> Type `exit` to finish entering commands.


### docker ps

The `docker ps` command shows all of your currently running containers.

```bash
$ docker ps
```

Currently, there are no running container, so that command will, again, return nothing. Let's try it with the `-a` (all) flag added, so we can see container that have been exited as well.

```bash
$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                          PORTS     NAMES
e3e76a2cee84   busybox   "sh"                     2 minutes ago   Exited (0) About a minute ago             stupefied_swartz
1e71948a071c   busybox   "echo 'cool, fun & e…"   8 minutes ago   Exited (0) 8 minutes ago                  elegant_benz
```


### docker rm

Even after they've exited, containers that remain on your system can take up precious memory. It is good practice to delete them when you are don't with them.

To delete individual containers, use the `docker rm <CONTAINER ID>` or `docker fm <NAMES>` command on the ID's you identify from `docker ps -a`.

```bash
$ docker rm e3e76a2cee84
e3e76a2cee84
```

```bash
$ docker rm elegant_benz
elegant_benz
```

This method will echo back the ID's of the container that have been successfully deleted.


### docker container prune

Alternatively, you can use `docker container prune` to delete all stopped / exited containers on your system.

```bash
$ docker container prune
WARNING! This will remove all stopped containers.
Are you sure you want to continue? [y/N] y
Deleted Containers:
1e71948a071ce3209115c34d75064626ff5c6bab2197be5a42afcbdaf00e0b60

Total reclaimed space: 4.096kB
```


### docker run --rm

When you set the `--rm` flag after `docker run`, the container is automatically deleted once it is stopped / exited.

```bash
$ docker run --rm  -it busybox sh
```