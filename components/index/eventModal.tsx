import Image from 'next/image'

const Modal = () => {
    
    const closeModal = () => {
        document.getElementById('event-modal-container')?.classList.add('hidden')
        document.querySelector('body')?.classList.remove('overflow-hidden')
    }

    return (
        <div id="event-modal-container" className="fixed hidden top-0 left-0 h-screen w-full bg-black/50 z-50">
            <div id="event-modal" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6/7 lg:w-2/4 bg-black/30 rounded-xl">
                <div className='relative'>
                    <div className='absolute -right-4 -top-4 -translate-y-full translate-x-full text-white text-3xl flex justify-center items-center border 
                    cursor-pointer border-white py-0.5 px-3 rounded-full' onClick={closeModal}>
                        x
                    </div>
                    <div className="w-full h-24 lg:h-32 bg-white rounded-t-xl cursor-pointer">
                        {/* add image source here */}
                    </div>
                    <div className="relative py-8 px-12 bg-white/20 modal-event-content rounded-b-xl">

                        <div className="flex justify-between items-center pb-4">
                            <p id="event-modal-name" className="text-4xl text-primary-blue">Event Name</p>
                            <p id="event-modal-date" className="text-3xl text-white">Date</p>
                        </div>

                        <div id="event-modal-content" className="text-white">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod laborum nam porro voluptatibus itaque quibusdam vero, odio laudantium aspernatur, distinctio, doloremque nemo eius provident sed soluta repellendus architecto vitae suscipit.
                        </div>
            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal