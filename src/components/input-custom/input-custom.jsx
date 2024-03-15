import React, { useState, useEffect } from "react";


export default function FormulareDOIS(props) {
    const [imagePreview, setImagePreview] = useState(null);
    const [file, setFile] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFile(file);

        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }

        props.Save();
    };

    const define = () => {
        if (props.type == "update") {
            return
        }

        const file = props.form2.current[props.num];
        setFile(file);

        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    }

    useEffect(() => {
        if (file) {
            props.form2.current = {
                ...props.form2.current,
                [props.num]: file,
            };
        }
    }, [file])

    useEffect(() => {

        if (props.form2.current) {
            define();
        }
    }, [props.form2])

    useEffect(() => {
        if (props.type && props.type == "update" && props.search && props.search.current) {
            const name = props.search.current[props.num];
            if (name) {
                const image = "http://localhost/src/drawble/palavras/" + name;
                setImagePreview(image);
            }

        }
    }, [props.search])


    return (
        <>
            <div id='file-box'>
                <label htmlFor={`editFile${props.num}`} className='labelBt'>
                    <div className="custom-input" style={imagePreview ? { backgroundImage: 'none' } : null}>
                        {imagePreview ? <img className="preview" src={imagePreview} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : null}
                    </div>
                </label>
            </div>
            <input type="file" id={`editFile${props.num}`} name={`editFile${props.num}`} onChange={handleImageChange} accept="image/*" />
        </>
    );
}