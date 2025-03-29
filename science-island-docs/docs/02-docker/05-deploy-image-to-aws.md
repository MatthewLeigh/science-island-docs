---
sidebar_position: 5
---

# Deploy Image to AWS

**INCOMPLETE DOC. NOT SURE HOW TO DO THIS PROPERLY YET.**

This document goes over setting up a single Container in `AWS Elastic Beanstalk (EB)`. For now, the document uses the [AWS Console](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fap-southeast-2.console.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26nc2%3Dh_ct%26region%3Dap-southeast-2%26src%3Dheader-signin%26state%3DhashArgsFromTB_ap-southeast-2_305d027d876d9639&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=bXoW3ZA_TLE7S9jyRm0Mrz5L7txpyxoWjkAiERknbaU&code_challenge_method=SHA-256)


## Dockerrun.aws.json

When we configure the EB environment later, we are going to upload a file telling AWS everything it needs to know about the Docker Image. As it turns out, it doesn't actually need to know that much. In your `first-image` folder create a file called `Dockerrun.aws.json` and paste in the following - remembering to change the name to your own.

```json
{
    "AWSEBDockerrunVersion": "1",
    "Image": {
        "Name": "matthewcross97/first-image:v1",
        "Update": "true"
    },
    "Ports": [
        {
            "ContainerPort": 80,
            "HostPort": 3000
        }
    ],
    "Logging": "/var/log/nginx"
}
```

## Elastic Beanstalk Instance

Follow these steps to launch the EB instance:

- Log into AWS
- Click `Elastic Beanstalk`
- Click `Create Application`
- Under `Configure environment`
  - Under `Application information`, Enter `Application Name` (Doesn't matter what you call it.)
  - Under `Platform`, Set `Platform` to `Docker`
  - Under `Application Code`, Set `Version label` to `test`, Select `Upload you code`, Select `Local file`, Upload your `Dockerrun.aws.json` file.
  - Click `Next`
- Under `Configure service access`
  - Select a role with `AWSElasticBeanstalkWebTier` and `AWSElasticBeanstalkWorkerTier` permissions. (You may need to create the role in IAM separately.)
  - Click `Next`
- Click `Skip to review`
- Click `Submit`
- Wait for the instance to be ready - this may take a few minutes.
- Open the URL that AWS provides to see the Image.

### Terminate the EB Instance

Make sure you terminate the EB Instance if you don't need it anymore. To do this:

-