# Git Command Reference

Essential Git commands for version control during prototyping.

---

## Setup

```bash
# Configure your identity (one time)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Initialize a new repository
git init

# Clone an existing repository
git clone <url>
```

---

## Daily Workflow

```bash
# Check what's changed
git status

# See actual changes in files
git diff

# Add specific files to staging
git add <filename>

# Add all changed files
git add .

# Commit with a message
git commit -m "Describe what changed"

# Push to remote
git push
```

---

## Branches

```bash
# List branches
git branch

# Create and switch to new branch
git checkout -b feature-name

# Switch to existing branch
git checkout main

# Merge a branch into current branch
git merge feature-name

# Delete a branch
git branch -d feature-name
```

---

## Undo Mistakes

```bash
# Discard changes in a file (before staging)
git checkout -- <filename>

# Unstage a file (keep changes)
git reset HEAD <filename>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) — CAREFUL
git reset --hard HEAD~1
```

---

## Remote Repositories

```bash
# Add a remote
git remote add origin <url>

# View remotes
git remote -v

# Pull latest changes
git pull

# Push to remote
git push origin main

# Push a new branch
git push -u origin feature-name
```

---

## View History

```bash
# See commit history
git log

# Compact history
git log --oneline

# See who changed what
git blame <filename>
```

---

## Common Scenarios

### Starting a New Project

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (create repo on GitHub first)
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### Save Work in Progress

```bash
git add .
git commit -m "WIP: describe current state"
git push
```

### Start a New Feature

```bash
git checkout main
git pull
git checkout -b feature-name
# ... make changes ...
git add .
git commit -m "Add feature-name"
git push -u origin feature-name
```

### Oops, Wrong Branch

```bash
# Save current changes
git stash

# Switch to correct branch
git checkout correct-branch

# Apply saved changes
git stash pop
```

---

## Tips

1. **Commit often** — Small, frequent commits are easier to understand and undo
2. **Write clear messages** — Future you will thank present you
3. **Pull before push** — Avoid merge conflicts
4. **Use branches** — Keep experiments separate from working code
5. **Don't panic** — Almost everything in Git can be undone
