const fs = require('fs');
const path = require('path');

// Path configurations
const jsonFiles = {
  'easy': path.join(__dirname, 'easy.json'),
  'medium': path.join(__dirname, 'medium.json'),
  'hard': path.join(__dirname, 'hard.json')
};

const solutionsDir = path.join(__dirname, 'solutions');

// Create solution directories if they don't exist
function createDirectories() {
  // Create main solutions directory if it doesn't exist
  if (!fs.existsSync(solutionsDir)) {
    fs.mkdirSync(solutionsDir);
    console.log('Created main solutions directory');
  }

  // Create difficulty-specific subdirectories
  Object.keys(jsonFiles).forEach(difficulty => {
    const difficultyDir = path.join(solutionsDir, difficulty);
    if (!fs.existsSync(difficultyDir)) {
      fs.mkdirSync(difficultyDir);
      console.log(`Created ${difficulty} solutions directory`);
    }
  });
}

// Generate solution file template
function generateSolutionTemplate(problem, difficulty) {
  return `/**
 * Problem: ${problem.title}
 * Difficulty: ${difficulty}
 * Link: ${problem.link}
 * Type: ${problem.type}
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
`;
}

// Format problem title to a valid filename
function formatFileName(title) {
  return title.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.js';
}

// Process all problems from a specific difficulty
function processDifficulty(difficulty) {
  try {
    // Read JSON file
    const data = fs.readFileSync(jsonFiles[difficulty], 'utf8');
    const problems = JSON.parse(data);
    
    // Create directory for this difficulty
    const difficultyDir = path.join(solutionsDir, difficulty);
    
    console.log(`\nProcessing ${problems.length} ${difficulty} problems:`);
    let created = 0;
    let existing = 0;
    
    // Process each problem
    problems.forEach(problem => {
      const fileName = formatFileName(problem.title);
      const filePath = path.join(difficultyDir, fileName);
      
      // Check if solution file already exists
      if (fs.existsSync(filePath)) {
        console.log(`  • ${problem.title} - Solution already exists`);
        existing++;
        return;
      }
      
      // Create solution file
      const template = generateSolutionTemplate(problem, difficulty);
      fs.writeFileSync(filePath, template, 'utf8');
      console.log(`  + ${problem.title} - Created solution template`);
      created++;
    });
    
    return { created, existing, total: problems.length };
  } catch (err) {
    console.error(`Error processing ${difficulty} problems:`, err.message);
    return { created: 0, existing: 0, total: 0 };
  }
}

// Main function
function main() {
  console.log('LeetCode Solution Template Generator');
  console.log('===================================');
  
  // Setup directory structure
  createDirectories();
  
  // Process each difficulty level
  const stats = {};
  Object.keys(jsonFiles).forEach(difficulty => {
    stats[difficulty] = processDifficulty(difficulty);
  });
  
  // Print summary
  console.log('\nSummary:');
  console.log('========');
  let totalCreated = 0;
  let totalExisting = 0;
  let totalProblems = 0;
  
  Object.keys(stats).forEach(difficulty => {
    const { created, existing, total } = stats[difficulty];
    console.log(`${difficulty}: ${created} created, ${existing} existing, ${total} total`);
    totalCreated += created;
    totalExisting += existing;
    totalProblems += total;
  });
  
  console.log(`\nOverall: ${totalCreated} created, ${totalExisting} existing, ${totalProblems} total`);
  console.log(`Solutions directory: ${solutionsDir}`);
}

// Run the program
main();