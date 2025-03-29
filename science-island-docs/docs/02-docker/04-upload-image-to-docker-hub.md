---
sidebar_position: 4
---

# Upload Image to Docker Hub

Pushing your image to Docker Hub means that it can be downloaded by anyone very easily.

## Login

Log into Docker Hub in the command line with `docker login`.

```bash
$ docker login
Login in with your Docker ID to push and pull images from Docker Hub. If you do not have a Docker ID, head over to https://hub.docker.com to create one.
Username: yourusername
Password:
WARNING! Your password will be stored unencrypted in /Users/yourusername/.docker/config.json
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/credential-store

Login Succeeded
```

## Push

To publish your Image, use the `docker push` command. The client reads *username/image_name*, so make sure you match that format.

```bash
$ docker push matthewcross97/first-image:v1
```

That's it. Refer back to [Deploy Existing Image Locally](02-deploy-existing-image-locally.md) to get it running anywhere.