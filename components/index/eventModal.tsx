import Image from 'next/image'
const Modal = () => {
    
    const closeModal = () => {
        document.getElementById('event-modal-container')?.classList.add('hidden')
        document.querySelector('body')?.classList.remove('overflow-hidden')
    }

    return (
        <div id="event-modal-container" className="fixed hidden top-0 left-0 h-full w-full bg-black/50 z-50">
            <div id="event-modal" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 rounded-xl">
                <div className='relative'>
                    <div className='absolute -top-4 right-4 -translate-y-full translate-x-full text-white text-3xl flex justify-center items-center border cursor-pointer border-white px-3 pb-1 rounded-full' onClick={closeModal}>
                        x
                    </div> 

                    <div className="w-full h-24 lg:h-40 bg-white rounded-t-xl cursor-pointer ">
                         <img src="" alt="" id='event-modal-img' className='object-cover' />    
                    </div>
                    <div className="relative py-2 md:py-8 px-2 md:px-12 bg-white/20 modal-event-content rounded-b-xl ">

                        <div className="flex flex-wrap gap-1 justify-between items-center pb-4">
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