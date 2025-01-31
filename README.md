# Hng12-task(0) -Simple_Api

## Description

A simple API for Hng internship task(0). The Api returns the user's registered email, current datetime in ISO 8601 format, and the GitHub repository URL.

## Technologies

- Node.js
- Express
- Javascript
- Vercel deployment

## Setup

### Prerequisites

- Node.js (v16+ recommended)
- npm

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Blessingde/hng12-public_api.git
```

2. Navigate to the project directory:

```bash
cd hng12-public_api
```

3. Install dependencies:

```bash
npm install
```

4. Run the project locally:

```bash
npm run dev
```

## API Documentation

### Endpoint: `/`

#### Request Type:

- `GET`

#### Response Format:

```json
{
  "email": "blessingisreal481@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Blessingde/hng12-public_api.git"
}
```

## Deployment

This API is deployed on Vercel,

**Live URL:** [url]()

### Example Usage

```bash
curl -X POST https://api.yourproject.com/v1/endpoint \
-H "Content-Type: application/json" \
-d '{"key1": "value1", "key2": "value2"}'
```

## Related Links

- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
