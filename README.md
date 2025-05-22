# Git Repository 별 commit 을 3D 객체로 표현 하기 
- git hub Action을 사용 하고 있음
- [확인] :   https://paypulse.github.io/git-garden/

## Displaying Your Contribution Data

This project visualizes your contribution data in a 3D interactive display. The contribution data is loaded dynamically from a JSON file you provide.

### How to Load Data

1.  **Prepare your JSON file**: Create a JSON file containing your contribution data. The format is described below.
2.  **Select the file**: On the webpage, click the "Choose File" (or similar, depending on your browser) button next to the "Load Contribution Data" button. Select your local JSON file.
3.  **Load the data**: Click the "Load Contribution Data" button. The 3D visualization will update based on the data in your file.

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
