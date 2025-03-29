---
sidebar_position: 3
---

# Deploy Custom Image Locally

In most cases, we want to deploy our app in a container, not someone elses. This page gives you an overview of how to turn a simple local project into an Image that you can Containerize.


## Create a New React App

Navigate to a temporary local directory, and paste in the following command to create and run a boilerplate React app. Note that this will take a minute.

```bash
$ npx create-react-app first-image && cd first-image && npm start
```

You can view the app at [http://localhost:3000/](http://localhost:3000/) to make sure it was set up correctly. The link should open automatically when `npm start` is run.

Once you confirm that the app is set up correctly, stop it by terminating the batch job via the terminal `ctrl + c`.


## Create a Dockerfile

A `Dockerfile` is simply a text file that contains a list of commands that a Docker client calls when creating an Image. Create a file called `Dockerfile` in the `first-image` dir and add the following content. The table below explains the relevance of each line in the Dockerfile.

```Dockerfile
# Use official Node.js image as base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the production build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
```

| Line                    | What it does                                                           |
| ----------------------- | ---------------------------------------------------------------------- |
| `FROM node:18-alpine`   | `FROM` tells us the base image for the Container. A *Base Image* is typically the OS or ... that the Container runs on. In this case, we are using the official Node.js 18 Alpine image. |
| `WORKDIR /app`          | Sets `/app` as the working directory inside the container. All subsequent commands run in this directory. |
| `COPY package*.json ./` | Copies `package.json` and `package-lock.json` to the container first for efficient dependency caching. |
| `RUN npm install`       | Installs the project dependencies inside the container. |
| `COPY . .`              | Copies the entire project (except ignored files from `.dockerignore`) into the container. |
| `RUN npm run build`     | Builds the React app, creating static files in `/app/build`. |
| `FROM nginx:alpine`     | Uses Nginx Alpine as the second stage of the multi-stage build to serve the React app efficiently. |
| `COPY --from=0 /app/build /usr/share/nginx/html` | Copies the `build` folder from the first stage (`node:18-alpine`) into Nginx's web directory. |
| `EXPOSE 80`                                      | Documents that the container listens on port 80 (but does not actually bind it). |
| `CMD ["nginx", "-g", "daemon off;"]`             | Runs Nginx in the foreground to serve the React app. |


## Create a .dockerignore file

The `.dockerignore` files prevents unnecessary files form being copied into the container.

For our basic application, create the `.dockerignore` file in the `first-image` fir and add the following content.

```.dockerignore
node_modules
build
dist
npm-debug.log
Dockerfile
.dockerignore
```


## Build the Image

Now we are ready to build the Image! Enter the following command, making sure to substitute `matthewcross97` for your Docker username. The below table explains what each part of the command does.

```bash
$ docker build -t matthewcross97/first-image:v1 .
```

| Line                            | What it does                                                   |
| ------------------------------- | -------------------------------------------------------------- |
| `docker build`                  | Tells Docker to build an image from the Dockerfile in the specified directory. |
| `-t matthewcross97/first-image` | The -t flag assigns a name (and optionally a username/repository) to the image. matthewcross97/first-image is the image name, with matthewcross97 being the Docker Hub username or organization. |
| `:v1`                           | The tag for the image (e.g., v1 for version 1). This allows you to manage versions of the image. |
| `.`                             | Specifies the build context (current directory). It tells Docker to look for the Dockerfile and files in the current directory to include in the image. |


## Run the Image

The final step is to test it to see if it works. We can do that with the following command. Again, remember to substitute the organization name with your own.

```bash
$ docker run -d -p 3000:80 --name first-image matthewcross97/first-image:v1
```

You should be able to view the container at [http://localhost:3000/](http://localhost:3000/) if you've used the same port as the example.