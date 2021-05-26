### How to collaborate on one repo with branches

* everyone clones the project
* you should have a main branch and a develop branch
* main branch is not touched: members can make pull requests and these will be approved centrally when we are absolutely sure a feature/change is working OK
* background material, guidelines and meeting documents are the only files that will be added to the main branch without consultation with the group but with clear commit messages
* we work with the develop branch on a day-to-day basis
* each member creates a branch with topic and initials (example: page-footer-hh)
* **the work on your own branch always starts with a pull request from develop**: in this way you always have the latest code, and you will avoid coding something that creates problems with the code in the develop branch because other members may have merged something
* we will try to **communicate as much as possible when merging is done** so that everyone is aware the code on develop has changed and they have to do a pull request


How to keep your branch up to date:
1. the develop branch is our working branch, as explained above
2. when you start workin on your branch, you **first pull from develop:**
  * first check that you are on your own branch: **git branch** (you will see a * in front of the branch you are currently on). You type q to get out of that terminal screen
  * to pull from the develop branch, you use **git pull origin develop**
  * you will get a message that you need to specify why this pull is necessary (it is a commit, after all)
  * to be able to write in that screen, first type i (for insert)
  * it will look strange because you will be typing in the text that is there, no worries, go ahead
  * when you have typed your commit message, you can get out of that screen by pressing the escape key and then :wq
  * this should bring you back to your normal terminal screen, and a message that you are up to date (you can check this using **git status**)
