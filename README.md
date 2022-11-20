# Table of contents

- [Overview](#overview)
- [Technologies](#technologies)
- [API Reference](#api-reference)
- [Run Locally](#run-locally)
- [Demo](#demo)

# Overview

You can create post with functions like create, delete.

# Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)	
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

# API Reference

[API for this project](https://notes-card.onrender.com),
 [API github link](https://github.com/Rokiis1/card-api-server)

#### Get all posts

```http
  GET /posts
```

#### Get post

```http
  GET /posts/:postId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `postId`| `string`| **Required**. postId |

#### Create new post

```http
  POST /posts
```
#### Delete post

```http
  DELETE /posts/:postId
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `postId` | `string` | **Required**. postId |

#### Create Post card

```http
  POST /posts/:postId/cards
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `postId` | `string` | **Required**. postId |

#### Delete post card

```http
  DELETE /posts/:postId/cards/:cardId
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `postId` | `string` | **Required**. postId |
| `cardId` |  `string`|  **Required**. cardId |

# Run Locally

Clone the project

```bash
  git clone git@github.com:Rokiis1/Write-a-post.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

# Demo

[Host Link on vercel](https://poster-six.vercel.app/)
