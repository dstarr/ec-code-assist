import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { HelloWorldCommand } from '../commands';

suite('Extension Test Suite', () => {
	
	let command: HelloWorldCommand;

	setup(() => {
		command = new HelloWorldCommand();
	});

	teardown(() => {
		// Place cleanup logic here
	});

	test('Sample test', () => {
		// test code here
		assert.ok(true, 'Sample test failed');
	});	
});