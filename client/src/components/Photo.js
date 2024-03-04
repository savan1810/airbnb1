import React, { useState, useRef } from 'react'
import axios from 'axios'
// import NoteContext from '../context/NoteContext';


const Photo = ({ addedPhotos, setAddedPhotos, id }) => {
    const [photoLink, setPhotoLink] = useState('');
    const imageRef = useRef()
    // const a = useContext(NoteContext)
    // const { places, getPlaces, addPlaces, updatePlaces } = a;

    const addPhotoByLink = async (ev) => {
        ev.preventDefault()
        const { data: filename } = await axios.post('/api/auth/upload-by-link', { link: photoLink })
        // console.log(data)
        setAddedPhotos([...addedPhotos, filename])
        console.log(addedPhotos);
        setPhotoLink('')
    }

    const ImageUpload = async (ev) => {
        ev.preventDefault()
        setAddedPhotos([...addedPhotos, ev.target.files[0].name])
        const formData = new FormData();
        formData.append('image', ev.target.files[0]);
        try {
            await axios.post(`/api/auth/upload-local-image`, formData)
        }
        catch (err) {
            console.log(err)
        }

    }

    const deleteImage = async (event, ele) => {
        event.preventDefault()
        await axios.post(`/api/place/deleteImage/${id}`, { ele })
        const final = addedPhotos.filter((note) => { return note !== ele })
        setAddedPhotos(final)
    }
    return (
        <div>
            <div className=''>
                <div classname=''>
                    <input input='text' className=' w-11/12 border rounded-lg py-1 px-2 outline-slate-300 ' placeholder='Add using a link....jpg' value={photoLink} onChange={ev => setPhotoLink(ev.target.value)} />
                    <button onClick={addPhotoByLink} className='border bg-gray-200 hover:bg-gray-300 py-1 px-2 ml-2 rounded-lg font-medium'>Add Photo</button>
                </div>
                {addedPhotos.length !== 0 &&
                    <div className='m-2 -ml-2 flex flex-wrap'>
                        {addedPhotos.map((ele) => {
                            return (
                                <div className='m-2 flex'>
                                    <img src={`/uploads/` + ele} className=' h-32 w-52 rounded-xl object-cover' alt='/' />
                                    <button onClick={(event) => deleteImage(event, ele)} className="cursor-pointer absolute ml-36 mt-20  text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            )
                        }

                        )}
                    </div>
                }

                <div className='flex w-1/6 gap-2 mt-3 justify-center items-center border p-3 rounded-lg' >
                    <label htmlFor='img1' className='flex justify-center items-center  gap-2 cursor-pointer'  >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                        Upload
                    </label>
                    <input type="file" id="img1" onChange={
                        ImageUpload} ref={imageRef} className='hidden' />
                </div>
            </div>
        </div>
    )
}

export default Photo
