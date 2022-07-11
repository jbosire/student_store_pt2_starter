const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Order {
  

  static async createOrder(){
    const query = `SELECT * 
                    FROM products
                    `;
    const result = await db.query(query)
 
    return result.rows
  }

  static async listOrdersForUser(){
    const query = `SELECT * 
                    FROM products
                    `;
    const result = await db.query(query)
 
    return result.rows
  }

  
}

module.exports = Order;
