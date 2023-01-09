import React from "react";
import './RecommendedVideos.css';
import VideoCard from "./VideoCard";

function RecommendedVideos()
{
    return(
        <div className="recommendedVideos">
           <h2>Recommended</h2>
           <div className="recommendedVideos__videos">
           <VideoCard 
           title="PERFECT Ramen Noodles in Osaka"
           timeStamp="5 years ago"
           views="6M"
           channelImage="https://picsum.photos/200/300?random=13"
           channel="Strictly Dumpling"
           image="https://picsum.photos/200/300?random=14" 
            />
            <VideoCard 
           title="How to make a simple website in 5 steps"
           timeStamp="2 years ago"
           views="2M"
           channelImage="https://picsum.photos/200/300?random=12"
           channel="CoolCoder"
           image= "https://picsum.photos/200/300?random=11"
            />
            <VideoCard 
           title="PERFECT Ramen Noodles Recipe 3"
           timeStamp="1 years ago"
           views="7M"
           channelImage="https://picsum.photos/200/300?random=10"
           channel="Strictly Dumpling"
           image="https://picsum.photos/200/300?random=443"
            />
            <VideoCard 
           title="PERFECT Ramen Noodles Recipe u will lovee"
           timeStamp="2 years ago"
           views="2.5M"
           channelImage="https://picsum.photos/200/300?random=2"
           channel="Strictly Dumpling"
           image="https://picsum.photos/200/300?random=3" 
            />
            <VideoCard 
           title="Tips to start coding"
           timeStamp="1 years ago"
           views="4M"
           channelImage="https://picsum.photos/200/300?random=4"
           channel="CoolCoder"
           image="https://picsum.photos/200/300?random=5" 
            />
            <VideoCard 
           title="Cold Ramen noodle "
           timeStamp="3 months ago"
           views="1.1M"
           channelImage="https://picsum.photos/200/300?random=6"
           channel="Strictly Dumpling"
           image="https://picsum.photos/200/300?random=7" 
            />
            <VideoCard 
           title="Soup Dumpling Simple Recipe"
           timeStamp="1 month ago"
           views="9M"
           channelImage="https://picsum.photos/200/300?random=84"
           channel="Strictly Dumpling"
           image="https://picsum.photos/200/300?random=94" 
            />
            <VideoCard 
           title="PERFECT Ramen Noodles in Osaka"
           timeStamp="5 years ago"
           views="6M"
           channelImage="https://picsum.photos/200/300?random=133"
           channel="Strictly Dumpling"
           image="https://picsum.photos/200/300?random=143" 
            />
            <VideoCard 
           title="How to make a simple website in 5 steps"
           timeStamp="2 years ago"
           views="2M"
           channelImage="https://picsum.photos/200/300?random=121"
           channel="CoolCoder"
           image= "https://picsum.photos/200/300?random=11"
            />
            <VideoCard 
           title="PERFECT Ramen Noodles Recipe 3"
           timeStamp="1 years ago"
           views="7M"
           channelImage="https://picsum.photos/200/300?random=101"
           channel="Strictly Dumpling"
           image="https://picsum.photos/200/300?random=111"
            />
            <VideoCard 
           title="PERFECT Ramen Noodles Recipe u will lovee"
           timeStamp="2 years ago"
           views="2.5M"
           channelImage="https://picsum.photos/200/300?random=21"
           channel="Strictly Dumpling"
           image="https://picsum.photos/200/300?random=33" 
            />
            <VideoCard 
           title="Tips to start coding"
           timeStamp="1 years ago"
           views="4M"
           channelImage="https://picsum.photos/200/300?random=122"
           channel="CoolCoder"
           image="https://picsum.photos/200/300?random=56" 
            />
            <VideoCard 
           title="Cold Ramen noodle "
           timeStamp="3 months ago"
           views="1.1M"
           channelImage="https://picsum.photos/200/300?random=6"
           channel="Strictly Dumpling"
           image="https://picsum.photos/200/300?random=89" 
            />
            <VideoCard 
           title="Soup Dumpling Simple Recipe"
           timeStamp="1 month ago"
           views="9M"
           channelImage="https://picsum.photos/200/300?random=8"
           channel="Strictly Dumpling"
           image="https://picsum.photos/200/300?random=45"/>
           

        </div>
        </div>
    )
}

export default RecommendedVideos;