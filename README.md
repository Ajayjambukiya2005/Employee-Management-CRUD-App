# Employee CRUD App (React + TypeScript + Bootstrap)

## 📌 પ્રોજેક્ટ વિશે
આ એક **Employee Management** CRUD (Create, Read, Update, Delete) એપ્લિકેશન છે, જે નીચેની ટેક્નોલોજી વાપરીને બનાવેલ છે:

- **React** – UI બનાવવા માટે
- **TypeScript** – Type-safe કોડ માટે
- **Bootstrap** – Styling અને Responsive Design માટે
- **LocalStorage** – Data save કરવા માટે (browser માં જ, backend વગર)

આમાં તમે Employee ઉમેરી શકો છો (Create), List જોઈ શકો છો (Read), Edit કરી શકો છો (Update), અને Delete કરી શકો છો.

---

## 🛠️ જરૂરી સોફ્ટવેર (Prerequisites)
પ્રોજેક્ટ run કરતાં પહેલાં તમારા કમ્પ્યુટરમાં આ install હોવું જોઈએ:

1. **Node.js** (version 18 કે તેથી વધુ) — https://nodejs.org પરથી ડાઉનલોડ કરો
2. Node.js સાથે **npm** આપોઆપ install થઈ જાય છે

Node.js install થયેલ છે કે નહીં, ચેક કરવા માટે terminal/command prompt માં આ command ચલાવો:

```bash
node -v
npm -v
```

જો version દેખાય, તો બધું બરાબર છે.

---

## 📦 Step-by-Step Install અને Run કરવાની રીત

### Step 1: ZIP ફાઈલ Extract કરો
ડાઉનલોડ કરેલી `crud-app.zip` ફાઈલને કોઈપણ ફોલ્ડરમાં extract (unzip) કરો.

### Step 2: Terminal/Command Prompt ખોલો
Extract કરેલા ફોલ્ડરમાં જાઓ. ઉદાહરણ તરીકે:

```bash
cd crud-app
```

### Step 3: જરૂરી Packages Install કરો
નીચેની command ચલાવો — આ command પ્રોજેક્ટ માટે જરૂરી બધા packages (React, Bootstrap, વગેરે) install કરશે:

```bash
npm install
```

⏳ આમાં થોડી મિનિટ લાગી શકે (internet speed પ્રમાણે).

### Step 4: Project Run કરો
Install પૂરું થયા પછી, નીચેની command ચલાવો:

```bash
npm run dev
```

### Step 5: Browser માં જુઓ
Terminal માં એક link દેખાશે, જેવો કે:

```
Local:   http://localhost:5173/
```

આ link ને copy કરી browser માં paste કરો, અથવા Ctrl (Windows) / Cmd (Mac) દબાવીને link પર click કરો. તમારી CRUD એપ open થઈ જશે! 🎉

---

## 🧩 એપમાં શું-શું કરી શકાય (Features)

| Feature | વર્ણન |
|---|---|
| ➕ Add Employee | "+ Add Employee" બટન દબાવીને નવો employee ઉમેરો |
| 📋 View List | બધા employees ની list table માં જુઓ |
| ✏️ Edit | કોઈપણ row ના "Edit" બટન દબાવીને data બદલો |
| 🗑️ Delete | "Delete" બટન દબાવીને (confirmation સાથે) employee remove કરો |
| 🔍 Search | ઉપર આપેલા search box માં નામ/email/department લખીને શોધો |
| 💾 Auto-Save | Data browser ના localStorage માં આપોઆપ save થાય છે, page refresh કરો તો પણ data રહેશે |

---

## 📁 Project Structure (ફોલ્ડર માળખું)

```
crud-app/
├── src/
│   ├── components/
│   │   ├── EmployeeForm.tsx        → Add/Edit ફોર્મ
│   │   ├── EmployeeTable.tsx       → Data ટેબલ
│   │   └── ConfirmDeleteModal.tsx  → Delete confirmation popup
│   ├── hooks/
│   │   └── useEmployees.ts         → CRUD logic (Create/Read/Update/Delete)
│   ├── types/
│   │   └── Employee.ts             → TypeScript interface/types
│   ├── App.tsx                     → Main App component
│   └── main.tsx                    → Entry point
├── package.json
└── README.md
```

---

## 🏗️ Production Build (વેબસાઈટ પર Deploy કરવા માટે)
જો તમારે આ પ્રોજેક્ટને live website બનાવવો હોય, તો:

```bash
npm run build
```

આ command `dist` નામનું ફોલ્ડર બનાવશે, જેમાં final optimized files હશે. એ ફોલ્ડરને કોઈપણ hosting service (Netlify, Vercel, GitHub Pages વગેરે) પર upload કરી શકાય.

---

## ❓ Common Problems (સામાન્ય સમસ્યાઓ)

**Problem:** `npm install` માં error આવે છે
**ઉકેલ:** Node.js ની નવી version install કરો (18 કે તેથી ઉપર)

**Problem:** `npm run dev` પછી browser માં કંઈ ના દેખાય
**ઉકેલ:** Terminal માં આપેલ link બરાબર copy કરી browser માં paste કરો

**Problem:** Port already in use error
**ઉકેલ:** બીજું કોઈ પ્રોજેક્ટ ચાલુ હોય તો બંધ કરો, અથવા `npm run dev -- --port 3000` વાપરો

---

## 🔄 Real Backend (API) સાથે Connect કરવો હોય તો
હાલમાં Data localStorage માં save થાય છે (backend વગર). જો ભવિષ્યમાં real database/backend (જેમ કે Node.js/Express, .NET, વગેરે) સાથે જોડવું હોય, તો `src/hooks/useEmployees.ts` ફાઈલમાં localStorage logic ને બદલે `fetch`/`axios` API calls મૂકવાના રહેશે.

---

**Made with ❤️ using React + TypeScript + Bootstrap**
