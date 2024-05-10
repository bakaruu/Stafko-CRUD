
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { passwordsMatch } from "../register/PasswordMatch";

const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
      } = useForm();
    
      const onSubmit = async (data) => {
        try {
          // Verificar si las contraseñas coinciden
          if (!passwordsMatch(data.password, data.repeatPassword)) {
            setError("repeatPassword", {
              type: "manual",
              message: "Las contraseñas no coinciden",
            });
            return; // Detener el proceso de registro si las contraseñas no coinciden
          }
    
          const response = await axios.post("http://localhost:3000/users", data);
    
          if (response.status === 201) {
            alert("Usuario registrado exitosamente!");
            window.location.href = "/login";
          } else {
            console.error("Error al registrar usuario");
            // Manejar fallo en el registro
          }
        } catch (error) {
          console.error("Error:", error);
          // Manejar el error y establecer el mensaje de error basado en la respuesta del servidor
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            setError("server", {
              type: "manual",
              message: error.response.data.message,
            });
          } else {
            setError("server", {
              type: "manual",
              message: "Se produjo un error al procesar su solicitud.",
            });
          }
        }
      };

    return (
        <div className="md:max-w-md w-full sm:px-6 py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-12">
                <h3 className="text-1xl font-extrabold">Create an account</h3>
              </div>
              <div>
                <label className="text-xs block mb-0">Name</label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none shadow-md"
                    {...register("name", { required: true })}
                    placeholder="Enter name"
                  />
                  {errors.name && <span>This field is required</span>}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="mt-10">
                <label className="text-xs block mb-0">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none shadow-md"
                    {...register("email", { required: true })}
                    placeholder="Enter email"
                  />
                  {errors.email && <span>This field is required</span>}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="mt-10 flex justify-between">
                <div className="mr-2 flex-1">
                  <label className="text-xs block mb-0">Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none shadow-md"
                      {...register("password", { required: true })}
                      placeholder="Enter password"
                    />
                    {errors.password && <span>This field is required</span>}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-2 flex-1">
                  <label className="text-xs block mb-0">Repeat Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="repeatPassword"
                      type="password"
                      required
                      className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none shadow-md"
                      {...register("repeatPassword", { required: true })}
                      placeholder="Repeat password"
                    />
                    {errors.repeatPassword && <span>Password doesnt match</span>}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-orange-700 hover:bg-orange-500 focus:outline-none"
                >
                  Create an account
                </button>
                <p className="text-sm mt-8">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-orange-500 font-semibold hover:underline ml-1"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>

    );
}

export default RegisterForm;