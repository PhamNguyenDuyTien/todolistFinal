import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    // Set the first if props have no value, add value return string
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)
    
    useEffect(()=>{
        inputRef.current.focus();
    })


    const  handleChange = (event) =>{
        setInput(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
          });

        // Return the empty input
        setInput("");
    }


    return (
    <form className='todo-form' onSubmit={handleSubmit}> 
        {props.edit ? (
        <div className='wrapper-1'>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </div>
      ) 
      : 
      (
        <div className='wrapper-2'>
          <input
            placeholder='Enter here...'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add
          </button>
        </div>
      )}
    </form>
    )
}

export default TodoForm