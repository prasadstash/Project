import React, { Component , useState } from 'react'
import './AddProperty.css';



    const  Image = () => {
        const [ selectedFiles, setSelectedFiles ] = useState([]);
    
        const handleImageChange = (e) => {
            // console.log(e.target.files[])
            if (e.target.files) {
                const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
    
                // console.log("filesArray: ", filesArray);
    
                setSelectedFiles((prevImages) => prevImages.concat(filesArray));
                Array.from(e.target.files).map(
                    (file) => URL.revokeObjectURL(file) // avoid memory leak
                );
            }
        };
    
        const renderPhotos = (source) => {
            console.log('source: ', source);
            return source.map((photo) => {
                return <img src={photo} alt="" key={photo}/>;
            });
        };
    
        return (

            // <div className="picture" style={{width:"300px", height:"300px"}}> 
                <div className="picture">           
                    <div>
                        <input type="file" id="file" multiple onChange={handleImageChange} />
                        <div className="label-holder">
                            <label htmlFor="file-input" className="label">
                                   
                            </label>
                        </div>
                        <div className="result">{renderPhotos(selectedFiles)}</div>
                    </div>
            </div> 
        );

   }


export default Image


