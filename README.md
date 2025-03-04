# LeetCode Problem Generator

A command-line tool that helps you practice LeetCode problems by randomly providing problems based on difficulty level. The generator maintains separate databases for easy, medium, and hard problems, tracks your progress, and allows you to add new problems.

## Features

- 🎯 **Difficulty-based Problem Selection**: Choose from easy, medium, or hard problems
- 🔄 **Smart "Next" System**: Get a different problem each time until you've seen them all
- 📊 **Progress Tracking**: See how many problems you've viewed in each difficulty
- ➕ **Add New Problems**: Easily add problems through the command line interface
- 🗂️ **Organized Storage**: Problems are stored in separate JSON files by difficulty
- ✅ **Solution Reference**: Mark problems as solved/unsolved and access your solutions when needed
- 📝 **Solution Generator**: Create template files for all your problem solutions with a single command

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/WoodyLinwc/Leetcode-Review.git
   ```

2. Make sure you have Node.js installed on your system.

3. Navigate to the project directory:
   ```
   cd Leetcode-Review
   ```

4. The project includes these files:
   - `leetcode.js`: The main program
   - `generate-solutions.js`: Creates solution templates for all problems
   - `easy.json`: Database of easy problems
   - `medium.json`: Database of medium problems
   - `hard.json`: Database of hard problems

## File Structure

- `leetcode.js`: The main JavaScript file that runs the program
- `generate-solutions.js`: Tool to generate solution template files
- `easy.json`: Contains all easy problems
- `medium.json`: Contains all medium problems
- `hard.json`: Contains all hard problems
- `solutions/`: Directory containing your solution files
  - `easy/`: Solutions for easy problems
  - `medium/`: Solutions for medium problems
  - `hard/`: Solutions for hard problems

## Usage

### Getting a Random Problem

Run the program without arguments to get started:

```bash
node leetcode.js
```

This will prompt you to select a difficulty level (easy, medium, or hard) and then show you a random problem.

### Tracking Your Solutions

After seeing a problem, you'll be asked:
```
Did you solve this problem? (y/n):
```

- If you answer **Yes**: The program will congratulate you and ask what you want to do next
- If you answer **No**: The program will look for a solution in the `solutions/[difficulty]/` directory and show it to you if available

### Getting the Next Problem

After viewing a problem, you can:
- Type `next` or `n` to see a different problem of the same difficulty
- Type `add` or `a` to add a new problem
- Type anything else to exit

### Direct Commands

You can also use direct commands to get problems of a specific difficulty:

```bash
node leetcode.js next easy
node leetcode.js next medium
node leetcode.js next hard
```

### Adding a New Problem

To add a new problem to the database:

```bash
node leetcode.js add
```

You'll be guided through entering:
1. Difficulty level (easy, medium, hard)
2. Problem ID (a unique number)
3. Problem title
4. Problem type (array, string, map, set, tree, etc.)
5. LeetCode problem link

The problem will be saved to the appropriate JSON file based on the difficulty level.

### Generating Solution Templates

To create template files for all problems in your database:

```bash
node generate-solutions.js
```

This will:
1. Create a `solutions/` directory with subdirectories for each difficulty level if they don't exist
2. Generate solution template files for all problems that don't already have a solution file
3. Provide a summary of created and existing files

## Progress Tracking

The program keeps track of which problems you've seen in the current session and shows your progress:

```
Progress: X/Y problems viewed
```

When you've seen all problems in a difficulty level, you'll receive a congratulatory message and be prompted to try another level.

## Problem Types

The generator supports these problem types:
- array
- string
- map
- set
- tree
- linked-list
- dynamic-programming
- graph

## Solution Format

When you generate solution templates, they follow this structure:

```javascript
/**
 * Problem: Two Sum
 * Difficulty: easy
 * Link: https://leetcode.com/problems/two-sum/
 * Type: array
 * 
 * Description:
 * [Add problem description here]
 *
 * Example:
 * [Add example input/output here]
 */

/**
 * Your solution goes here
 */

// Time Complexity: 
// Space Complexity: 

// Test cases
```

Fill in your solutions to build a personal LeetCode solution reference library.

## Example

```
$ node leetcode.js

Welcome to LeetCode Problem Generator!

Available difficulty levels:
easy, medium, hard
Enter difficulty level: medium

===============================================
Problem: Coin Change
Difficulty: medium
Type: dynamic-programming
Link: https://leetcode.com/problems/coin-change/
Progress: 1/7 problems viewed
===============================================

Did you solve this problem? (y/n): n

No solution found for "Coin Change"
Solutions would be stored at: /path/to/project/solutions/medium/coin_change.js

What would you like to do next? (next/add/exit): next

===============================================
Problem: Longest Consecutive Sequence
Difficulty: medium
Type: set
Link: https://leetcode.com/problems/longest-consecutive-sequence/
Progress: 2/7 problems viewed
===============================================

Did you solve this problem? (y/n): y

Great job solving the problem! 🎉

What would you like to do next? (next/add/exit): 
```

## Customization

You can:
1. Add more problem types by modifying the `validTypes` array in `leetcode.js`
2. Pre-populate the JSON files with more problems
3. Modify the display format in the `getRandomProblem` function
4. Add your own solutions to the appropriate subdirectory in the `solutions/` directory
   - Problem titles are converted to filenames by making them lowercase and replacing spaces/special characters with underscores
   - For example, "Two Sum" becomes `two_sum.js` in the `solutions/easy/` directory

## Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome!

## License

This project is licensed under the MIT License.
