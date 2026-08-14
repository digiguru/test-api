# Interview Curiosity API

A small API exercise originally created for AND Digital technical interviews.

The exercise is intentionally simple and lightly specified. Its purpose is not to test knowledge of Next.js or a particular programming language; it gives a candidate a small unfamiliar API and lets the interviewer observe how they explore it, form hypotheses, ask questions, handle ambiguity and adapt their solution.

## How the exercise works

Candidates are given the running application and may explore it before the interview begins. During the exercise they are asked to consume data from the API using any language or development environment they choose, then make further changes under interview conditions.

The API data is deterministic and deliberately small. There is no database, authentication or external service involved, so the conversation can stay focused on the candidate's approach rather than infrastructure.

The application also exposes generated OpenAPI/Swagger documentation at `/doc`.

## Interview intent

This repository is designed to help observe behaviours such as:

- curiosity when presented with incomplete information
- willingness to explore before immediately coding
- making and validating assumptions
- communicating what has been discovered
- handling API responses and errors sensibly
- adapting an existing solution when requirements change

It is not intended to be a production API or a broad assessment of framework knowledge.

## Project structure

- `pages/index.js` – candidate-facing exercise introduction
- `pages/api/index.js` – root API route
- `pages/api/[id].js` – parameterised exercise endpoint
- `pages/doc.js` – generated Swagger/OpenAPI UI

## Local development

Requirements: a current Node.js release and npm.

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

## Useful commands

```bash
npm run dev
npm run lint
npm run build
npm start
```

There is currently no automated test suite; validation is linting plus a production Next.js build.

## Maintenance note

Keep the candidate-facing experience deliberately concise. Avoid documenting the interpretation of the API data on the landing page: discovering and reasoning about the unfamiliar API is part of the exercise.
