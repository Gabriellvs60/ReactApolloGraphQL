import React, {Component} from 'react';

class Signup extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    };
    
    handleChange = event => {
        const {name, value} = event.target;
        console.log(name, ':', value);
    }
    
    render(){
        return(
           <div className="App">
               <h2 className="App">Signup</h2>
               <form className="form">
                   <input type="text" name="username" 
                   placeholder="Username"
                   onChange={this.handleChange}/>
                   <input type="email" name="email" 
                   placeholder="Email Address"
                   onChange={this.handleChange}/>
                   <input type="password" name="password" 
                   placeholder="Password"  onChange={this.handleChange}/>
                   <input type="password" name="passwordConfirmation" 
                   placeholder="Confirm Password"  onChange={this.handleChange}/>
                    <button type="submit" className="button-primary">Submit</button>
               </form>
           </div>
        )
    }
}

export default Signup;