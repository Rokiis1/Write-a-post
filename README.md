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

[API for this project](https://notes-card.onrender.com)

#### Get home page videos

```http
  GET /search?maxResults=20&q=""&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `isNext`  | `string` | **Required**. isNext  |
| `pageToken` | `boolean`| **Required**. next Page Token |

#### Get recommended videos 

```http
  GET /activities?key=${API_KEY}&channelId=${channelId}&part=snippet,
  contentDetails&maxResults=20&type=video&videoId=${videoId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `channelId`| `number`| **Required**. channelId |
| `videoId`| `string`  | **Required**. videoId |

#### Get search page videos

```http
  GET videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `id`| `string`| **Required**. id |

#### Get channel

```http
  GET /channels?part=snippet,statistics&id=${item.snippet.channelId}&key=${API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `channelId`| `string`| **Required**. channelId |

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
