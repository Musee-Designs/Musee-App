# Musee

A social music-sharing mobile app that lets users share songs with friends, 
discover what their circle is listening to, and connect through daily music prompts.

## Tech Stack

- **Frontend:** React Native, Expo, TypeScript
- **Backend:** Firebase Authentication, Cloud Firestore
- **Music Integration:** Spotify Web API
- **Project Management:** GitHub Projects

## Getting Started

### 1. Prerequisites

Before getting started, install:

- [Expo Go](https://expo.dev/go) on your phone

### 2. Clone the repository

Open your terminal and run:

```bash
git clone https://github.com/Musee-Designs/Musee-App.git
cd Musee-App
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a local environment file:

```bash
cp .env.example .env
```

Ask the team lead for the development Firebase configuration and fill in the required values.

Never commit your `.env` file to GitHub.

### 5. Start Expo

```bash
npx expo start
```

### 6. Run Musee on your phone

1. Make sure your phone and computer are connected to the same Wi-Fi network.
2. Using your phone, scan the QR code displayed in your terminal.
3. Wait for Musee to load on the Expo Go app.

If your phone cannot connect, make sure you're logged in:

```bash
npx expo login
```

## Project Structure

```text
Musee-App/
├── assets/             # Images, fonts, and other assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # Application screens
│   ├── services/       # Firebase and Spotify integrations
│   ├── types/          # TypeScript interfaces
│   ├── constants/      # Shared constants and theme
│   └── utils/          # Helper functions
├── App.tsx             # Application entry component
├── .env.example        # Required environment variables
├── app.json            # Expo configuration
└── package.json        # Dependencies and scripts
```

Structure will be updated as the project evolves.

## Development Workflow

We use GitHub Issues and GitHub Projects to manage development.

1. Choose or get assigned an issue from the Sprint Board.
2. Pull the latest changes from `main`.
3. Create a new branch for your issue.
4. Make your changes and test them locally.
5. Commit and push your branch.
6. Open a pull request targeting `main`.
7. Request a review before merging.

### Branch Naming

Use lowercase names with hyphens:

- `feature/login-screen`
- `feature/spotify-search`
- `fix/navigation-error`
- `docs/add-name`

Do not push directly to `main`.

### Commit Messages

Write short, descriptive commit messages:

- `feat: add login screen`
- `fix: resolve navigation error`
- `docs: update setup instructions`

## Project Management

Track tasks and progress on our
[Musee Development Board](https://github.com/orgs/Musee-Designs/projects/1).

Our Sprint Board has three columns:

- **Todo:** Tasks ready to be started.
- **In Progress:** Tasks currently being worked on.
- **Done:** Completed tasks.

Update your assigned issues as you work.

## Meet the Team

| Name | Role |
|------|------|
| Ivette Saldana Hernandez | Design Team Lead |
| Your Name | Developer |
| Rishika Joshi | Developer |
| Your Name | Developer |
| Your Name | Developer |
