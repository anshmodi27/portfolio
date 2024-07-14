# Next.js Portfolio Project

Welcome to the repository for my Next.js portfolio project! This project showcases my skills and projects using Next.js, integrated with Sanity CMS for content management and GitHub for displaying my contribution graph.

## 🚀 Getting Started

To get this project up and running on your local machine, follow these steps.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm (comes with Node.js)

### Environment Variables

You'll need to set up some environment variables in your `.env.local` file. Here's what you need:

```makefile
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=2023-07-21
NEXT_PUBLIC_SANITY_ACCESS_TOKEN=
NEXT_PUBLIC_SANITY_HOOK_SECRET=

# GitHub Contribution Graph Details
NEXT_PUBLIC_GITHUB_USERNAME="your-github-username"
NEXT_PUBLIC_GITHUB_JOIN_YEAR="year-you-joined-github"

Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID: Your Sanity CMS project ID.
NEXT_PUBLIC_SANITY_DATASET: The dataset name within your Sanity project.
NEXT_PUBLIC_SANITY_API_VERSION: The version of the Sanity API you are using.
NEXT_PUBLIC_SANITY_ACCESS_TOKEN: Access token for authentication with Sanity API.
NEXT_PUBLIC_SANITY_HOOK_SECRET: Secret key for webhooks or other integrations with Sanity.
GitHub Contribution Graph Details
NEXT_PUBLIC_GITHUB_USERNAME: Your GitHub username.
NEXT_PUBLIC_GITHUB_JOIN_YEAR: The year you joined GitHub.
```
🔑 Important: Replace placeholders like "your-github-username" and "year-you-joined-github" with your actual GitHub username and join year.

Installation
To install the necessary packages and run the project, execute the following commands in your terminal:

```
npm install
npm run
```
Viewing the Project
Open http://localhost:3000 in your browser to see your application in action.

📚 Further Customization
Feel free to expand this template with more details specific to your project or additional setup instructions as needed. This project is designed to be a starting point for showcasing your work in a professional and engaging manner.

Happy coding! 🎉