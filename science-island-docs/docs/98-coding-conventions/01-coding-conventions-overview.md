---
sidebar_position: 1
---

# Coding Conventions Overview

Science Island has been worked on by numerous teams throughout its existence. As such, the codebase doesn’t exactly follow a general set of programming standards or conventions. Some of the software’s repositories utilize the tools “Lint” and “Prettier” to enforce standards and formatting to the code within said repositories, which the team will be expected to make use of. Otherwise, the coding guidelines that will be used by the team are as follows:

- **Keep the Code Modular:** Break the code into smaller, reusable components or functions to enhance maintainability and readability.
- **Keep the Code Simple:** Avoid complexity. Strive for clear, straightforward solutions to problems, making the code easier to understand and modify.
- **Add Code Comments Where Necessary:** Include comments to explain complex or non-intuitive parts of the code. This helps others understand the purpose and logic behind your code.

Additionally, the security best practices that will be used by the team are as follows:

- **Principle of Least Privilege (PoLP):** Grant only the minimum permissions necessary for a function, module, or user to perform its task.
- **Avoid Hardcoded Secrets:** Never store API keys, passwords, or credentials in code.
- **Validate Input:** Always sanitize and validate user input to prevent security vulnerabilities (e.g., SQL injection).
- **Secure Data Handling:** Encrypt sensitive data at rest and in transit using industry-standard encryption methods.
