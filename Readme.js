var documentation = 'About\n===\n\nNinja Media Script is a Viral Fun Media Sharing Script. This script is so easy to install and customize to make it your own. Users can sign up with Facebook, Google, or Email. This script allows users to upload and like Videos, GIFs, and any other kind of images. Full video support for YouTube, Vimeo, and Vine. Here\'s what you\'ll find in this documentation:\n\n * Installing\n * Configuring\n * Troubleshooting\n * Further Reading\n \n*Current version: [1.0.9]*\n\nQuick Start Videos\n===\n\nVideo 01 - Quick Start\n\n<iframe width="640" height="360" src="http://www.youtube.com/embed/qRmFzjRSgHc" frameborder="0" allowfullscreen></iframe>\n\nVideo 02 - Media\n\n<iframe width="640" height="360" src="http://www.youtube.com/embed/XUcW-bhFZRY" frameborder="0" allowfullscreen></iframe>\n\nVideo 03 - User & Comments\n\n<iframe width="640" height="360" src="http://www.youtube.com/embed/DCQzXtyIjYw" frameborder="0" allowfullscreen></iframe>\n\nVideo 04 - Admin\n\n<iframe width="640" height="360" src="http://www.youtube.com/embed/2dmF3q1oNho" frameborder="0" allowfullscreen></iframe>\n\nVideo 05 - Infinite Scroll & Responsiveness\n\n<iframe width="640" height="360" src="http://www.youtube.com/embed/3IvjmZztdfQ" frameborder="0" allowfullscreen></iframe>\n\n\n\n\nInstall & Upgrade\n===\n\nInstallation\n---\n\nInstalling the script is very easy. Follow the steps below to install this script on a local  machine or on your server. If you do not currently have a server. We highly recommend using Media Temples Grid Servers.\n\n\n1. Move all the files inside of the \'ninja-media-script\' folder to the root of your website.\n2. Create a new database on your server and give it any name you would like to use.\n3. Navigate to \'yourwebsite.com/install\' and you will be presented with an install screen. The install screen should look similar to the following image:\n![Install Screen](images/install-screen.png)\n\n4. On the install screen, you\'ll want to add your Admin Username, Email, and Password. Next you\'ll enter your database info including your Database Host, Name, User, and Password.\n\n5. Click install and if everything went through correctly, you should see a screen similar to the following:\n![Install Screen 2](images/install-screen2.png)\n\n6. Then just \'Click Here to Visit Your Site\' and you\'ll be taken to your new site.\n\nNote, if you are having trouble installing, be sure to visit <a href="http://forums.devdojo.com/10-common-installation-issues" target="_blank">http://forums.devdojo.com/10-common-installation-issues</a> to checkout some common install issues.\n\nUpgrading\n---\n\nFollow the steps below to upgrade your script to the latest version:\n\n1. Make sure you have backed up all the files inside of the \'app\' and \'public/assets\' folder\n\n2. Upload and replace all files and folders in the app folder (EXCEPT CONFIG FOLDER) (note, if you have changed any of the language files, you do not need to replace the ‘lang’ folder and you can keep your current custom language settings)\n\n3. Upload and replace all the files inside of the \'public/assets\' folder\n\n4. Visit yoursite.com/upgrade\n\nTest your site is backup and everything should be all good to go!\n\n\nConfigurations\n===\n\nFacebook and Google Auth\n---\n\n### Facebook Authentication\n\n<b>In order to enable Facebook Authentication you must follow the steps below:</b>\n\n  1. Login to your Facebook account and visit <a href="http://developers.facebook.com" target="_blank">http://developers.facebook.com</a>.\n\n  2. On the top Nav You will see a Dropdown titled \'Apps\', click on that and then click \'Create a New App\'\n\n  3. Give Your App a display name, a namespace/generic key (this is optional), select the category of your website, and click \'Create App\'\n\n  4. Next in the Facebook App dashboard click on the Settings tab to the left.\n\n  5. Add Your App domains, <a href="#_">http://yoursite.com</a>, <a href="#_">http://www.yoursite.com</a>, and your contact email\n\n  6. Click on Add Platform Button and select \'Website\'\n\n  7. Enter in your site URL and the Mobile Site URL (which should both be the same)\n\n  8. Click on Save Changes\n\n  9. Click on The Status & Review button to the left and turn on your App. (Toggle the Switch from No to Yes) and then click confirm.\n\n  10. Next Copy and paste your App ID into the Ninja Media Script admin settings Facebook Oauth Key field.\n\n  11. Then Copy and paste your App Secret into the Ninja Media Script admin settings Facebook Oauth Secret Key field.\n\n  12. Click Save settings in your to save your Oauth Key & Secret Keys.\n\nVisitors of your website will now be able to Authenticate themselves using their Facebook Login information.\n\n\n### Google Authentication\n \n<b>In order to enable Google Authentication you must follow the steps below:</b>\n\n  1. Login to your Gmail/Google account and visit: <a href="https://cloud.google.com/console/project" target="_blank">https://cloud.google.com/console/project</a>\n\n  2. Click on Create a New Project\n\n  3. Give Your Project a Name and Product ID (Product ID can be anything generic)\n\n  4. Once your project has been created you should see a menu to the left with a link to view your \'APIs & auth\'\n\n  5. Click on \'APIs & auth\' & then click on credentials\n\n  6. Under the Section that is titled \'Oauth\' click on the \'Create New Client ID\' button.\n\n  7. Make sure the application type is Web Application.\n\n  8. Enter in your URL under \'Authorized Javascript origins\' (<a href="#_">http://www.yoursite.com</a>)\n\n  9. Enter in your URL/auth/google under Authorized redirect URI. For example (<a href="#_">http://yoursite.com/auth/google</a>) (note try entering without the \'www\' if you have problems)\n\n  10. Click on \'Create Client ID\' button.\n\n  11. Once your click to \'Create Client ID\' you\'ll have a new \'Client ID for web application.\n\n  12. The Client ID is going to be your Google Oauth Key, and the Client secret is going to be your Google Oauth Secret key.\n\n  13. Copy and paste the values above into your site admin settings for Google Oauth & Google Oauth Secret Key and Save your settings.\n\nVisitors of your website will now be able to Authenticate themselves using their Google Login information.\n\nWriting your documentation is super easy. By leveraging the markdown language (text files ending in .md) we can edit a single text file to create our documentation.\n\n### Problems with Facebook or Google\n\n<b>If you are having problems authenticating via Facebook or Google, please try and make sure that your PHP.ini settings are set to the following:</b>\n\n```\nregister_long_array: Off\nregister_globals: Off\nallow_url_fopen: On\n```\n\nThis will gaurantee the settings you need to set in order for the Facebook/Google Oauth to work correctly.\n\nBy default those are the settings in PHP.ini, but if the PHP.ini is not updated after upgrading a version of PHP you may need to manually set those values :)\n\nConfiguring Your Password Reset Functionality\n---\n\n<b>In order for the password reset to work you\'ll need to add your gmail address and password to:</b>\n\n```\napp/config/mail.php\n```\n\nChange line 57:\n\n```\n\'from\' => array(\'address\' => \'ninjamediascript@gmail.com\', \'name\' => \'Ninja Media Script\'),\n```\n\nThen on line 83:\n\n```\n\'username\' => \'\',\n```\n\nAdd your gmail username/email\n\nFinally line 96, you\'ll add your password:\n\n```\n\'password\' => \'\',\n```\n\nAnd you should be all good to go.\n\nTranslating the Script\n---\n\n<b>You can translate the script to any language that you would prefer, here is how to do it:</b>\n\nSimply copy the app/lang/en folder and rename the \'en\' folder to whatever you want to call your language.\n\nThen change all of the language files in the new folder you just created.\n\nNext inside of app/config/app.php line 55 change:\n\n```\n\'locale\' => \'en\',\n```\n\nto your language folder name:\n\n```\n\'locale\' => \'your_language_folder\',\n```\n\nThen your app will be translated to your langauge :)\n\n\nChanging Backgrounds\n---\n\nThe background images are located in the public/uploads/backgrounds/ directory.\n\nThere are 10 files 1-10 which will randomly be displayed in the login/signup pages.\n\nTo change the images you can simply replace each of the images.\n\nFor example. Replace 1.jpg in the folder with a background image named 1.jpg. Do the same for the rest of the images and your background images will show up randomly in the login/signup pages.\n\n\n\nFurther Resources\n===\n\nBe sure to checkout our forums here <a href="http://forums.devdojo.com/conversations/ninja-media-script" target="_blank">http://forums.devdojo.com/conversations/ninja-media-script</a>\nAnd our Support Center here <a href="http://devdojo.ticksy.com" target="_blank">http://devdojo.ticksy.com</a>';
