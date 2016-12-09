# Howard University School of Business website

##Welcome!
  Thank you for taking the time to work on this project. To get started, simply request to be a collaborator and I will approve it. This will allow you to push code to the repositor!
  ~~~
  git clone https://github.com/kkneomis/howardbschool.git
  cd howardbschool
  ~~~

##Getting started 
  After checking out the repository and familiarizing yourself with it, you are ready to go. The easiest way to get started is to visit the issues page and pickup something to work on. You can contact me to get some help started or bounce some ideas off me. Once you are done, you can simply close the issue. You may also create a new issue if you see something wrong while you are working.
  
  Whenever you start to work make sure to do a pull so you have the most update version of the code base
  
  ~~~
  git pull
  ~~~
 
##Pushing code
  Since we have so many people working on this project, we want to be very careful we pushing our changes such that we do not step on each other's toes (e.g. throwing away all the work someone else did). We also want to have a certain level of oversight to make sure everything is done properly. 
  
  As a result, I urge you not to push to the master branch. Instead you should create a branch for your changes and commit you changes to that branch. Once I double check your code, I will personally merge it to make sure that nothing goes wrong. You can create and push to branch like this:
  ~~~
  $ git checkout -b simeon_homepage_work  
  #or some other descriptive name
  
  $ git commit -m 'added a new footer [issue 53]'

  $ git push -u origin simeon_homepage_work
  ~~~

  Once you do that, you can go back to the github page and create a pull request. Once I confirm the pull request, I will delete the branch and you simply create a new branch for your next set of changes.

## Basic linux commands

  ls - list out the contents of your current folder
  rm - delete a file
  cd - change directory
  mkdir - create a folder
  touch - create a file
  vim - create/edit a file
