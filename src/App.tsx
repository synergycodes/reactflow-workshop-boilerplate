import Diagram from './Diagram';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <Diagram />
      </div>
    </div>
  );
}
