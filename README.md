# Lucy Waggoner - SWE Assessment

Skills assessment for the Center of Tech and Civic Leadership.

## 1) q1 - Fixed XML

`vipfeed-40-2020-06-30-Oklahoma.xml` is a VIP 5.2 compliant version of the almost-correct provided XML document. Violations included:

- Lack of required <Source>. (The Source added is ostensibly from Wikipedia but doesn't exist, I'm guessing, though Wikipedia has surprised me before.)
- 'none' declared as <Type> when <OtherType> was included.
- <Telephone> instead of <Phone>
  Wouldn't throw a validation error, but naming scheme was also incorrect according to the [VIP Specification page](https://vip-specification.readthedocs.io/en/release/xml.html#naming-convention).

## 2) q2 - XML->JSON->XML Converter

I wrote this one in Python because the other two use TypeScript.

**To run it**, just navigate to the `\ctcl-sample\q2-converter` folder and run `convert.py` with your preferred VIP-valid XML. I packaged the fixed XML from q1 alongside convert,py, so usually I just run:

`python .\convert.py .\vipfeed-40-2020-06-30-Oklahoma.xml`

The script will write an object conversion to `out.json` in the same directory, then read that file and convert it to `out.xml`. If you want to run either separately, both implementations can be found in short files under the `helpers` folder.

## 3) q3 - XML Visualization Web App

This is a webapp bootstrapped with Create-React-App and TypeScript. I used the package [xml2js](https://www.npmjs.com/package/xml2js) for conversion of uploaded files, in part because I wrote the q2 conversion script over in Python. In addition, I pulled in React Bootstrap just to throw together a slightly cleaner interface, but tried to keep design minimal so as not to too carried away!

**To run it**, just navigate to the `ctcl-sample\q3-webapp` folder and run `yarn start`. You can navigate through the site by running `serve`.

The initial page allows you to **upload a valid XML file for viewing** - again, I've included the fixed `vipfeed...etc.xml` in the base `q3-webapp` directory, as well as `shortsample.xml`, which is just a very stripped down file I later used for testing.

The web app is *fully unit tested*  with Jest and React-Testing-Library and allows you to:

- Upload a VIP Open XML compliant file for browsing
- View basic election and source data in the header
- Filter candidates by their Ballot Name (*case insensitive*)
- Click on a candidate to view their *linked Person tag* and *Party tag*

The site is also decently responsive, though I probably wouldn't recommend this kind of browsing on your phone!

![image-20200819021340471](D:\Git Repos\ctcl-sample\readme-webapp_img.png)

