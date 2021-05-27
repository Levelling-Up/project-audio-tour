## How to collaborate in one repo with branches

*(in your VSC code editor, this Markdown file looks strange with the use of * and ` etc. Markdown is a language that you can use to write text with some layout, for example a README.md. In the repo, you will see this as normal text, without the * and [] etc.)*.
  

<img src="/background/github_meme.jpg" width="450"  />


### Basic instructions
* everyone clones the project repository to their local computer
* after cloning, you should have a `main` branch and a `develop` branch
* we work with the `develop` branch on a day-to-day basis
* our `main` branch is not to be touched: members can make pull requests to the `develop` branch, and these will be approved centrally when we are absolutely sure a feature/change is working OK
* after that, we will consider merging the `develop` branch with the `main` branch
* background material, guidelines and meeting documents are the only files that will be added to the `main` branch without consultation with the group but with clear commit messages
* we will try to **communicate as much as possible about merging into `develop`** so that everyone is aware the code on `develop` has changed and they have to do a pull request

---

### Branches

**Important: any time you start to work on your own branch, always FIRST do a pull request from `develop`**: in this way you always have the latest code, and you will avoid coding something that creates problems with the code in the `develop` branch because other members may have merged something and you don't have that locally yet  

**First step: how to create a branch:**  
* each member creates a **personal branch from the `develop` branch**
* in your local repo, make sure you are on the `develop` branch with **git branch** (you will see a `*` in front of the branch you are currently on. You type `q` to get out of that terminal screen).
* if you have to change from one branch to another, use **git checkout *branch-name***
* when you are on the `develop` branch, create a new branch with topic and initials (example: page-footer-hh) by using **git branch *branch-name***
* after you create a branch from the command line (= in your terminal, locally), you have to add it to the remote repository on GitHub as follows:
  * git add .
  * git commit -m "Created new branch *name* for feature/change/fix of *whatever*"
  * **git push -u origin *name*** Explanation: `-u` means *upstream*: you make the same branch remotely, and this is why you use `origin` and the **exact name** of your branch
* in case you are interested: you can also push from your own local branch to a different remote branch. Use **git push <remote> <your_local_branch>:<remote_branch_name>**
* read about [branching](https://stackoverflow.blog/2021/04/05/a-look-under-the-hood-how-branches-work-in-git/?utm_source=Iterable&utm_medium=email&utm_campaign=the_overflow_newsletter)

---

### How to keep your branch up to date by pulling from develop:
1. the `develop` branch is our working branch, as explained above
2. when you start workin on your branch, you **first pull from develop** as follows:
   1. first check that you are on your own branch with **git branch** (you will see a `*` in front of the branch you are currently on). You type `q` to get out of that terminal screen
   2. to pull from the `develop` branch, you use **git pull origin develop**
   3. you will get a message that you need to specify why this pull is necessary (it is a commit, after all)
   4. to be able to write in that screen, first type `i` (for insert)  
   5. it will look strange because you will be typing in the text that is there, no worries, go ahead  
   6. when you have typed your commit message, you can get out of that screen by pressing the `escape` key and then `:wq` (basically means: write-quit)
   7. this should bring you back to your normal terminal screen, and a message that you are up to date (you can check this using **git status**)  
3. always check you are working in **your own branch** when you start coding after pulling from `develop`
4. you commit your changes to your own branch on GitHub with **git push -u origin *name*** (as explained in the section above)
5. when you are ready with your feature, you can make a pull request to propose merging your code into the `develop` branch
6. the pull request needs to have a **clear message explaining what the feature/change/fix is**
7. the pull request will be checked and commented/approved by the repository manager
8. if your feature/change/fix is approved, you can delete your branch if you like (not obligatory)
9. you will create a new branch with *feature-name-yourInitials* to start something new, and follow the same process as described above  

**Important:** if you do not delete the branch, make sure you don't confuse it with a new branch you create. You can make sure by using **git branch** to get a list of all your branches, and check on which branch the `*` is. Use **git checkout *branch-name*** to move to the correct branch.

<img src="/background/gitPush.jpg" width="450" />

Useful [article](https://faun.pub/collaborating-on-github-22fd5886fce) on branching *(Note: in the article, forking is used - we will not fork the repo but clone it directly)*

Useful [article](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/) on commit messages

Useful [article](https://devconnected.com/how-to-push-git-branch-to-remote/) on pushing to remote

Useful [article](https://www.geeksforgeeks.org/merge-conflicts-and-how-to-handle-them/) about merge conflicts
