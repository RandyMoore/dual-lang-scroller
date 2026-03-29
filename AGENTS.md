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

## Project Task Management
<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:ca08a54f -->
- Run `bd prime` for detailed command reference to discover beads features - an issue tracking / task memory management system
- Use `bd remember` for persistent knowledge — do NOT use .md files
<!-- END BEADS INTEGRATION -->

## Testing
NEVER increase test timeout settings. The solution is never give more time.
NEVER decide to fix the code or the test on your own if the tests are failing. Summarize the mismatch and then ask if the code or the test is wrong before changing anything.

## Interaction
If asked for a plan in ACT mode don't change anything. You are in ACT mode to run commands. Propose a plan before changing any project files.