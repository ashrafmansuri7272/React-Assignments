export const mockFileTree = {
  id: "root",
  name: "project-root",
  children: [
    {
      id: "src",
      name: "src",
      children: [
        { id: "app", name: "App.jsx"},
        { id: "todo", name: "Todo.jsx"},
        { id: "styles", name: "styles.css"},
      ],
    },
    {
      id: "public",
      name: "public",
      children: [{ id: "favicon", name: "favicon.ico"}],
    },
    { id: "pkg", name: "package.json"},
    { id: "readme", name: "README.md"},
  ],
};
