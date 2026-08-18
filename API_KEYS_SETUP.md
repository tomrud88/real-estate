# 🔑 API Keys Configuration Guide

## Required API Keys

### 1. Backend API (./api/.env)

Utwórz plik `.env` w folderze `api/` z następującymi zmiennymi:

```env
# MongoDB Database Connection
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/real-estate?retryWrites=true&w=majority"

# JWT Secret Key (wygeneruj losowy string, min 32 znaki)
JWT_SECRET_KEY="your_super_secret_jwt_key_min_32_characters_long"

# Frontend URL (dla CORS)
CLIENT_URL="https://real-estate-peach-one.vercel.app"
```

#### Jak uzyskać DATABASE_URL:

1. Wejdź na [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Utwórz darmowy cluster
3. Kliknij "Connect" → "Connect your application"
4. Skopiuj connection string i zamień `<password>` na swoje hasło

#### Jak wygenerować JWT_SECRET_KEY:

W terminalu:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

### 2. Frontend (./frontend/.env)

Utwórz plik `.env` w folderze `frontend/` z następującymi zmiennymi:

```env
# Cloudinary Configuration (dla upload zdjęć)
REACT_APP_CLOUDINARY_CLOUD_NAME="dznynahvp"
REACT_APP_CLOUDINARY_UPLOAD_PRESET="estate"
```

#### Jak uzyskać Cloudinary API keys:

1. Wejdź na [Cloudinary](https://cloudinary.com/)
2. Zarejestruj darmowe konto
3. W Dashboard znajdziesz `Cloud Name`
4. Utwórz Upload Preset:
   - Settings → Upload → Add upload preset
   - Signing Mode: **Unsigned**
   - Folder: `estate` (lub dowolna nazwa)
   - Zapisz preset name jako `REACT_APP_CLOUDINARY_UPLOAD_PRESET`

---

### 3. Socket Server (./socket/.env)

Utwórz plik `.env` w folderze `socket/` z następującymi zmiennymi:

```env
# Frontend URL (dla CORS)
CLIENT_URL="https://real-estate-peach-one.vercel.app"
PORT=4000
```

---

## 🚀 Konfiguracja na Vercel

### Backend API (Project Settings → Environment Variables)

Dodaj następujące zmienne w panelu Vercel dla projektu API:

| Variable Name    | Value                                      |
| ---------------- | ------------------------------------------ |
| `DATABASE_URL`   | Twój MongoDB connection string             |
| `JWT_SECRET_KEY` | Twój wygenerowany secret key               |
| `CLIENT_URL`     | `https://real-estate-peach-one.vercel.app` |

### Frontend (Project Settings → Environment Variables)

Dodaj następujące zmienne w panelu Vercel dla projektu Frontend:

| Variable Name                        | Value                       |
| ------------------------------------ | --------------------------- |
| `REACT_APP_CLOUDINARY_CLOUD_NAME`    | Twoja Cloudinary cloud name |
| `REACT_APP_CLOUDINARY_UPLOAD_PRESET` | Twój upload preset          |

### Socket Server (Project Settings → Environment Variables)

| Variable Name | Value                                      |
| ------------- | ------------------------------------------ |
| `CLIENT_URL`  | `https://real-estate-peach-one.vercel.app` |
| `PORT`        | `4000`                                     |

---

## ⚠️ Ważne uwagi

1. **Nigdy nie commituj plików `.env` do repozytorium Git!**
2. Pliki `.env.example` są wzorcami - skopiuj je i zmień nazwę na `.env`
3. Po dodaniu zmiennych na Vercel, musisz zrobić **redeploy** projektu
4. W lokalu używaj `CLIENT_URL="http://localhost:5173"` lub `http://localhost:3000`

---

## 🔄 Quick Setup

### Lokalne środowisko:

```bash
# Backend
cd api
cp .env.example .env
# Edytuj .env i dodaj swoje klucze
npm install
npx prisma generate
npm start

# Frontend
cd ../frontend
cp .env.example .env
# Edytuj .env i dodaj swoje klucze
npm install
npm start

# Socket Server
cd ../socket
cp .env.example .env
# Edytuj .env i dodaj swoje klucze
npm install
npm start
```

---

## 🆘 Troubleshooting

### Problem: "CORS error"

- Sprawdź czy `CLIENT_URL` jest poprawnie ustawiony na Vercel
- Redeploy backend po zmianie zmiennych środowiskowych

### Problem: "JWT malformed"

- Sprawdź czy `JWT_SECRET_KEY` jest identyczny w środowisku produkcyjnym i lokalnym
- Upewnij się, że klucz ma minimum 32 znaki

### Problem: "Database connection failed"

- Sprawdź `DATABASE_URL` - czy hasło jest poprawne
- Sprawdź whitelist IP w MongoDB Atlas (dodaj 0.0.0.0/0 dla Vercel)

### Problem: "Upload failed" (Cloudinary)

- Sprawdź czy Upload Preset jest **Unsigned**
- Sprawdź nazwę Cloud Name i Upload Preset
