# Bcryptjs-Hasher

Simple website that hashes and compares strings using bcryptjs library. Made to learn Fastify.

## How to Run?

-   [Fork this Repo](https://github.com/kunalkeshan/bcryptjs-hasher).
-   Clone it.
-   Install all dependencies in the Root and in the Client directory.
-   `npm run build` in Client directory.
-   `npm start` in the Root directory.

## Application

### Backend Services

`POST /api/hash`

> Request Data: {string (required), rounds, salt}

> Response Data: {hashed, string, rounds, salt}


`POST /api/compare`

> Request Data: {string (required), hashed (required)}

> Response Data: {hashed, string, matched}

### React App Pages

#### Home - Desktop

![Bcryptjs-Hasher Home Page in Desktop](./public/home-desktop.jpg)

#### Not Found - Desktop

![Bcryptjs-Hasher Not Found Page in Desktop](./public/not-found-desktop.jpg)

#### Mobile View

| Home | Not Found |
| --- | --- |
| ![Bcryptjs-Hasher Home Page in Mobile](./public/home-phone.jpg) | ![Bcryptjs-Hasher Not Found Page in Mobile](./public/not-found-phone.jpg) |
