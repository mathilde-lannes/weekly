const {GET_ALL_TODOS, INSERT_TODO, UPDATE} = require("../models/channels");
const {GET_ALL_CATEGORIES, INSERT_CATEGORY} = require("../models/channels");

const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');

const database = new sqlite3.Database('./db/weekly.sqlite3', (err) => {
    if (err) console.error('Database opening error: ', err);
});

ipcMain.on(GET_ALL_TODOS, (event) => {
    database.all('SELECT * FROM todos', (err, rows) => {
        event.reply(`${GET_ALL_TODOS}-reply`, (err && err.message) || rows);
    });
});

ipcMain.on(UPDATE, (event, arg) => {
    const { id, fields } = JSON.parse(arg);
    const fieldNames = Object.keys(fields).map(field => field + " = ?").join(" ,")
    const fieldValues = Object.values(fields).concat(id)

    database.run(`UPDATE todos SET ${fieldNames} WHERE id = ?`, fieldValues, (err, updated) => {
        event.reply(`${UPDATE}-reply`, (err && err.message) || updated);
    });
});

ipcMain.on(INSERT_TODO, (event, arg) => {
    const fieldValues = Object.values(JSON.parse(arg)).map(val => (isNaN(val) || !val) ? `"${val}"` : val).join(', ')

    database.run(`INSERT INTO todos VALUES (${fieldValues})`, [], (err, updated) => {
        event.reply(`${INSERT_TODO}-reply`, (err && err.message) || updated);
    });
});


ipcMain.on(GET_ALL_CATEGORIES, (event) => {
    database.all('SELECT * FROM categories', (err, rows) => {
        event.reply(`${GET_ALL_CATEGORIES}-reply`, (err && err.message) || rows);
    });
});


ipcMain.on(INSERT_CATEGORY, (event, arg) => {
    const fieldValues = Object.values(JSON.parse(arg)).map(val => (isNaN(val) || !val) ? `"${val}"` : val).join(', ')

    database.run(`INSERT INTO categories VALUES (${fieldValues})`, [], (err, updated) => {
        event.reply('asynchronous-reply', (err && err.message) || updated);
    });
});
