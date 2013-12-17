ui-widget-factory
=================

UI Widget Factory, which owns lots of individual customized and responsive widgets


Setup
---
  - ### Prequisites
    - ruby
    - rails
    - node
    - sass
  - ### Start from scratch
    - Install rvm from rvm.io
    - Install ruby 
    ```
    rvm install ruby
    ```
    - Install Rails
    ```
    gem install rails
    ```
    - Install sass
    ```
    gem install sass
    ```
    - Install npm from npmjs.org/download
    - Install Grunt
    ```
    npm install -g grunt-cli
    ```
    - clone the repo
    - go to folder
    - run 
    ``` 
    npm install 
    ```
    - Start the server 
    ```
    node app.js 
    ```
    - Run the watcher 
    ```
    grunt watcher
    ```
    - hit url [http://localhost:3000]

## Directory Structure
```
ui-widget-factory
 +- src
   +-Javascripts (contains all JS files)
   +- sass (contains all scss files)
 +- views (contains all view html files)
 +- public (the folder where all css / images / javascript files will come after compilations)
 
```
