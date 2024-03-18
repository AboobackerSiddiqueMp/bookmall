const booksss = require('../Models/bookSchema')

exports.addbook = async (req, res) => {
    console.log("inside add projectcontrollar")
    const userId = req.payload
    console.log('abusid', userId)
    const booksImage = req.file.filename;
    console.log("==========");
    console.log(req.body)
    const { title, genres, price, description } = req.body;
    console.log("title", title)

    try {

        const existingproject = await booksss.findOne({ description: description })
        if (existingproject) {
            res.status(406).json("allready exist")


        }
        else {
            console.log("ivide ethi");
            const newbook = new booksss({
                title: title
                , genres: genres
                , price: price
                , description: description
                , bookimage: booksImage
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
exports.getallbooks = async (req, res) => {
    try {
        const allProjects = await booksss.find().limit(6)
        res.status(200).json(allProjects)



    } catch (error) {
        res.status(401).json("requaste failed due to", error)


    }
}
exports.getmanga = async (req, res) => {
    try {
        const genre = "manga"; // Assuming manga is a string representing the genre
        const allProjects = await booksss.find({ genres: genre }); // Find books with the specified genre
        res.status(200).json(allProjects);
    } catch (error) {
        // Send back error message for debugging
        res.status(401).json({ error: "Request failed", message: error.message });
    }
}
exports.getenglish = async (req, res) => {
    try {
        const genre = "english"; // Assuming manga is a string representing the genre
        const allProjects = await booksss.find({ genres: genre }); // Find books with the specified genre
        res.status(200).json(allProjects);
    } catch (error) {
        // Send back error message for debugging
        res.status(401).json({ error: "Request failed", message: error.message });
    }
}
exports.getSearchBooks = async (req, res) => {
    const searchKey = req.query.search;
    console.log("key==================", searchKey);
    
    let query = {}; // Define an empty query object
    
    if (searchKey) { // Check if a search key is provided
        query.genres = {
            $regex: searchKey,
            $options: 'i'
        };
    }
    
    try {
        const allBooks = await booksss.find(query);
        res.status(200).json(allBooks);
    } catch (error) {
        res.status(401).json({ error: "Request failed", message: error });
    }
}

