import ImageLogin from "../components/login/ImageLogin";
import LoginForm from "../components/login/LoginForm";


const LoginPage = () => {
  
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,31,237,0.3)] rounded-md bg-white bg-opacity-75">
          <ImageLogin />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
