---
trigger: model_decision
description: Security standards, credentials management, input validation, permissions, safe database operations, and environment safety.
---

# VERDANT — Security and Safe Operations

## 1. Objective

Protect the application, client data, user credentials, and the development environment throughout implementation, testing, and debugging.

Security requirements apply across frontend code, backend services, database operations, third-party dependencies, and deployment pipelines.

## 2. Secrets and Credentials Protection

- Never hardcode private API keys, database passwords, access tokens, webhook secrets, or service-role keys into source code.
- Manage sensitive configuration strictly through environment variables (`.env`).
- Ensure all local environment files containing real credentials remain strictly outside version control (`.gitignore`).
- Maintain an `.env.example` file populated exclusively with sanitized placeholders.
- **No Secret Leakage in Debugging**: Never output secret values in logs, terminal commands, error messages, screenshots, reports, or generated artifacts.
- Never bundle backend secrets into frontend client builds; treat all client-exposed environment variables (`VITE_*`, `NEXT_PUBLIC_*`) as publicly readable.

If a secret is inadvertently exposed, immediately halt further exposure, rotate the credential, and report the event.

## 3. Authentication and Authorization

- Utilize established, industry-standard authentication mechanisms.
- Always validate access control and user authorization on trusted backend services; never rely on client-side routing guards as the sole security boundary.
- Restrict administrative endpoints and mutation operations to authorized roles.
- Follow least-privilege principles for service roles and database access.
- Handle session expiration and authorization rejections securely without leaking internal state.
- **No Security Bypasses**: Never bypass authentication or authorization checks to satisfy a test or make a build pass.

## 4. Database Security

When implementing or modifying database functionality:
- Inspect existing database schemas, relations, and access policies.
- Enable and enforce Row-Level Security (RLS) where supported.
- Use parameterized queries or ORM/safe client query builders to prevent SQL injection.
- Restrict direct database administrative access to trusted migration scripts.
- Protect customer and user data from unauthorized exposure.
- Review database migrations and destructive DDL operations before execution.

Never perform destructive database operations without explicit user approval.

## 5. Input Validation and Application Security

- Validate and sanitize all user input on trusted server/backend boundaries.
- Never assume client-side form validation is sufficient protection.
- Guard against Cross-Site Scripting (XSS) by avoiding unescaped rendering of untrusted strings.
- Implement Cross-Site Request Forgery (CSRF) protections for state-modifying requests.
- Provide generic, user-friendly error messages that avoid exposing database schemas, file system paths, or stack traces.
- Use secure HTTP headers and cookie flags (`HttpOnly`, `Secure`, `SameSite=Strict/Lax`).

## 6. Dependencies

- Use vetted, actively maintained third-party dependencies.
- Inspect the scope and necessity of new packages before installation; avoid adding bloated or unvetted packages.
- Review security advisories (`npm audit` or equivalent) and resolve critical vulnerabilities.
- Never execute unreviewed installation scripts or arbitrary shell commands from untrusted repositories.

## 7. File and Environment Safety

- Inspect existing workspace files before modifying or removing them.
- Preserve unrelated user code, branch files, and settings.
- Avoid recursive deletion commands (`rm -rf` or broad shell removals).
- Keep changes strictly confined to approved workspace directories.
- Never inspect, copy, or modify user credentials or files outside the project scope.

## 8. External Actions and Approval Boundaries

Follow the approval protocol in [workflow.md §8](file:///d:/VERDANT/.agents/rules/workflow.md#8-approval-boundaries--safe-operations).

Explicit user authorization is required before:
- Triggering production deployments.
- Executing destructive database migrations.
- Deleting user databases, tables, or records.
- Disclosing private information.
- Executing financial or irreversible third-party actions.

## 9. Security Verification & External Blockers

- When completing security-relevant tasks, verify:
  - Authentication and authorization boundary enforcement.
  - Robust input validation and sanitization.
  - Proper error handling without sensitive data leakage.
  - Absence of hardcoded credentials in source code and git diffs.
  - Clean dependency audit results.
- If an external service outage, missing credential, or permission restriction blocks verification, follow [workflow.md §5F](file:///d:/VERDANT/.agents/rules/workflow.md#f-handle-environment-and-external-blockers) to report the limitation without fabricating results.

## 10. Security Completion Verification

Before finalizing any task involving data, authentication, or external APIs, verify adherence to the security checklist above and ensure full compliance with the Definition of Done in [workflow.md §9](file:///d:/VERDANT/.agents/rules/workflow.md#9-definition-of-done).