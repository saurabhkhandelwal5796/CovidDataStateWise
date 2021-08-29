/**
 * go to github
 * click on Plus sign to make new repository
 * give name to repository with - or _ eg: Covid19-data-statewise-dashboard
 * then click on create repository
 * now copy the ssh(ssh purr click kar padta hia.) key(url)
 * 
 * 
 */ 


/**
 * come to terminal 
 * add the project to the github type => """"git remote add origin """" then paste ther the ssh link copied
 * yarn add gh pages
 */


/**
 * go to package.json file
 * first object me dependencies ke bilkurl uppar type kar 
 * "homepage" : "https://saurabhkhandelwal5796.github.io/yourrepositoryname"
 * 
 * 
 * abb uppar se 3rd object me aa, two scripts add karr
 * "predeploy":'yarn build,
 * "deploy": "gh-pages -d build"
 */



/**
 * come to terminal => activate the new deploy script
 * type => ""  yarn deploy  ""
 *  
 * 
 * 
 * abb git me add kar 
 * type => git add -A
 * type => git commit -m "adding files for github pages"
 * type => ggpush or git push origin master
 * 
 * 
 * 
 */


/**
 * go back to github
 * go t osettings
 * gh-pages brand yeh souces hona chahiye neeche hee neeche 
 * now type on the link
 */