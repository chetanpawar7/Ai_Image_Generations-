import { useState ,useRef } from 'react';
import default_img from './assets/default_img.png';

function ImgGenerate() {
    const [img_url, setImg_url] = useState('');
    const inputRef = useRef(null);

    const imgGen = async()=>{
        if(inputRef.current.value==""){
            return 0;
        }
        const response = await fetch('https://api.openai.com/v1/images/generations',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                Authorization:
                "Bearer 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",
                "User-Agent": "Chrome",
            },
            body: JSON.stringify({
                prompt :`${inputRef.current.value}`,
                n:1,
                size:"512x512",
            }),

        });
        let data = await response.json();
        console.log(data.image);
        // let result = data.image;
        // setImg_url(result[0].url);
    }
  return (
    <div className="container">
      <h1 className="text-center">
        AI IMAGE <span>GENERATOR</span>
      </h1>
      <div className="img-box">
        <div className="text-center">
          <img src={img_url ===''?default_img:img_url} className="rounded w-50" alt="Ai Image Loading..." />
        </div>
      </div>
      <div className='form-input'>
      <div className="input-group mb-3 mt-3">
  <input
    type="text"
    className="form-control"
    placeholder="TYPE TEXT HERE"
    ref ={inputRef}
  />
  <button
    className="btn btn-outline-secondary"
    type="button"
    id="button-addon2"
    onClick={()=>{imgGen()}}
  >
    Generate
  </button>
</div>


      </div>
    </div>
  );
}

export default ImgGenerate;
