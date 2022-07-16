import React from "react";
import { auth, useSignInWithGoogle } from "../firebase-config";
import { useForm } from "react-hook-form";
// import Loading from "../Shared/Loading";
import Link from "next/link";
import { useRouter } from "next/router";
// import useToken from "../../hooks/useToken";

const SignIn = () => {
  const [signInWithGoogle, userGoogle, loading, error] =
    useSignInWithGoogle(auth);
  //   const [createUserWithEmailAndPassword, user, loadingEmail, errorEmail] =
  //     useCreateUserWithEmailAndPassword(auth);
  //   const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  //   //   const [token] = useToken(user || userGoogle);
  const navigate = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;
  //   if (token) {
  //     navigate("/appointment");
  //   }
  //   if (loading || loadingEmail || updating) {
  //     return <Loading></Loading>;
  //   }
  if (error || errorEmail || updateError) {
    signInError = (
      <p className="text-red-500">
        {error?.message || errorEmail?.message || updateError?.message}
      </p>
    );
  }
  const handleGoogleLogin = (event) => {
    event.preventDefault();
    signInWithGoogle();
  };

  //   const onSubmit = async (data) => {
  //     console.log(data);
  //     await createUserWithEmailAndPassword(data.email, data.password);
  //     await updateProfile({ displayName: data.name });
  //     console.log("update done");
  //   };
  return (
    <div>
      <div className="flex h-screen justify-center items-center ">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body text-center">
            <h2 class=" text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "provide a valid email",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password should be of minimum 6 charecters",
                  },
                })}
              />

              <label className="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              {signInError}

              <input
                type="submit"
                value="Sign Up"
                class="btn w-full max-w-xs"
              />
              <small>
                Already have an account?{" "}
                <Link className="text-secondary" href="/login">
                  Please Login
                </Link>{" "}
              </small>

              <div class="divider">OR</div>
              <button
                onClick={handleGoogleLogin}
                type="submit"
                class="btn btn-outline w-full"
              >
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
