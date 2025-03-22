const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = async (req, res, next) => {
  const prodId = req.params.productId;
  console.log("Requested product ID:", prodId);

  try {
    const product = await Product.findById(prodId);
    console.log("Found product:", product);

    res.render("shop/product-detail", {
      prods: product,
      pageTitle: product.title,
      path: "/products",
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).render("404", {
      pageTitle: "Product Not Found",
      path: "/404",
    });
  }
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
