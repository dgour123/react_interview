import React, { useState } from 'react'

const Form = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')

    const handleSubmit = (e)=> {
          e.preventDefault();

          if(!email || password.length<6) {
               seterror("Email is requir and password must be at least 6 charactor ")
          }
          else{
                alert(`Form submitted\nEmail: ${email}\nPassword: ${password}`);
            seterror('')
          }

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} />
            <br></br>
            <br></br>
            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
        
            <button>Submit</button>
              { error && <h4>{ error } </h4>}
            
        </form>
    </div>
  )
}

export default Form