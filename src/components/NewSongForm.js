import React, {useState} from 'react';

const NewSongForm = ({addSong}) => {
    const [title,setTitle]=useState('');

    const handleSubmit=(e)=>{
       e.preventDefault();
       addSong(title);
       setTitle('');
}
    return (
       <form onSubmit={handleSubmit}>
           <label>Add New Song</label>
           <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <input type="submit" value="add song"/>
       </form>
    )
}
 
export default NewSongForm;