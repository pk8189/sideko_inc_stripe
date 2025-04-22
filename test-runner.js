// test-runner.js
const { execSync } = require("child_process");

const fileArg = process.argv[2]; // get the filename if provided

const baseCmd = "jest --maxWorkers=50%";

const cmd = fileArg ? `${baseCmd} ${fileArg}` : baseCmd;

execSync(cmd, { stdio: "inherit" });
