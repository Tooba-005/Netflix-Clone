// import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import Movie from "./Movie";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const Rows = ({title, fetchURL, rowId}) => {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])
    // console.log(movies)
    const slideLeft = ()=>{
      var slider = document.getElementById('slider' + rowId);
      slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = ()=>{
      var slider = document.getElementById('slider' + rowId);
      slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
      <MdChevronLeft onClick={slideLeft} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0" size={40}/>
      <div id={'slider' + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
      {movies.map((item, id)=>(
       <Movie key={id} item={item}/>
      ))}
      </div>
      <MdChevronRight onClick={slideRight} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0" size={40}/>
      </div>
    </div>
  )
}

export default Rows
