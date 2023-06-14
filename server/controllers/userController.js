const mysql = require("mysql");

// Connection Pool
// Create a object connection and use .env store value then use it in here. You will see it in .env
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// View Users
exports.view = (req, res) => {
  // User the connection. call the query connection
  connection.query(
    // This will sort the value with active status on database table called Status.
    'SELECT * FROM user WHERE status = "active"',
    (err, rows) => {
      // When done with the connection, release it
      if (!err) {
        let removedUser = req.query.removed;
        res.render("home", { rows, removedUser });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};

// Find User by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  // User the connection
  connection.query(
    // The ? mark is use also in ejs so that anything that user input a value and where accepted all of value. The it will return a data come from database
    "SELECT * FROM user WHERE First_name LIKE ? OR Last_name LIKE ?",
    ["%" + searchTerm + "%", "%" + searchTerm + "%"],
    (err, rows) => {
      if (!err) {
        res.render("home", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};

exports.form = (req, res) => {
  res.render("add-user");
};

// Add new user
exports.create = (req, res) => {
  // This the same as in database table column then you can also see this in the hbs/html file body where has a ex. name=First_name.
  const { First_name, Last_name, Email, Phone, Address, Comments } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
    "INSERT INTO user SET First_name = ?, Last_name = ?, Email = ?, Phone = ?, Address = ?, Comments = ?",
    [First_name, Last_name, Email, Phone, Address, Comments],
    (err, rows) => {
      if (!err) {
        res.render("add-user", { alert: "User added successfully." });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};

// Edit user
exports.edit = (req, res) => {
  // User the connection
  connection.query(
    "SELECT * FROM user WHERE Id = ?",
    [req.params.Id],
    (err, rows) => {
      if (!err) {
        res.render("edit-user", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};

// Update User
exports.update = (req, res) => {
  const { First_name, Last_name, Email, Phone, Address, Comments } = req.body;

  // User the connection
  connection.query(
    "UPDATE user SET First_name = ?, Last_name = ?, Email = ?, Phone = ?, Address = ?, Comments = ? WHERE Id = ?",
    [First_name, Last_name, Email, Phone, Address, Comments, req.params.Id],
    (err, rows) => {
      if (!err) {
        // User the connection
        connection.query(
          "SELECT * FROM user WHERE Id = ?",
          [req.params.Id],
          (err, rows) => {
            // When done with the connection, release it
            if (!err) {
              res.render("edit-user", {
                rows,
                alert: `${First_name} has been updated.`,
              });
            } else {
              console.log(err);
            }
            console.log("The data from user table: \n", rows);
          }
        );
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};

// Delete User
exports.delete = (req, res) => {
  // Delete a record

  // User the connection
  connection.query(
    "DELETE FROM user WHERE Id = ?",
    [req.params.Id],
    (err, rows) => {
      if (!err) {
        res.redirect("/");
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};

// View Users
exports.viewall = (req, res) => {
  // User the connection
  connection.query(
    "SELECT * FROM user WHERE Id = ?",
    [req.params.Id],
    (err, rows) => {
      if (!err) {
        res.render("view-user", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from user table: \n", rows);
    }
  );
};
