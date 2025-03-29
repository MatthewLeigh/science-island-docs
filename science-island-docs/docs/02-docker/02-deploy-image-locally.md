---
sidebar_position: 2
---

# Deploy Existing Image Locally

Before learning how to deploy an Image to a server, it is useful to look at how to deploy one within a local Container.


## Deploy Container

The easiest way to do this is to break down a single command, to see what is doing what.

Start by running this command:

```bash
$ docker run -d -p 8080:8080 -p 8081:8081 --name hello-world testcontainers/helloworld
```

Then open [http://localhost:8080/](http://localhost:8080/) or [http://localhost:8081/](http://localhost:8081/) to see the image.

Here's a quick breakdown of what everything does:

| Part             | Meaning                                                                                         |
|------------------|-------------------------------------------------------------------------------------------------|
| `docker run`     | Start a new container from an image. |
| `-d`             | Runs the container in *detach mode*. This means that is runs in the background, without being tied to the terminal where you run the command. |
| `-p 8080:8080`   | Maps port 8080 on the host to port 8080 in the container (host:container) |
| `-p 8081:8081`   | Shows that you can have multiple ports mapped for the container. This is useful for allowing external access to service running inside the container. |
| `--name hello-world`        | Assigns a custom name to the container (i.e., hello-world). This simplifies container management and later commands, as without it Docker will generate a random name for the container (e.g., wonderful_design) |
| `testcontainers/helloworld` | The name of the Docker image being used. If the image isn't available locally, Docker will attempt to pull it from Docker Hub. |


## Check Ports

If you don't define any ports, Docker will pick them randomly. Additionally, you might simply forget which ports you have running for a particular container. In either case, to check with ports the Container is running on, you can run int `docker port <name>` command.

```bash
$ docker port hello-world
8080/tcp -> 0.0.0.0:8080
8081/tcp -> 0.0.0.0:8081
```


## Stop a Container

To stop a non-detached container, simply hit `ctrl c` or exit the terminal.

To stop a detached container, run the `docker stop <name>` command.

```bash
$ docker stop hello-world
hello-world
```
