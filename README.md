# Books App

This is a Books App built with the following stack:

- TypeScript
- Next.js
- Redux Toolkit (RTK)
- Tailwind CSS

## Getting Started

### Prerequisites

- Docker
- pnpm

### Building the Docker Image

To build the Docker image for the Books App, navigate to the root directory of your project and run the following command:

```sh
docker build -t my-nextjs-app .
```

### Starting the Docker Container

To start the Docker container for the Books App, navigate to the root directory of your project and run the following command:

```sh
docker run --env-file .env.local -p 3000:3000 my-nextjs-app
```
