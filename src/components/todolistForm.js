import React, {useContext, useState, useRef,useEffect} from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import {MyContext} from './context/index'
import {FaTimes, FaEdit} from 'react-icons/fa'


const TodolistForm = () => {
    const context = useContext(MyContext);
    const [lists, setLists] = useState([])
    const textInput = useRef();//to access DOM element
    const [error, setError] = useState([false, ''])
   

   //Get initial JSON data that has been set previously
   useEffect(() => {
       const initJSON = async ()  =>{
           try {
               const {data,dataLink} = await context.mySky.getJSON(context.filePath);
               console.log("Existing lists: "+ JSON.stringify(data))
               console.log("Existing getJSON: "+ dataLink)
               setLists(data.todos);
            } catch (error) {
                 console.log(`error with getJSON: ${error.message}`);
        }}
        initJSON()
    }, []);

    //set list input for setJSON
    useEffect(() => {
            const setupJSON = async (jsonData)  =>{
                try {
                    console.log('userID:', context.userID);
                    console.log('filePath:', context.filePath);
                    
                    const {data, dataLink} = await context.mySky.setJSON(context.filePath, jsonData);
                    
                    console.log("Data after setJSON:", data);      
                    console.log("Skylink after setJSON:",dataLink);
        
                    setLists(data);
                } catch (error) {
                    console.log(`error with setJSON: ${error.message}`);
                }
        }
            setupJSON(lists)
        },[lists])
    
    //Enable users to logout of MySky
    const handleMySkyLogout = async () => {
       
        await context.mySky.logout();
        context.setLoggedIn(false);
        context.setUserID('');    
    };
      
    
    //remove item from lists
    const removeList = (index) =>{
        let newArray = [...lists]  
        newArray.splice(index,1)
        setLists(newArray)
        
    }

    //submit the form
    const submitHandler = (e) =>{
       
        e.preventDefault();
        const value = textInput.current.value
        const validate = validateInput(value)

        //if string input is not empty
        if(validate){       
            setError([false,''])
            addListHandler(value)
            textInput.current.value = ''
            console.log(value)
        }else{
            console.log('error')
        } 
   }

   //add item to the list
    const addListHandler = (text) =>{
        let newTodos = [...lists,text]
        setLists(newTodos)
    }
    //Do validation on form
    const validateInput = (value) => {
        if(value === ''){
            setError([true, 'Sorry, you need to add something'])
            return false;
        }
        return true;
    } 
    
    
    return (
        <div>
            <Form className='add-form' onSubmit={submitHandler}>
                <Form.Field className='form-control'>
                    <input  placeholder='Add List' name="list" ref={textInput} /> 
                </Form.Field>
                {error[0] ?(  <Message color='red'>{error[1]}</Message>):null}
                
                <Button  className='btn btn-block' inverted color='green' type="submit">
                    Save a list
                </Button>

                <h3>Your lists:</h3>
                {lists && lists.length > 0 ? 
                (<div className="form-control">
                <h3> {lists.length} results</h3> 
                <div>
                    {lists.map((list , index) => (
                        
                        <div key={index} className= "listItem" >
                    <h4 className="item">{list} <div className='iconItem'>
                        {/* <FaEdit style={{ cursor:'pointer'}} /> */}
                        <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={removeList} /></div></h4>
                    
                 </div>
                )) }
                </div>   
                </div>) : (
                <div className='form-control'>
                <h3> 0 result </h3>
                </div>) }
                
                <div className='btn'>
                    <Button className='btn-block' negative onClick={handleMySkyLogout}>Logout</Button>
                </div>
            </Form>
        </div>
    )
}

export default TodolistForm
