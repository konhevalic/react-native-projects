import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("db.sqlite")

export default db