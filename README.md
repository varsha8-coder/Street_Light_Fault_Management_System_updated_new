# Street_Light_Fault_Management_System_updated_new# 🚀 Street Light Fault Management System

🔗 **Project Demo / Video (Google Drive):**  
https://drive.google.com/file/d/1qKttHZ6e2SWXYlNfWqGaNeMA8W8RwIwb/view?usp=sharing

---

## 📌 Problem Statement

A system to track street light faults reported by citizens, manage their repair status, and help municipal authorities identify pending issues and frequently failing areas.

---

## 🎯 Objective

- Record street light faults with location details  
- Track repair status (Pending / Fixed)  
- Enable search and multiple filters  
- Display number of records dynamically  
- Improve complaint tracking efficiency  

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Data Source: JSON  
- Tools: VS Code, GitHub  

---

## 📂 Project Structure

```
Street-Light-Fault-System
│── index.html
│── style.css
│── script.js
│── data.json
│── README.md
```

---

## 📊 Features

### ✅ Data Loading
- Loads data from JSON file  
- Displays all records in a table  

### 🔍 Search
- Search by street name  
- Case-insensitive filtering  

### 🎯 Filters (Level 2 Requirement)
- Filter by status (Pending / Fixed)  
- Second filter can be added (example: Ward)  
- Both filters work together  

### 🔽 Sorting (Level 2 Requirement)
- Click table column header to sort data  
- Works for selected column  

### 📈 Record Count
- Displays number of filtered records  

---

## 🖥️ How It Works

- Fetches data from `data.json`  
- Displays in table format  
- Search filters street names  
- Filters narrow down results  
- Sorting arranges data dynamically  

---

## ⚙️ How to Run

1. Clone repository  
```
git clone https://github.com/your-username/your-repo-name.git
```

2. Open in VS Code  

3. Run:
- Open `index.html` in browser  

---

## 🧪 Data Fields

- fault_id – Unique ID  
- street – Street name  
- ward – Area  
- status – Pending / Fixed  

---

## 🔄 On-Spot Changes Implemented

### Change 1: Sorting Feature
- Added new column (example: Ward or ID)  
- Clicking column header sorts table  

### Change 2: Multiple Filters
- Added second filter (example: Ward)  
- Both filters work together to refine results  

Reference:
:contentReference[oaicite:0]{index=0}

---

## 📱 Future Improvements

- Add reported & repaired dates  
- Add fault type  
- Mobile-friendly UI  
- Dashboard with analytics  
- Backend integration  

---

## 👩‍💻 Author

Thanvarsha S  
Reg No: 411625243058  
Department: AIDS  

---

## 📜 License

This project is for educational purposes (SIH 2026 Internal Assessment).
