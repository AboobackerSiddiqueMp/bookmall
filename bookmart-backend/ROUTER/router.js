const express=require('express')
const router=new express.Router();
const userController=require('../controllers/userController')
const bookController=require('../controllers/bookController')


const jwtmiddileware=require('../middileware/jwtmiddileware')
const multerConfig=require('../middileware/multerMiddileware')

router.post('/user/register',userController.register)
router.post('/user/login',userController.login)
router.post('/books/addbook',jwtmiddileware,multerConfig.single('bookImage'),bookController.addbook)
router.get('/books/getAllbook',bookController.getallbooks)
router.get('/books/getmangabook',bookController.getmanga)
router.get('/books/getenglishbook',bookController.getenglish)
router.get('/books/getSearchbook',bookController.getSearchBooks)








module.exports=router