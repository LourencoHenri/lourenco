import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto";
        text-decoration: none;
    }

    :root {
        --state-50: #f8fafc;
        --state-100: #f1f5f9;
        --state-200: #e2e8f0;
        --state-300: #cbd5e1;
        --state-400: #94a3b8;
        --state-500: #64748b;
        --state-600: #475569;
        --state-700: #334155;
        --state-800: #1e293b;
        --state-900: #0f172a;

        --gray-50: #f9fafb;
        --gray-100: #f3f4f6;
        --gray-200: #e5e7eb;
        --gray-300: #d1d5db;
        --gray-400: #9ca3af;
        --gray-500: #6b7280;
        --gray-600: #4b5563;
        --gray-700: #374151;
        --gray-800: #1f2937;
        --gray-900: #111827;

        --sky-50: #f0f9ff;
        --sky-100: #e0f2fe;
        --sky-200: #bae6fd;
        --sky-300: #7dd3fc;
        --sky-400: #38bdf8;
        --sky-500: #0ea5e9;
        --sky-600: #0284c7;
        --sky-700: #0369a1;
        --sky-800: #075985;
        --sky-900: #0c4a6e;

        --blue-50: #eff6ff;
        --blue-100: #dbeafe;
        --blue-200: #bfdbfe;
        --blue-300: #93c5fd;
        --blue-400: #60a5fa;
        --blue-500: #3b82f6;
        --blue-600: #2563eb;
        --blue-700: #1d4ed8;
        --blue-800: #1e40af;
        --blue-900: #1e3a8a;

        --violet-50: #f5f3ff;
        --violet-100: #ede9fe;
        --violet-200: #ddd6fe;
        --violet-300: #c4b5fd;
        --violet-400: #a78bfa;
        --violet-500: #8b5cf6;
        --violet-600: #7c3aed;
        --violet-700: #6d28d9;
        --violet-800: #5b21b6;
        --violet-900: #4c1d95;

        --pink-50: #fdf2f8;
        --pink-100: #fce7f3;
        --pink-200: #fbcfe8;
        --pink-300: #f9a8d4;
        --pink-400: #f472b6;
        --pink-500: #ec4899;
        --pink-600: #db2777;
        --pink-700: #be185d;
        --pink-800: #9d174d;
        --pink-900: #831843;

        --red-50: #fef2f2;
        --red-100: #fee2e2;
        --red-200: #fecaca;
        --red-300: #fca5a5;
        --red-400: #f87171;
        --red-500: #ef4444;
        --red-600: #dc2626;
        --red-700: #b91c1c;
        --red-800: #991b1b;
        --red-900: #7f1d1d;

        --green-50: #f0fdf4;
        --green-100: #dcfce7;
        --green-200: #bbf7d0;
        --green-300: #86efac;
        --green-400: #4ade80;
        --green-500: #22c55e;
        --green-600: #16a34a;
        --green-700: #15803d;
        --green-800: #166534;
        --green-900: #14532d;
    }
`