import { ProgramPage } from '../ProgramPage';

export function AccountingPage() {
  return (
    <ProgramPage config={{
      id: 'accounting',
      title: 'Business Accounting for Enterprise Professionals',
      eyebrow: 'Finance & Accounting',
      description: 'A three-level certification path that takes you from zero accounting knowledge to confidently discussing financial performance, ERP systems, and enterprise operations with CFOs and finance leaders.',
      color: '#4A90D9',
      courseIds: ['business-accounting-l1', 'business-accounting-l2', 'business-accounting-l3'],
    }} />
  );
}
