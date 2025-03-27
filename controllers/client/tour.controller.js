// Assign the file of model Tour (1 model stores 1 collection)
const Tour = require('../../models/tour.model');

// Define the list function
module.exports.list = async (req, res) => {
    const tourList = await Tour.find({});

    console.log(tourList);

    res.render("client/pages/tour-list", {
        pageTitle: "The list of tours",
        tourList: tourList
    })
}
