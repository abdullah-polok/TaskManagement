import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate, Link } from 'react-router-dom';
import { useContext } from "react";
const Login = () => {
    const userInfo = useContext(AuthContext)
    const { signIn, googleSignIn } = userInfo
    const navigate = useNavigate()

    const handlePopUp = () => {
        googleSignIn()
            .then(user => {
                console.log(user)
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
            })

    }


    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(res => {
                console.log(res)
                e.target.reset()
                navigate('/')

            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 w-full shadow-xl shadow-gray-300">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input w-full " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input w-full " required />
                        </div>
                        <div className="form-control mt-6 text-center">
                            <button className="btn btn-primary w-full ">Login</button>
                        </div>
                    </form>
                    <button className="btn bg-red-400 mx-4" onClick={handlePopUp}><span className="text-white">Login via Google</span></button>
                    <p className="p-5">Do not have a account?<Link to={'/register'} className="text-blue-500">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;