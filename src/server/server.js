const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const { Sequelize } = require("sequelize")

const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../dist")));
app.use(bodyParser.json())


const sequelize = new Sequelize('sqlite://' + path.join(__dirname, 'invoices.sqlite'), {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'invoices.sqlite')
});

const Customer = sequelize.define('customers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }
});

const Product = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  }
});

const Invoice = sequelize.define('invoices', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customer_id: {
    type: Sequelize.INTEGER
  },
  discount: {
    type: Sequelize.DECIMAL
  },
  total: {
    type: Sequelize.DECIMAL
  }
});

const InvoiceItem = sequelize.define('invoice_items', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  invoice_id: {
    type: Sequelize.INTEGER
  },
  product_id: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.DECIMAL
  }
});


// MOCKUP
sequelize.sync()
  .then(() => {
    Customer.truncate();
  })
  .then(() => {
    Product.truncate();
  })
  .then(() => {
    Invoice.truncate();
  })
  .then(() => {
    InvoiceItem.truncate();
  })
  .then(() => {

  Customer.create({
    name: "Mark Benson",
    address: "353 Rochester St, Rialto FL 43250",
    phone: "555-534-2342"
  });

  Customer.create({
    name: "Bob Smith",
    address: "215 Market St, Dansville CA 94325",
    phone: "555-534-2342"
  });

  Customer.create({
    name: "John Draper",
    address: "890 Main St, Fontana IL 31450",
    phone: "555-534-2342"
  });

  Product.create({
    name: "Parachute Pants",
    price: 29.99
  });

  Product.create({
    name: "Phone Holder",
    price: 9.99
  });

  Product.create({
    name: "Pet Rock",
    price: 5.99
  });

  Product.create({
    name: "Egg Timer",
    price: 15.99
  });

  Product.create({
    name: "Neon Green Hat",
    price: 21.99
  });

}).catch((e) => {
  console.log("ERROR SYNCING WITH DB", e);
});





app.route("/api/customers")
  .get((req, res) => {
    Customer.findAll().then(customers => {
      res.json(customers);
    })
  })

  .post((req, res) => {
    let { name, address, phone } = req.body
    Customer.create({ name, address, phone }).then(customer => {
      res.json(customer);
    });
  });


app.route('/api/customers/:customer_id')
  .get((req, res) => {
    Customer.findByPk(req.params.customer_id).then((customer) => {
      res.json(customer);
    });
  })

  .put((req, res) => {
    let { name, address, phone } = req.body
    Customer.findByPk(req.params.customer_id).then((customer) => {
      customer.update({ name, address, phone }).then((customer) => {
        res.json(customer);
      });
    });
  })

  .delete((req, res) => {
    Customer.findByPk(req.params.customer_id).then((customer) => {
      customer.destroy().then((customer) => {
        res.json(customer);
      });
    });
  });

// PRODUCTS API

app.route('/api/products')
  .get((req, res) => {
    Product.findAll().then((products) => {
      res.json(products);
    })
  })
  
  .post((req, res) => {
    let { name, price } = req.body
    Product.create({ name, price }).then((product) => {
      res.json(product);
    });
  });

app.route('/api/products/:product_id')
  .get((req, res) => {
    Product.findByPk(req.params.product_id).then((product) => {
      res.json(product);
    });
  })

  .put((req, res) => {
    let { name, price } = req.body
    Product.findByPk(req.params.product_id).then((product) => {
      product.update({ name, price }).then((product) => {
        res.json(product);
      });
    });
  })

  .delete((req, res) => {
    Product.findByPk(req.params.product_id).then((product) => {
      product.destroy().then((product) => {
        res.json(product);
      });
    });
  });


// INVOICES API

app.route('/api/invoices')
  .get((req, res) => {
    Invoice.findAll().then((invoices) => {
      res.json(invoices);
    })
  })

  .post((req, res) => {
    let { customer_id, discount, total } = req.body
    Invoice.create({ customer_id, discount, total }).then((invoice) => {
      res.json(invoice);
    });
  });

app.route('/api/invoices/:invoice_id')
  .get((req, res) => {
    Invoice.findByPk(req.params.invoice_id).then((invoice) => {
      res.json(invoice);
    });
  })

  .put((req, res) => {
    let { customer_id, discount, total } = req.body
    Invoice.findByPk(req.params.invoice_id).then((invoice) => {
      invoice.update({ customer_id, discount, total }).then((invoice) => {
        res.json(invoice);
      });
    });
  })

  .delete((req, res) => {
    Invoice.findByPk(req.params.invoice_id).then((invoice) => {
      invoice.destroy().then((invoice) => {
        res.json(invoice);
      });
    });
  });


// INVOICE ITEMS API

app.route('/api/invoices/:invoice_id/items')
  .get((req, res) => {
    InvoiceItem.findAll({ where: { invoice_id: req.params.invoice_id } }).then((invoice_items) => {
      res.json(invoice_items);
    })
  })

  .post((req, res) => {
    let { product_id, quantity } = req.body
    InvoiceItem.create({ product_id, quantity, invoice_id: req.params.invoice_id })
      .then((invoice_item) => {
        res.json(invoice_item);
      });
  });

app.route('/api/invoices/:invoice_id/items/:id')
  .get((req, res) => {
    InvoiceItem.findByPk(req.params.id).then((invoice_item) => {
      res.json(invoice_item);
    });
  })

  .put((req, res) => {
    let { product_id, quantity } = req.body
    InvoiceItem.findByPk(req.params.id).then((invoice_item) => {
      invoice_item.update({ product_id, quantity }).then((invoice_item) => {
        res.json(invoice_item);
      });
    });
  })

  .delete((req, res) => {
    InvoiceItem.findByPk(req.params.id).then((invoice_item) => {
      invoice_item.destroy().then((invoice_item) => {
        res.json(invoice_item);
      });
    });
  });

app.route("*")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "../dist/app.html"));
  })


app.listen(port, () => console.log(`server run at ${port}`));