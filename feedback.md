## UX

### Sign-in page

- Really like this feature
- Could get more feedback from when I create a user

### Articles

- Could do with a bit more distinction between article cards
- Really like how it responsively flips from width of 2 to width of 1
- What are the 3 links on the left?
- Article titles are not clearly links; look the same as other text

### Single Article

- Consider restricting the max-width

### General

- HTML `select`, `input`, `button` elements are not clear on some phones - i.e. you have to give them an explicit border & maybe also explicit background-color
- Some font sizes go way too small on phone screens
- The button for getting to sign-in is not very obvious, could make the text clickable?
- Difficulties caused by the username coming from the URL
  - I can post comments as that user even when it tells me I'm not signed in
  - I can type in a random user in the URL and it still loads, but a bunch of the buttons don't work in navbar
  - Some of these issues would be fixed by using `localStorage` - `getItem`, `setItem`
- Need more information on loading - you have a Loader but nothing seems to be showing up? FONT COLOUR
- Could maybe have a footer with your info?

## CODE

- In `App.js`, I just had an idea to solve the URL problems above - conditionally render almost everything in your Router according to `this.state.set`

### ArticleVotes

- Minor typo, you called it `currenState` rather than `currentState` (very minor)
- This component is extremely similar to `CommentVotes`. Have a think about making it reusable
- Inside `onClick`, the `event` parameter is unused - you can get rid (true in a few other components too)
- The whole thing is contained in a `<script>` tag, no need to use a React Fragment (also applicable in other components)

### Users

- Maybe extract some of this out to another component (e.g. `UserCreator`)

### Errors

- Good stuff!
- Think about going-through-a-tunnel errors (connection lost)

### General

- Great use of semantic HTML tags

# Checklist for Northcoders News Front End

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [✓] Basic styling added
- [✓] Responsive design
- [✓] Items aligned
- [ ] Content legible (not too wide, obstructed, etc)
- [ ] Refreshing doesn’t cause an issue on sub-pages (effects `sortBy` and user sign-in - up to you)
- [ ] No errors in the console (there is one on sign-in page)
- [✓] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

- [✓✓] Some indication of who is logged in

### Articles

- [✓] Serves all articles / top articles
- [✓] Can vote on articles
- [✓] Can vote a maximum of once in either direction per page load
- [✓] Votes are persistent when page is refreshed
- [✓] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [✓] Can sort articles by date created / comment_count / votes

### Individual Article / Comments

- [✓] Individual articles are served with comments
- [✓] Can vote on comments
- [✓] Can vote a maximum of once in either direction per page load
- [✓] Votes are persistent when page is refreshed
- [✓] Can post new comments, which are persistent
- [✓] Can only delete comments of logged in user (sort-of)
- [✓] Deleted comments don’t re-appear on re-render/refresh

### Additional functionality:

- [ ] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles

## Error Handling

- [✓] Bad url
- [✓] Bad topic slug in url
- [✓] Bad article id in url
- [✓] Post comment: (No text in comment body / Can you post without logging in?)

## Code

- [✓] Well named components
- [✓] Functional components used where possible
- [ ] Components reused where possible (`Articles` / `Voter`...)
- [✓] Minimal state - don't hold derivable data in state
- [✓] Set state correctly, using previous state where possible
- [✓] Handle asynchronicity clearly (i.e. isLoading pattern)
- [✓] Functions are DRY (`handleChange` for controlled components / api calls)
- [ ] Use object destructuring where possible - could use more
- [✓] Tidy? If not: ESLint / Prettier
- [✓] `node_modules` git ignored
- [ ] No `console.log`s / comments
- [ ] remove unnecessary files (e.g. App.test.js)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Add integration tests with `cypress`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Use React Hooks
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the articles a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent articles e.g. last 10 minutes
