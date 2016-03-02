# Codecheck Bootstrap Challenge
- Implement challenge to pass the Bootstrap [specs](/specs/bootstrap.spec.js) for [this](codecheck-bootstrap-challenge.png) design
- Use [index.html](/public/index.html) to solve the challenge
- For additional styling you can use [main.css](/public/main.css)

### Run Test
To test your bootstrap challenge in local environment, run following commands.

```bash
$ npm install                               # Install modules (You need to run this for the first time)
$ $(npm bin)/mocha specs/*/*                # Run Test in locally
```

Make all test status as `passing`;

```
0 passing (2s)
15 failing
```

To check the html page in browser please run
```bash
$ gulp serve
```

## Step 1 - Create the top bootstrap navigation bar 
  - with menu titles on the right side
```bash
2 passing (2s)
13 failing
```
## Step 2 - Create bootstrap carousel 
- must have indicators 
- must have wrapper for slides
- must have atleast 3 items
- must have an active item
- must have images inside items
- must have left and right controls
```bash
9 passing (2s)
6 failing
```            
## Step 3 - Create bootstrap grid             
- must have container and row
- divide it into 4 columns using col-md-2
- each grid column must have one image which is responsive and circular (use image bootstrap classes)
```bash
12 passing (3s)
3 failing
```
## Step 4 - Create bootstrap progress bar             
- must have atleast 4 progress bars
```bash
13 passing (2s)
2 failing
```
## Step 5 - Create bootstrap form
- must be horizontal
- must have atleast 4 fields and one submit form button
```bash
15 passing (2s)
```
## Submit the Chalenge
- Once done please submit the challenge
- If you have ideas for modifications/better implementaion of this challenge or some other ideas you want to share please write it in [answer.md](answer.md)