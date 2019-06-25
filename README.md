## Tree Top Giphy Go!
This is a quick app to search giphy api and return gifs.

### The Process
1. Started a Pomodoro timer. Seeing that count-down really helps me focus.
2. Go to Giphy, acquire API Key
3. Created GitHub repository and create-react-app. My computer is pretty slow, so while that processed, I drew up some wireframes.
4. Opened Postman to test endpoint
5. Created a Body component with state to handle the values of the query and the returned array of gifs. 
  I also added a display key to show results. 
  I'm a visual person, so it's important for me to see what's happening on the DOM first.
6. Once the search field was there, and I could capture the value and set it to state, I made a fetch function to call the infor from the API.
7. The next step was to save the results to state, so I could build an array to display the gifs on the DOM
8. That's about as far as I got. If I had more time, I would:
  break the body components into smaller components and change some of the <div> tags into <section>, etc. 
  I would also add "clear" and "next" buttons, 
  I'd fix the CSS on gifs to create for a flex grid. 
  and I'd fix my .env file, because it is totally not working.
