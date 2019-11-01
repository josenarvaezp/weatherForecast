# weatherForecast
Weather forecast web application using an OpenWeather API endpoint.

To use application, please download repository and open index.html in a browser.

This web application shows in a table the weather information of a city for a period of 120 hours (or 5 days, but take into consideration that these may not be exactly 5 calendar days as some of the information of the first and last day may not be complete, hence having 6 calendar days).

This web application uses Javascript for the client side and uses PHP as a proxy. When developing the website I came across a CORS (Cross-origin resource sharing) problem. To solve this, I created a proxy (using PHP and hosting it in Heroku app) that gets the JSON url from the client side, uses it to get the JSON data from the url, and sends it back to the client side where this data is then processed.
