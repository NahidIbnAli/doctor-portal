import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { signUp, signInWithGoogle, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hanldeSignUp = (data, event) => {
    signUp(data.email, data.password)
      .then((result) => {
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
            event.target.reset();
            toast.success("User Created Successfully");
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        if (error.message) {
          toast.error("email already in use");
        }
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctorsportalserver.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      })
      .catch((error) => console.error(error));
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        saveUser(result.user.displayName, result.user.email);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="lg:min-h-screen flex justify-center items-center px-6 py-7 lg:py-0">
      <div className="w-full max-w-md p-8 rounded-xl shadow-xl">
        <h3 className="text-2xl text-center font-medium text-accent mb-8">
          Sign Up
        </h3>
        <form onSubmit={handleSubmit(hanldeSignUp)}>
          <div className="form-control w-full mb-2">
            <label className="label pb-0">
              <span className="label-text text-base">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is Required" })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
          <div className="form-control w-full mb-2">
            <label className="label pb-0">
              <span className="label-text text-base">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is Required" })}
              type="email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div className="form-control w-full mb-3">
            <label className="label pb-0">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special character",
                },
              })}
              type="password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>
          <button className="btn w-full" type="submit">
            Sign Up
          </button>
        </form>
        <p className="my-3 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary">
            Login
          </Link>
        </p>
        <div className="divider text-accent">OR</div>
        <button
          onClick={handleSignInWithGoogle}
          className="btn btn-outline btn-accent w-full mt-2"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
