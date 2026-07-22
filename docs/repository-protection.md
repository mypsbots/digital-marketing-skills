# Protecting the repository

Because a public / marketplace-listed repository must be open source, it is **inherently forkable**
and copyable. You cannot disable forks on a public personal repo. What you *can* control is who
modifies **your** repository, how history is protected, and how the canonical distribution is owned.

## 1. Nobody can modify your repo without access

Only accounts you explicitly add as collaborators can push. Forks and pull requests never change
your repository until *you* merge them. Keep the collaborator list minimal.

## 2. Protect the `main` branch

Prevents force-pushes, deletion, and unreviewed direct commits — even by collaborators.

**UI:** Settings → Branches → Add branch protection rule → Branch name pattern `main`:

- [x] Require a pull request before merging (require approvals: 1)
- [x] Require status checks to pass (select the CI check)
- [x] Require conversation resolution before merging
- [x] Do not allow bypassing the above settings
- [x] Restrict who can push (or lock direct pushes entirely)
- Block force pushes and deletions (default under the rule)

**CLI (GitHub CLI):**

```bash
gh api -X PUT repos/mypsbots/digital-marketing-skills/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  -f 'required_pull_request_reviews[required_approving_review_count]=1' \
  -F 'enforce_admins=true' \
  -F 'required_status_checks=null' \
  -F 'restrictions=null' \
  -F 'allow_force_pushes=false' \
  -F 'allow_deletions=false'
```

(Replace `required_status_checks` with your CI check contexts once green on `main`.)

## 3. Own the canonical distribution

Forks can copy code but cannot:

- Publish to your npm package name (`digital-marketing-skills-mcp`) — you are the sole publisher.
- Claim your official Cursor marketplace listing.
- Impersonate your hosted HTTPS connector.

See [`TRADEMARK.md`](../TRADEMARK.md) for name/logo restrictions on derivatives.

## 4. If preventing source copying matters more than reach

Then do **not** publish to the public marketplace. Instead:

- Keep the repository **private**.
- Distribute only the **compiled npm package** and/or a **hosted HTTPS MCP endpoint**.
- Use it as a **local or team** Cursor plugin (`~/.cursor/plugins/local`, or a team marketplace).

This keeps the source closed while still working in Cursor, Claude, ChatGPT and Gemini — at the cost
of public-marketplace visibility.
