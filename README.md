# Dual-Language Scroller

A web application that displays bilingual text content side-by-side with synchronized scrolling. This application serves as a reading tool for comparing text in two languages.

## Technology Stack

- **Backend**: Python 3.11+ with Flask
- **Frontend**: Vue.js 3 with TypeScript and Vite
- **Type Checking**: mypy (Python), TypeScript (Vue)
- **Testing**: pytest (Python), Vitest (Vue), Playwright (visual)
- **Environment Management**: pyenv (Python), nvm (Node.js)

## System Requirements

Before you begin, ensure you have the following installed on your Linux system:

### Python Backend Prerequisites

- Python 3.11+ installed
- pip (Python package installer)

### Frontend Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm or pnpm (package manager)

## Installation

### Step 1: Update System Packages

First, update your system packages to ensure you have the latest versions:

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 2: Install Python 3 and pip

If Python 3 is not installed, install it along with pip:

```bash
sudo apt-get install python3 python3-pip
```

### Step 3: Install Node.js

Choose one of the following methods to install Node.js:

**Option A: Using Package Manager (easiest)**

```bash
sudo apt install nodejs npm
```

**Option B: Using Node Version Manager (recommended)**

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Install the latest LTS version
nvm install --lts
nvm use --lts
```

