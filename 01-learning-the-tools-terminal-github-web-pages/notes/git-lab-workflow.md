# Workflow for Creating a New Lab Repository

![xkcd](./git_3x.png)

For each new Lab, you will need to create a new repository in GitHub. We will initialize a repo, add a few setup files (a `README.md`, `lab.md` and later a `.gitignore`) and then create a development branch (`dev`) for us to work in. This allows us to make a Pull Request from `dev` to `main` for the Instructors and TA's to review and grade:


![xkcd](./git_commit_2x.png)


- Login to your GitHub account and create a new repo.
  - click the "New" button
  - set a repository name and make sure that "initialize this repository with a README" is ***NOT*** selected.
  - keep this page in your browser to reference the steps shown in the "…or create a new repository on the command line" section.
  - in your terminal:
    - `cd` into the folder you wish to have your repo live
    - mkdir `yourRepoName` and `cd` into it.
    - `git init`
    - `code .` to open VS code with your project.
    - copy the `README.md` and `lab.md` files from the classwork repo into your personal lab repo.
    - `git add -A` to stage your additions.
    - `git commit -m 'initialized repo'`
    - `git remote add origin https://github.com/<yourGitHubName>/<yourRepoName>.git`
    - `git push -u origin main`
  - next we will create a new `dev` branch which you will always be working in, we should not be developing in the `main` branch, as main is reserved for finished code intended to be published for client use. In your terminal again, type:
    - `git checkout -b dev`
  - this will create a new `dev` branch and automatically switch your VS code environment to the branch. To change between branches (as you will soon have more than one branch), type:
    - `git checkout <branchName>`
    - or type `git branch` to see a list of active branches
    - likewise `git branch -D <branchName>` will delete a branch. *You cannot be on the branch you wish to delete.*
  - Once you have finished work on a lab, and wish to submit it for grading, we need to make a Pull Request:
    - go to your repo and click the "Pull requests" tab.
    - click "New pull request"
    - The "base repository:" and "head repository:" dropdowns should be the same, and will most likely not need to be adjusted. You will need to now change the smaller drop down menus to "compare: dev" on the right dropdown, and "base: main" on the left dropdown. This is targeting your dev branch to merge its code into your main branch.
    - click "Create pull request"

This PR will allow the Instructors and TA's to check for passing Travis, review your code, and leave comments.
