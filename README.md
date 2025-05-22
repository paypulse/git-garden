# Git Repository 별 commit 을 3D 객체로 표현 하기 
- git hub Action을 사용 하고 있음
- [확인] :   https://paypulse.github.io/git-garden/

## Displaying Your Contribution Data

When you first open `index.html`, it will display a 3D visualization based on a default sample set of contribution data (from `garden.js`). If you wish to visualize your own GitHub contributions, you can load your data using the method described below. This will replace the default view with your custom data.

This project visualizes your contribution data in a 3D interactive display. It offers multiple ways to load contribution data.

### Loading Data from a JSON File

1.  **Prepare your JSON file**: Create a JSON file containing your contribution data. The format is described below.
2.  **Select the file**: On the webpage, click the "Choose File" (or similar, depending on your browser) button next to the "Load Contribution Data" button. Select your local JSON file.
3.  **Load the data**: Click the "Load Contribution Data" button. The 3D visualization will update to display the data from your file, replacing the default dataset.

### JSON File Format

The JSON file must contain an array of objects. Each object represents a single day's contribution count and must have the following properties:

*   `date`: A string representing the date in "YYYY-MM-DD" format.
*   `count`: A number representing the contribution count for that date.

### Example JSON

Here is an example of a valid JSON file:

```json
[
  {"date": "2024-01-01", "count": 5},
  {"date": "2024-01-02", "count": 0},
  {"date": "2024-01-03", "count": 12},
  {"date": "2024-03-15", "count": 8},
  {"date": "2024-03-16", "count": 1}
]
```

Make sure your JSON file is correctly formatted before attempting to load it.

### Fetching Data Directly from GitHub (for Public Contributions)

You can also fetch a user's public GitHub contribution data directly:

1.  **Enter Username:** In the input field labeled "Enter GitHub Username" (it defaults to "paypulse"), type the GitHub username whose public contribution data you wish to visualize.
2.  **Click Fetch:** Click the "Fetch GitHub Data" button.
3.  The application will then attempt to retrieve the contribution data for the specified user for the last year and update the graph. A loading message will appear while the data is being fetched.

**Note:** This feature uses a third-party service (`https://github-contributions-api.jogruber.de/`) to fetch contribution data. This service provides public contribution data and its availability is not guaranteed. If you encounter issues, please ensure the username is correct and the service is operational.
