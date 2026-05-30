import type { LessonContent } from '../../types/course';
import { Callout } from '../ui/Callout';
import { DiagramFrame } from '../ui/DiagramFrame';
import { DMAICWalkthrough } from '../simulations/DMAICWalkthrough';
import { SIPOCBuilder } from '../simulations/SIPOCBuilder';
import { SpotTheWaste } from '../simulations/SpotTheWaste';
import { VariationDemo } from '../simulations/VariationDemo';
import { ParetoBuilder } from '../simulations/ParetoBuilder';
import { FishboneBuilder } from '../simulations/FishboneBuilder';
import { DMAICPhaseDiagram } from '../diagrams/DMAICPhaseDiagram';
import { CTQTreeDiagram } from '../diagrams/CTQTreeDiagram';
import { KanoModelDiagram } from '../diagrams/KanoModelDiagram';
import { SigmaLevelChart } from '../diagrams/SigmaLevelChart';
import { NormalDistributionChart } from '../diagrams/NormalDistributionChart';
import { RunChartExample } from '../diagrams/RunChartExample';
import { ImprovementJourneyDiagram } from '../diagrams/ImprovementJourneyDiagram';

function SimulationBlock({ id, description }: { id: string; title: string; description: string }) {
  const map: Record<string, React.ReactNode> = {
    'dmaic-walkthrough': <DMAICWalkthrough />,
    'sipoc-builder': <SIPOCBuilder />,
    'spot-the-waste': <SpotTheWaste />,
    'variation-demo': <VariationDemo />,
    'pareto-builder': <ParetoBuilder />,
    'fishbone-builder': <FishboneBuilder />,
  };
  const component = map[id];
  if (!component) return null;
  return (
    <div className="my-8">
      <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-1">
        Interactive Simulation
      </p>
      <p className="text-sm text-muted mb-3">{description}</p>
      {component}
    </div>
  );
}

function DiagramBlock({ id, title }: { id: string; title: string }) {
  const map: Record<string, React.ReactNode> = {
    'dmaic-phases': <DMAICPhaseDiagram />,
    'ctq-tree': <CTQTreeDiagram />,
    'kano-model': <KanoModelDiagram />,
    'improvement-journey': <ImprovementJourneyDiagram />,
  };
  const component = map[id];
  if (!component) return null;
  return (
    <DiagramFrame title={title} className="my-6">
      {component}
    </DiagramFrame>
  );
}

function ChartBlock({ id, title, description }: { id: string; title: string; description: string }) {
  const map: Record<string, React.ReactNode> = {
    'sigma-levels': <SigmaLevelChart />,
    'normal-distribution': <NormalDistributionChart />,
    'run-chart-example': <RunChartExample />,
  };
  const component = map[id];
  if (!component) return null;
  return (
    <DiagramFrame title={title} className="my-6">
      <p className="text-xs text-muted mb-3">{description}</p>
      {component}
    </DiagramFrame>
  );
}

interface Props {
  content: LessonContent[];
}

export function LessonContentRenderer({ content }: Props) {
  return (
    <div className="max-w-2xl">
      {content.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={i} className="text-ink leading-relaxed mb-5 text-base">
                {block.text}
              </p>
            );

          case 'heading':
            return block.level === 2 ? (
              <h2 key={i} className="font-serif text-2xl text-ink mt-10 mb-4 pb-2 border-b border-border-gold">
                {block.text}
              </h2>
            ) : (
              <h3 key={i} className="font-serif text-xl text-ink mt-7 mb-3">
                {block.text}
              </h3>
            );

          case 'callout':
            return (
              <Callout
                key={i}
                variant={block.variant}
                title={block.title}
                text={block.text}
              />
            );

          case 'list':
            return (
              <ul key={i} className="mb-5 space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                    <span className="text-gold mt-1 flex-shrink-0">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case 'ordered-list':
            return (
              <ol key={i} className="mb-5 space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                    <span className="text-gold font-serif text-base flex-shrink-0 w-5">{j + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );

          case 'table':
            return (
              <div key={i} className="overflow-x-auto my-6 rounded-md border border-border-gold">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border-gold bg-surface/50">
                      {block.headers.map((h, j) => (
                        <th
                          key={j}
                          className="px-4 py-3 text-left font-sans font-medium text-xs tracking-widest uppercase text-gold"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr
                        key={j}
                        className={`border-b border-border-gold last:border-0 ${
                          j % 2 === 0 ? '' : 'bg-white/[0.02]'
                        }`}
                      >
                        {row.map((cell, k) => (
                          <td key={k} className="px-4 py-3 text-muted leading-relaxed">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'key-terms':
            return (
              <div
                key={i}
                className="my-6 rounded-md border border-border-gold bg-card/30 divide-y divide-border-gold"
              >
                <div className="px-5 py-3">
                  <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold">
                    Key Terms
                  </p>
                </div>
                {block.terms.map((t, j) => (
                  <div key={j} className="px-5 py-3.5">
                    <span className="font-serif text-base text-ink">{t.term}</span>
                    <span className="text-muted mx-2">—</span>
                    <span className="text-sm text-muted leading-relaxed">{t.definition}</span>
                  </div>
                ))}
              </div>
            );

          case 'simulation':
            return (
              <SimulationBlock
                key={i}
                id={block.simulationId}
                title={block.title}
                description={block.description}
              />
            );

          case 'diagram':
            return (
              <DiagramBlock
                key={i}
                id={block.diagramId}
                title={block.title}
              />
            );

          case 'chart':
            return (
              <ChartBlock
                key={i}
                id={block.chartId}
                title={block.title}
                description={block.description}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
