const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Order {
  

  static async createOrder(){

    //Take a user's order and store in database

    const query = `SELECT * 
                    FROM products
                    `;
    const result = await db.query(query)
 
    return result.rows
  }

  static async listOrdersForUser(){

    //Return all orders an authenticated user has
    const query = `SELECT * 
                    FROM products
                    `;
    const result = await db.query(query)
 
    return result.rows
  }

  
}

module.exports = Order;
