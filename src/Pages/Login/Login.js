import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../assets/images/login.png';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../component/providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
const Login = () => {
  useTitle("Login");
   
  const [userEmail, setUserEmail] = useState('');

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
  // google
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || '/';
   
  const {signIn} = useContext(AuthContext);
  
  const handleLogin = event => {
     event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;
  

     signIn(email, password)
     .then(result => {
      toast.success('Login Successfully', {
        position: toast.POSITION.TOP_CENTER ,
      });
         const loggedUser = result.user;
         console.log(loggedUser);
         form.reset();
         navigate(from,{replace: true});
     })
     .catch(error => {
        console.log(error);
     })
  }

  // forget password
  const handleEmailBlur = event => {
     const email  = event.target.value;
     setUserEmail(email);
     
  }

  const handleForgetPassword = () => {
      if(!userEmail){
        toast.warning('Please enter your email address', {
          position: toast.POSITION.TOP_CENTER ,
        });
      }
      sendPasswordResetEmail(auth, userEmail)
      .then( () => {
        toast.success('reset password  sent Please Check your email and !', {
          position: toast.POSITION.TOP_CENTER ,
        });
      })
      .catch(error => {
        toast.danger(error, {
          position: toast.POSITION.TOP_CENTER ,
        });
      })
  }

  return (
        <div>
            <div className="hero min-h-screen bg-base-200" data-aos="fade-up">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-green-400">Login now!</h1>
      <img src={loginimg} alt='Login' />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" onBlur={handleEmailBlur}  name="email" placeholder="email" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            
            
            <Link className="label-text-alt link link-hover text-green-600" onClick={handleForgetPassword}>Forgot password?</Link>
            <Link className="label-text-alt link link-hover text-green-600" to='/register'>Create Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
       
        <button className='btn bg-green-600 border-2 border-green-600 text-white  hover:bg-white hover:border-2  hover:border-green-600 hover:text-green-600  mt-2' type="submit" value="login" >Login</button>
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

export default Login;