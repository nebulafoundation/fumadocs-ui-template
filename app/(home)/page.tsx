import Link from 'next/link';

export const metadata = {
  title: 'Nebula Foundation',
};

export default function HomePage() {
  return (
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        Welcome to Nebula Foundation
      </h1>
      <p>A New way to hackintosh your devices.</p>
      <h1 href="/docs">Click here to Start</h1>
    </main>
  );
}
