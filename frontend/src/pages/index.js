// src/pages/index.js

// Access the environment variable
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <p>API URL: {apiUrl}</p>
    </div>
  );
}