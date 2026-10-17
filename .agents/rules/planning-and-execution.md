---
trigger: model_decision
description: Standards for feature planning, requirement analysis, architectural boundaries, code implementation, and change management.
---

# Planning and Execution — Engineering Standards

## 1. Objective

Execute every development task through the systematic 13-step loop defined in [workflow.md §1](file:///d:/VERDANT/.agents/rules/workflow.md#1-loop-engineering-as-default).

Do not begin code modification until requirements are analyzed and measurable acceptance criteria are formally established.

## 2. Defining Success Before Coding

Translate every task into explicit, measurable acceptance criteria before editing code:

### Functional Criteria
- **User Behavior**: Exactly how the user navigates, interacts, and achieves their goal.
- **Input Validation**: Concrete boundary checks, type constraints, and informative error messages.
- **Complete States**: Explicit UI and data handling for loading, empty, active, success, and error states.
- **Data Persistence & Integration**: Correct API contracts, state management transitions, and database interactions.
- **Authorization & Security**: Proper boundary enforcement, input sanitization, and credential safety.
- **Regression Prevention**: Protection of existing working journeys and components.

### Visual Criteria
- Follow the visual criteria dimensions defined in [design-system.md §3](file:///d:/VERDANT/.agents/rules/design-system.md#3-visual-acceptance-criteria-guidelines) (layout, typography, spacing, color tokens, imagery, responsive viewports, interactive states, accessibility).

**Scope Guardrail**: Do not invent extraneous requirements or architectural overhead that materially alters the user's requested outcome.

## 3. Task Planning & Milestones

For substantial tasks, document a concise plan before implementation:
1. **Objective**: High-level goal and user impact.
2. **Acceptance Criteria**: Measurable conditions for functional and visual success.
3. **Relevant Files & Components**: Existing files to touch and new modules to build.
4. **Incremental Milestones**: Testable sub-tasks that produce observable progress.
5. **Verification Strategy**: Specific tests, commands, and viewports to validate.
6. **Risks & Blockers**: Potential failure modes or external dependencies.

Avoid overengineering small features or introducing unrequested abstractions.

## 4. Codebase Pre-Inspection

Before modifying any file:
- Inspect relevant files, existing utilities, and sibling components.
- Check configured package scripts (`package.json`) and installed dependencies.
- Identify reusable components, design tokens, and helper functions.
- Understand existing data flow, state management, and routing.
- Preserve unrelated user code and configuration.

Never assume a dependency, component, or configuration exists without direct inspection.

## 5. Anti-Vibe-Coding Implementation Standards

Write maintainable, production-grade code that reflects deliberate engineering:
- **Consistent Architecture**: Follow established folder structures, naming conventions, and component boundaries.
- **No Placeholder Functionality**: Avoid fake interactions, mock buttons that do nothing, and hardcoded temporary text. Every control must perform its advertised action.
- **Root-Cause Layouts**: Do not apply symptom-patching CSS (`!important`, arbitrary offsets) to mask bad markup. Fix the flexbox, grid, or DOM structure at the root.
- **Code Hygiene**: Keep functions focused and readable. Avoid duplicated logic, unnecessary external packages, or unrequested refactoring.
- **Type Safety**: Use TypeScript types explicitly and strictly when TypeScript is configured.
- **Explicit Error Handling**: Handle edge cases, null states, and network timeouts safely.

## 6. Frontend & Backend Integration

- **Frontend**: Adhere strictly to the VERDANT design system ([design-system.md](file:///d:/VERDANT/.agents/rules/design-system.md)), supporting all mobile, tablet, and desktop breakpoints.
- **Backend & Data**: Validate inputs on trusted server boundaries; never rely solely on client-side checks. Enforce authorization, maintain data integrity, and handle service errors gracefully.

## 7. Change Management

- Keep changes strictly focused on the approved task scope.
- Prefer small, reviewable diffs over large, sweeping file replacements.
- Inspect the full diff before completion to ensure no debugging artifacts, console logs, or unintended configuration edits remain.
- Never perform destructive changes or overwrite user work without explicit safeguards.

## 8. Autonomous Loop Execution & Error Recovery

- Follow the complete error detection, diagnosis, and recovery protocol in [workflow.md §5](file:///d:/VERDANT/.agents/rules/workflow.md#5-mandatory-error-detection-diagnosis-and-recovery).
- **Bounded Retry Budget**: If a failure persists after **two unsuccessful correction attempts**, halt incremental patching, reassess the diagnosis and strategy, and choose an evidence-based alternative approach ([workflow.md §5E](file:///d:/VERDANT/.agents/rules/workflow.md#e-recover-from-repeated-failures-bounded-retry-policy)).
- Conclude tasks only when all criteria in [workflow.md §9 (Definition of Done)](file:///d:/VERDANT/.agents/rules/workflow.md#9-definition-of-done) are met, reporting results using the standardized format in [workflow.md §10](file:///d:/VERDANT/.agents/rules/workflow.md#10-reporting-standards--no-silent-failure).