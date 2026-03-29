# Agent Instructions

This project uses **bd** (beads) for issue tracking. Run `bd onboard` to get started.

## Project Commands

```bash
npm run test  # Run unit tests
npm run test:e2e  # Run end to end (e2e) tests
```

## Content Files and Testing

**IMPORTANT: Never use the project root 'content' directory for tests.**

The project has two separate content directories:
- `content/` - Project root directory for development and production content
- `tests/fixtures/content/` - Test fixtures directory for automated tests

**Test files MUST use the fixtures directory:**
- Unit tests: `tests/unit/content.test.ts` uses `tests/fixtures/content/`
- E2E tests: `tests/e2e/landing-page.spec.ts` uses `tests/fixtures/content/`

**When writing tests:**
1. Always reference content files from `tests/fixtures/content/`
2. Do NOT reference content files from the project root `content/`
3. If you need new test content, create it in `tests/fixtures/content/` (both `en/` and `es/` subdirectories)
4. The content API automatically uses `tests/fixtures/content/` when configured correctly

**Configuration:**
- Vite dev server is configured to use `tests/fixtures/content/` (see `vite.config.ts`)
- This prevents conflicts between development content and test fixtures

## Non-Interactive Shell Commands

**ALWAYS use non-interactive flags** with file operations to avoid hanging on confirmation prompts.

Shell commands like `cp`, `mv`, and `rm` may be aliased to include `-i` (interactive) mode on some systems, causing the agent to hang indefinitely waiting for y/n input.

**Use these forms instead:**
```bash
# Force overwrite without prompting
cp -f source dest           # NOT: cp source dest
mv -f source dest           # NOT: mv source dest
rm -f file                  # NOT: rm file

# For recursive operations
rm -rf directory            # NOT: rm -r directory
cp -rf source dest          # NOT: cp -r source dest
```

**Other commands that may prompt:**
- `scp` - use `-o BatchMode=yes` for non-interactive
- `ssh` - use `-o BatchMode=yes` to fail instead of prompting
- `apt-get` - use `-y` flag
- `brew` - use `HOMEBREW_NO_AUTO_UPDATE=1` env var


## Testing
NEVER increase test timeout settings. The solution is never give more time.
NEVER decide to fix the code or the test on your own if the tests are failing. Summarize the mismatch and then ask if the code or the test is wrong before changing anything.
After making changes to fix a test failure ALWAYS run the test again after to check if the fix worked.

## Documentation
When you encounter errors look into the docs directory. If more knowledge would help prompt the user to find documentation online to give you using @

## Interaction
If asked for a plan in ACT mode don't change anything. You are in ACT mode to run commands. Propose a plan before changing any project files.

<!-- OPENSPEC:START -->
## Exploration, Planning, Proposals and Task Management

**For creating new OpenSpec changes:**
- ALWAYS use `@/.cline/skills/openspec-propose/SKILL.md` when the user wants to create a new change, fix a bug, or implement a feature
- This skill will generate a complete change with proposal, design, and tasks in one step
- Do NOT manually create change files using write_to_file or replace_in_file
- Include the additional fields in `@/openspec/template-proposal.md` to relate the new change to existing changes (establish where in ordering, the priority, etc compared to the other non-archived changes)

**For exploring ideas:**
- Always open `@/.cline/skills/openspec-explore/SKILL.md` when the request is exploratory in nature

**For implementing changes:**
- Use `@/.cline/skills/openspec-apply-change/SKILL.md` to learn how to implement a change - when the user asks to implement or do


Use `@/.cline/skills/openspec-archive-change/SKILL.md` after an open spec change has been completed (implemented, or done)
Use `@/.cline/skills/openspec-archive-change/SKILL.md` whenever the request included the word "archive" or "archived"

**Do the next change:**
- Load the skill `@/.cline/skills/openspec-apply-change/SKILL.md`
- Find the next change that is not in archive under `@/openspec/changes` respecting the dependencies and priorities
- Implement the change using the apply change skill
- Archive the change using the skill `@/.cline/skills/openspec-archive-change/SKILL.md`

**When user explicitly mentions a change name:**
- If the user says "Do the [change-name] change" or similar, automatically archive the change after implementation
- Use the openspec-archive-change skill to archive the completed change
- This applies when the user provides a specific change name in their request

Keep this managed block so 'openspec update' can refresh the instructions.  

## Self Learning
If you had tool use errors or had to try something several times in the completion summary propose to the user what to add to this AGENTS.md file to help you avoid the errors or retries in the future.

Use `@/.cline/skills/openspec-apply-change/SKILL.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Use `@/.cline/skills/openspec-archive-change/SKILL.md` after an open spec change has been completed

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

## Self Learning
If you had tool use errors or had to try something several times in the completion summary propose to the user what to add to this AGENTS.md file to help you avoid the errors or retries in the future.