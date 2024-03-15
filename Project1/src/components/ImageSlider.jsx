import React, { useState } from "react";

const imageSlider = () => {
    const [curr, setCurr]=useState(0);

    const nextSlide=()=>{
        setCurr(curr===images.length-1?0:curr+1);
    }
    const prevSlide=()=>{
        setCurr(curr===0?images.length-1:curr-1);
    }

    const images =[
        "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-5">
            <div id="carouselExample" class="carousel slide">
                {
                   images.map((value,index)=>
                        curr === index && (
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src={value} className="d-block w-100" alt="..." />
                            </div>
                            </div>

                        )
                       

                    )
                }
             
              
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"  onClick={prevSlide}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next" onClick={nextSlide}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default imageSlider;
