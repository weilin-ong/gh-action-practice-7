const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec')

function run() {
    core.notice('Hello from main.js from custom JS action')
}
run();
