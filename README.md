# 📚 Master Mata Kuliah - JSON CRUD Demo

A simple **CRUD (Create, Read, Update, Delete)** application for managing course data (Mata Kuliah) using **JSON** as the data format. Built with React.js and styled with Tailwind CSS.

![Demo Screenshot](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/React-18.x-blue) ![Vite](https://img.shields.io/badge/Vite-7.x-purple)

---

## ✨ Features

- ✅ **Create** - Add new course data
- ✅ **Read** - View all courses in a table
- ✅ **Update** - Edit existing course data
- ✅ **Delete** - Remove courses with confirmation
- ✅ **Search** - Filter courses by code or name
- ✅ **Persistent Storage** - Data saved to localStorage (survives page refresh)
- ✅ **Smooth Animations** - Framer Motion for nice UI transitions
- ✅ **Responsive Design** - Works on desktop and mobile

---

## 🛠️ Tech Stack

| Technology        | Purpose                        |
| ----------------- | ------------------------------ |
| **React.js**      | Frontend UI library            |
| **Vite**          | Fast build tool & dev server   |
| **Tailwind CSS**  | Utility-first CSS framework    |
| **Framer Motion** | Animation library              |
| **Lucide React**  | Beautiful icons                |
| **localStorage**  | Browser-based data persistence |

---

## 📁 Project Structure

```
react-crud-redesign/
├── index.html          # Main HTML entry point
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
│
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main component with CRUD logic
│   ├── App.css         # Additional styles
│   ├── index.css       # Global styles & Tailwind imports
│   └── data.json       # Initial course data (JSON format)
│
├── explanation.md      # Indonesian explanation for presentation
└── CODE_REPORT.md      # Full source code documentation
```

---

## 📄 File Descriptions

### Core Files

| File            | Description                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------- |
| `src/App.jsx`   | Main React component containing all CRUD operations, form handling, search modal, and UI rendering |
| `src/data.json` | JSON file with initial course data (5 sample courses)                                              |
| `src/index.css` | CSS styling including header, form, table, buttons, and responsive design                          |
| `index.html`    | HTML template with Google Fonts (Poppins) integration                                              |

### Documentation Files

| File             | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `explanation.md` | Detailed explanation in Indonesian for academic presentation |
| `CODE_REPORT.md` | Complete source code report with all files documented        |

---

## 🚀 How to Run

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/ProfMilo/JSON-demo.git
   cd JSON-demo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173/
   ```

---

## 📊 JSON Data Structure

The application uses the following JSON structure for course data:

```json
{
  "id": 1,
  "kodeMK": "IF101",
  "namaMK": "Pengantar Teknologi Informasi",
  "semester": 1,
  "sks": 3,
  "kodeKurikulum": "KUR2024",
  "jenisMK": "Wajib"
}
```

| Field           | Type    | Description                                      |
| --------------- | ------- | ------------------------------------------------ |
| `id`            | Integer | Unique identifier (auto-increment)               |
| `kodeMK`        | String  | Course code                                      |
| `namaMK`        | String  | Course name                                      |
| `semester`      | Integer | Semester number (1-8)                            |
| `sks`           | Integer | Credit hours                                     |
| `kodeKurikulum` | String  | Curriculum code                                  |
| `jenisMK`       | String  | Type: "Wajib" (Required) or "Pilihan" (Elective) |

---

## 💾 Data Persistence

This app uses **localStorage** to save data:

- Data is automatically saved when you add, edit, or delete
- Data persists even after closing the browser
- Click the refresh icon (↻) in the header to reset to default data

> **Note:** localStorage is browser-specific. Data won't sync across different browsers or devices.

---

## 🎨 Screenshots

### Main Interface

- Clean corporate design with blue header
- Form with icon labels for each field
- Data table with action buttons

### Search Modal

- Click "Cari" button to open search
- Filter by course code or name
- Cancel button to clear filter

---

## 📝 Academic Purpose

This project was created for:

- **Course:** Sistem Basis Data Lanjutan (Advanced Database Systems)
- **Semester:** 7
- **Topic:** Implementing JSON for Data Master management

---

## 📜 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Author

**ProfMilo**

---

_Made with ❤️ for learning purposes_
