# Team Profile Generator

## Deployable Video Link



## Goal
The task was to make a HTML generator that created a website with sections for Manager, Intern, and Engineer. All three positions had to to have the inputs for names, id numbers and emails addresses that when clicked in the HTML, opens up and populate the TO field of the email with the address in the user's default email program. The only difference between each rolls was the Manager roll had to have an office number, the Engineer roll had to have a GitHub username that when clicked on sent the user to the engineer's GitHub profile, and the Intern roll had to have an input to put the name of the school the user wants to input in. The application also needed to have test.js files that associated with each roll, Engineer.test.js to Engineer.js for example, and all tests had to pass.

## Technology Use
  - Javascript
  - HTML
  - W3.CSS Templates
  - JQuery
  - Open Wea
  - Moment.js
  - VS Code
  - Git Bash 
  - GitHub

## Execution
The first part of making the weather dashboard operational was to make the HTML and CSS. Luckily with Bootstrap, structuring the index.html file was not overbearing. Since the website was mainly for displaying the current weather and a five day forecast, the style.css sheet was relatively anemic. The real work behind the website was situated in the Javascript. The first thing that was put into the javascript was a continuos clock that is situated in top right corner of the website. It displays the the real time a user access the website.

The function in order to make this happen is shown below:

```Javascript
 var weatherClock = function () {
        var presentClock = moment().format('[Today], dddd MMMM Do YYYY h:mm:ss a')
        $("#presentDay").text(presentClock)
    }
    setInterval(weatherClock, 1000)
```
presentDay was the id in the HTML that controlled the date so adding a function that calculated the present time, in the form of a variable aptly named presentClock, display the time in real time. The interval down below set the time for every 1000 millisecond, one second.

The second part of tackling the Javascript was making an API call for the weather. In order for any API to work, one needs an API key. After receiving the key from the Open Weather website, a function had to be created to call for the forecast of any given city and another function for the longitude and latitude in order to make displaying the weather of any given city possible.

The set up is shown below:

```Javascript
function retrieveAPI() {
    var city = document.getElementById("city").value
    console.log(city)
    if(!searchHistory.includes(city)){
        searchHistory.push(city)
    }
    localStorage.setItem('retrieveAPI', JSON.stringify(searchHistory));
    var requestSite = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=cf1929056b460b4693a80b30482c21ed&units=imperial'

    fetch(requestSite)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data)
            var forecastListEl = document.getElementById("js-forecast-list")
            forecastListEl.innerHTML = ""
            for (let i = 0; i < 5; i++) {
                renderForecastCard(data.list[i], i)
            }

            var lon = data.city.coord.lon
            var lat = data.city.coord.lat
            var requestNew = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=cf1929056b460b4693a80b30482c21ed&units=imperial'

            fetch(requestNew)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    var forecastListE0 = document.getElementById("weather")
                    forecastListE0.innerHTML = ""
                    renderOriginForecastCard(data)
                    console.log(data)


                })

        })
}
```
In order to display the weather conditions with picture icons and information two functions had to be made. The function that shows the current day's weather, renderOriginForecastCard, displays today's weather while the forecast function, renderForecastCard, displays the the five day forecast. 

Both functions are shown below:

```Javascript
function renderOriginForecastCard(todayWeather) {
    console.log(todayWeather)
    var dayOne = moment().format("MMM Do YY")
    var forecastListE0 = document.getElementById("weather")
    var cardOneHTML = `
<div class="card">
  <div class="card-body">
  <p class="card-text">${dayOne}</p>
  <p class="card-text">${document.getElementById("city").value}</p>
  <img class="card-title"src=${"http://openweathermap.org/img/wn/"+todayWeather.weather[0].icon+"@2x.png"}
    <p class="card-text">temp: ${todayWeather.main.temp}</p>
    <p class="card-text">wind speed: ${todayWeather.wind.speed}</p>
    <p class="card-text">wind gust: ${todayWeather.wind.gust}</p>
    <p class="card-text">humidity: ${todayWeather.main.humidity}</p>
  </div>
</div>
`
    var listItemOne = document.createElement("li")
    listItemOne.innerHTML = cardOneHTML
    forecastListE0.appendChild(listItemOne)
}
function renderForecastCard(weatherObject, i) {
    console.log(weatherObject)
    var dayNext = moment().add(i + 1, 'days').format("MMM Do YY")
    var forecastListEl = document.getElementById("js-forecast-list")
    var cardHTML = `
<div class="card">
  <div class="card-body">
  <p class="card-text">${dayNext}</p>
  <p class="card-text">${document.getElementById("city").value}</p>
    <img class="card-title"src=${"http://openweathermap.org/img/wn/"+weatherObject.weather[0].icon+"@2x.png"}>
    <p class="card-text">temp: ${weatherObject.main.temp}</p>
    <p class="card-text">wind speed: ${weatherObject.wind.speed}</p>
    <p class="card-text">wind gust: ${weatherObject.wind.gust}</p>
    <p class="card-text">humidity: ${weatherObject.main.humidity}</p>
  </div>
</div>
`
    var listItem = document.createElement("li")
    listItem.innerHTML = cardHTML
    forecastListEl.appendChild(listItem)
}
```
After creating the functions that show the current weather and the 5 day forecast, The next stage was to make each city be saved in localStorage and be pulled out in order to generate buttons for cities in previous history to be clicked on and seen. A global variable had to be made in order to get items out of local storage and then, with a combination of a for loop and appending elements with the button as seen below:

 ```Javascript
var searchHistory = JSON.parse(localStorage.getItem("retrieveAPI")) || [];

for (let i = 0; i < searchHistory.length; i++) {
    var historyBtn = document.createElement("button")
    historyBtn.textContent = searchHistory[i]
    historyBtn.addEventListener("click", function () {
        var city = (searchHistory[i])
        document.getElementById("city").value = city
        retrieveAPI()
    })
    document.getElementById("history").append(historyBtn)
}
 ```
The for loop above relies on the array generated from the API calls get saved in localStorage and then pulls the search results out of localStorage in order to generate a clickable history list that doesn't repeat multiple searches of the same city but keeps the new cities displayed. the part is the fetch button itself shown below:

```Javascript
fetchButton.addEventListener('click', retrieveAPI)
```
## Result

The following website demonstrates what the final product looks like:


<!-- # 10 Object-Oriented Programming: Team Profile Generator

## Your Task

Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

> **Note**: There is no starter code for this assignment.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)

The styling in the image is just an example, so feel free to add your own.

## Getting Started

This Challenge will combine many of the skills we've covered so far. In addition to the User Story and Acceptance Criteria, we’ve provided some guidelines to help get started.

Because this Challenge will require a video submission, refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like the following example:

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

**Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Deliverables: 15%

* A sample HTML file generated using the application must be submitted.

* Your GitHub repository containing your application code.

### Walkthrough Video: 32%

* A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must show all four tests passing from the command line.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated HTML file that matches the user input.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

  * Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

  * The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality readme with description and a link to a walkthrough video.

## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application and passing tests.

* A sample HTML file generated using your application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved. -->
