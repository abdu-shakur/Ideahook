import React from "react";

function Signup(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState({})


    function handleChange(e){
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    function validate(e){
        let errors={};
        if (!formData.name){
            errors.name = 'name is required'
        }
        if (!formData.email){
            errors.email = 'Email is required'
        }
        if (!formData.password){
            errors.password = 'Password is required'
        }
        if (!formData.confirmPassword){
            errors.confirmPassword = 'Comfirm your password'
        } else if (formData.confirmPassword != formData.password){
            errors.confirmPassword = `Password doesn't match`
        }
        return errors;
    }
    function handleSubmit(e){
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data:', formData);
        } else {
            setError(validationErrors)
        }
    
    }


    return(
        <div>
            <h3>Join Ideahook</h3>
            <form onSubmit={handleSubmit}>
                <div>Name: <input name="name" type="name" value={formData.name} onChange={handleChange} placeholder="Enter your name"/></div>
                {error.name && <p>{error.name}</p>}
                <div>Email <input name="email" type="email"  value={formData.email} onChange={handleChange}placeholder="Enter your Email"/>
                {error.email && <p>{error.email}</p>}
                </div>
                <div>Password: <input name="password" type="password" placeholder="Enter your Password" value={formData.password} onChange={handleChange}/>
                {error.password && <p>{error.password}</p>}
                </div>
                <div>Confirm Password: <input name="confirmPassword" type="password" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange}/>
                {error.confirmPassword && <p>{error.confirmPassword}</p>}
                </div>
                <button type="submit">Submit</button>
                <button>Sign Up with Google</button>
                <button>Sign up with Facebook</button>
            </form>
        </div>
    )
}
export default Signup;