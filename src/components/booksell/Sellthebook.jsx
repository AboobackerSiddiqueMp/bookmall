import React, { Fragment, useEffect, useState } from 'react';
import './sellthebook.css'
import { addbooksAPI } from '../../services/allAPI';

function Sellthebook() {
  const[bookpreview,setbookpreview]=useState('')
  const[gettoken,setgettoken]=useState('')
  const[resultdata,setresult]=useState('')
  const[bookdata,setbookdata]=useState({

    name:"",
    price:"",
    Category:"",
    description:"",
    bookImage:""

  })
  const handilesubmit=async(e)=>{
    e.preventDefault()
    const{name,price,Category,bookImage,description}=bookdata
    if(!name||!price||!Category||!bookImage||!description){
      alert("pls fill the form")
    }
    else{
      const reqbody = new FormData()
            reqbody.append("title",name)
            reqbody.append("price", price)
            reqbody.append("genres", Category)
            reqbody.append("description",description)

            reqbody.append("bookImage", bookImage)
            const reqheader = {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${gettoken}`
          };
            const result=await addbooksAPI(reqbody,reqheader)
            alert(result)
            console.log(result)
            setresult(result)



    }

  }
  console.log(bookdata)
  useEffect(()=>{
    if(bookdata.bookImage){
      setbookpreview(URL.createObjectURL(bookdata.bookImage))
    }
  },[bookdata.bookImage])
  useEffect(() => {


    const tokenvalue = sessionStorage.getItem("token")
    console.log('jjjj', tokenvalue)
    setgettoken(tokenvalue)
    console.log("abus=========", gettoken)
}, [])
useEffect(() => {
  setbookdata({
    name:"",
    price:"",
    Category:"",
    description:"",
    bookImage:""

  })
  setbookpreview("")


 
}, [resultdata])

  return (
    <div>
    <Fragment >
    <card>
    <div className="centerDiv" style={{ marginTop: '-41px' }}> {/* Add margin-top and margin-bottom here */}
        <form>
          <label htmlFor="fname">Name</label>
          
          <input
            className="input"
            type="text"
            id="fname"
            placeholder='enter your name'

            name="Name"
            value={bookdata.name}
            onChange={(e)=>setbookdata({...bookdata,name:e.target.value})}

          />
          <hr className="solid-line" /> {/* Add this line */}

          
          <label htmlFor="fname">Category</label>
          
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            placeholder='category'
            value={bookdata.Category}
            onChange={(e)=>setbookdata({...bookdata,Category:e.target.value})} />
                      <hr className="solid-line" /> {/* Add this line */}
                      <label htmlFor="fname">description</label>

<input className="input" type="text" id="fname" name="Price" placeholder='enter the price'  value={bookdata.description} onChange={(e)=>setbookdata({...bookdata,description:e.target.value})} />
<hr className="solid-line" /> {/* Add this line */}


        
          <label htmlFor="fname">Price</label>

          <input className="input" type="number" id="fname" name="Price" placeholder='enter the price'  value={bookdata.price} onChange={(e)=>setbookdata({...bookdata,price:e.target.value})} />
          <hr className="solid-line" /> {/* Add this line */}
         
        
        </form>
<label htmlFor='bookimage'>
        <img alt="Posts" width="100px" height="100px" src={bookpreview?bookpreview:'https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg'} ></img>
      
          <br />
          <input type="file"  onChange={(e) => setbookdata({ ...bookdata, bookImage: e.target.files[0] })} id='bookimage' style={{ display: 'none' }}/>
          </label>
          <br />
          
          <button className="uploadBtn" onClick={handilesubmit}>upload and Submit</button>
    
      </div>
    </card>
    </Fragment>
    </div>
  

  )
}

export default Sellthebook