
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerimg from '../../assets/images/registerimg.png';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../component/providers/AuthProvider';
import { GoogleAuthProvider, getAuth, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Register = () => {

  const auth = getAuth(app);
  const provider = new  GoogleAuthProvider();
  const handleGoogleSignIn = () => {
       signInWithPopup(auth,provider)
       .then(result => {
           const user = result.user;
           console.log(user);
       })
       .catch(error =>{
           console.log('error', error.message)
       })
  }
  const location = useLocation(); 
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const [error, setError] = useState('');
   
  const {createUser} = useContext(AuthContext)

  const handleSubmit = (event) =>{
       event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       const confirm = form.confirm.value;
     

       setError('');
       
       if(password.length <6){
         setError('Password should be at least 6 characters long')
         
         return;
       }

       else if(password !== confirm){
         setError('Passwords do not match');
         return;
       }

       createUser(email, password)
       .then(result => {
           const loggedUser = result.user;
           console.log(loggedUser);
           verifyEmail();
           navigate(from,{replace: true});
       })

       .catch(error => {
          console.log(error);
          setError(error.message);
       })

       try {
        // Assuming your form submission was successful
        // Display a success toast
        toast.success('Form submitted successfully!', {
          position: toast.POSITION.TOP_CENTER ,
        });
      } catch (error) {
        // Handle any errors during form submission
        toast.error('Form submission failed. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    };
   
    // email verification

    const verifyEmail = () => {
       sendEmailVerification(auth.currentUser)
       .then( () => {
        toast.warning('Please Check your email and verify  !', {
          position: toast.POSITION.TOP_CENTER ,
        });
       })
    }
  

  useTitle("Register");
    return (
        <div className='pt-20 grid grid-cols-1' data-aos="fade-up">
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-green-400 lg:pl-0">Register now!</h1>
      <img src={registerimg} className="w-60" alt='Login' />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit}>
      <div className="card-body">
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" placeholder="Enter Your Phone Number" className="input input-bordered" />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
        
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirm" placeholder="Confirm Password" className="input input-bordered" />
        
        </div>
        <label className="label">
            
            <Link className="label-text-alt link link-hover text-green-600">Forgot password?</Link>
            <Link className="label-text-alt link link-hover text-green-600" to='/login'>Already have  Account  !!</Link>
         
          </label>
          <p className='text-error'>{error}</p> 
        <div className="form-control mt-6">
       
         <button className='btn bg-green-600 border-2 border-green-600 text-white  hover:bg-white hover:border-2  hover:border-green-600 hover:text-green-600  mt-2' type="submit" value="Register" >Submit</button>
          <button className="btn bg-white border-2 border-green-600 text-green-600  hover:bg-green-600 hover:border-2  hover:border-green-600 hover:text-white  mt-2 " onClick={handleGoogleSignIn}> Continue With Google</button>
        
        </div>
      </div>
      
      </form>
      
    </div>
  </div>
</div>
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;