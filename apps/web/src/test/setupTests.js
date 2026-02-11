process.env.VITE_API_URL = "http://localhost:3001";
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ ok: true }) })
);
require("@testing-library/jest-dom");
