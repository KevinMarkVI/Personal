#Usage

##Clone this repo

        $ git clone git@github.com:Shashikant86/BehatDemo.git
        $ cd BehatDemo


Now install Behat, Mink, MinkExtension and their dependencies with composer:

      $curl http://getcomposer.org/installer | php
      $php composer.phar install

##To Run tests on Sauce Labs: 

You need to create account with SauceLabs https://saucelabs.com/signup 
Once registered you will have username and API key. 

Web-Driver (selenium2) Tests: 

update behat.yml and 'sauce' profile. 
Change "wd_host: username:apikey@ondemand.saucelabs.com/wd/hub" with your username and Password. 


And Run 

       $./bin/behat -p sauce



























