import ImageData from "./ImageData"
import {useState} from "react"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const ImageSlider =()=>{
    const [current,setCurrent] = useState(0)

    const prevSlide=()=>{
        current === 0 ? setCurrent(ImageData.length-1) : setCurrent(current-1)
    }

    const nextSlide=()=>{
       
        current === ImageData.length-1 ? setCurrent(0) : setCurrent(current+1)
    }
    return(
        <section className="slider">
            <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}/>
            <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}/>
            {ImageData.map((data,index)=>{
            return(
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        
                            {index === current &&
                            (
                                <div>
                                    <img className="image" src={data.image} alt={data.title} ></img>
                                    <p>{data.title}</p>
                                </div>
                            )
                            }
                        
                    </div>
             )
            })}
        </section>
    )
}

export default ImageSlider