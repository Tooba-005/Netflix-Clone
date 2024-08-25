// import React from 'react'
import Main_page from "../Components/Main_page"
import Rows from "../Components/Rows"
import request from "../Requests"

const Home = () => {
  return (
    <div>
      <Main_page/>
      <Rows rowId="1" title="Up_Coming" fetchURL={request.requestUpcoming}/>
      <Rows rowId="2" title="Popular" fetchURL={request.requestPopular}/>
      <Rows rowId="3" title="Top_Rated" fetchURL={request.requestTopRated}/>
      <Rows rowId="4" title="Trending" fetchURL={request.requestTrending}/>
      <Rows rowId="5" title="Now_Playing" fetchURL={request.requestNow_playing}/>
    </div>
  )
}

export default Home
