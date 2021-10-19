import React from 'react'
import data from '../data.json';
import RestaurantCard from './RestaurantCard';
import styles2 from './RestaurantCard.module.css'

function RestaurantApp() {
    // const [text,setText] =React.useState('');
    const parentData=data
    const[todolist,setTodolist] = React.useState(data);
    // const [sort,setSort] = React.useState([]);
    // const [initial,setChangedInitial] = React.useState(true);
    // console.log(todolist)

    const [formData,setFormData] = React.useState({});
    const handleChange =(e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodolist([...todolist,formData]);
       
    }





    // function sortin(){
    //     let temp = JSON.parse(JSON.stringify(todolist))
    //     console.log('temp',temp)
    //     let results = temp.sort((a,b) => (b.rating-a.rating)).map(el => el)
    //     setSort(results);
    //       console.log("sorted", results);
    // }
   
    function sortingStar(i){
        let resultSort = [...parentData].filter((item)=>item.rating>=i).sort((a,b)=>a.rating - b.rating)
        setTodolist(resultSort)
    }

    function sortPrice(way){
        let results = [] 
        if(way=='low'){
             results = [...parentData].sort((a,b) => (a.oneprice-b.oneprice))
        }else{
             results = [...parentData].sort((a,b) => (b.oneprice-a.oneprice))

        }
        setTodolist(results);
    }

    //  function lh(){
    //     let resultslh = [...parentData].sort((a,b) => (a.oneprice-b.oneprice))
    //     setTodolist(resultslh)
        
    // }

    //  function hl(){   
    //     let temp = JSON.parse(JSON.stringify(todolist))
    //     let results = temp.sort((a,b) => ((2*b.oneprice)-(2*a.oneprice))).map(el => el)
    //     // setTodolist(results);
    //     setSort(results)
    //     setChangedInitial(false)
    //       console.log("sorted", results);
    // }
    function filterPayment(way){
        // let updatedResults=[]
        
        let  updatedResults=[...parentData].filter((item)=>item[way]===1)
       setTodolist(updatedResults)
    }

    function cash(){
        let temp = JSON.parse(JSON.stringify(todolist))
        let output = temp.filter((e)=>(e.cash==true && e.card==false && e.all==false))
        setSort(output)
        setChangedInitial(false)
    }
    function online(){
        let temp = JSON.parse(JSON.stringify(todolist))
        let output = temp.filter((e)=>(e.cash==false && e.card==true && e.all==false))
        setSort(output)
        setChangedInitial(false)
    }
    function all(){
        let temp = JSON.parse(JSON.stringify(todolist))
        let output = temp.filter((e)=>(e.all==true))
        setSort(output)
        setChangedInitial(false)
    }
    return (
        <>
        <form  onSubmit={handleSubmit}> 
            <label>Name:</label>
            <input type='text' name='name' placeholder='enter your name' onChange={handleChange}/>
            <label>Image:</label>
            <input type='text' name='image' placeholder='enter your name' onChange={handleChange}/>
            <label>Specials:</label>
            <input type='text' name='specials' placeholder='enter your name'onChange={handleChange}/>
            <label>Price per person :</label>
            <input type='text' name='oneprice' placeholder='enter your name'onChange={handleChange}/>
            <label>Minimum Price:</label>
            <input type='text' name='mprice' placeholder='enter your name'onChange={handleChange}/>
            <label>Delivery time:</label>
            <input type='text' name='time' placeholder='enter your name'onChange={handleChange}/>
            <label>Ratings:</label>
            <input type='text' name='rating' placeholder='enter your name'onChange={handleChange}/>
            <label>Votes:</label>
            <input type='text' name='votes' placeholder='enter your name'onChange={handleChange}/>
            <label>Reviews:</label>
            <input type='text' name='treviews' placeholder='enter your name'onChange={handleChange}/>
            <input type='submit' value='submit' />
            
        </form>
        
        <div style={{display:'flex',marginTop:'20px',justifyContent:'space-around'}}>
            <div>
            <h2>Sort By Ratings</h2>
            
            <button onClick={()=>sortingStar(1)}>1 star</button>
            <button onClick={()=>sortingStar(2)}>2 star</button>
            <button onClick={()=>sortingStar(3)}>3 star</button>
            <button onClick={()=>sortingStar(4)}>4 star</button>
            </div>
            

            <div>
            <h2>Sort By Pricing per two Heads</h2>
            <button onClick={()=>sortPrice('low')}>low to high</button>
            <button onClick={()=>sortPrice('high')}>high to low</button>
            </div>
            <div>
            <h2>Restaurant Payments</h2>
            <button onClick={()=>filterPayment("cash")}>Cash</button>
            <button onClick={()=>filterPayment("online")}>Card</button>
            <button onClick={()=>filterPayment("all")}>All</button>
            </div>
        
        </div>
        <div className={styles2.main}>
        {todolist.map(e=> <RestaurantCard e={e}/>)}
        </div>
        </>
    )
}

export default RestaurantApp
