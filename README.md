# Kurocado Studio Developer Experience

This repository hosts **Developer Experience (DevEx)** tools, libraries, and workflows for
[Kurocado Studio](https://www.kurocado.studio). Core offerings include:

- **Axios Wrappers** for simplified API interactions
- **Reusable React Hooks** for common tasks
- **Streamlined Form-Handling Libraries** to reduce boilerplate

By centralizing these resources, we help both internal teams and external partners quickly build
reliable, consistent applications.

## Documentation

For a comprehensive overview of goals, use cases, and success criteria, see the
[Dev Experience Overview](https://kurocado-studio.github.io/dev-experience) (adjust link if
necessary).

## Prerequisites

- **Node.js v20 or higher**  
  [Download Node.js](https://nodejs.org/)

- **PNPM**  
  [PNPM Installation Guide](https://pnpm.io/installation)  
  You can install PNPM globally with:
  ```bash
  npm install -g pnpm
  ```

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Kurocado-Studio/dev-experience.git
   cd dev-experience
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Initial setup**:
   ```bash
   pnpm run setup
   ```
   This command will install required packages and run any initial configuration scripts.

## Local Development

This monorepo may contain multiple packages (e.g., `packages/hooks`, `packages/axios-wrapper`).
Below are common commands—adjust them as needed:

- **Run Linting**:

  ```bash
  pnpm run lint
  ```

- **Run Tests**:

  ```bash
  pnpm run test
  ```

- **Build Packages**:
  ```bash
  pnpm run build
  ```
