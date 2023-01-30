# The Dev Hub (Capstone Project)
<div align="center">A web-based organization tool by <strong>Morgan Arancibia</strong>, <strong>Jeffrey Koshy</strong>, and <strong>Nghia (Nathan) Vo</strong> to facilitate the job searching process.
<br></br>
<img src="https://i.imgur.com/ySdkLpv.png"/>
</div>

## Project Overview
The Dev Hub was created for people who need a little extra help with finding and tracking which jobs they have applied for. The Dev Hub allows you to sign in and add the jobs you have applied for, you can then view all the companies you have applied for, when you applied and which position you applied to. You are able to add notes, to help stay organized! There is also an option for users to add job postings they have seen, but don't necessarily want to apply to. That feature is there so you can see what others are posting, to feel supported but also get the opportunity to give support!

+ This repository is the front-end respository for the app
+ The back-end is deployed on Heroku: [here](the-dev-hub-app.herokuapp.com/api/thedevhub)
+ The front-end is deployed on Vercel: [here](the-dev-hub.vercel.app)
+ The associated back-end repository can be found: [here](https://github.com/nghiavo24/the-dev-hub-be) 

## Installation
1. Clone this repository to your labs folder and change directory into it.
2. Run `npm i` to download required dependencies.
3. Run `npm start` to run localhost
4. You will need a secret key to put inside your app because of the built-in Firebase authentication.


## Deployment
The front-end of our application uses ReactJS as our library. The front-end follows the best practice in naming the components to be semantic. The front-end composes the following technologies/platforms:

### Vercel:
Vercel is the most accessible platform to deploy websites. By connecting the ** your GitHub repository** to Vercel, you can simply deploy the main branch to Vercel domains — and it does all the heavy lifting for you. **(Julian Wallis)**

## Technologies
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width=10% height=10%><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width=10% height=10%> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width=10% height=10%><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width=10% height=10%><img src="https://user-images.githubusercontent.com/114704720/210926384-fc6e7e4e-0a32-4a14-a99e-3473e5ee9b6c.png" width=10% height=10%><img src="https://user-images.githubusercontent.com/114704720/210926665-d5f89b8f-32ef-4aeb-af0f-ccf0e8b7e499.png" width=30% height=50%>


## Wireframes

### Before
![Capstone Wireframe (1)](https://user-images.githubusercontent.com/114704720/210926956-87569a9d-374e-4533-9bd4-91b8e9d6c7e4.png)

### After
![Screen Shot 2023-01-02 at 10 39 52 PM](https://user-images.githubusercontent.com/114704720/210928975-0919d23f-56a3-43c0-b5e9-348f370d4141.png)
![Screen Shot 2023-01-05 at 10 07 19 PM](https://user-images.githubusercontent.com/114704720/210929042-bb7f14a6-5733-4e69-835a-48ff21dfee42.png)
![Screen Shot 2023-01-02 at 10 40 11 PM](https://user-images.githubusercontent.com/114704720/210928990-07276f07-8721-40fb-9b04-055a5550f037.png)
![Screen Shot 2023-01-05 at 10 11 45 PM](https://user-images.githubusercontent.com/114704720/210929086-9ddb22d7-238b-4493-9235-c52ba9523db4.png)
![Screen Shot 2023-01-05 at 10 24 48 PM](https://user-images.githubusercontent.com/114704720/210929817-2ed5ef1b-2ce3-4621-a87e-e35bf1a82db1.png)
![Screen Shot 2023-01-05 at 10 24 58 PM](https://user-images.githubusercontent.com/114704720/210929821-0faa9cac-c4c5-4701-8b0f-3271d56d81ef.png)
![Screen Shot 2023-01-05 at 10 13 43 PM](https://user-images.githubusercontent.com/114704720/210929157-ede348b1-e7d9-4ff5-8966-9d7db73239bf.png)
![Screen Shot 2023-01-05 at 10 13 59 PM](https://user-images.githubusercontent.com/114704720/210929177-32737416-a703-42fa-8164-4b3dea37e446.png)
![Screen Shot 2023-01-05 at 10 37 33 PM](https://user-images.githubusercontent.com/114704720/210931765-228682cb-23f0-481b-a754-3125cef80009.png)
![Screen Shot 2023-01-05 at 10 37 57 PM](https://user-images.githubusercontent.com/114704720/210931767-62189517-9dfd-4700-a455-62056ea7f2a0.png)
![Screen Shot 2023-01-05 at 10 38 11 PM](https://user-images.githubusercontent.com/114704720/210931770-789991e7-4dfb-4823-b7ef-1d31814eed75.png)
![Screen Shot 2023-01-05 at 10 38 20 PM](https://user-images.githubusercontent.com/114704720/210931772-f0222bb8-bb56-4429-b8ea-f4f3b3277837.png)

## React Component Hierarchy
### Before
![image](https://user-images.githubusercontent.com/47038229/210912633-9ed4a7b6-3d2b-48e6-8f99-7691209be53c.png)

### After
Some differences that we can see from our planned React Component hierarchy, vs what it looks like today. For example, we do not have a sign up page. Since we are using firebase to deploy, the user can sign in using a google email. Some components we added were a footer.js and a homepage.js. 


## MVP
+ AAU, I want to be able to sign into the app with my google email.
+ AAU, I want to be able to view all of the job postings on the Mainhub page.
+ AAU, I want to be able to view all of the job applications on the Myhub page.
+ AAU, I want to be able to edit and delete both postings after logging in.
+ AAU, I want to be able to click on a link that will take me to a current job posting.
+ AAU, I want to be able to add notes after applying for a job, to keep myself updated on any recent news.
+ AAU, I want to be able to view the aboutme page, and homepage without logging in.

## Post MVP
- [x] The application is responsive.
- [x] There are clear visual indication when you log in and log out.
- [ ] Dynamic alert to handle errors when not logged in or token expires.
- [ ] Reminders
- [ ] Dark mode
- [ ] A built-in calendar to sync with your the application that you applied.
- [ ] Dynamic search and sort by company, title, date.

## Future features
- Add an option for light and dark mode
- Add an option to set reminders for interviews
- Add the option to be able to apply from the website and not have to go to an external page
- Add the option to alphabetically sort your Jobs or Applications
- Add the option to sort by any field
- Re-design the logged-in/logged-out pop-up
- We can add a filter feature, so the user can filter all the applications or postings.
- We can also an help page on each of the create pages, to help make user experience better. 
- We can also add alerts to each input box, so the user will know if they missed something when trying to create a posting or application.


## Project Management
We follow the SCRUM & Agile development process throughout our project. We meet daily to discuss about things like our goals for the days, our blockers, any on-going issues. We did pair-programming as well as individual programming. Before we break for the day, we discussed about our progress, any wins, remaining issues.
We follow the a strict 'Feature Branch' git workflow to avoid creating conflict and it had been very successful. Beside some minor conflicts due to unexpected changes in planning, we had no to very minimal conflict when merging. 
As a leader, Nathan tried to be as transparent and communicative to his team members as much as possible. He discussed his ideas, opened to suggestions, checked in with team members to make sure they were on the same page and peformed many code reviews sessions. Nathan was also responsible for being the SCRUM leader and Git Manager. He made all the pull requests, reviewed and resolved conflicts if there were any, then he merged and delete that branch. 

## Issues & Resolutions
We had the opportunity to learn Tailwind.css in this project, though it was fun it did come with some challenges. It was mainly time consuming when it came to styling because it is a new syntax we had to learn and had to go back and forth to different resources to get it right. But the more we added the easier and faster styling became!
We did have an issue with the date not displaying as we were intending it to, we fixed it but it then broke again unfortunately. But after several hours of different sets of eyes looking at it and reading through different documents... we put it to the side. But after much time the team attended office hours and we were able to work with our TAs to get the date displayed properly.


## Resources:
+ [Whimsical - Used for the Req-Res Diagram](https://whimsical.com)
+ [ESlint](https://stackoverflow.com/questions/41604162/eslint-throws-is-assigned-a-value-but-never-used-webpack-module)
+ [useEffect Hook missing dependencies](https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency)
+ [Validate form before submit fix](https://stephencharlesweiss.com/form-validation-prevent-default-and-on-submit-vs-on-click)
+ [Only number in input field](https://www.geeksforgeeks.org/how-to-force-input-field-to-enter-numbers-only-using-javascript/#:~:text=By%20default%2C%20HTML%205%20input,numeric%20keyboard%20on%20mobile%20devices.)
+ [Tailwind](https://tailwindcomponents.com/cheatsheet/)
+ [Tailwind Media Queries](https://tailwindcss.com/docs/responsive-design)
+ [Color Scheme](https://coolors.co/c3a995-307473-12664f-2dc2bd-805d93)
