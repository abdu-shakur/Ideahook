import React from "react";
function Login(){
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });
    const [error, setError] = useState({})

    function handleChange(e){
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    function validate(e){
        let error={};
        if (!formData.name){
            error.name = 'Name is required';
        }
        // if (!formData.email){
        //     errors.email = 'Email is required';
        // }
        if (!formData.password){
            error.password = 'Password is required';
        }else if(formData.password.length < 10){
            error.password = 'Password is too short'
        };
        return error;
    }
    function handleSubmit(e){
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data:', formData);
        } else {
            setError(validationErrors)
        }
    };
    

    

    return(
        <form  className="m-auto" onSubmit={handleSubmit}>
            <div>
                <h3 className="text-primary text-xl py-4">Welcome Back</h3>
                <div className="centeredDiv">
                    Name: <input className="block border rounded" requuired type="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Email"/>
                    {error.name && <p className="text-red-500">{error.name}</p>}
                </div>
                <div>
                    Password: <input className="block border rounded" required type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"/>
                    {error.password && <p className="text-red-500">{error.password}</p>}
                </div>
                <a href=""className="block">Forgot Password?</a>
                <button className="block bg-primary text-yellow-50 rounded-xl border px-5 my-4 py-1" type="submit">Sign In</button>
                <hr />
                <div className="flex-col flex items-center">
                    <button className="block bg-red-600 text-yellow-50 rounded border px-5 m-4 py-1">Sign In with Google</button>
                    <button className="block  bg-blue-600 text-yellow-50 rounded border px-5 py-1">Sign In with Facebook</button>
                </div>
            </div>
        </form>
    )
}
export default Login;