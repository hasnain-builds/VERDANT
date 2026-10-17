---
trigger: always_on
description: Master engineering workflow, autonomous loop engineering, error detection, diagnosis, recovery, retry policy, and definition of done.
---

# Workflow — Autonomous Engineering Process & Loop Engineering

## 1. Loop Engineering as Default

Every future development task in VERDANT—including initial scaffolding, individual components, complete pages, backend features, responsive adjustments, bug fixes, refactoring, and performance optimizations—must follow a controlled, autonomous engineering loop:

1. **Understand**: Analyze the requested outcome and underlying requirements.
2. **Inspect**: Inspect relevant project files, dependencies, configuration, and current implementation.
3. **Define Success**: Establish concrete, measurable acceptance criteria before modifying code.
4. **Plan**: Formulate an implementation plan broken into manageable, testable milestones.
5. **Implement**: Execute the changes following clean architecture and design standards.
6. **Automated Checks**: Run all applicable automated checks (linters, type checks, unit/integration tests, production builds).
7. **Browser Verification**: Inspect the running application in a live browser environment across viewports when supported.
8. **Evaluate**: Compare observed behavior against the defined acceptance criteria.
9. **Diagnose**: Automatically capture defects and identify their root causes with evidence.
10. **Targeted Fix**: Apply targeted corrections addressing root causes rather than symptoms.
11. **Rerun & Regression**: Rerun failing checks and verify adjacent functionality remains unregressed.
12. **Iterate**: Repeat verification and targeted corrections until all criteria pass or an external blocker is verified.
13. **Final Review & Report**: Inspect the final diff and provide a factual, evidence-backed report.

**Do not stop early**: Code generation completing, a development server starting, or a build passing alone does NOT constitute completion. The loop is complete only when all acceptance criteria are verified.

## 2. Define Success Before Coding

Before writing or modifying any code, translate the task into explicit, measurable acceptance criteria:

### Visual Tasks Criteria
- **Layout & Composition**: Container max-width, grid alignment, section purpose, visual balance, absence of horizontal overflow.
- **Typography & Hierarchy**: Correct font families (`Cormorant Garamond`, `DM Sans`), heading scale (`h1`–`h6`), line heights, letter spacing.
- **Spacing & Alignment**: Disciplined 8pt spacing scale, padding, margins, alignment across elements.
- **Color & Contrast**: Adherence to brand tokens (Sage Green `#879780`, Warm Ivory `#F8F5ED`, Soft Cream `#EAE5D9`, Muted Olive `#626F52`, Deep Forest `#26372D`), WCAG AA compliant text contrast.
- **Image Selection & Cropping**: High-quality culinary/interior imagery, intended aspect ratios, `object-fit: cover`, meaningful alt text.
- **Responsive Behavior**: Fluid adaptation across small mobile (320px–480px), large mobile (481px–767px), tablet (768px–1023px), desktop (1024px–1439px), and wide desktop (1440px+).
- **Interactive States**: Clearly styled hover, focus-visible, active, and disabled states.
- **Accessibility**: Semantic HTML, logical heading levels, keyboard navigation, focus indicators, screen reader labels.

### Functional Tasks Criteria
- **User Behavior**: Expected user journeys, navigation flow, and component interactions.
- **Input Validation**: Boundary conditions, format checking, user-friendly inline error messaging.
- **System States**: Explicit handling of loading, success, empty, and failure states.
- **Data Persistence & Integration**: Accurate data persistence, API contract handling, mock data boundaries.
- **Security & Authorization**: Server-side access checks, sanitized inputs, credential isolation.
- **Regression Prevention**: Protection of existing working features from unintended side effects.

Do not invent unrequested extra features that materially alter the user's intent.

## 3. Implementation Standards & Anti-Vibe-Coding

VERDANT must reflect intentional, professional craftsmanship—never a generic, AI-generated template:
- Strictly follow the approved VERDANT design system ([design-system.md](file:///d:/VERDANT/.agents/rules/design-system.md)).
- Build purposeful sections with clear hierarchy; avoid repeating generic card sections.
- Reject decorative noise: no arbitrary gradients, flashy particles, glowing borders, or unrequested glassmorphism.
- Ban fake interactions: never create dead buttons, non-functional links, or misleading placeholder controls.
- Ban symptom patching: do not apply ad-hoc CSS overrides (`!important`, arbitrary negative margins) to mask underlying layout or markup flaws.
- Write maintainable, modular code with clear separation of concerns, descriptive naming, and no duplicated business logic.

## 4. Verification Strategy

Execute all available verification checks in sequence:
1. **Static Analysis**: ESLint, TypeScript compiler (`tsc --noEmit`), formatters.
2. **Automated Tests**: Unit tests, integration tests, end-to-end assertions.
3. **Build Integrity**: Production build verification (`npm run build`).
4. **Interactive Browser Verification**: Live journey execution across mobile, tablet, and desktop viewports.

Never invent, assume, or simulate test results.

## 5. Mandatory Error Detection, Diagnosis, and Recovery

This protocol applies to all VERDANT development tasks—scaffolding, routing, styling, backend logic, testing, and builds:

### A. Detect Errors Automatically
Inspect all available runtime and compile-time evidence:
- Terminal and command exit codes and output streams.
- TypeScript compilation and type errors.
- Linter diagnostics and syntax violations.
- Dev-server startup and hot-reload errors.
- Browser console warnings, uncaught exceptions, and promise rejections.
- Network request failures (HTTP 4xx/5xx responses).
- Broken navigation routes, missing assets, and 404 images.
- Responsive layout defects (horizontal scrollbars, text clipping, overlapping controls).
- Database and API integration errors.

### B. Diagnose Before Fixing
When an error occurs, perform root-cause analysis before editing:
1. Capture the exact error text, stack trace, and operational context.
2. Identify the affected file, component, user journey, or endpoint.
3. Reproduce the failure reliably where feasible.
4. Inspect source code, configuration, logs, and dependency trees.
5. Identify the underlying cause rather than masking the visible symptom.
6. Determine whether the root cause originates from implementation code, environment configuration, missing permissions/credentials, external service issues, or dependency incompatibilities.

Never apply arbitrary patches or guess repeatedly without diagnostic evidence.

### C. Apply a Targeted Fix
- Correct the root cause directly.
- Make the smallest maintainable modification that completely resolves the issue.
- Preserve existing working functionality.
- Avoid unrelated refactoring or unrequested package additions.
- Never disable tests, suppress linter rules, or weaken assertions to make a check pass.
- Preserve user changes and avoid destructive file operations.

### D. Verify the Fix
After applying a correction:
1. Rerun the specific command or check that previously failed.
2. Confirm the original error is resolved with evidence.
3. Run relevant regression checks on adjacent modules.
4. Re-verify the user journey in the browser when applicable.

### E. Recover from Repeated Failures (Bounded Retry Policy)
- Maintain an explicit retry budget: **after two unsuccessful correction attempts for the same underlying failure**, immediately halt incremental editing.
- Step back and reassess the diagnosis, underlying assumptions, configuration, and dependencies.
- Formulate a materially different, evidence-based approach.
- Continue autonomously if a viable alternative exists within approved project scope.
- Never enter an infinite or unassisted debugging loop.

### F. Handle Environment & External Blockers
If progress is halted by external blockers (missing credentials, external service outage, missing permissions, unavailable testing tools):
- Formally verify and document the limitation.
- Complete all independent work that does not require the blocked resource.
- Never fabricate responses, mock live credentials, or bypass security boundaries.
- Never expose private keys or credentials in error reports or logs.
- Request user intervention only when the blocker genuinely requires it, explaining the exact requirement and which acceptance criteria remain unverified.

## 6. Regression Prevention

Before finalizing any task:
- Rerun all previously passing automated tests and static checks.
- Verify affected user journeys for unintended behavior shifts.
- Review the complete git diff to ensure only intended changes are included.
- Verify that no debug logs, temporary scaffolding, or secrets were left behind.

## 7. Browser Verification Protocol

When browser interaction tools are available:
- Launch the actual application on the local development server.
- Test the complete user journey (navigation, form inputs, feedback dialogs).
- Inspect viewports: Small Mobile (375px), Large Mobile (414px), Tablet (768px), Desktop (1280px), Wide (1440px+).
- Inspect browser console for errors or unhandled warnings.
- Inspect network traffic for failed requests.
- Verify typography, spacing, contrast, alignment, and asset rendering visually.
- Capture screenshots to serve as objective verification evidence.

## 8. Approval Boundaries & Safe Operations

Proceed independently with standard, reversible development and testing tasks.

Obtain explicit user authorization before:
- Production deployments.
- Destructive database migrations or schema alterations.
- Deletion of user data, branches, or repositories.
- Publishing private information or credentials.
- Financial transactions or external irreversible API calls.

## 9. Definition of Done

A task is complete only when:
- All defined acceptance criteria are verified with evidence.
- Relevant static checks, tests, and builds pass without errors.
- Responsive and visual inspections confirm fidelity across viewports.
- All detected critical errors are diagnosed, resolved, and verified.
- Regression risks have been checked and resolved.
- Any unverified items or external blockers are transparently disclosed.
- The final diff has been inspected for unintended changes.

## 10. Reporting Standards & No Silent Failure

Every task completion report must provide a concise, factual summary distinguishing:
- **RESOLVED**: Errors encountered, diagnosed, and proven resolved with passing checks.
- **UNRESOLVED**: Non-critical defects that persist, with root-cause analysis and next steps.
- **BLOCKED**: Items requiring unavailable external resources, permissions, or user decisions.
- **UNVERIFIED**: Criteria or viewports that could not be verified due to environment constraints.

Categorize all verification checks clearly as **PASS**, **FAIL**, or **UNVERIFIED**.