import { ProgramPage } from '../ProgramPage';

export function DataManagementPage() {
  return (
    <ProgramPage config={{
      id: 'data',
      title: 'Data Management',
      eyebrow: 'Data & Systems',
      description: 'From raw data pipelines and SQL to CRM/ERP integration and business intelligence dashboards — the full data landscape for operations leaders.',
      color: '#4caf82',
      courseIds: ['data-engineering', 'data-analysis', 'crm-erp-systems', 'business-intelligence'],
    }} />
  );
}
