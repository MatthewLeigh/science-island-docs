---
sidebar_position: 2
---

# Start

## Build

To build your project with the latest version of the images, navigate to root file which contains the `docker-compose.yml` file and run the following command to build the project.


```sh
$ docker compose build --pull --no-cache
```

| Flag | Description |
|----- | ----------- |
| `--pull` | Forces Docker to pull the latest base images from the registry before building, ensuring you are using the most up-to-date dependencies. |
| `--no-cache` | Prevents Docker from using cached layers, forcing a full rebuild of the image. This ensures that all dependencies and build steps are executed from scratch. |

> `--pull` and `--no-cache` are both optional flags. I would only recommend using them if you are actively changing the image and want to test it fresh.

## Run

Once built, you can run the project with the following command.

```sh
$ docker compose up -d
```

> `-d` detached mode is optional.
