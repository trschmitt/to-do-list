const express = require('express');
const router = express.Router();
module.exports = router;


router.get("/", (req, res) => {
	res.render("index", { todoList: todoList });
});

let todoList = [];

router.post("/todoList", (req, res) => {
	console.log("New Request", req.body);
	req.checkBody("itemInput", "You must provide a valid ToDo Item").notEmpty();
	req.getValidationResult().then((result) => {
		if (!result.isEmpty()) {
			res.render("index", {error: "No item is present!!"});
			return;
		}
		todoList.push({
			item: req.body.itemInput,
			createdAt: new Date()
		});
		res.redirect("/");
	});
});
