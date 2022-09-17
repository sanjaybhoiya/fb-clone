import {
  CameraIcon,
  FaceSmileIcon,
  VideoCameraIcon
} from '@heroicons/react/20/solid';


function InputBox() {


   
  return (
    <div class="border-solid border-2 shadow-lg p-2 mt-6 rounded-xl">
      <div>
        <form className="flex flex-1 pt-4 px-4">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type='text'
            
            placeholder="what's on your mind"
          />
          <button
            hidden
            tpye="submit"
           
            className=""
          
          >
            
            Submit</button>

        </form>
      </div>

      <div className="flex justify-evenly p-3 border-t"> 

        <div className="inputIcon"> 
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon"> 
          <CameraIcon
        className='text-green-400 h-7'  />
        <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>

        <div className="inputIcon" >
          <FaceSmileIcon className="text-yellow-300 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>


      </div>
    </div>
  );
}

  export default InputBox;