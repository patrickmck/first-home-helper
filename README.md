# First Home Helper

Repo for a hypothetical website aimed at helping prospective first home buyers in Australia. Currently just a test case to learn how to make a "modern web app" using Javascript (vanilla, React, D3) ... painfully expanding my horizons.

## Architecture

Using `react-bootstrap` for layout and components, because I'm already familiar. React is useful because it can manage the state between input and output components. However, getting it to play nicely with D3 is a bit tricky -- as has been well documented, they both want control of the DOM. What's annoying is that it seems like simple, OOTB charting packages like python-plotly are not simple to come by -- [Semiotic](https://semiotic.nteract.io) being the closest I could find.

## To-Do

- Routing to navigate to different pages (_i.e._ despite being "single page" :thinking:)
- Sidebar and scrolling
- Logo and header
- Storing html content pages ... possibly use cloud markdown docs via pandoc for easier updating
- More inputs (income, interest rate, period, ?variable rate treatment) and their coordination
- More lines on the chart (showing deposit, differentiating interest and principle payments)
- Stamp duty per state
- 