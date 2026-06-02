import FactorySimulation from '../../components/FactorySimulation';

export function FactoryOptimizerPage() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10 }}>
      <FactorySimulation userLevel="green" scenario="baseline" />
    </div>
  );
}
