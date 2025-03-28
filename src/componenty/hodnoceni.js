import React from 'react'

function Hodnoceni({ hodnota, text, barva }) {
    return (
        <div className="rating">
            <span>
                <i style={{ barva }} className={
                    hodnota >= 1
                        ? 'fas fa-star' 
                        : hodnota >= 0.5 
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star' 
                }>

                </i>
            </span>

            <span>
                <i style={{ barva }} className={
                    hodnota >= 2
                        ? 'fas fa-star'
                        : hodnota >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>

                </i>
            </span>

            <span>
                <i style={{ barva }} className={
                    hodnota >= 3
                        ? 'fas fa-star'
                        : hodnota >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>

                </i>
            </span>

            <span>
                <i style={{ barva }} className={
                    hodnota >= 4
                        ? 'fas fa-star'
                        : hodnota >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>

                </i>
            </span>

            <span>
                <i style={{ barva }} className={
                    hodnota >= 5
                        ? 'fas fa-star'
                        : hodnota >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>

                </i>
            </span>

            <span>{text && text}</span>
        </div>
    )
}

export default Hodnoceni
