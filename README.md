# Django + Next.js Template

A full-stack web application template using Django (Python) for the backend API and Next.js 16 (React) for the frontend.

---

## 🚀 Quick Start (Dev Container) - Recommended

The easiest way to get started is using the VS Code Dev Container:

1. **Prerequisites**:  
   - [Docker Desktop](https://www.docker.com/products/docker-desktop/)  
   - [VS Code](https://code.visualstudio.com/)  
   - [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

2. **Open in Dev Container**:
   - Clone this repository
   - Open the project in VS Code
   - When prompted, click "Reopen in Container" or use `Ctrl+Shift+P` → "Dev Containers: Reopen in Container"

3. **Start the application**:
   ```bash
   # Terminal 1: Start the frontend
   cd client && npm run dev

   # Terminal 2: Start the backend
   cd server && python manage.py runserver
   ```

4. **Access the application**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8000](http://localhost:8000)
   - Admin panel: [http://localhost:8000/admin](http://localhost:8000/admin)

---

## 📋 Local Development Setup

**Note**: Only follow these steps if you're NOT using the dev container.

### Prerequisites

- **Node.js 18+** and **npm** - [Download here](https://nodejs.org/)
- **Python 3.12+** - [Download here](https://python.org/)
- **Poetry** (Python package manager) - [Installation guide](https://python-poetry.org/docs/#installation)
- **PostgreSQL 16+** - [Download here](https://www.postgresql.org/download/)

### Installation Steps

#### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <project-name>
```

#### 2. Install Prerequisites

**Poetry (Python package manager)**
```bash
# Official installer (all OSes)
curl -sSL https://install.python-poetry.org | python3 -

# If that fails, use pip (all OSes)
pip install poetry
```

**PostgreSQL**

- **macOS (with Homebrew):**
  ```bash
  brew install postgresql@16
  export PATH="/opt/homebrew/opt/postgresql@16/bin:$PATH" # Add to ~/.zshrc or ~/.bash_profile
  brew services start postgresql@16
  ```

- **Windows:**
  1. Download and run the [PostgreSQL installer](https://www.postgresql.org/download/windows/).
  2. Follow the setup instructions and remember your username/password.
  3. Add PostgreSQL's `bin` directory to your PATH if needed.

- **Linux (Debian/Ubuntu):**
  ```bash
  sudo apt update
  sudo apt install postgresql postgresql-contrib
  sudo service postgresql start
  ```

#### 3. Set Up the Database

- **macOS/Linux:**
  ```bash
  createdb your_db_name
  ```
- **Windows:**
  - Open "SQL Shell (psql)" from the Start menu and run:
    ```
    CREATE DATABASE your_db_name;
    ```

#### 4. Set Up Environment Variables

**Backend (`.env` in `server/`)**
```env
APP_NAME=DjangoAPI
APP_ENV=DEVELOPMENT
API_SECRET_KEY=your-secret-key-here
API_ALLOWED_HOSTS=.localhost 127.0.0.1 [::1]

POSTGRES_HOST=localhost
POSTGRES_NAME=your_db_name
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_PORT=5432

DJANGO_SUPERUSER_PASSWORD=Password123
DJANGO_SUPERUSER_EMAIL=admin@test.com
DJANGO_SUPERUSER_USERNAME=admin

FRONTEND_URL=http://localhost:3000
```

**Frontend (`.env` in `client/`)**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

#### 5. Set Up the Backend (Django)
```bash
cd server
poetry install
poetry run python manage.py migrate
poetry run python manage.py createsuperuser  # optional
poetry run python manage.py runserver
```

#### 6. Set Up the Frontend (Next.js)
```bash
cd client
npm install
npm run dev
```

#### 7. Verify Installation
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:8000](http://localhost:8000)
- Admin panel: [http://localhost:8000/admin](http://localhost:8000/admin)

---

## 📁 Project Structure

```
project-name/
├── client/                 # Next.js frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── pages/          # Next.js pages (Pages Router)
│   │   └── styles/         # CSS and styling
│   ├── public/             # Static assets
│   └── package.json        # Node.js dependencies
├── server/                 # Django backend
│   ├── api/                # Django apps
│   ├── manage.py           # Django management script
│   ├── .env                # Environment variables
│   └── pyproject.toml      # Python dependencies
├── docker/                 # Docker configuration
└── docker-compose.yml      # Database service
```

---

## 🛠️ Development Commands

### Backend (Django)
```bash
cd server

# Run development server
poetry run python manage.py runserver

# Create migrations
poetry run python manage.py makemigrations

# Apply migrations
poetry run python manage.py migrate

# Create superuser
poetry run python manage.py createsuperuser

# Run tests
poetry run python manage.py test

# Reset database (nuclear option)
poetry run ./nuke.sh
```

### Frontend (Next.js)
```bash
cd client

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run typecheck

# Format code
npm run format
```

---

