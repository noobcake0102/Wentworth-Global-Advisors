import FactorySimulation from '../../components/FactorySimulation';

export function FactoryOptimizerPage() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <FactorySimulation userLevel="green" scenario="baseline" />
    </div>
  );
}
