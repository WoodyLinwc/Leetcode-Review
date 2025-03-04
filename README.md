# LeetCode Problem Generator

A command-line tool that helps you practice LeetCode problems by randomly providing problems based on difficulty level. The generator maintains separate databases for easy, medium, and hard problems, tracks your progress, and allows you to add new problems. You can add your own preferred problems to these three json files, so you can review them in your ways.

## Features

- 🎯 **Difficulty-based Problem Selection**: Choose from easy, medium, or hard problems
- 🔄 **Smart "Next" System**: Get a different problem each time until you've seen them all
- 📊 **Progress Tracking**: See how many problems you've viewed in each difficulty
- ➕ **Add New Problems**: Easily add problems through the command line interface
- 🗂️ **Organized Storage**: Problems are stored in separate JSON files by difficulty

## Installation

1. Clone this repository or download the files:
   ```
   git clone https://github.com/WoodyLinwc/Leetcode-Review.git
   ```

2. Make sure you have Node.js installed on your system.


3. The project includes these files:
   - `leetcode.js`: The main program
   - `easy.json`: Database of easy problems
   - `medium.json`: Database of medium problems
   - `hard.json`: Database of hard problems

## Usage

### Getting a Random Problem

Run the program without arguments to get started:

```bash
node leetcode.js
```

This will prompt you to select a difficulty level (easy, medium, or hard) and then show you a random problem.

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

## File Structure

- `leetcode.js`: The main JavaScript file that runs the program
- `easy.json`: Contains all easy problems
- `medium.json`: Contains all medium problems
- `hard.json`: Contains all hard problems

## Customization

You can:
1. Add more problem types by modifying the `validTypes` array in `leetcode.js`
2. Pre-populate the JSON files with more problems
3. Modify the display format in the `getRandomProblem` function

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

What would you like to do next? (next/add/exit): next

===============================================
Problem: Longest Consecutive Sequence
Difficulty: medium
Type: set
Link: https://leetcode.com/problems/longest-consecutive-sequence/
Progress: 2/7 problems viewed
===============================================

What would you like to do next? (next/add/exit): 
```

## Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome!

## License

This project is licensed under the MIT License.