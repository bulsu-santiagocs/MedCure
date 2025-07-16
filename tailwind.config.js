/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Updated color palette for the new light design
        'sidebar-bg': '#FFFFFF',
        'sidebar-text': '#374151', // Gray-700
        'sidebar-icon': '#6B7280', // Gray-500
        'sidebar-active-bg': '#5856d6', // Your original active blue
        'sidebar-active-text': '#FFFFFF',
        'sidebar-item-hover-bg': '#F3F4F6', // Gray-100
        'header-bg': '#FFFFFF',
        'main-bg': '#F9FAFB', // Very light gray, almost white
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
      },
    },
  },
  plugins: [],
};