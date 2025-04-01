---
sidebar_position: 2
---

# Branching

Commits submitted within the project must adhere to the following message format:

```sh
[type]: subject
[line break]
body (optional)
```

## Type (lowercase, required)

- feat: Add or remove functionality
- fix: Fix bugs from prior commits
- refactor: Restructure or rewrite code
- style: Code styling/formatting (e.g. white-space, missing semicolons)
- test: Add or update tests
- docs: Documentation changes
- build: Affect build components (e.g. CI pipeline, project dependencies)
- misc: Other changes not covered above

## Subject (required):

- Use lowercase and imperative mood (e.g. "fix login timeout issue")
- Keep it 50–75 characters max, without ending punctuation

## Body (optional):

- Explain what the change is and why it was made (not how)
- Wrap text at 75 characters per line