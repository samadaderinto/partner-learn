import React from 'react'
import "./form.scss"

const Form = () => {
    const speakers = [
        "ryan",
        "libby",
        "aria",
        "guy",
        "david",
        "elvira",
        "matthias",
        "ingrid",
        "pauline",
        "henri",
        "alena",
        "dmitry"
    ]

    return (
        <div className='form'>
            <div className='form-input'>
                <h4>Text</h4>
                <textarea placeholder="input text here..." required/>
            </div>
            <div className='form-select'>
                <h4>Speaker</h4>
                <select required>
                    {speakers.map(value => {
                        return <option value={value}>{value}</option>
                    })}
                </select>
            </div>

            <div className='form-background'>
                <h4>Video Background</h4>
                <div className="form-background-btn">
                    <button>
                        <img src='' alt=''/>
                    </button>
                    <button>
                        <img src='' alt=''/>
                    </button>
                    <button>
                        <img src='' alt=''/>
                    </button>
                    <button>
                        <img src='' alt=''/>
                    </button>
                    <button>
                        <img src='' alt=''/>
                    </button>

                </div>

            </div>

            <div className='form-select'>
                <h4>Audio speed</h4>
                <select>
                    <option>slow - x0.5</option>
                    <option>normal - x1</option>
                    <option>fast - x1.5</option>
                    <option>faster - x2</option>
                </select>
            </div>
        </div>
    )
}

export default Form