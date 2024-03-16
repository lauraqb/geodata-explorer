# Geodata explorer

Requirements:

- [ ] User Signup and Login (dummy)
- [ ] API Integration: Choose one external API to fetch data from. This could be social media platforms (Twitter), event platforms (Eventbrite), environmental data sources, or any other public API that provides data suitable for mapping.
      • Map Integration: Utilize a mapping service (e.g., Google Maps API, Leaflet,
      Mapbox) to display data points.
      • Design and Usability: You can decide the details of UI/UX, e.g., the colour
      palette, shapes, radius, fonts, layout, but the application should be easy to use
      and visually pleasant.
      • (Bonus) User Interaction: Implement at least one feature that enhances user
      interaction with the map, such as filtering data points, searching for specific
      criteria, or updating data in real-time.

# How to start

npm run dev

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
