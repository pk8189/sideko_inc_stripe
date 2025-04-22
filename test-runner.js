// test-runner.js
const { execSync } = require("child_process");

const fileArg = process.argv[2]; // Get file if passed

const baseCmd = "jest --maxWorkers=50%";
const cmd = fileArg ? `${baseCmd} ${fileArg}` : baseCmd;

try {
  execSync(cmd, { stdio: "inherit" });
} catch (err) {
  // Allow Jest to print the error output without crashing the script
  process.exit(1);
}
