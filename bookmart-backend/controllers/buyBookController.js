const buy = require('../Models/buySchema')

exports.addBUY = async (req, res) => {
    console.log("inside add buycontrollar")
    const userId = req.payload
    console.log('abusid', userId)
    console.log(req.body)
    const { title, price ,bookImage} = req.body;
    console.log("title", title)

    try {

        const existingproject = await buy.findOne({ title: title })
        if (existingproject) {
            res.status(406).json("allready exist")


        }
        else {
            console.log("ivide ethi");
            const newbook = new buy({
                title: title
                , price: price
                , bookimage: bookImage
                , userId: userId

            })
            console.log("666666666666")

            await newbook.save()
            res.status(200).json("registration request recived succesfully")


        }


    } catch (error) {
        return res.status(401).json({ error: "Unable to add project", details: error });


    }

}
exports.getbuydbook = async (req, res) => {
    console.log("inside add buycontrollar")
    const userId = req.payload
    console.log('abusid', userId)

    try {
        const userbuydbooks = await buy.find({ userId: userId }); // Find books with the specified genre
        res.status(200).json(userbuydbooks);
        console.log(userbuydbooks)
    } catch (error) {
        // Send back error message for debugging
        res.status(401).json({ error: "Request failed", message: error.message });
    }
}
