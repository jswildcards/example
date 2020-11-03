# Git CheatSheet

Git CheatSheet.

## Table of Contents
1. [Create a Git Repo](#1-create-a-git-repo)
2. [Set GitHub Remote Url](#2-set-github-remote-url)
3. [Pull code from GitHub](#3-pull-code-from-github)
4. [Commit all code and push to GitHub](#4-commit-all-code-and-push-to-github)
5. [Create new GitHub branch](#5-create-new-github-branch)
6. [Check local branches](#6-check-local-branches)

#### 1. Create a Git Repo

```bash
$ git init
```

#### 2. Set GitHub Remote Url

```bash
$ git remote add origin https://github.com/jswildcards/git-cheatsheet.git
```

#### 3. Pull code from GitHub

```bash
$ git pull origin main
```

#### 4. Commit all code and push to GitHub

```bash
$ git add --all
$ git commit -m "Updates"
$ git push -u origin main
```

#### 5. Create new GitHub branch

```bash
$ git checkout -b develop
$ git push origin develop
```

#### 6. Check local branches

```bash
$ git branch
```
