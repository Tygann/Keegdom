# AGENTS.md

## Repo Philosophy

- Keep dependencies minimal. Prefer browser, React, or Tailwind primitives before adding packages.
- Favor small reusable components over copy-pasted markup.
- Keep repeated content in `src/data` and render from data whenever possible.
- Build mobile-first and verify layouts from small screens upward.
- Preserve the established Keegdom visual language: dark, premium, clean, and subtle.
- Use semantic HTML and accessible interactions by default.
- Keep placeholders minimal until the feature is actually needed.
- Do not add backend code, authentication, CMS integrations, or complex client state unless explicitly requested.

## Project Expectations

- `src/components` should stay focused on shared UI primitives.
- `src/sections` should own homepage composition details.
- `src/pages` should remain lightweight route targets.
- `src/data` is the source of truth for navigation, cards, and status content.
- New UI should match existing spacing, borders, tone, and motion patterns.
- After completing code changes, always provide a suggested commit message in the final response.
