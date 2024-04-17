import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import loginImg from "../assets/login.jpg";
import { passwordsMatch } from "../components/Utils/passwordUtils";

export default function Register() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const onSubmit = async (data) => {
    try {
      // Verificar si las contraseñas coinciden
      if (!passwordsMatch(data.password, data.repeatPassword)) {
        setError("repeatPassword", {
          type: "manual",
          message: "Las contraseñas no coinciden"
        });
        return; // Detener el proceso de registro si las contraseñas no coinciden
      }

      const response = await axios.post('http://localhost:3000/users', data);

      if (response.status === 201) {
        alert("Usuario registrado exitosamente!");
        window.location.href = "/login";
      } else {
        console.error('Error al registrar usuario');
        // Manejar fallo en el registro
      }
    } catch (error) {
      console.error('Error:', error);
      // Manejar el error y establecer el mensaje de error basado en la respuesta del servidor
      if (error.response && error.response.data && error.response.data.message) {
        setError("server", {
          type: "manual",
          message: error.response.data.message
        });
      } else {
        setError("server", {
          type: "manual",
          message: "Se produjo un error al procesar su solicitud."
        });
      }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">STAFKO.</h2>
          <div className="flex flex-col py-2">
            <label>Name</label>
            <input className="border p-2" type="text" {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input className="border p-2" type="email" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="flex flex-col py-2">
            <label>Repeat Password</label>
            <input className="border p-2" type="password" {...register("repeatPassword", { required: true })} />
            {errors.repeatPassword && <span>Password doesn't match</span>}
          </div>
          <button type="submit" className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Register
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <Link to="/login" className="text-blue-500">
              Back to Login
            </Link>
          </div>
          {/* Muestra el mensaje de error del servidor */}
          {errors.server && <span className="text-red-500">{errors.server.message}</span>}
        </form>
      </div>
    </div>
  );
}
