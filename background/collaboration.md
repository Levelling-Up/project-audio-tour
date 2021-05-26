### How to collaborate on one repo with branches

*(in your code, this Markdown file looks strange with the use of * etc. Markdown is a language that you can use to write text with some layout, for example a README.md. In the repo, you will see this as normal text, without the * and [] etc.)*

Useful [article](https://faun.pub/collaborating-on-github-22fd5886fce) *(Note: in the article, forking is used - we will not fork the repo but clone it directly)*

* everyone clones the project repository
* after cloning, you should have a main branch and a develop branch
* our main branch is not touched: members can make pull requests and these will be approved centrally when we are absolutely sure a feature/change is working OK
* background material, guidelines and meeting documents are the only files that will be added to the main branch without consultation with the group but with clear commit messages
* we work with the develop branch on a day-to-day basis
* each member creates a **personal branch from the develop branch**:  
    * in your local repo, make sure you are on the develop branch with **git branch** (you will see a * in front of the branch you are currently on). You type q to get out of that terminal screen  
    * if you have to change from one branch to another, use **git checkout *branch-name***  
    * when you are on the develop branch, create a new branch with topic and initials (example: page-footer-hh) by using **git branch *branch-name***  
    * read about [branching](https://stackoverflow.blog/2021/04/05/a-look-under-the-hood-how-branches-work-in-git/?utm_source=Iterable&utm_medium=email&utm_campaign=the_overflow_newsletter)  
  * **the work on your own branch always starts with a pull request from develop**: in this way you always have the latest code, and you will avoid coding something that creates problems with the code in the develop branch because other members may have merged something  
  * we will try to **communicate as much as possible when merging is done** so that everyone is aware the code on develop has changed and they have to do a pull request  

---

How to keep your branch up to date:
1. the develop branch is our working branch, as explained above
2. when you start workin on your branch, you **first pull from develop:**
   1.first check that you are on your own branch: **git branch** (you will see a * in front of the branch you are currently on). You type q to get out of that terminal screen  
    * to pull from the develop branch, you use **git pull origin develop**  
    * you will get a message that you need to specify why this pull is necessary (it is a commit, after all)  
    * to be able to write in that screen, first type i (for insert)  
    * it will look strange because you will be typing in the text that is there, no worries, go ahead  
    * when you have typed your commit message, you can get out of that screen by pressing the escape key and then :wq  
    * this should bring you back to your normal terminal screen, and a message that you are up to date (you can check this using **git status**)  

