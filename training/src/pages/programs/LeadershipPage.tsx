import { ProgramPage } from '../ProgramPage';

export function LeadershipPage() {
  return (
    <ProgramPage config={{
      id: 'leadership',
      title: 'Leadership & Management',
      eyebrow: 'People & Execution',
      description: 'Frameworks for leading teams, managing complex projects, and driving organizational change. Pairs with any technical track to complete the practitioner picture.',
      color: '#9b8ec4',
      courseIds: ['team-leadership', 'project-management', 'black-belt', 'business-law'],
    }} />
  );
}
