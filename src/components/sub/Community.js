import axios from "axios";
import {useEffect, useState} from "react";

function Community(){
    let [posts, setPosts] = useState([]);
    const path = process.env.PUBLIC_URL;
    const url = `${path}/db/community.json`;

    useEffect(()=>{
        axios
        .get(url)
        .then(json=>{
            console.log(json.data.data);
            setPosts(json.data.data);
        })
    },[]);

    return(
        <main className="community">
            <div className="inner">
                <h1><a href="#">COMMUNITY</a></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elity cinseterd Doloremque amet recusandae enim voluptatem nemo culpa! Dolor fugit vel, itaque deserunt quae minus quibusdam unde sint initded </p>
                {
                    posts.map((data,index)=>{
                        return(
                            <article key={index}>
                                <h1>{data.title}</h1>
                                <span>{data.writer}</span>
                                <em>{data.date}</em>
                            </article>
                        )
                    })
                }
    
            </div>
        </main>
    )
}
export default Community;