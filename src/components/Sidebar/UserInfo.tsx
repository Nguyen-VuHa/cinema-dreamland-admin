import Image from '../Image';

const UserInfo = () => {
    return (
        <div
            className='flex flex-col p-3 space-y-2 border-b-1 border-layout-second'
        >
            <div className='flex space-x-3'>
                    {/* Avartar */}
                    <div className='w-[50px] h-[50px] rounded overflow-hidden flex-shrink-0'>
                        <Image 
                            className='w-full h-full bg-cover'
                            alt='NO AVARTAR'
                            src="https://upanh123.com/wp-content/uploads/2021/03/hinh-nen-may-tinh-3d-1024x768.jpg"
                        />
                    </div>
                    {/* Info */}
                    <div className='flex flex-col space-y-1 text-white overflow-hidden'>
                        <span className='text-lg truncate'>Nguyen Vu Ha</span>
                        <span className='text-xs truncate text-input-place'>Admin</span>
                    </div>
            </div>
            {/* <Button>
                Đăng xuất
            </Button> */}
        </div>
    );
};

export default UserInfo;