Commit
===

> Checking in work

## Prerequisites

Have changed code in your repo.

## Credential Helper

During the next step of creating a repository, [let's follow these instructions](https://help.github.com/articles/caching-your-github-password-in-git/). Make sure
to use the right OS!

### Add and Commit

(Note: Will seem redundant at first to add and commit!)

command | notes
---|---
`git status` | to make sure you have changes to the repo
`git add -A` | to "stage" the changes
`git status` | this time, to check that everything has been staged
`git commit -m "commit message"` | to "take the snapshot". "why" (not "what")
`git status` | this time, to check everything is committed
`git push origin main` | to share the changes with your remote repo (you will be asked for email and password)
`git status` | overkill, to check that local in sync with origin

## Outcome

Check github, your updated code is in the cloud!
