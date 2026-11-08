# Project Agent Guidelines: Autonomous Skill Discovery & Application

## Autonomous Skill Discovery Protocol

Whenever a user request involves specialized domain knowledge, workflows, design patterns, or technical tooling that is **not** covered by the currently installed skills in `.agents/skills/`:

### 1. Gap Detection
Evaluate whether the task requires deep domain guidance (e.g., specialized 3D WebGL/Three.js, payment gateways like Stripe/LemonSqueezy, complex backend authentication, SEO auditing, database ORM patterns). If no current skill matches the requirement, trigger autonomous discovery.

### 2. Search & Selection
Search for high-quality, community-tested agent skills using:
1. **Agent Marketplace:** Use `search_marketplace` to find official and partner plugins/skills.
2. **Open Skills Directory (skills.sh):** Use `npx -y skills find "<query>"` or search online.
3. **GitHub Repositories:** Use `search_web` to locate well-maintained skill repositories.

### 3. Installation to Project
Install the skill into the project following Antigravity standards:
- Target directory: `.agents/skills/<skill-name>/`
- Ensure the directory contains a valid `SKILL.md` with YAML frontmatter (`name` and `description`).
- If using the universal skills CLI:
  ```bash
  npx -y skills add <package> --skill "<skill-name>" --copy
  ```
  Or clone/copy the skill folder into `.agents/skills/<skill-name>/`.

### 4. Immediate Execution
Immediately read the newly installed `SKILL.md` into context and apply its procedures, guidelines, and scripts to complete the user's original request.

### 5. Transparency
Briefly notify the user:
- What capability gap was identified.
- What skill was discovered and installed.
- What changes were implemented following the new skill's guidelines.
