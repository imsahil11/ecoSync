# EcoSync

EcoSync is a waste management logistics platform built with React, Node.js, and MongoDB. It provides real-time fleet tracking, automated waste segregation guidance, and analytics for municipal waste collection.

## Features

- **Fleet Management**: Real-time tracking of collection vehicles using geospatial data.
- **Segregation Guide**: Interactive guide for waste classification (Organic, Recyclable, Hazardous).
- **Analytics Dashboard**: Metrics for tonnage processed, carbon offset, and operational uptime.
- **Responsive UI**: Mobile-first design using Tailwind CSS and Framer Motion.

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v3
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── landing/    # Landing page specific components
│   └── layout/     # Global layout (Navbar, Footer)
├── pages/          # Page views
└── assets/         # Static assets
```

