// eslint-disable-next-line react/prop-types
const GenericBtn = ({ buttonText, onClick }) => {
    return (
        <div>
            <button 
                onClick={onClick}
                className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-orange-200 active:bg-light focus:bg-light bg-gray-200"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default GenericBtn;