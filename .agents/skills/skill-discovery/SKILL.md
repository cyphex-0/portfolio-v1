---
name: skill-discovery
description: Automatically discover, evaluate, and install new agent skills from the Agent Marketplace, skills.sh directory, and GitHub repositories when a capability gap is encountered, then apply the newly acquired skill to fulfill user tasks.
---

# Autonomous Skill Discovery & Auto-Installer

Use this skill when a user request requires specialized domain conventions, frameworks, integrations, or workflows not currently covered by existing workspace skills.

## Workflow

### 1. Identify the Capability Gap
Analyze the user prompt. If the task requires specialized procedures, architectural patterns, or API knowledge that would benefit from a dedicated agent skill, check if an existing skill in `.agents/skills/` addresses it. If not, proceed to search.

### 2. Search Sources
1. **Agent Marketplace**:
   Search with `search_marketplace` for official plugins or skills.
2. **Open Skills Directory (skills.sh)**:
   Run:
   ```bash
   npx -y skills find "<query>"
   ```
3. **GitHub Search**:
   Use web search to locate curated skill repositories:
   `"<topic> skill site:github.com"` or `"<topic>" in:path SKILL.md`.

### 3. Install the Skill
Ensure the skill is placed in `.agents/skills/<skill-name>/`:
- Must contain `SKILL.md` with `name` and `description` YAML frontmatter.
- If dependencies or scripts exist (e.g. `scripts/`, `references/`), include them.
- If using `npx skills`:
  ```bash
  npx -y skills add <package> --skill "<skill-name>" --copy
  ```

### 4. Execute the Task
1. Read the newly installed `SKILL.md`.
2. Follow its instructions and run any bundled validation scripts.
3. Inform the user of the newly acquired capability and report the applied changes.
