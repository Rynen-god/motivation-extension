"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
// Путь к файлу с цитатами
const quotesFilePath = path.join(__dirname, '..', 'quotes.txt');
// Функция для чтения цитат из файла
function loadQuotesFromFile() {
    try {
        // Чтение содержимого файла
        const data = fs.readFileSync(quotesFilePath, 'utf-8');
        // Разделение строк по символу новой строки и возврат массива
        return data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    }
    catch (error) {
        console.error('Error reading quotes file:', error);
        return [];
    }
}
// Функция для получения случайной цитаты
function getRandomMotivationalMessage() {
    const quotes = loadQuotesFromFile();
    if (quotes.length === 0) {
        return 'No quotes available.';
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
// Функция активации плагина
function activate(context) {
    console.log('Motivational Quotes extension is now active!');
    // Регистрация команды
    let disposable = vscode.commands.registerCommand('extension.showMotivationalMessage', () => {
        const message = getRandomMotivationalMessage();
        // Создание терминала и вывод сообщения
        const terminal = vscode.window.createTerminal('Motivational Quotes');
        terminal.show(); // Открыть терминал
        terminal.sendText(message); // Отправить цитату в терминал
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// Функция деактивации
function deactivate() { }
exports.deactivate = deactivate;
