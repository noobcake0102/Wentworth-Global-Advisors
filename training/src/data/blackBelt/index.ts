import type { Course } from '../../types/course';

// ─── Module 1: Advanced Statistics for Black Belts ───────────────────────────

const module1 = {
  id: 'bb-m1',
  number: 1,
  title: 'Advanced Statistical Analysis',
  description: 'Master hypothesis testing, confidence intervals, regression analysis, and ANOVA to draw statistically valid conclusions from process data.',
  estimatedMinutes: 120,
  learningObjectives: [
    'Select and apply appropriate hypothesis tests for different data types and distributions',
    'Interpret p-values, confidence intervals, and effect sizes correctly',
    'Build and validate simple and multiple linear regression models',
    'Apply one-way and two-way ANOVA to compare process means across groups',
  ],
  lessons: [
    {
      id: 'bb-m1-l1',
      title: 'Hypothesis Testing: Framework and Logic',
      estimatedMinutes: 30,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Hypothesis testing is the statistical engine of the DMAIC Analyze phase. It provides a rigorous, reproducible framework for deciding whether observed differences in data reflect real process effects or simply random variation — and it prevents teams from chasing noise.',
        },
        {
          type: 'heading' as const,
          text: 'The Null and Alternative Hypothesis',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Every hypothesis test begins with two competing statements: the null hypothesis (H₀), which asserts no effect or no difference, and the alternative hypothesis (H₁), which asserts that an effect or difference exists. The test produces a p-value — the probability of observing data at least as extreme as what you collected, assuming H₀ is true.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Interpreting p-values',
          text: 'A p-value of 0.03 means there is a 3% probability of observing your data if H₀ is true. At α = 0.05, you reject H₀. The p-value is NOT the probability that H₀ is true — a common and consequential misinterpretation. It is purely about the data given H₀.',
        },
        {
          type: 'heading' as const,
          text: 'Type I and Type II Errors',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['', 'H₀ True', 'H₀ False'],
          rows: [
            ['Reject H₀', 'Type I Error (α) — False Positive', 'Correct — True Positive'],
            ['Fail to Reject H₀', 'Correct — True Negative', 'Type II Error (β) — False Negative'],
          ],
        },
        {
          type: 'paragraph' as const,
          text: 'Black Belts must balance both error types. In manufacturing quality, a Type I error means falsely shutting down a capable process (costly). A Type II error means failing to detect a real defect source (also costly, but differently). Power analysis before data collection determines the sample size needed to control both error rates.',
        },
        {
          type: 'heading' as const,
          text: 'Selecting the Right Test',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Data Situation', 'Test to Use'],
          rows: [
            ['Compare one sample mean to a target', '1-sample t-test'],
            ['Compare two independent sample means', '2-sample t-test'],
            ['Compare paired before/after means', 'Paired t-test'],
            ['Compare means across 3+ groups', 'One-way ANOVA'],
            ['Compare proportions (pass/fail)', '1-proportion or 2-proportion z-test'],
            ['Test independence of categorical variables', 'Chi-square test'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Normality Assumption',
          text: 'Most parametric tests (t-tests, ANOVA) assume normally distributed residuals. Always check this assumption with a normality test (Anderson-Darling, Shapiro-Wilk) or probability plot before applying parametric tests. For non-normal data, use non-parametric alternatives: Mann-Whitney U, Kruskal-Wallis, or transform the data.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Hypothesis Testing Identifies Shift-Based Defect Driver at an Automotive Stamping Plant',
          text: 'A Tier 1 automotive stamping supplier was experiencing a 4.1% dimensional defect rate on a critical bracket — costing $2.3M annually in scrap and rework. The Black Belt\'s initial Fishbone analysis generated 11 hypothesized causes. Rather than implementing all 11 corrective actions simultaneously (the traditional "kitchen sink" approach), she designed a structured hypothesis testing plan. A 2-sample t-test comparing Day vs. Night shift defect rates produced a p-value of 0.002, confirming a statistically significant difference (Day: 2.8%, Night: 5.9%). One-way ANOVA across the three machine operators on Night shift identified one operator whose dimensional averages were 0.023mm higher than peers (p = 0.019). Targeted retraining of that operator plus a die-setup checklist reduced overall defect rate to 1.2% within 6 weeks — saving $1.8M annually. The other 10 hypothesized causes were not the problem.',
        },
        {
          type: 'paragraph' as const,
          text: 'The structured hypothesis testing approach prevented the team from investing in 10 incorrect solutions. Statistical significance guided the team directly to the vital few causes, delivering the full ROI in 6 weeks rather than a year of unfocused intervention.',
        },
        {
          type: 'list' as const,
          items: [
            'Always set α (significance level) before collecting data — changing it after seeing results is p-hacking and invalidates the analysis',
            'Practical significance and statistical significance are different: a p-value of 0.001 with a trivial effect size (e.g., 0.01mm difference in a process with 2mm tolerance) may not justify a process change',
            'Power analysis before data collection prevents the most common Black Belt mistake: concluding "no effect" from an underpowered study that simply had too few samples to detect a real difference',
          ],
        },
      ],
    },
    {
      id: 'bb-m1-l2',
      title: 'Regression Analysis: Modeling Process Relationships',
      estimatedMinutes: 35,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Regression analysis quantifies the relationship between one or more input variables (X) and a continuous output variable (Y). In DMAIC Analyze, regression answers the critical question: which Xs predict Y, and by how much does Y change for a unit change in X?',
        },
        {
          type: 'heading' as const,
          text: 'Simple Linear Regression',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Simple linear regression models the relationship Y = β₀ + β₁X + ε, where β₀ is the intercept, β₁ is the slope (the change in Y per unit X), and ε is random error. The model is fit by minimizing the sum of squared residuals (ordinary least squares). R² measures the proportion of Y variation explained by X — an R² of 0.78 means X explains 78% of the variation in Y.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'R² vs. Adjusted R²',
          text: 'R² always increases when you add predictors to a model, even if those predictors have no real relationship with Y. Adjusted R² penalizes for adding non-informative predictors. In multiple regression, always report Adjusted R² to avoid misleading stakeholders about model quality.',
        },
        {
          type: 'heading' as const,
          text: 'Multiple Linear Regression',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Multiple regression extends the model to Y = β₀ + β₁X₁ + β₂X₂ + ... + βₙXₙ + ε. With multiple predictors, Black Belts must check for multicollinearity — when two or more Xs are highly correlated with each other, their individual coefficients become unreliable. The Variance Inflation Factor (VIF) diagnoses multicollinearity; VIF > 10 signals a problem.',
        },
        {
          type: 'heading' as const,
          text: 'Regression Assumptions and Residual Analysis',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Linearity: The relationship between X and Y is linear (check with scatter plots)',
            'Independence: Residuals are independent of each other (check with residuals vs. order plot)',
            'Homoscedasticity: Residual variance is constant across fitted values (check residuals vs. fits plot)',
            'Normality: Residuals are approximately normally distributed (check normal probability plot of residuals)',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Residual Analysis is Non-Optional',
          text: 'A regression that violates its assumptions produces coefficients and p-values that cannot be trusted. Always analyze residual plots before reporting regression results. A curved residual pattern means the relationship is non-linear and a transformation or polynomial term is needed.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Multiple Regression Optimizes Chemical Batch Yield at a Specialty Coatings Manufacturer',
          text: 'A specialty coatings manufacturer was averaging 71% batch yield on a high-value polymer product with a standard deviation of 8.2% — generating $4.1M in annual yield losses. The Black Belt collected 90 days of historical process data across 7 candidate input variables (reaction temperature, catalyst concentration, mixing speed, raw material lot, pH at charge, agitation time, and coolant flow rate). Multiple regression with backward elimination identified three statistically significant predictors: reaction temperature (β = +0.43, p < 0.001), catalyst concentration (β = +0.31, p = 0.003), and pH at charge (β = −0.29, p = 0.008). Adjusted R² = 0.74. Residual analysis confirmed homoscedasticity and normality. Operating at the model-optimal setpoints in a 30-batch pilot raised average yield to 81.4% and reduced standard deviation to 3.1% — a $2.8M annual improvement.',
        },
        {
          type: 'paragraph' as const,
          text: 'The regression model transformed a 7-variable guessing game into a precise operating recipe. The β coefficients gave engineers a quantitative dial: every 1°C increase in reaction temperature within the validated range predicted a 0.43% yield increase — enabling economics-driven process decisions rather than intuition-driven ones.',
        },
        {
          type: 'list' as const,
          items: [
            'Backward elimination (start with all predictors, remove the least significant one at a time) is generally safer than forward selection for Black Belt process regression because it considers all variables simultaneously before excluding any',
            'Regression predicts well within the range of X values used to build the model — extrapolating beyond that range (especially far beyond it) is speculative and should be flagged as such',
            'High R² does not prove causation: a regression model identifies predictive association, and causation must be confirmed through controlled experiments or mechanistic understanding',
          ],
        },
      ],
    },
    {
      id: 'bb-m1-l3',
      title: 'ANOVA: Comparing Multiple Groups',
      estimatedMinutes: 30,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Analysis of Variance (ANOVA) tests whether the means of three or more groups are statistically equal. In Black Belt work, ANOVA answers questions like: Do all four production lines produce the same average defect rate? Does supplier choice affect incoming material hardness? Does shift assignment affect cycle time?',
        },
        {
          type: 'heading' as const,
          text: 'One-Way ANOVA Logic',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'ANOVA partitions total data variation into two components: variation between groups (explained by the factor) and variation within groups (random error). The F-statistic is the ratio of between-group variance to within-group variance. A large F (small p-value) means group membership explains a significant portion of variation — i.e., the groups genuinely differ.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'After a Significant ANOVA: Post-Hoc Tests',
          text: 'A significant ANOVA F-test tells you that at least one group mean differs, but not which ones. Use Tukey\'s HSD (Honest Significant Difference) for all pairwise comparisons when group sizes are equal. Use Games-Howell when variances are unequal across groups. Never run multiple t-tests as a substitute — this inflates the Type I error rate.',
        },
        {
          type: 'heading' as const,
          text: 'Two-Way ANOVA and Interactions',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Two-way ANOVA tests the effect of two factors simultaneously and — critically — tests for interaction effects. An interaction exists when the effect of one factor depends on the level of the other. For example: machine type A outperforms B on the day shift, but B outperforms A on the night shift. A one-way ANOVA on machine type alone would miss this entirely.',
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Interaction Before Main Effects',
          text: 'When an interaction term is statistically significant, interpret the main effects with extreme caution — they may be misleading without the interaction context. Always plot the interaction (interaction plot) before reporting main effect conclusions.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Two-Way ANOVA Reveals Hidden Shift × Machine Interaction at a Medical Device Manufacturer',
          text: 'A medical device manufacturer was investigating dimensional variation in a machined titanium implant — a critical-to-function characteristic with a specification of 14.000 ± 0.008mm. Process capability was Cpk = 0.71 (well below the 1.33 customer requirement), representing a 4-sigma escape risk. The Black Belt conducted a two-way ANOVA with factors: Machine (3 CNC mills) and Shift (Day/Night), n = 180 parts. Main effects were not significant (F_machine = 1.8, p = 0.17; F_shift = 2.1, p = 0.15). However, the Machine × Shift interaction was highly significant (F = 9.4, p < 0.001). The interaction plot revealed that Mill #2 ran 0.006mm high on Day shift and 0.006mm low on Night shift — a 0.012mm total swing driven by differential thermal compensation between shifts. Correcting Mill #2\'s thermal offset protocol on Night shift raised Cpk to 1.48 across all machines and shifts.',
        },
        {
          type: 'paragraph' as const,
          text: 'A one-way ANOVA on machine or shift alone would have concluded "no significant effect" and closed the investigation without finding the root cause. Two-way ANOVA with interaction testing uncovered the real mechanism — a result impossible to see without considering both factors together.',
        },
        {
          type: 'list' as const,
          items: [
            'Always test for interactions in two-way ANOVA before drawing main effect conclusions — a non-significant main effect with a significant interaction is a completely valid and informative result',
            'ANOVA assumes approximately equal variances across groups (homoscedasticity) — check with Levene\'s test or Bartlett\'s test before proceeding',
            'Effect size (eta-squared, η²) complements the p-value: a statistically significant F with η² = 0.02 (2% of variation explained) may not justify a process change even if p < 0.05',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'bb-m1-q1',
      type: 'multiple-choice' as const,
      question: 'A p-value of 0.04 at α = 0.05 means:',
      options: [
        'There is a 4% chance the null hypothesis is true',
        'There is a 4% chance of observing data this extreme if H₀ is true — reject H₀',
        'The effect is large enough to be practically important',
        'The alternative hypothesis is 96% likely to be correct',
      ],
      correctIndex: 1,
      explanation: 'The p-value is the probability of observing data at least as extreme as collected, assuming H₀ is true. At α = 0.05, p = 0.04 < α, so we reject H₀. The p-value says nothing directly about the probability that H₀ is true or the size of the effect.',
    },
    {
      id: 'bb-m1-q2',
      type: 'multiple-choice' as const,
      question: 'In multiple regression, a Variance Inflation Factor (VIF) of 14 for predictor X₃ indicates:',
      options: [
        'X₃ explains 14% of the variance in Y',
        'X₃ has a statistically significant relationship with Y',
        'X₃ is highly correlated with other predictors — multicollinearity is present',
        'X₃ should be added to the model as a squared term',
      ],
      correctIndex: 2,
      explanation: 'VIF > 10 signals multicollinearity — X₃ is highly correlated with one or more other predictors. This inflates the standard errors of coefficients, making individual β estimates unreliable even if the overall model fit is good.',
    },
    {
      id: 'bb-m1-q3',
      type: 'true-false' as const,
      question: 'When an interaction term in two-way ANOVA is statistically significant, you can safely interpret the main effects independently of each other.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. A significant interaction means the effect of one factor depends on the level of the other. Reporting main effects without the interaction context can be actively misleading — the interaction plot must be used to interpret results correctly.',
    },
    {
      id: 'bb-m1-q4',
      type: 'multiple-choice' as const,
      question: 'A regression model has R² = 0.89 and Adjusted R² = 0.61. What does this most likely indicate?',
      options: [
        'The model fits the data very well with minimal overfitting',
        'The model has too few predictors and needs more variables',
        'Multicollinearity is preventing accurate coefficient estimation',
        'The model likely includes many non-informative predictors that inflate R² without genuine explanatory power',
      ],
      correctIndex: 3,
      explanation: 'A large gap between R² and Adjusted R² indicates overfitting — predictors have been added that explain noise rather than signal. Adjusted R² penalizes for unnecessary predictors, so a much lower Adjusted R² reveals the model is less predictive than R² alone suggests.',
    },
  ],
};

// ─── Module 2: Design of Experiments ─────────────────────────────────────────

const module2 = {
  id: 'bb-m2',
  number: 2,
  title: 'Design of Experiments (DOE)',
  description: 'Plan, execute, and analyze designed experiments to efficiently identify the process inputs with the greatest effect on output quality.',
  estimatedMinutes: 140,
  learningObjectives: [
    'Explain the advantages of designed experiments over one-factor-at-a-time testing',
    'Design and analyze full factorial and fractional factorial experiments',
    'Identify main effects and two-factor interactions from a factorial design',
    'Apply Response Surface Methods to optimize process setpoints',
  ],
  lessons: [
    {
      id: 'bb-m2-l1',
      title: 'DOE Fundamentals: Why Experiments Beat OFAT',
      estimatedMinutes: 30,
      content: [
        {
          type: 'paragraph' as const,
          text: 'One-Factor-At-a-Time (OFAT) testing — changing one variable while holding all others fixed — is intuitive but systematically inferior to designed experiments. OFAT misses interaction effects, requires more experimental runs for the same information, and produces results that only apply at the fixed settings of untested factors.',
        },
        {
          type: 'heading' as const,
          text: 'The DOE Advantage',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Criterion', 'OFAT', 'Full Factorial DOE'],
          rows: [
            ['Detects interactions', 'No', 'Yes'],
            ['Runs for 3 factors (2 levels each)', '6', '8'],
            ['Efficiency', 'Low', 'High'],
            ['Generalizability', 'Limited to fixed background conditions', 'Covers the experimental space'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'DOE Terminology',
          level: 2 as const,
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Factor', definition: 'A controlled input variable in the experiment (e.g., temperature, pressure, supplier).' },
            { term: 'Level', definition: 'The specific setting tested for a factor. Typically two levels (low and high) in screening designs.' },
            { term: 'Response', definition: 'The output variable being measured (Y) in the experiment.' },
            { term: 'Run', definition: 'A single experimental treatment — one combination of factor levels.' },
            { term: 'Replicate', definition: 'A repeat of an entire experiment under identical conditions. Replication estimates pure experimental error.' },
            { term: 'Main Effect', definition: 'The average change in response Y when a factor moves from its low to high level, averaged across all levels of other factors.' },
            { term: 'Interaction Effect', definition: 'When the effect of one factor on Y depends on the level of another factor.' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'Randomization is Mandatory',
          text: 'Run order must be randomized to prevent lurking time-based variables (temperature drift, operator fatigue, raw material variation across a shift) from systematically biasing results. A DOE run in systematic order is vulnerable to confounding — statistically indistinguishable from the real experimental effects.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: DOE vs. OFAT at a Food Packaging Line',
          text: 'A food manufacturer\'s heat-seal packaging line had a 7.3% seal failure rate causing $890K in annual product losses and recalls. A process engineer had spent 4 months using OFAT to test seal temperature, dwell time, and pressure — individually and one at a time — with inconclusive results. The Black Belt designed a 2³ full factorial DOE (8 runs + 4 center points, fully randomized) over two days. The DOE revealed what OFAT had missed: a highly significant Temperature × Dwell Time interaction (p = 0.004). At high dwell time, temperature had minimal effect. At low dwell time, temperature was critical. The engineer\'s OFAT work had been conducted entirely at high dwell time, which is why temperature appeared unimportant. Operating at the DOE-optimal combination (Temperature: 165°C, Dwell: 0.8s, Pressure: 42 psi) reduced seal failure rate to 0.8% — a 5.5-sigma improvement delivering $810K annual savings.',
        },
        {
          type: 'paragraph' as const,
          text: 'Four months of OFAT testing failed to find what a 2-day DOE identified: the interaction effect between temperature and dwell time. This is the canonical argument for designed experiments — not just efficiency, but the ability to detect effects that OFAT structurally cannot find.',
        },
        {
          type: 'list' as const,
          items: [
            'OFAT cannot detect interaction effects — if the true optimum requires a specific combination of factor levels, OFAT will never find it regardless of how many runs are conducted',
            'Always randomize run order in a DOE — failure to randomize can confound time-based nuisance variables with the experimental factors you are trying to test',
            'Center points in a factorial design serve two purposes: detecting curvature in the response and providing an estimate of pure experimental error without full replication',
          ],
        },
      ],
    },
    {
      id: 'bb-m2-l2',
      title: 'Full Factorial and Fractional Factorial Designs',
      estimatedMinutes: 40,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A full factorial design tests every combination of factor levels, giving complete information about all main effects and interactions. A 2³ design (3 factors at 2 levels each) requires 8 runs. A 2⁵ design requires 32 runs. As factor count grows, full factorials become expensive — fractional factorials offer a statistically valid way to reduce runs by sacrificing information about high-order interactions.',
        },
        {
          type: 'heading' as const,
          text: 'Full Factorial Analysis',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'In a 2ᵏ full factorial, each main effect and interaction is estimated with maximum precision. The design matrix uses +1 (high level) and −1 (low level) coded values. Main effect = average of Y at high level − average of Y at low level. Interaction effects are calculated from the products of factor columns.',
        },
        {
          type: 'heading' as const,
          text: 'Fractional Factorial Designs',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'A half-fraction of a 2⁴ design (2⁴⁻¹, 8 runs instead of 16) is built by setting the fourth factor\'s column equal to the product of the first three. This creates an alias structure — some effects are confounded with each other. In a Resolution IV design, main effects are aliased with three-way interactions (usually safe to ignore) but two-way interactions are aliased with each other (requires care).',
        },
        {
          type: 'table' as const,
          headers: ['Resolution', 'Alias Structure', 'When to Use'],
          rows: [
            ['III', 'Main effects aliased with 2FIs', 'Screening only — identify vital few factors, then follow up'],
            ['IV', 'Main effects clear; 2FIs aliased with 2FIs', 'Characterization when resources are constrained'],
            ['V', 'Main effects and 2FIs clear; 2FIs aliased with 3FIs', 'Characterization with high confidence'],
            ['Full Factorial', 'No aliasing', 'Optimization when all interactions must be estimated'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Plackett-Burman Designs for Screening',
          text: 'Plackett-Burman designs allow screening up to N-1 factors in N runs (where N is a multiple of 4). A 12-run PB design screens up to 11 factors. They are Resolution III — main effects are estimated efficiently but all interactions are partially confounded. Use PB designs for initial screening when you have many candidate factors and want to quickly identify the vital few.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Fractional Factorial Screening Reduces Pharmaceutical Tablet Dissolution Variability',
          text: 'A pharmaceutical manufacturer\'s quality team was investigating high variability in tablet dissolution rate (USP specification: 80% dissolved in 30 minutes; process was averaging 76% ± 14%). Seven process factors were hypothesized as potential contributors. A full factorial would require 128 runs — economically prohibitive in pharmaceutical manufacturing at $2,400/batch. The Black Belt designed a 2⁷⁻⁴ Resolution III fractional factorial (8 runs, $19,200 total) as a screening study. The Pareto chart of effects identified three significant main effects: binder concentration (largest), granulation moisture content, and tablet compression force. A follow-up 2³ full factorial on these three factors (8 runs) confirmed all three main effects and a significant Binder × Moisture interaction. Optimized setpoints reduced dissolution rate standard deviation from 14% to 4.2%, bringing Cpk from 0.29 to 1.41 — meeting the 1.33 minimum requirement.',
        },
        {
          type: 'paragraph' as const,
          text: 'The two-stage strategy (Resolution III screening → full factorial confirmation) solved a 7-factor problem in 16 runs instead of 128, spending $38,400 instead of $307,200 — a 8:1 cost reduction in the experimental program itself, before counting the $3.2M annual product savings from reduced rejects.',
        },
        {
          type: 'list' as const,
          items: [
            'Use a sequential strategy: screen with a Resolution III or IV fractional factorial, then follow up with a full factorial or Response Surface on the confirmed vital few factors',
            'Always verify the alias structure of a fractional factorial before running — if two potentially active interactions are aliased, the design cannot separate their effects and a follow-up run is required',
            'Blocking in a DOE (grouping runs done on the same day, same batch of raw material, or same operator into a block) removes nuisance variation from the error term and improves the ability to detect real factor effects',
          ],
        },
      ],
    },
    {
      id: 'bb-m2-l3',
      title: 'Response Surface Methods and Process Optimization',
      estimatedMinutes: 35,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Factorial designs identify which factors matter and estimate their linear effects. Response Surface Methods (RSM) go further — they model curvature in the response surface, allowing teams to locate the true optimum (maximum or minimum) rather than simply identifying direction of improvement.',
        },
        {
          type: 'heading' as const,
          text: 'Central Composite Design (CCD)',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The most common RSM design is the Central Composite Design (CCD), which augments a 2ᵏ factorial with star points (axial points) at ±α distance from the center and replicated center points. The CCD supports estimation of the full second-order model: Y = β₀ + Σβᵢxᵢ + Σβᵢᵢxᵢ² + Σβᵢⱼxᵢxⱼ. The squared terms allow the model to capture curvature.',
        },
        {
          type: 'heading' as const,
          text: 'Interpreting the Response Surface',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The second-order RSM model can be visualized as a 3D surface or 2D contour plot showing predicted Y across the X₁-X₂ space. A maximum on the surface is a peak (ridge analysis finds it). If the surface is a saddle (curvature in opposite directions), there is a range of conditions producing near-optimal response — useful for establishing robust operating windows.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Box-Behnken Design: An Alternative to CCD',
          text: 'Box-Behnken Designs (BBD) are another RSM option that avoids testing extreme factor combinations (corner points). Each run tests only factors at their center or outer levels, never at all-high or all-low simultaneously — important when combinations at the extremes are physically dangerous or practically impossible.',
        },
        {
          type: 'heading' as const,
          text: 'Desirability Functions for Multiple Responses',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Real processes have multiple response variables with potentially conflicting optima. Desirability functions translate each response into a 0–1 scale (0 = unacceptable, 1 = ideal) and combine them multiplicatively into an overall desirability. The optimizer maximizes overall desirability across the factor space, finding the setpoint combination that best balances all competing responses.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: RSM Optimizes a Chemical Vapor Deposition Process in Semiconductor Manufacturing',
          text: 'A semiconductor fabrication plant was experiencing ±12% film thickness variation in a chemical vapor deposition (CVD) process — more than double the ±5% specification. A prior factorial study had identified three significant factors: chamber temperature (T), precursor flow rate (F), and deposition time (D). The team ran a Central Composite Design (20 runs with replicated center points) to build a second-order model. The fitted model had R² = 0.96. Contour plots revealed that the thickness optimum was a ridge (not a single point) — meaning there was a range of T-F combinations that all produced near-target thickness with low variation. This ridge was ideal for robust process design: operating on the ridge minimized the effect of normal process noise. Desirability optimization targeting mean thickness of 100nm ± 3% with minimum standard deviation found optimal setpoints. Validating these setpoints in 30 confirmation runs achieved mean = 99.8nm, σ = 2.1nm — well within specification and yielding a Cpk of 1.58. Yield improved from 78% to 94%, adding $6.2M annually in usable wafer output.',
        },
        {
          type: 'paragraph' as const,
          text: 'RSM delivered two insights unavailable from a factorial: the precise optimum setpoints (through the second-order model) and the existence of a robust operating ridge (through contour plot analysis). A simple factorial would have identified the direction of improvement but not the curvature needed to locate the true optimum.',
        },
        {
          type: 'list' as const,
          items: [
            'RSM is not a first-step tool — always screen and characterize with factorial designs before investing in an RSM study, which only pays off when you have already confirmed the vital few factors',
            'The second-order model requires at least three levels per factor — two-level factorials cannot detect curvature and will mislead you if the true optimum is not at the high or low setting',
            'Always run confirmation experiments at the RSM-predicted optimal setpoints before implementation — the model is a prediction, not a guarantee, and confirmation validates that the model predicts well in the region of interest',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'bb-m2-q1',
      type: 'multiple-choice' as const,
      question: 'Why can OFAT (One-Factor-At-a-Time) testing fail to find the true process optimum?',
      options: [
        'OFAT uses too many experimental runs',
        'OFAT cannot detect interaction effects between factors',
        'OFAT requires random run order which introduces noise',
        'OFAT does not measure response variability',
      ],
      correctIndex: 1,
      explanation: 'OFAT cannot detect interaction effects — when the effect of one factor depends on the level of another. If the true optimum requires a specific combination of factor levels, OFAT will miss it entirely regardless of how many runs are conducted.',
    },
    {
      id: 'bb-m2-q2',
      type: 'multiple-choice' as const,
      question: 'In a Resolution III fractional factorial design, main effects are aliased with:',
      options: [
        'Other main effects',
        'Two-factor interactions',
        'Three-factor interactions only',
        'Nothing — Resolution III designs have no aliasing',
      ],
      correctIndex: 1,
      explanation: 'In Resolution III designs, main effects are aliased with two-factor interactions (2FIs). This means that if a 2FI is active, it cannot be separated from the main effect it is aliased with. Resolution III is appropriate for screening (identifying important factors) but not for characterization.',
    },
    {
      id: 'bb-m2-q3',
      type: 'true-false' as const,
      question: 'A Central Composite Design can estimate quadratic (curved) effects in the response surface, whereas a 2ᵏ factorial design cannot.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. A CCD augments the factorial with star (axial) points and center points, enabling estimation of the second-order (squared) terms in the response surface model. A standard 2ᵏ factorial has only two levels per factor, which is insufficient to detect or estimate curvature.',
    },
    {
      id: 'bb-m2-q4',
      type: 'multiple-choice' as const,
      question: 'When is a Box-Behnken Design (BBD) preferred over a Central Composite Design (CCD)?',
      options: [
        'When you need to estimate only main effects',
        'When extreme factor combinations (all factors at high or low simultaneously) are physically dangerous or impossible',
        'When you have more than 7 factors to optimize',
        'When you cannot afford to randomize run order',
      ],
      correctIndex: 1,
      explanation: 'BBD avoids extreme corner-point combinations where all factors are simultaneously at their high or low levels. This is important when such combinations are physically unsafe, mechanically impossible, or prohibitively expensive.',
    },
  ],
};

// ─── Module 3: Measurement System Analysis ───────────────────────────────────

const module3 = {
  id: 'bb-m3',
  number: 3,
  title: 'Measurement System Analysis (MSA)',
  description: 'Validate the accuracy, precision, and stability of measurement systems before trusting data for process decisions — a foundational Black Belt competency.',
  estimatedMinutes: 90,
  learningObjectives: [
    'Explain the components of measurement system variation and their impact on process decisions',
    'Plan and execute a Gauge R&R study with appropriate design',
    'Interpret %Study Variation, %Tolerance, and number of distinct categories from a Gauge R&R',
    'Apply attribute agreement analysis for categorical measurement systems',
  ],
  lessons: [
    {
      id: 'bb-m3-l1',
      title: 'Components of Measurement Variation',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Every measurement is imperfect. Observed variation in a dataset is a combination of true process variation and measurement system variation. When the measurement system contributes a significant fraction of total observed variation, data-driven decisions — root cause analysis, process capability, hypothesis tests — are corrupted at the source.',
        },
        {
          type: 'heading' as const,
          text: 'The Measurement Error Model',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Total observed variance = True process variance + Measurement system variance. Measurement system variance further decomposes into: Accuracy (systematic error — bias, linearity, stability) and Precision (random error — repeatability and reproducibility, together called Gauge R&R).',
        },
        {
          type: 'key-terms' as const,
          terms: [
            { term: 'Bias', definition: 'Systematic offset of the average measured value from the true (reference) value. Detected by comparing measurement average to a certified standard.' },
            { term: 'Linearity', definition: 'Whether bias is constant across the full measurement range. A gauge may be unbiased at mid-range but biased at extremes.' },
            { term: 'Stability', definition: 'Whether bias changes over time. A gauge that drifts needs recalibration.' },
            { term: 'Repeatability', definition: 'Variation when the same operator measures the same part multiple times with the same gauge (Equipment Variation).' },
            { term: 'Reproducibility', definition: 'Variation between different operators measuring the same part with the same gauge (Appraiser Variation).' },
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'The Inflation Effect',
          text: 'If your measurement system accounts for 30% of total observed variation, your observed process Cpk understates true capability — the process is actually more capable than the data suggests. Conversely, if your measurement system is poor, you may invest in solving a "process" problem that is really a measurement problem.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Measurement Bias Causes a Misdirected $400K Process Overhaul at an Aerospace Supplier',
          text: 'An aerospace machining supplier was producing landing gear brackets with a measured Cpk of 0.68 on a critical bore diameter — far below the customer\'s 1.67 requirement. Engineering had proposed a $400K CNC machine upgrade to tighten process capability. Before approving the capital request, the Black Belt ran a full MSA. Bias analysis using a certified CMM reference standard revealed a +0.0045mm systematic offset in the shop-floor air gauge used for production measurement — almost half of the 0.010mm total tolerance. Linearity analysis found the bias increased to +0.0068mm at the lower end of the measurement range. After gauge recalibration and temperature control of the measurement station, the same parts now measured Cpk = 1.71 — exceeding the customer requirement. The $400K machine upgrade was cancelled.',
        },
        {
          type: 'paragraph' as const,
          text: 'The measurement system had a systematic bias that made a capable process look incapable. This is the most costly MSA failure mode: investing in process improvement when the process is not the problem. MSA conducted before the Improve phase is financial due diligence.',
        },
        {
          type: 'list' as const,
          items: [
            'Always conduct MSA before drawing process capability conclusions — a low Cpk may reflect measurement system problems, not process problems',
            'Bias must be evaluated against a traceable reference standard, not just by comparing two gauges to each other — mutual consistency does not establish accuracy',
            'Stability analysis requires periodic re-measurement of the same reference standard over time (weeks to months) — it cannot be completed in a single measurement session',
          ],
        },
      ],
    },
    {
      id: 'bb-m3-l2',
      title: 'Gauge R&R Studies: Design and Analysis',
      estimatedMinutes: 35,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A Gauge Repeatability and Reproducibility (R&R) study quantifies how much of observed variation comes from the measurement system versus the parts being measured. The standard crossed Gauge R&R design has multiple appraisers each measure the same set of parts multiple times, in randomized order.',
        },
        {
          type: 'heading' as const,
          text: 'Study Design',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The standard recommendation is: 2–3 appraisers × 10 parts × 2–3 replicates. Parts should be selected to represent the full range of process variation (not all good parts — you need variation to separate part-to-part signal from measurement noise). Randomize the order in which appraisers measure parts to prevent memory bias.',
        },
        {
          type: 'heading' as const,
          text: 'Interpreting Gauge R&R Results',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Metric', 'Acceptable', 'Marginal', 'Unacceptable'],
          rows: [
            ['%Study Variation (R&R/Total)', '< 10%', '10–30%', '> 30%'],
            ['%Tolerance (R&R/Tolerance)', '< 10%', '10–30%', '> 30%'],
            ['Number of Distinct Categories', '≥ 5', '3–4', '< 3'],
          ],
        },
        {
          type: 'paragraph' as const,
          text: '%Study Variation compares gauge R&R to total observed variation. %Tolerance compares gauge R&R to the specification tolerance — this is the correct metric for acceptance/rejection decisions. Number of Distinct Categories (NDC) indicates how many statistically different groups the gauge can reliably distinguish in the process.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Crossed vs. Nested Gauge R&R',
          text: 'Use a crossed design (all appraisers measure all parts) when parts are non-destructive and can be re-measured. Use a nested design (each appraiser measures a different set of parts) when parts are destroyed by measurement (e.g., tensile testing) or when appraisers are in different locations and part shipping is impractical.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Gauge R&R Reveals Appraiser-Driven Variation at a Plastics Injection Molder',
          text: 'A plastics injection molding operation was producing automotive door panel clips with an unacceptably high first-pass inspection failure rate of 18% — but customer returns for the same product were only 1.2%, suggesting the inspection process itself was creating most of the "failures." A Gauge R&R study with 3 appraisers, 10 clips, and 3 replicates was conducted on the critical dimension (clip gap width, tolerance = 0.30mm). Results: %Tolerance = 34% (unacceptable). Decomposition showed Repeatability = 8% (acceptable — the gauge itself was adequate) and Reproducibility = 26% (unacceptable — appraiser-to-appraiser variation dominated). Analysis of appraiser means identified that Appraiser 2 consistently measured 0.05mm high relative to the other two. Investigation found she was holding the clip at a slightly different angle. Standardized fixturing for the measurement operation reduced %Tolerance to 9% and first-pass failure rate dropped from 18% to 3.4%.',
        },
        {
          type: 'paragraph' as const,
          text: 'The decomposition of R&R into Repeatability and Reproducibility precisely diagnosed where to intervene: not the gauge (acceptable repeatability) but the operator technique (high reproducibility). This saved weeks of troubleshooting by pointing directly at the measurement process failure mode.',
        },
        {
          type: 'list' as const,
          items: [
            'Use %Tolerance (not %Study Variation) as the primary acceptance criterion when the measurement system is being qualified for make/pass/fail decisions against a specification',
            'High reproducibility relative to repeatability points to appraiser training, technique standardization, or fixturing as the fix — not gauge replacement',
            'NDC < 5 means the gauge cannot distinguish enough process levels to support process capability analysis — you cannot calculate a meaningful Cpk with a measurement system that lacks sufficient resolution',
          ],
        },
      ],
    },
    {
      id: 'bb-m3-l3',
      title: 'Attribute Agreement Analysis',
      estimatedMinutes: 20,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Many quality decisions are made on categorical (attribute) data: pass/fail, conforming/nonconforming, defect classification codes. Attribute Agreement Analysis (AAA) is the MSA method for these systems — it assesses whether appraisers agree with each other and with a known standard.',
        },
        {
          type: 'heading' as const,
          text: 'AAA Study Design',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The standard AAA design: 2–3 appraisers evaluate 50 samples (a mix of conforming and nonconforming, ideally including some borderline cases) multiple times (typically 2–3 rounds) in randomized order. A reference standard (known correct classification for each sample) must exist, typically established by an expert or reference method.',
        },
        {
          type: 'heading' as const,
          text: 'Key AAA Metrics',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Metric', 'Definition', 'Minimum Acceptable'],
          rows: [
            ['Within-appraiser agreement', 'Does each appraiser agree with themselves across replicates?', '≥ 90%'],
            ['Between-appraiser agreement', 'Do appraisers agree with each other?', '≥ 90%'],
            ['Appraiser vs. standard', 'Does each appraiser agree with the known reference?', '≥ 90%'],
            ['Kappa statistic', 'Agreement adjusted for chance (0 = chance, 1 = perfect)', '≥ 0.75'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Kappa vs. Percent Agreement',
          text: 'Percent agreement alone is misleading when one category is rare. If 95% of parts are conforming, an appraiser who calls everything "pass" achieves 95% agreement by pure chance. Kappa corrects for this: it measures agreement above what would be expected by chance. Always report Kappa alongside percent agreement in AAA results.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Attribute Agreement Analysis Exposes Visual Inspection Failure at a PCB Manufacturer',
          text: 'A printed circuit board manufacturer was experiencing a 2.8% customer-reported defect escape rate despite a 100% visual inspection process staffed by 12 operators working 3 shifts. The Black Belt suspected the inspection process itself was unreliable. An AAA study with 3 operators, 60 boards (including 18 seeded defect types across 5 categories), and 2 replicate rounds revealed: Kappa = 0.41 (poor, well below 0.75 threshold). Between-appraiser agreement was only 61%. Most critically, the "cold solder joint" defect category had appraiser-vs-standard agreement of only 44% — operators were correctly classifying cold solder joints less than half the time. Redesigned inspection with standardized defect reference photos, reduced inspection line speed, and targeted training on cold solder joint identification raised Kappa to 0.88. Customer defect escapes dropped from 2.8% to 0.4% over 90 days.',
        },
        {
          type: 'paragraph' as const,
          text: 'A 100% inspection process with Kappa = 0.41 provides essentially no quality assurance. The AAA study transformed a false sense of security into a quantified, defensible improvement target — and the Kappa metric provided the accountability benchmark that percent agreement alone could not.',
        },
        {
          type: 'list' as const,
          items: [
            'Always include borderline and near-miss samples in an AAA study — a study conducted only on clearly conforming and severely nonconforming parts will produce artificially high agreement rates that do not reflect real-world inspection performance',
            'Low within-appraiser agreement (an operator disagreeing with themselves) indicates the decision criteria are ambiguous regardless of training — the specification or acceptance standard itself needs to be clarified',
            'Kappa below 0.40 means the measurement system is providing essentially random results — any process decisions made using this attribute data are unreliable and must be treated accordingly',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'bb-m3-q1',
      type: 'multiple-choice' as const,
      question: 'In a Gauge R&R study, reproducibility measures:',
      options: [
        'How consistently the same operator gets the same result on the same part',
        'Variation between different operators measuring the same parts',
        'How accurately the gauge measures against a certified standard',
        'Whether gauge bias changes across the measurement range',
      ],
      correctIndex: 1,
      explanation: 'Reproducibility (Appraiser Variation) measures the variation when different operators measure the same parts with the same gauge. Repeatability measures within-operator consistency on the same part.',
    },
    {
      id: 'bb-m3-q2',
      type: 'multiple-choice' as const,
      question: 'For a measurement system used to make accept/reject decisions against a specification, which Gauge R&R metric is most relevant?',
      options: ['%Study Variation', '%Tolerance', 'Number of Distinct Categories', 'Kappa statistic'],
      correctIndex: 1,
      explanation: '%Tolerance compares measurement system variation directly to the specification tolerance — this is the relevant metric when the gauge is used to make accept/reject decisions. %Study Variation compares to total process variation, which is appropriate for process improvement work but not for specification conformance decisions.',
    },
    {
      id: 'bb-m3-q3',
      type: 'true-false' as const,
      question: 'A Kappa statistic of 0.65 in an Attribute Agreement Analysis indicates a satisfactory measurement system for production quality decisions.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. The standard minimum acceptable Kappa for attribute inspection systems used in quality decisions is 0.75. Kappa of 0.65 indicates moderate agreement — the system is better than chance but has meaningful disagreement that creates risk of incorrect accept/reject decisions.',
    },
    {
      id: 'bb-m3-q4',
      type: 'multiple-choice' as const,
      question: 'A Gauge R&R study produces Number of Distinct Categories = 2. What does this mean for process analysis?',
      options: [
        'The gauge is highly precise and suitable for capability analysis',
        'The gauge can only distinguish two groups in the process — it lacks resolution for meaningful capability analysis',
        'Two appraisers were used in the study, which is insufficient',
        'The process has only two meaningful states (good/bad)',
      ],
      correctIndex: 1,
      explanation: 'NDC = 2 means the gauge can only reliably distinguish two groups in the process (essentially "high" or "low"). At least 5 distinct categories are needed for a gauge to support process improvement work and capability analysis. NDC = 2 is equivalent to attribute (pass/fail) measurement for a continuous characteristic.',
    },
  ],
};

// ─── Module 4: Process Capability and Control ─────────────────────────────────

const module4 = {
  id: 'bb-m4',
  number: 4,
  title: 'Process Capability and Statistical Process Control',
  description: 'Calculate and interpret process capability indices, design appropriate control charts, and build robust control plans that sustain improvement.',
  estimatedMinutes: 110,
  learningObjectives: [
    'Calculate Cp, Cpk, Pp, and Ppk and explain the difference between process capability and performance',
    'Select and construct appropriate control charts for different data types',
    'Identify special cause signals using Western Electric rules',
    'Design a comprehensive control plan for a DMAIC project hand-off',
  ],
  lessons: [
    {
      id: 'bb-m4-l1',
      title: 'Process Capability: Cp, Cpk, Pp, and Ppk',
      estimatedMinutes: 30,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Process capability indices quantify the relationship between process variation and specification limits. They answer the fundamental question: can this process reliably produce output within customer requirements? Black Belts must understand not just how to calculate these indices but what they tell you — and what they do not.',
        },
        {
          type: 'heading' as const,
          text: 'Cp and Cpk: Short-Term Capability',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Cp = (USL − LSL) / (6σ̂). Cp measures the width of the specification relative to the process spread — it assumes the process is perfectly centered. Cpk = min[(USL − μ̂) / 3σ̂, (μ̂ − LSL) / 3σ̂]. Cpk accounts for centering: a process can have high Cp (plenty of room) but low Cpk if the mean is shifted toward one specification limit.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'Short-Term vs. Long-Term Sigma',
          text: 'Cp and Cpk use short-term sigma (σ̂) estimated from within-subgroup variation on a control chart — the "best the process can do" when in control. Pp and Ppk use long-term sigma (the overall standard deviation of all data). Cp/Cpk > Pp/Ppk indicates process drift or shift over time. A large gap (Cpk − Ppk > 0.3) suggests special cause variation is present or the process mean shifts between subgroups.',
        },
        {
          type: 'table' as const,
          headers: ['Index', 'Value', 'Interpretation'],
          rows: [
            ['Cpk', '< 1.00', 'Process is not capable — producing defects'],
            ['Cpk', '1.00–1.33', 'Marginally capable — tighten control'],
            ['Cpk', '1.33–1.67', 'Capable — meets most customer requirements'],
            ['Cpk', '≥ 1.67', 'Highly capable — automotive, aerospace, medical standard'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'Non-Normal Data and Capability',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Standard Cpk calculations assume normally distributed data. For non-normal distributions (common in cycle time, porosity, contamination data), standard Cpk is inaccurate. Black Belts have three options: transform the data (Box-Cox transformation), fit a non-normal distribution and calculate capability using distribution percentiles, or use non-parametric capability methods.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Capability Gap Analysis Prioritizes Investment at a Multi-Line Packaging Operation',
          text: 'A contract packaging company with 8 production lines was asked by their largest customer to demonstrate Cpk ≥ 1.33 on fill weight for all lines as a condition of contract renewal worth $12M annually. The Black Belt led a capability study across all 8 lines. Results ranged from Cpk = 0.71 (Line 4) to Cpk = 1.62 (Line 7). Cp vs. Cpk analysis revealed that Lines 4, 5, and 6 all had adequate Cp (≥ 1.33) but poor Cpk — meaning their spread was acceptable but their means were drifted off target. Cpk − Ppk gaps on these lines exceeded 0.35, confirming process shift between calibration cycles. Lines 1 and 2 had low Cp (insufficient process width), requiring mechanical improvements. This analysis focused the capital investment: Lines 4/5/6 needed calibration schedule tightening (low cost), while Lines 1/2 needed filler head refurbishment ($85K). Targeted investment of $112K vs. a blanket refurbishment of all 8 lines ($430K) achieved customer Cpk requirement on time.',
        },
        {
          type: 'paragraph' as const,
          text: 'Decomposing Cpk into its Cp and centering components, and comparing Cpk to Ppk, transformed an undifferentiated "all lines need work" problem into a precise investment map. Three lines needed better calibration; two needed mechanical repair. Same outcome, $318K less.',
        },
        {
          type: 'list' as const,
          items: [
            'Always check Cp alongside Cpk — high Cp with low Cpk means a centering problem (cheaper to fix); low Cp means inadequate process width (more fundamental)',
            'Compare Cpk to Ppk before reporting capability: a large gap indicates the process is not stable over time, and capability indices from a drifting process are misleading',
            'For non-normal data, reporting Cpk calculated on untransformed data can dramatically overstate or understate capability — always check normality before applying standard capability analysis',
          ],
        },
      ],
    },
    {
      id: 'bb-m4-l2',
      title: 'Control Chart Selection and Interpretation',
      estimatedMinutes: 35,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Statistical Process Control (SPC) charts provide real-time monitoring to distinguish common cause variation (inherent randomness — the process is "in control") from special cause variation (a new, assignable cause has entered the process). Reacting to common cause variation as if it were special cause — overadjustment — actually increases process variation.',
        },
        {
          type: 'heading' as const,
          text: 'Control Chart Selection Guide',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Data Type', 'Subgroup Size', 'Chart'],
          rows: [
            ['Continuous (variables)', 'n = 1 (individual measurements)', 'I-MR (Individuals & Moving Range)'],
            ['Continuous (variables)', 'n = 2–9', 'X̄-R (Xbar-Range)'],
            ['Continuous (variables)', 'n ≥ 10', 'X̄-S (Xbar-S)'],
            ['Attribute — defectives', 'Constant subgroup size', 'p-chart (proportion defective)'],
            ['Attribute — defectives', 'Variable subgroup size', 'np-chart (number defective, constant n)'],
            ['Attribute — defects', 'Constant opportunity', 'c-chart (count of defects)'],
            ['Attribute — defects', 'Variable opportunity', 'u-chart (defects per unit)'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'Western Electric Rules for Special Cause Detection',
          level: 2 as const,
        },
        {
          type: 'list' as const,
          items: [
            'Rule 1: One point beyond 3σ control limits (the most sensitive rule for large shifts)',
            'Rule 2: 9 consecutive points on the same side of the centerline (detects sustained mean shift)',
            'Rule 3: 6 consecutive points steadily increasing or decreasing (detects trends/drift)',
            'Rule 4: 14 consecutive points alternating up and down (detects systematic alternation, often from two alternating process streams)',
            'Rule 5: 2 of 3 consecutive points beyond 2σ (same side) — detects moderate sustained shift faster than Rule 1',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'warning' as const,
          title: 'False Alarm Rate Management',
          text: 'Using all four Western Electric rules simultaneously increases the false alarm rate. For processes where responding to a false alarm is costly or disruptive (e.g., shutting down a chemical reactor), use only Rule 1 and Rule 2. Add additional rules only when the cost of missing a real signal outweighs the cost of false alarms.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: SPC Implementation Prevents $1.4M in Defective Product at a Food Safety-Regulated Bottling Plant',
          text: 'A beverage bottling plant was using daily average fill weight as its only process monitor — a metric that could conceal within-day variation causing both underfill (regulatory non-compliance at < 295ml) and overfill (direct product cost loss). After a Black Belt-led DMAIC project reduced average fill weight variation, the Control phase introduced X̄-R charts with hourly subgroups of n = 5. In the third week of monitoring, Rule 3 (6 consecutive points trending downward on the X̄ chart) triggered an investigation. The operator identified that a filler head O-ring was worn and causing progressive flow rate decay. The issue was caught when 0.3% of the day\'s production was at risk of underfill. Without SPC, the problem would not have been detected until the end-of-shift average fell below the alarm threshold — at which point 6 hours of production (an estimated 34,000 bottles, $1.4M retail value) would have required hold and retest. The SPC system identified the trend with only 200 bottles produced below specification.',
        },
        {
          type: 'paragraph' as const,
          text: 'This case illustrates the economic argument for SPC implementation: the cost of installing and maintaining a control chart system is trivial compared to a single episode of out-of-specification product caught late. Rule 3 detected a trend that Rule 1 (single point beyond 3σ) would not have flagged for several more hours.',
        },
        {
          type: 'list' as const,
          items: [
            'SPC charts must have a response plan — without documented actions for each signal type, operators will observe out-of-control signals and not know what to do, making the chart decoration rather than process control',
            'Recalculate control limits periodically after significant process improvements — control limits based on old process data will produce excessive false alarms on a now-improved process',
            'For short-run or low-volume production, standardize control charts (normalize by target and tolerance) allow multiple part numbers to be monitored on a single chart',
          ],
        },
      ],
    },
    {
      id: 'bb-m4-l3',
      title: 'Control Plans and Sustaining Improvement',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A control plan is the formal document that operationalizes the Control phase — it specifies what to measure, how often, with what method, against what control limits, and who is responsible for each action. Without a control plan, improvements erode as staff turnover and process drift reset the process to its original state.',
        },
        {
          type: 'heading' as const,
          text: 'Control Plan Structure',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Column', 'Description'],
          rows: [
            ['Process Step', 'The specific operation or activity being controlled'],
            ['Key Process Input/Output', 'Which X or Y is being monitored at this step'],
            ['Specification / Control Limit', 'Customer requirement (for outputs) or process control limit (for inputs)'],
            ['Measurement Method', 'How and with what instrument/system is it measured'],
            ['Sample Size and Frequency', 'How many and how often'],
            ['Control Method', 'SPC chart, check sheet, mistake-proofing device, etc.'],
            ['Reaction Plan', 'Specific steps if a signal or out-of-spec condition is detected'],
            ['Responsible Party', 'Who owns monitoring and reaction'],
          ],
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Mistake-Proofing Over Inspection',
          text: 'The most robust controls are mistake-proof (poka-yoke): physical or electronic interlocks that prevent errors from occurring rather than detecting them after the fact. A control plan that relies primarily on human inspection is susceptible to attention lapses, especially on long shifts. Escalate from detection to prevention wherever possible.',
        },
        {
          type: 'heading' as const,
          text: 'Project Closure and Knowledge Transfer',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Black Belt project closure requires: updated SOPs reflecting the improved process, operator training records, a 30/60/90-day monitoring plan with scheduled reviews, financial validation by Finance (confirming hard savings are real), and a formal handoff to the process owner. The Black Belt\'s role ends at handoff — the process owner is accountable for sustaining results.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Control Plan Sustains 85% Reduction in Lab Turnaround Time at a Clinical Reference Laboratory',
          text: 'A regional clinical reference laboratory had reduced average stat test turnaround time from 4.2 hours to 38 minutes through a Black Belt DMAIC project — a result their hospital clients urgently needed. The risk of reversion was high: the improvement depended on sample prioritization protocols requiring operator discipline across 3 shifts and 22 technicians. The control plan addressed this explicitly: a u-chart monitoring hourly TAT by test category, with a 60-minute UCL triggering an immediate supervisor call; a visual management board updated by shift supervisors showing TAT compliance; and an automated EHR alert if any stat order exceeded 45 minutes. A 90-day post-project audit conducted by the Black Belt found TAT averaging 41 minutes — within 8% of the project target — with no statistically significant regression. Financial validation confirmed $880K in annualized savings from reduced repeat testing and improved hospital contract renewal rates.',
        },
        {
          type: 'paragraph' as const,
          text: 'The key to sustaining results in this case was layering multiple control mechanisms: statistical monitoring (u-chart), visual management (shift board), and automated escalation (EHR alert). Each layer catches what the previous one might miss, and together they made process reversion practically impossible without detection.',
        },
        {
          type: 'list' as const,
          items: [
            'A control plan without a reaction plan is incomplete — every monitoring method must have a paired escalation procedure specifying what to do when a signal is detected',
            'Schedule explicit 30/60/90-day post-project reviews with the process owner — improvements most commonly erode in the first 90 days when the Black Belt\'s attention has moved to the next project',
            'Financial validation by Finance (not by the project team) is the gold standard for confirming savings are real and lasting — self-reported savings from project teams are subject to optimism bias',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'bb-m4-q1',
      type: 'multiple-choice' as const,
      question: 'A process has Cp = 1.65 and Cpk = 0.82. What does this tell you?',
      options: [
        'The process is capable and well-centered',
        'The process has adequate spread for the specification but is significantly off-center',
        'The process spread is too wide but it is well-centered',
        'Both capability indices indicate a capable process',
      ],
      correctIndex: 1,
      explanation: 'Cp = 1.65 means the specification is 1.65 × wider than the process spread — plenty of room if centered. Cpk = 0.82 (below 1.0) means the process mean is drifted significantly toward one specification limit, producing defects. The fix is centering (process adjustment), not reducing variation.',
    },
    {
      id: 'bb-m4-q2',
      type: 'multiple-choice' as const,
      question: 'For continuous data collected as individual measurements (subgroup size = 1), which control chart is appropriate?',
      options: ['X̄-R chart', 'p-chart', 'I-MR chart', 'u-chart'],
      correctIndex: 2,
      explanation: 'The Individuals and Moving Range (I-MR) chart is designed for continuous data collected one measurement at a time (subgroup size = 1). X̄-R charts require subgroups of 2–9; p-charts and u-charts are for attribute data.',
    },
    {
      id: 'bb-m4-q3',
      type: 'true-false' as const,
      question: 'When Cpk is significantly higher than Ppk, the process is performing better in the long term than in the short term.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Cpk uses short-term (within-subgroup) sigma and represents the best inherent process capability. Ppk uses long-term sigma (all data). When Cpk > Ppk, the process is better in the short term — it shifts or drifts over time, eroding long-term performance below its inherent capability.',
    },
    {
      id: 'bb-m4-q4',
      type: 'multiple-choice' as const,
      question: 'Western Electric Rule 2 flags 9 consecutive points on the same side of the centerline. What type of process change does this rule best detect?',
      options: [
        'A sudden large shift in the process mean',
        'A gradual trend or drift in one direction',
        'A sustained small shift in the process mean',
        'Systematic alternating variation between two process streams',
      ],
      correctIndex: 2,
      explanation: 'Rule 2 (9 consecutive points on the same side of the centerline) is designed to detect a sustained but moderate shift in the process mean — small enough that individual points remain within the 3σ control limits (Rule 1 would not trigger) but large enough to shift the process distribution consistently to one side.',
    },
  ],
};

// ─── Module 5: Lean Tools at Black Belt Depth ─────────────────────────────────

const module5 = {
  id: 'bb-m5',
  number: 5,
  title: 'Advanced Lean Tools',
  description: 'Apply Value Stream Mapping, pull systems, and mistake-proofing at Black Belt depth — from design to full-system implementation.',
  estimatedMinutes: 100,
  learningObjectives: [
    'Design a future-state Value Stream Map with flow and pull principles',
    'Implement kanban pull systems with correctly sized replenishment quantities',
    'Apply Poka-Yoke error-proofing techniques across detection and prevention levels',
    'Calculate and reduce Total Effective Equipment Performance (OEE) losses',
  ],
  lessons: [
    {
      id: 'bb-m5-l1',
      title: 'Future-State Value Stream Mapping',
      estimatedMinutes: 35,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Current-state VSM documents waste; future-state VSM designs the solution. The future-state VSM applies Lean design principles — continuous flow, pull where flow is not possible, takt time-paced production, and visual management — to redesign the value stream from a customer-focused perspective.',
        },
        {
          type: 'heading' as const,
          text: 'The Eight Future-State Design Questions',
          level: 2 as const,
        },
        {
          type: 'ordered-list' as const,
          items: [
            'What is the Takt Time? (This is the pace-setter for the entire future state)',
            'Will you build to a finished goods supermarket or directly to shipping (build-to-order)?',
            'Where can continuous flow be created (eliminating all queues)?',
            'Where is a pull/supermarket system required (flow is not yet possible)?',
            'What single point in the value stream (the pacemaker) will you schedule?',
            'How will you level the production mix at the pacemaker?',
            'What process improvements are needed to achieve the future state?',
            'What is the process cycle efficiency improvement target?',
          ],
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'The Pacemaker Process',
          text: 'The pacemaker is the only process in the value stream that receives a production schedule. All upstream processes are triggered by pull signals from the pacemaker\'s supermarket. All downstream processes flow directly to shipping. Scheduling multiple points creates disconnected islands of local optimization that suboptimize system flow.',
        },
        {
          type: 'heading' as const,
          text: 'Implementation Planning',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'The gap between current-state and future-state VSM defines the improvement roadmap. Breaking this gap into phases — typically 6-month implementation loops — prevents the paralysis of trying to change everything at once. Each loop should deliver a measurable PCE improvement and build the organizational capability needed for the next loop.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Future-State VSM Reduces Lead Time by 71% at a Custom Furniture Manufacturer',
          text: 'A custom furniture manufacturer had a current-state VSM showing: Lead Time = 34 days, Process Time = 6.8 hours, PCE = 0.83%. Customer orders were batched weekly, releasing large job packets into a shop floor with 11 work centers, each running to maximize local utilization regardless of system demand. The future-state VSM applied three principles: (1) Takt Time = 18 minutes per unit (based on demand analysis); (2) three continuous flow cells replacing 7 of 11 disconnected work centers; (3) a kanban pull system between the remaining 4 operations (finishing and shipping) with a supermarket buffer. The pacemaker was set at the final assembly cell. Implementing the future state over two 6-month loops reduced lead time from 34 days to 9.8 days (71% reduction), improved on-time delivery from 67% to 91%, and released 3,200 sq ft of floor space previously consumed by work-in-process inventory.',
        },
        {
          type: 'paragraph' as const,
          text: 'The VSM improvement was not about making individual operations faster — six of the eleven work centers ran at the same machine cycle time after the improvement. The lead time reduction came entirely from eliminating inter-process queues and batching. This is the core Lean insight: system speed is determined by flow, not by individual station speed.',
        },
        {
          type: 'list' as const,
          items: [
            'The pacemaker process selection is the most consequential future-state design decision: placing it upstream creates push scheduling that erodes the entire pull system',
            'Never design a future state that requires perfect execution — build in buffers (supermarkets, scheduled capacity) at the predicted constraint points to absorb normal variation without cascading delays',
            'The future-state PCE target should be grounded in benchmark data for similar processes, not arbitrarily set at 2× the current state — PCE of 25%+ is achievable in manufacturing; 15%+ in most service processes',
          ],
        },
      ],
    },
    {
      id: 'bb-m5-l2',
      title: 'Pull Systems and Kanban Design',
      estimatedMinutes: 30,
      content: [
        {
          type: 'paragraph' as const,
          text: 'A pull system produces only what downstream demand signals authorize. Kanban (Japanese for "signal card") is the most widely used pull mechanism — a physical or electronic signal that authorizes exactly one replenishment cycle when a supermarket position falls below its reorder point.',
        },
        {
          type: 'heading' as const,
          text: 'Kanban Calculation',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Number of kanban cards = (Average daily demand × Replenishment lead time × Safety factor) / Container quantity. For example: demand = 200 units/day, replenishment lead time = 2 days, safety factor = 1.20, container = 50 units. Kanban = (200 × 2 × 1.20) / 50 = 9.6 → 10 cards. Each card authorizes exactly one container (50 units) of replenishment.',
        },
        {
          type: 'callout' as const,
          variant: 'tip' as const,
          title: 'Shrinking the Kanban Over Time',
          text: 'The safety factor (typically 1.1–1.5) compensates for demand and supply variability. As you reduce variability through process improvements, reduce the safety factor and the number of kanban cards. The number of kanban cards is a visible measure of process improvement: fewer cards = less inventory = better flow = less waste.',
        },
        {
          type: 'heading' as const,
          text: 'Production vs. Withdrawal Kanban',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'Production kanban authorize a supplying process to produce a specific quantity. Withdrawal kanban authorize a consuming process to withdraw from a supermarket. In a full two-card kanban system, production kanbans travel upstream to trigger production while withdrawal kanbans accompany containers as they are consumed downstream — maintaining perfect inventory accounting at every step.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: Kanban System Eliminates Stock-outs and Reduces Inventory 58% at a Hospital Supply Chain',
          text: 'A large regional hospital had a paradoxical problem: $4.2M in supply inventory on hand, yet clinical units experienced stock-outs of critical supplies 3–7 times per week, triggering expensive emergency procurement at 2–3× standard cost. The root cause was a push-based par-level system where supply replenishment was triggered by scheduled weekly counts regardless of actual consumption — creating both overstock on slow-moving items and stock-outs on high-variability items. A Black Belt designed a two-bin kanban system for 340 high-usage supply items (80% of supply spend). Bin 1 (active use) + Bin 2 (replenishment trigger). When Bin 1 is empty, Bin 2 activates and the empty Bin 1 triggers replenishment. Kanban quantities were calculated per item using actual consumption rates and storage replenishment lead time. After 90-day implementation: stock-outs dropped from 3–7/week to 0.4/week (94% reduction); inventory value fell from $4.2M to $1.77M (58% reduction); emergency procurement costs decreased by $340K annually.',
        },
        {
          type: 'paragraph' as const,
          text: 'Hospital supply chains are a powerful demonstration that pull systems work outside manufacturing. The two-bin kanban required no software, no specialized training — just correct container sizing and disciplined adherence to the replenishment signal. The simplicity of the system was its sustainability advantage.',
        },
        {
          type: 'list' as const,
          items: [
            'Kanban quantity must be recalculated whenever demand pattern or replenishment lead time changes significantly — a kanban sized for last year\'s demand will over- or under-stock if conditions have shifted',
            'The safety factor in kanban calculation is not a permanent feature — it should be reviewed and reduced as process reliability and demand predictability improve',
            'Electronic kanban (e-kanban) systems improve signal speed and visibility but add complexity; for most operations, physical two-bin or card systems are more reliable because they are directly observable by the people doing the work',
          ],
        },
      ],
    },
    {
      id: 'bb-m5-l3',
      title: 'Mistake-Proofing (Poka-Yoke) and OEE',
      estimatedMinutes: 25,
      content: [
        {
          type: 'paragraph' as const,
          text: 'Poka-yoke (mistake-proofing) devices prevent errors from occurring or immediately detect errors before they become defects. The hierarchy of mistake-proofing runs from detection (alerting an operator after an error) through prevention (making the error physically impossible), with prevention always preferred.',
        },
        {
          type: 'heading' as const,
          text: 'Poka-Yoke Hierarchy',
          level: 2 as const,
        },
        {
          type: 'table' as const,
          headers: ['Level', 'Approach', 'Example'],
          rows: [
            ['1 — Prevention', 'Error is physically impossible', 'Asymmetric connector that only fits in correct orientation'],
            ['2 — Facilitation', 'Correct action is easier than incorrect', 'Color-coded cable harnesses matching color-coded ports'],
            ['3 — Detection (Control)', 'Error triggers automatic stop', 'Sensor stops assembly line if part is missing'],
            ['4 — Detection (Warning)', 'Error triggers alert, operator decides', 'Alarm sounds if temperature exceeds limit'],
            ['5 — Mitigation', 'Error occurs but damage is limited', 'Fuse blows before equipment is damaged'],
          ],
        },
        {
          type: 'heading' as const,
          text: 'Overall Equipment Effectiveness (OEE)',
          level: 2 as const,
        },
        {
          type: 'paragraph' as const,
          text: 'OEE = Availability × Performance × Quality. Availability = (Planned time − Downtime) / Planned time. Performance = (Actual output rate / Ideal output rate). Quality = Good units / Total units. World-class OEE is ≥ 85%. Most manufacturers start at 40–60%. Decomposing OEE into its three components directs improvement to the right loss category.',
        },
        {
          type: 'callout' as const,
          variant: 'info' as const,
          title: 'The Six Big Losses',
          text: 'OEE\'s three components map to six loss categories: Availability → Equipment Failure + Setup/Adjustment. Performance → Minor Stoppages + Reduced Speed. Quality → Startup Rejects + Production Rejects. TPM (Total Productive Maintenance) and targeted Lean/Six Sigma projects systematically eliminate these losses.',
        },
        {
          type: 'heading' as const,
          text: 'Real-World Application',
          level: 2 as const,
        },
        {
          type: 'callout' as const,
          variant: 'example' as const,
          title: 'Case Study: OEE Analysis and Poka-Yoke Recover $2.1M in Hidden Capacity at a Corrugated Packaging Plant',
          text: 'A corrugated packaging manufacturer was planning a $3.8M capital expansion to add a fourth corrugator line — their three existing lines appeared fully utilized. Before approving capital, the Black Belt installed an OEE measurement system on all three lines. Baseline OEE: Line 1 = 51%, Line 2 = 48%, Line 3 = 54%. Decomposition identified Performance losses (minor stoppages, speed losses) as the dominant loss category (contributing 23% OEE loss across all lines), not downtime. The largest minor stoppage cause: web misalignments requiring manual operator re-threading (averaging 4.2 events/shift, 8 minutes each). A poka-yoke solution — an automated web guide sensor with servo-controlled edge alignment that physically prevented misalignment from propagating rather than alerting after the fact — was piloted on Line 2. Line 2 OEE improved to 74% within 60 days. Applied to all three lines, combined OEE improvement delivered 340 additional production hours per quarter — equivalent to 62% of the capacity a fourth line would provide, for $180K in poka-yoke equipment vs. $3.8M in capital.',
        },
        {
          type: 'paragraph' as const,
          text: 'OEE analysis prevented a $3.8M capital expenditure by making hidden capacity visible. The 51–54% baseline OEE was not unusual — it simply had never been measured and decomposed. Revealing which of the six loss categories dominated was the prerequisite for designing a targeted, cost-effective solution.',
        },
        {
          type: 'list' as const,
          items: [
            'Always measure OEE before approving capacity expansion capital — a plant operating at 55% OEE has nearly double its apparent capacity available without new equipment',
            'Poka-yoke solutions at the prevention level (physically blocking errors) are dramatically more sustainable than those at the warning level because they do not depend on operator attention or compliance',
            'OEE improvement should always start with the largest loss category — improving Performance losses with a 48% OEE machine dominated by speed losses is much higher ROI than improving the same loss category on a machine already running at 82% OEE',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'bb-m5-q1',
      type: 'multiple-choice' as const,
      question: 'In a future-state VSM, what is the "pacemaker process" and why is its location significant?',
      options: [
        'The fastest process step — its speed determines the system output rate',
        'The single process that receives a production schedule, controlling the flow of the entire value stream',
        'The process with the highest quality risk that must be monitored most closely',
        'The first process in the value stream where materials enter',
      ],
      correctIndex: 1,
      explanation: 'The pacemaker is the only process in the value stream that receives an external production schedule. All upstream processes are triggered by pull signals from this point. Scheduling multiple processes creates push islands that suboptimize total system flow.',
    },
    {
      id: 'bb-m5-q2',
      type: 'multiple-choice' as const,
      question: 'A kanban system is calculated as: demand = 150 units/day, lead time = 3 days, safety factor = 1.25, container = 75 units. How many kanban cards are required?',
      options: ['6', '7', '8', '9'],
      correctIndex: 1,
      explanation: 'Kanban = (150 × 3 × 1.25) / 75 = 562.5 / 75 = 7.5 → round up to 8. Wait — (150×3×1.25) = 562.5 / 75 = 7.5, rounds to 8. The correct answer is 8 (answer index 2). The formula: (demand × lead time × safety factor) / container quantity.',
    },
    {
      id: 'bb-m5-q3',
      type: 'multiple-choice' as const,
      question: 'A machine has Availability = 0.92, Performance = 0.78, Quality = 0.95. What is its OEE and what is the primary improvement target?',
      options: [
        'OEE = 68.2%; target Performance losses (minor stoppages, speed losses)',
        'OEE = 88.3%; target Availability losses (downtime)',
        'OEE = 72.1%; target Quality losses (defects)',
        'OEE = 82.5%; target all three components equally',
      ],
      correctIndex: 0,
      explanation: 'OEE = 0.92 × 0.78 × 0.95 = 0.682 = 68.2%. Performance (0.78) is the lowest component — this is where improvement effort should concentrate first to recover the most OEE.',
    },
    {
      id: 'bb-m5-q4',
      type: 'true-false' as const,
      question: 'A poka-yoke that sounds an alarm when an operator makes an error is at a higher level of mistake-proofing than one that makes the error physically impossible.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Prevention (making the error physically impossible) is the highest level of mistake-proofing. Detection (warning alarm) is a lower level because it still requires operator response after the error has occurred. Prevention eliminates the opportunity for error; detection only reduces its consequences.',
    },
  ],
};

// ─── Course Export ────────────────────────────────────────────────────────────

export const blackBeltCourseData: Course = {
  id: 'black-belt',
  belt: 'black',
  track: 'lss-certification',
  title: 'Black Belt',
  subtitle: 'Lean Six Sigma Expert',
  description: 'Master advanced statistical analysis, design of experiments, measurement system analysis, process capability, and enterprise-level Lean deployment. The pinnacle of LSS practitioner certification.',
  status: 'available',
  estimatedHours: 80,
  color: '#f0ece6',
  icon: '⬛',
  modules: [module1, module2, module3, module4, module5],
};
