import { ProgramPage } from '../ProgramPage';

export function SixSigmaCertPage() {
  return (
    <ProgramPage config={{
      id: 'lss-cert',
      title: 'Six Sigma Certification',
      eyebrow: 'Belt Curriculum',
      description: 'A progressive credential path from Yellow through Black Belt. Each level builds on the last — structured for practitioners who need measurable, verifiable skills in process improvement.',
      color: '#c9a84c',
      courseIds: ['yellow-belt', 'green-belt', 'black-belt'],
    }} />
  );
}
