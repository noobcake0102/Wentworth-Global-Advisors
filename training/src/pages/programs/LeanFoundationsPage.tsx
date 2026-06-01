import { ProgramPage } from '../ProgramPage';

export function LeanFoundationsPage() {
  return (
    <ProgramPage config={{
      id: 'lean-foundations',
      title: 'Foundations of Lean Six Sigma',
      eyebrow: 'Core Methodology',
      description: 'The foundational methodology stack: Lean Manufacturing, Six Sigma Principles, and DMAIC. Essential for anyone running or improving production and service operations.',
      color: '#7ca4c4',
      courseIds: ['lean-manufacturing', 'six-sigma-principles', 'dmaic-methodology', 'yellow-belt', 'green-belt'],
    }} />
  );
}
