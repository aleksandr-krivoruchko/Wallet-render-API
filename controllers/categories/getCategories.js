const getCategories = async (req, res) => {
  const categories = {
    income: ["regular income", "irregular income"],
    expense: [
      "basic expenses",
      "food",
      "car",
      "personal growth",
      "self care",
      "child care",
      "household products",
      "education",
      "leisure",
      "other expenses",
    ],
  };

  res.status(200).send(categories);
};

module.exports = getCategories;
