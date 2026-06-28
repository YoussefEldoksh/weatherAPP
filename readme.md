**Weather App**

**Overview**: A small web app that shows current weather and forecasts for searched cities, built with Vite + React + TypeScript.

**Features**
- **Search**: Find weather by city name, zip or postal code, or coordinates.
- **Current Conditions**: Displays temperature, humidity, wind, and UV index.
- **Forecast**: Multi-day forecast view.
- **Charts**: Visualizations for temperature, UV, and radar data using recharts.

**Tech Stack**
- **Frontend**: React, TypeScript, Vite
- **Libraries**: charting components, fetch utilities in `src/lib/utils.ts`

**Getting Started**

Prerequisites:
- Node.js 18+ and npm or yarn

Install dependencies:

```bash
cd frontend
npm install
# or: yarn install
```

Run development server:

```bash
cd frontend
npm run dev
# or: yarn dev
```

Build for production:

```bash
cd frontend
npm run build
# or: yarn build
```

Preview production build locally:

```bash
cd frontend
npm run preview
# or: yarn preview
```

**Project Structure**
- **public/**: Static assets
- **src/**: Application source
- **src/components/**: React components (charts, search, UI)
- **src/lib/utils.ts**: Utility functions and API helpers
- **vite.config.ts**, **package.json**: Build tooling and scripts

**Development Notes**
- API keys for weather services should be provided via environment variables or a `.env` file consumed by Vite.
- UI components are in `src/components/` and small UI elements are under `src/components/ui/`.

**Contributing**
- Open issues or PRs with clear descriptions and screenshots when applicable.

**Contact**
- Maintainer: youssefeldoksh788@gmail.com

---
