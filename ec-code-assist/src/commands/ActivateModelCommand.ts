import * as vscode from 'vscode';
import { Command } from './Command';

export class ActivateModelCommand implements Command {
    
    public readonly name: string  = 'ec_assist_activateModel';

    constructor() {
	   console.debug(`Command ${this.name} created`);
	}

    public execute(modelItem: vscode.TreeItem): void {
        console.debug(`Command ${this.name} executed`);
        if(!modelItem) {
            return;
        }
        vscode.window.showInformationMessage(`EC Code Assist model activated with item: ${modelItem.label}`);
    }
}