# Agent Instructions

This project uses **bd** (beads) for issue tracking. Run `bd onboard` to get started.

## Project Commands

```bash
npm run test  # Run unit tests
npm run test:e2e  # Run end to end (e2e) tests
```

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
Always open `@/.cline/skills/openspec-explore/SKILL.md` when the request is exploratory in nature

Always open `@/.cline/skills/openspec-propose/SKILL.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/.cline/skills/openspec-apply-change/SKILL.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Use `@/.cline/skills/openspec-archive-change/SKILL.md` after an open spec change has been completed

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

## Self Learning
If you had tool use errors or had to try something several times in the completion summary propose to the user what to add to this AGENTS.md file to help you avoid the errors or retries in the future.