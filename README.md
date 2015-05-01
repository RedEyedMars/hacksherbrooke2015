# HackSherbrooke 2015 - Visual Data Portal

## Visualizations Of Open City Data

We've scraped a number of open resources (CSVs, JSON and even PDFs) from the city of Sherbrooke, produced vectorized, dynamically sourced visualizations of the data, and assembled them into an easy-to-use web interface.

Most of these proesses are fully automated by python scripts in ./py/, and could be scheduled or event driven through an API.

The application itself is static, written in javascript with the knockout framework, with dynamic data visualizations built with python (http://pandas.pydata.org/) and D3 (http://d3js.org/).

To get started simply navigate to the index.html document in your browser, or visit http://hacksherbrooke.jordanslaman.com !
