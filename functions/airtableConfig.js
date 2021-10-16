require("dotenv").config()

const apiKey = process.env.AT_API_KEY;

const Airtable = require("airtable")
const base = new Airtable({apiKey: apiKey}).base(process.env.AT_BASE_ID)
const table = base(process.env.AT_TABLE_NAME)

module.exports = {table}