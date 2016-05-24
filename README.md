# Bootstrap Challenge
Implement challenge to pass the Bootstrap [specs](/specs/bootstrap.spec.js) for [this](codecheck-bootstrap-challenge.png) design.

- Use [index.html](/public/index.html) to solve the challenge
- For additional styling you can use [main.css](/public/main.css)
- To check the html page in browser please run the following command in terminal.
```bash
$ gulp serve
```

**Note:**
- Follow [this](codecheck-bootstrap-challenge.png) design to use particualr bootstrap classes, solve this challenge and pass the tests.
- You can refer [Bootstrap](http://getbootstrap.com/) official site.
- Tests can help you solve challenge. You can refer tests [here](specs/bootstrap.spec.js).

## Rules 
### Step1. Create the top bootstrap navigation bar 
  - with menu titles on the right side

### Step2. Create bootstrap carousel 
- must have indicators 
- must have wrapper for slides
- must have atleast 3 items
- must have an active item
- must have images inside items
- must have left and right controls

### Step3. Create bootstrap grid             
- must have container and row
- divide it into 4 columns using col-md-2
- each grid column must have one image which is responsive and circular (use image bootstrap classes)

### Step4. Create bootstrap progress bar             
- must have atleast 4 progress bars

### Step5. Create bootstrap form
- must be horizontal
- must have atleast 4 fields and one submit form button

### Test Results *before* solving the challenge  
```
codecheck: Finish with code 15
codecheck: tests  : 15
codecheck: success: 0
codecheck: failure: 15
```

### Test Results *after* solving the challenge
```
codecheck: Finish with code 0
codecheck: tests  : 15
codecheck: success: 15
codecheck: failure: 0
```
--- --- ---
## Run Tests
To run tests locally install `codecheck` by running the following command in terminal.
```
$ npm install codecheck -g
```
To run tests in web editor please click in `RUN` button on left side of web editor.

## Explain your code
In [answer.md](answer.md) write a brief explanation 
- About how your code works
- Problems faced while solving the challenge
- How you solved those problems
- Improvements/Feedbacks are also welcomed
