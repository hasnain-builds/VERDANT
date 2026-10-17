---
trigger: model_decision
description: Testing strategy, unit and integration tests, static checks, browser verification, and quality engineering standards.
---

# VERDANT — Testing and Quality Engineering

## 1. Objective

Validate every implementation thoroughly against its pre-defined acceptance criteria before declaring completion.

Code generation completing, a development server starting, or a production build passing does NOT constitute sufficient proof of correctness.

## 2. Testing Levels & Strategies

Apply testing levels suited to the task and environment tooling:

### Static Analysis & Type Checking
- Run configured linters (e.g., ESLint).
- Run strict TypeScript type checks (`tsc --noEmit` or equivalent).
- Verify formatting and configuration syntax.
- Catch unused variables, broken imports, and invalid schema definitions before execution.

### Automated Tests
- **Unit Tests**: Validate pure functions, utilities, and isolated business logic.
- **Integration Tests**: Verify connected UI components, routing, and state stores.
- **Regression Tests**: Run checks across adjacent components that interact with modified code.

### Production Build Verification
- Execute production build commands (`npm run build`).
- Verify asset bundling, tree-shaking, and minification.
- Confirm production bundle integrity; note that passing a build does not confirm UI or runtime correctness.

### Interactive Browser Verification
- Follow the browser verification protocol in [workflow.md §7](file:///d:/VERDANT/.agents/rules/workflow.md#7-browser-verification-protocol).
- Exercise full user journeys, form submissions, and state transitions interactively.
- Inspect viewports across mobile (375px/414px), tablet (768px), desktop (1280px), and wide (1440px+).

## 3. Automated Error Detection

In accordance with [workflow.md §5A](file:///d:/VERDANT/.agents/rules/workflow.md#a-detect-errors-automatically), automatically inspect:
- Terminal exit codes and compiler error messages.
- TypeScript diagnostic errors.
- Linter rule violations.
- Dev-server startup or bundling failures.
- Browser console warnings, uncaught exceptions, and unhandled promise rejections.
- Network traffic for failed requests (HTTP 4xx/5xx).
- Broken navigation routes, asset 404s, and missing images.
- Responsive layout defects (horizontal overflow, text overlapping, clipped containers).
- Database query failures and API schema mismatches.

## 4. Test Integrity & Honesty

- Execute actual available commands and inspect live browser state; never invent screenshots, logs, or test outcomes.
- Accurately distinguish between passed, failed, skipped, and unexecuted checks.
- Never misrepresent simulated or mocked behavior as verified live integration.
- Never disable tests, suppress compiler/linter warnings, or weaken assertions merely to produce a passing check.
- Never remove required functionality to circumvent a failing test.

## 5. Autonomous Debugging & Recovery

When an error or test failure is detected:
- Perform root-cause diagnosis following [workflow.md §5B](file:///d:/VERDANT/.agents/rules/workflow.md#b-diagnose-before-fixing).
- Apply a targeted, minimal fix addressing the root cause rather than symptoms ([workflow.md §5C](file:///d:/VERDANT/.agents/rules/workflow.md#c-apply-a-targeted-fix)).
- Verify the correction and execute regression checks ([workflow.md §5D](file:///d:/VERDANT/.agents/rules/workflow.md#d-verify-the-fix)).
- **Bounded Retry Budget**: If a failure is not resolved after **two correction attempts**, halt incremental editing, reassess the diagnosis, examine new evidence, and select an alternative approach ([workflow.md §5E](file:///d:/VERDANT/.agents/rules/workflow.md#e-recover-from-repeated-failures-bounded-retry-policy)).

## 6. Definition of Done & Quality Reporting

- Verify all visual criteria ([design-system.md §3](file:///d:/VERDANT/.agents/rules/design-system.md#3-visual-acceptance-criteria-guidelines)) and functional criteria ([planning-and-execution.md §2](file:///d:/VERDANT/.agents/rules/planning-and-execution.md#2-defining-success-before-coding)) before declaring completion.
- Fulfill the comprehensive Definition of Done in [workflow.md §9](file:///d:/VERDANT/.agents/rules/workflow.md#9-definition-of-done).
- Adhere to the No Silent Failure reporting standard in [workflow.md §10](file:///d:/VERDANT/.agents/rules/workflow.md#10-reporting-standards--no-silent-failure):
  - Categorize verification checks as **PASS**, **FAIL**, or **UNVERIFIED**.
  - Categorize defect resolutions as **RESOLVED**, **UNRESOLVED**, or **BLOCKED**.