import { useState } from "react"

const Login = () => {
  const [register, SetRegister] = useState([])


  const handleChange = e => {
    let value = e.target.value
     if(SetRegister.find(value)) SetRegister(value)
  }

  const handleSubmit = e => e.preventDefualt()

  return(
    <>
   <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit()}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" onChange={handleChange()} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password"  onChange={handleChange()} className="input input-bordered" />
                <label className="label">
                  <a href="$" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
        </div>
    </div>
  </div>
    </>
  )
}
export default Login;
