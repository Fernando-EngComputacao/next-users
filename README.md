# NextJS Challenge

This challenge is designed to test your skills in building a User CRUD (Create, Read, Update, Delete) application using Next.js. You will use various technologies and libraries to implement this application, as outlined below.

## Prerequisites

- Docker
- docker-compose

## Challenge Description

Create a User CRUD application with the following capabilities:

1. **Create User**: Users should be able to create new user, providing details like name, email.

2. **List User**: Users should be able to view a list of all existing users.

3. **Edit User**: Users should have the ability to edit and update user information, only name and position.

4. **Search User**: Implement a search functionality on the home page to allow users to search for specific users based on their name or other criteria.

## Stack

To complete this challenge, its mandatory use the following technologies and libraries:

- **Next.js**: Next.js will be the framework for building the web application.

- **React Query**: Use React Query for efficient data fetching and state management.

- **Mutations**: Implement mutations to handle user creation and updates using React Query's mutation functionality.

- **Saas-UI**: Consider using Saas-UI for styling and theming your application.

- **Chakra UI**: Utilize Chakra UI for creating the user interface components and design.

- **API (Prisma)**: Build the backend API for this application using Prisma, a modern database ORM.

## Getting started

To get started with this challenge, follow these steps:

Clone this repository to your local development environment.

Install the required dependencies by running:

```bash
make bootstrap
make update
make start
```

Now you have all the full stack running, to get an overview of all the running services do:

```bash
pm2 ls
```

## Overview of public facing services

| Hostname | Port | Service | Technology |
| ------ | ---- | ------- | ---------- |
| localhost | `4444` | `app` | Next.js |

> Please keep in mind that Traefik is operational, allowing you to access the web application through the URL dev.opticaspaco.pt

## Evaluation Criteria

Your solution will be evaluated based on the following criteria:

1. Functionality:

> Does the application meet the required user CRUD functionality?

2. Code Quality:

> Is the code well-structured, organized, and easy to read?

3. Use of Technologies:

> Have you effectively utilized React Query, Prisma, Saas-UI, and Chakra UI as specified in the challenge?

4. User Interface:

>Is the user interface user-friendly and responsive?
