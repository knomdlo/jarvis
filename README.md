# SampleContent
Overiview
=============================
This is the frontend SPA for DI-JARVIS project created to assist developers with easing their workflow.

# Steps to clone on machine

- Choose/Create a folder you wish to checkout your code into and open git bash in this folder
- Execute the below commands :

```sh
$ git clone https://github.com/knomdlo/jarvis.git
```
- A new folder named **jarvis** will be created with all of the source code in it.

# Steps to run the app in local

- Execute the below commands to download node & bower dependencies of the project:

```sh
$ npm install
```
```sh
$ bower install
```
- If the downloads were successfull & console showed no errors, the followinng 2 folders should now be created in your jarvis folder:
  - node_modules
  - bower_components
 
- Now finally, to start with developing run the below gulp task:
```sh
$ gulp develop
```

- Application will be served at URL : http://localhost:6789
