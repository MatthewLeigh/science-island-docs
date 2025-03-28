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

If you need to install it, the easiest way to the go to the (Docker Website)[https://www.docker.com/get-started/], click `Download Docker Desktop`, and select the appropriate download for your OS. Follow the steps it gives you, making sure to create an account when prompted.

You can test that everything is working correctly by running the following command.

```bash
docker run hello-world
```

## Some Basic Commands

