const protect = (req, res, next) => {
  const { user } = req.session;
  console.log(user);
  if (!req.session || !req.session.user) {
    res.status(401).json({ status: "fail", message: "unauthorized" });
    return;
  }

  next();
};

module.exports = protect;

// middleware is function that runs before a controller
