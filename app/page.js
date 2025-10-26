import Counter from '../components/Counter';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>Next.js Button Counter</h1>
      <p>Reusable counter with increment, decrement, and reset functionality.</p>

      {/* Default Counter */}
      <Counter />

      {/* Counter with custom props */}
      <Counter initialCount={5} initialStep={2} />
    </main>
  );
}