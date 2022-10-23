# Pan's Introduction Page

以 GitHub 上的自介為基礎，使用 Semantic HTML、自己定義的 design system，
以及 ES Module + TypeScript 打造出的實驗性個人介紹頁面。特色除了較為美觀的樣式外，
還包括無 CSS 的情況下，仍然保有標準 HTML 的標題層次結構。

## Commands of this codebase

```sh
# Install pnpm.
corepack enable

# Install dependencies.
pnpm i

# Run a development server to live preview.
pnpm dev

# Check the type issues with `tsc`.
pnpm check

# Lint the code issues.
pnpm lint  # pnpm lint:fix for automatic fix

# Format this code.
pnpm fmt  # pnpm fmt:c for check only

# Build the version for production.
pnpm build

# Pack for homework archive purpose.
pnpm pack:hw
```

## Full README

The Full README (Chinese) is written in LaTeX: see its source code on `docs/readme/readme.tex`. For the compiled
PDF file, see the *Release*.

## License

This introduction and its README file are licensed under `AGPL-3.0-or-later`. For the details of this license, see `LICENSE`.

TL;DR: Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.[^1]

[^1]: <https://choosealicense.com/licenses/agpl-3.0/>
