/**
 * A file to process the initial json into the database.
 */
// Required Modules
const fs  = require("fs");
const { parse } = require("csv-parse/sync");
// const PATHS = require('../../../config/list_paths.js');
const { pool } = require("./db_config.js");
const { BD_ENV } = require('./env.js');
// require()
// populatDatabase(BD_ENV.DB_TABLE);

// console.log();

/**
 * A function to populate the database.
 * @param {*} table - String specifying the table name
 * @returns 
 */
async function populatDatabase(table) {
  const initialData = loadCSVFileToObject('./data/data.csv');
  
  // Populate the database with the initial Data
  for (const row of initialData){
    const SQL_INSERT = `INSERT INTO ?? (id, center_id, num_orders_x,	venta, pre_base, Ren, email_pro,	web_pro, city_code, region_code, center_type VARCHAR(10), op_area,	meal_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [rows] = await pool.query(SQL_INSERT, row);
    if (rows.affectedRows == 0) {
      return "Couldn't insert the data into the database";
    }
  }
  console.log("Json loaded into the table")
  pool.end()
}

function loadCSVFileToObject(filepath){
  /**A function to read and parse JSON files
   * @param {string} filepath - The full path including the name of the file to read.
   * @return  {Object} A object containing the information of the JSON file
   */
  let dataRows = [];
  console.log('object');
  let text = fs.readFileSync(filepath, 'utf-8')
  text = text.split('\n')
  console.log("🚀 ~ file: db_population.js ~ line 44 ~ loadCSVFileToObject ~ text", text[2])
  text.forEach(row => {
    dataRows.push(row.trim().split(','));
  });
  return dataRows;
}