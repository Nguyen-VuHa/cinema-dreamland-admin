import Button from "src/components/Button";

const NotFoundMain = () => {
    return (
        <div
            className="
                w-full h-[100vh] flex flex-col justify-center items-center 
                bg-auth-layout bg-cover bg-center bg-no-repeat
            "
        >
            <div 
                className="w-full flex flex-col items-center bg-layout-primary p-[3.125rem] max-md:p-[2rem] max-w-[28.125rem] 
                max-sm:p-[1.5rem] max-sm:max-w-[90%] space-y-2 border-2 border-layout-second rounded"
            >
                <h1 className="text-primary text-[7.5rem] font-semibold m-0">404</h1>
                <p className="text-input-place text-lg text-center m-0" >The page you are looking for not available!</p>
                <Button
                    onClick={() => {
                        window.location.replace("/")
                    }}
                >
                    Trang Chủ
                </Button>
            </div>
        </div>
    );
};


export default NotFoundMain;