# Claude Code

The coding-agent guide for this repo is [AGENTS.md](AGENTS.md). Read it before editing. `.cursor/rules/project.mdc` points at the same file.

## Commands

```bash
npm start            # http://localhost:3000
npm test             # node:test
npm run lint
npm run format:check
npm run check
```

`main.html` also opens directly in a browser. There is no build step.

## Guardrails

- Rules live in `game.js`. The page (`main.js`) only renders and forwards clicks.
- Keep the alert strings and the draw/turn behavior described in AGENTS.md. Tests in `test/game.test.js` lock them.
- This is two levels of 3×3 tic-tac-toe, not a cube and not Ultimate Tic-Tac-Toe's "sent to a board" rule.
- Leave `try.html` and `try.js` alone. Do not add a license file, a framework, or a bundler.
