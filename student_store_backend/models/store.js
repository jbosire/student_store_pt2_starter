const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Store {
  

  static async listProducts(){
    const query = `SELECT * 
                    FROM products
                    `;
    const result = await db.query(query)
 
    return result.rows
  }

  
}

module.exports = Store;
