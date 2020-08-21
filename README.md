Written for a 72hr skills assessment.

## Voter Information Project XML Visualization Web App

This is a webapp bootstrapped with Create-React-App and TypeScript. I used the package [xml2js](https://www.npmjs.com/package/xml2js) for conversion of uploaded files, in part because I wrote the q2 conversion script over in Python. In addition, I pulled in React Bootstrap for a slightly nicer interface.

**To run it**, just navigate to the folder and run `serve build`.

The initial page allows you to **upload a valid XML file for viewing** - I've included the fixed `vipfeed...etc.xml` in the base directory, as well as `shortsample.xml`, which is just a very stripped down file I later used for testing.

The web app is unit tested with Jest and React-Testing-Library and allows you to:

- Upload a VIP Open XML compliant file for browsing
- View basic election and source data in the header
- Filter candidates by their Ballot Name (*case insensitive*)
- Click on a candidate to view their *linked Person tag* and *Party tag*

The site is also decently responsive, though I probably wouldn't recommend this kind of browsing on your phone!

![image-20200819021340471](D:\Git Repos\ctcl-sample\readme-webapp_img.png)

