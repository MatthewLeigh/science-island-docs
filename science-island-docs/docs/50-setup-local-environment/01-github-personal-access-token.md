---
sidebar_position: 1
---

# GitHub Personal Access Token

The first step to getting the environment set up locally to to register a Personal Access Token (PAT) on your machine.

A PAT is a token-based authentication mechanism used by GitHub to grant access to repositories and packages, including those hosted on the GitHub Container Registry (GHCR). It acts as an alternative to using a password when interacting with GitHub's services via the command line, APIs, and tools like Docker.

When working with GitHub Container Registry (GHCR), **a PAT is required for authentication to pull or push Container Images**. By using a PAT, GitHub ensures that only authorized users can access or modify sensitive images and data, making the interaction more secure than using basic authentication with just a password.

---

## How to Get a Personal Access Token (PAT)

1. Navigation to the [Personal Access Tokens](https://github.com/settings/tokens) Settings page in your GitHub.
2. Click `Generate new token (classic)`.
3. Write a short note to remember what the token is for (E.g., si-authentication).
4. Set an expiration period (just set 30 days if unsure. No Expiration can be too dangerous to use for now).
5. Under the `Select scopes` section, set the following:
   - `read:packages` : Required to pull Docker images form GHCR.
   - `write:packages` : Required to push Docker images. (optional).
   - `delete:packages` : Required to delete images. (optional).
6. Click `Generate token`.
7. Copy the generated token immediately. You won't be able to see it again once you leave this page.

---

## Login with the Token

Once you have the PAT, you can use it to log into the GitHub COntainer Registry to pull or push images. in a terminal, enter the following.

> Remember that you can't see your PAT again, so make sure to paste it somewhere **secure** and **temporary** first if you are going to copy the following command.

```bash
$ docker login ghcr.io -u YOUR_GITHUB_USERNAME # Replace with your username.

i Info → A Personal Access Token (PAT) can be used instead.
         To create a PAT, visit https://app.docker.com/settings


Password:
```

When you are prompted for your password, paste in the PAT and press enter. (Note that it will be invisible when pasted.)

---

## Security Considerations

- Do not share your PAT with anyone, as it grants access to your GitHub repositories and container images.
- Only give the necessary scope to each PAT. Having a 'God Token' with permission to do everything is just asking for problems.
- Store your PAT securely when you need to save it (e.g., in environment variables, Docker secrets, or password managers).
- If your PAT becomes compromised, immediately revoke it from the GitHub settings page.
