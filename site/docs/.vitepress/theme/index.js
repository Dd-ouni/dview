import DefaultTheme from 'vitepress/theme';
import 'element-plus/dist/index.css';
import ddview from "ddview";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(ddview);
  },
};