"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
// Массив мотивирующих сообщений
const motivationalMessages = [
    "Believe in yourself and all that you are.",
    "You are capable of amazing things.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It always seems impossible until it's done.",
    "What we achieve inwardly will change outer reality.",
    "You are stronger than you think.",
    "Don't stop when you're tired. Stop when you're done.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Opportunities don't happen, you create them.",
    "Keep pushing forward, and you will reach your goals.",
    "The only way to do great work is to love what you do."
];
// Функция для получения случайного сообщения
function getRandomMotivationalMessage() {
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    return motivationalMessages[randomIndex];
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
// Функция деактивации
function deactivate() { }
//# sourceMappingURL=extension.js.map