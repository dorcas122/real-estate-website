import React from "react"
import Heading from "../../common/header/Heading"
import RecentCard from "./RecentCard"
import "./Recent.css"

const Recent=() =>{
    return(
        <>
<section className="recent padding ">
     <div className="container">
        <Heading title='Recent Property Listed' subtitle="Posts and pages can have a single featured image, which many themes and tools can use to enhance the presentation of your site. Set a Featured Image To set ..."/>
        <RecentCard/>
     </div>
</section>
        </>
    )
}

export default Recent