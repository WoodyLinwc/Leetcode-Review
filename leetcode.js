const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// File paths for different difficulty levels
const jsonFiles = {
  'easy': path.join(__dirname, 'easy.json'),
  'medium': path.join(__dirname, 'medium.json'),
  'hard': path.join(__dirname, 'hard.json')
};

// Valid problem types
const validTypes = ['array', 'string', 'map', 'set', 'tree', 'linked-list', 'dynamic-programming', 'graph'];

// Make sure all JSON files exist, create them if they don't
function ensureJsonFilesExist() {
  Object.values(jsonFiles).forEach(filePath => {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]', 'utf8');
      console.log(`Created empty problem file: ${path.basename(filePath)}`);
    }
  });
}

// Load problems from a specific JSON file
function loadProblems(difficulty) {
  try {
    const filePath = jsonFiles[difficulty];
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error loading ${difficulty} problems:`, err.message);
    return [];
  }
}

// Save problems to a specific JSON file
function saveProblems(difficulty, problems) {
  try {
    const filePath = jsonFiles[difficulty];
    fs.writeFileSync(filePath, JSON.stringify(problems, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error(`Error saving ${difficulty} problems:`, err.message);
    return false;
  }
}

// Main function to start the program
function start(args) {
  console.log('Welcome to LeetCode Problem Generator!');
  ensureJsonFilesExist();
  
  // Check first argument for commands
  if (args.length > 0) {
    const command = args[0].toLowerCase();
    
    if (command === 'add') {
      addNewProblem();
      return;
    } else if (command === 'next' && args.length > 1) {
      // Allow direct command: node leetcode.js next easy
      const difficulty = args[1].toLowerCase();
      if (jsonFiles[difficulty]) {
        getRandomProblem(difficulty);
        return;
      }
    }
  }
  
  // Default: ask for difficulty
  askDifficulty();
}

// Ask for difficulty level
function askDifficulty() {
  console.log('\nAvailable difficulty levels:');
  console.log(Object.keys(jsonFiles).join(', '));
  
  rl.question('Enter difficulty level: ', (difficulty) => {
    const lowerDifficulty = difficulty.toLowerCase();
    
    if (!jsonFiles[lowerDifficulty]) {
      console.log('Invalid difficulty level. Please try again.');
      return askDifficulty();
    }
    
    getRandomProblem(lowerDifficulty);
  });
}

// Get a random problem based on difficulty
function getRandomProblem(difficulty, isNext = false) {
  // Load problems for the selected difficulty
  const problems = loadProblems(difficulty);
  
  if (problems.length === 0) {
    console.log(`No problems found with difficulty "${difficulty}".`);
    askForContinue();
    return;
  }
  
  // If all problems have been shown recently
  if (recentProblems[difficulty].size >= problems.length) {
    console.log(`\n🎉 Congratulations! You've gone through all ${difficulty} problems. Try another difficulty level!`);
    recentProblems[difficulty].clear();
    askDifficulty();
    return;
  }
  
  // Find a problem that hasn't been shown recently
  let attempts = 0;
  let selectedProblem;
  let randomIndex;
  
  do {
    randomIndex = Math.floor(Math.random() * problems.length);
    selectedProblem = problems[randomIndex];
    attempts++;
    
    // Prevent infinite loop if all problems have been shown
    if (attempts > 100) {
      recentProblems[difficulty].clear();
    }
  } while (recentProblems[difficulty].has(selectedProblem.id) && attempts < 100);
  
  // Add to recently shown problems
  recentProblems[difficulty].add(selectedProblem.id);
  
  // Display the problem
  console.log('\n===============================================');
  console.log(`Problem: ${selectedProblem.title}`);
  console.log(`Difficulty: ${difficulty}`);
  console.log(`Type: ${selectedProblem.type}`);
  console.log(`Link: ${selectedProblem.link}`);
  console.log(`Progress: ${recentProblems[difficulty].size}/${problems.length} problems viewed`);
  console.log('===============================================\n');
  
  // Pass the current difficulty so we can continue with "next"
  askForContinue(difficulty);
}

// Function to add a new problem
function addNewProblem() {
  console.log('\n=== Add New LeetCode Problem ===');
  
  let newProblem = {};
  let selectedDifficulty = '';
  
  // Ask for problem difficulty first
  function askDifficultyForAdd() {
    console.log('\nAvailable difficulty levels:');
    console.log(Object.keys(jsonFiles).join(', '));
    
    rl.question('Enter difficulty level: ', (difficulty) => {
      const lowerDifficulty = difficulty.toLowerCase();
      
      if (!jsonFiles[lowerDifficulty]) {
        console.log('Invalid difficulty level. Please try again.');
        return askDifficultyForAdd();
      }
      
      selectedDifficulty = lowerDifficulty;
      askId();
    });
  }
  
  // Ask for problem ID
  function askId() {
    // Load existing problems for the selected difficulty
    const problems = loadProblems(selectedDifficulty);
    
    rl.question('Enter problem ID (number): ', (id) => {
      const numId = parseInt(id);
      if (isNaN(numId)) {
        console.log('Invalid ID. Please enter a number.');
        return askId();
      }
      
      // Check if ID already exists in this difficulty level
      const existingProblem = problems.find(p => p.id === numId);
      if (existingProblem) {
        console.log(`Problem with ID ${numId} already exists in ${selectedDifficulty}.json: "${existingProblem.title}"`);
        return askId();
      }
      
      newProblem.id = numId;
      askTitle();
    });
  }
  
  // Ask for problem title
  function askTitle() {
    rl.question('Enter problem title: ', (title) => {
      if (!title.trim()) {
        console.log('Title cannot be empty. Please try again.');
        return askTitle();
      }
      
      newProblem.title = title.trim();
      askType();
    });
  }
  
  // Ask for problem type
  function askType() {
    console.log('\nAvailable problem types:');
    console.log(validTypes.join(', '));
    
    rl.question('Enter problem type: ', (type) => {
      const lowerType = type.toLowerCase();
      
      if (!validTypes.includes(lowerType)) {
        console.log('Invalid problem type. Please try again.');
        return askType();
      }
      
      newProblem.type = lowerType;
      askLink();
    });
  }
  
  // Ask for problem link
  function askLink() {
    rl.question('Enter problem link (https://leetcode.com/problems/...): ', (link) => {
      if (!link.trim() || !link.trim().startsWith('https://')) {
        console.log('Please enter a valid URL starting with https://');
        return askLink();
      }
      
      newProblem.link = link.trim();
      confirmAndSave();
    });
  }
  
  // Confirm and save the new problem
  function confirmAndSave() {
    console.log('\n=== New Problem Details ===');
    console.log(`ID: ${newProblem.id}`);
    console.log(`Title: ${newProblem.title}`);
    console.log(`Difficulty: ${selectedDifficulty}`);
    console.log(`Type: ${newProblem.type}`);
    console.log(`Link: ${newProblem.link}`);
    
    rl.question('\nSave this problem? (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        // Load existing problems for this difficulty
        const problems = loadProblems(selectedDifficulty);
        
        // Add the new problem to the array
        problems.push(newProblem);
        
        // Sort problems by ID
        problems.sort((a, b) => a.id - b.id);
        
        // Save to file
        if (saveProblems(selectedDifficulty, problems)) {
          console.log(`Problem saved successfully to ${selectedDifficulty}.json!`);
        }
        
        askForContinue();
      } else {
        console.log('Problem not saved.');
        askForContinue();
      }
    });
  }
  
  // Start the adding process by asking for difficulty
  askDifficultyForAdd();
}

// Keep track of recently shown problems to avoid repetition
const recentProblems = {
  'easy': new Set(),
  'medium': new Set(),
  'hard': new Set()
};

// Ask what the user wants to do next
function askForContinue(currentDifficulty = null) {
  rl.question('What would you like to do next? (next/add/exit): ', (answer) => {
    const option = answer.toLowerCase();
    
    if (option === 'next' || option === 'n') {
      if (currentDifficulty) {
        getRandomProblem(currentDifficulty, true); // Get next problem with same difficulty
      } else {
        askDifficulty(); // If no current difficulty, ask for one
      }
    } else if (option === 'add' || option === 'a') {
      addNewProblem();
    } else {
      console.log('Thank you for using LeetCode Problem Generator. Happy coding!');
      rl.close();
    }
  });
}

// Start the program with command line arguments
start(process.argv.slice(2));