const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    inquirer.prompt([{
        type: "input",
        name: "id",
        message: "What is the ID of the product?"
      },
      {
        type: "input",
        name: "amount",
        message: "How many do you want to buy?"
      }
    ]).then(function (input) {
      connection.query("SELECT * FROM products WHERE item_id=?", [input.id], function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        if (input.id == res[0].item_id) {
          var stock = res[0].stock_quantity - input.amount;
          if (stock >= 0) {
            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: stock
              },
              {
                item_id: input.id
              }
            ], )
            console.log("Customer Order = $" + input.amount * res[0].price);
          } else {
            console.log("Insufficient Quantity")
          }
        } else {
          console.log("empty")
        }
        connection.end();
      });
    });
  });
};