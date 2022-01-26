import axios from "axios";
import { useEffect, useRef, useState } from "react";

const path = process.env.PUBLIC_URL;

function Community() {
    const frame = useRef(null);
    // let [posts, setPosts] = useState([]);
    const path = process.env.PUBLIC_URL;
    // const url = `${path}/db/community.json`;
    const input = useRef(null);
    const textarea = useRef(null);
    const updateInput = useRef(null);
    const updateTextarea = useRef(null);
    const showBox = useRef(null);


    const getLocalItems = () => {
        let data = localStorage.getItem('posts');
        if (data) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    const [posts, setPosts] = useState(getLocalItems);

    // const [posts, setPosts] = useState([
    //     { title: 'Hello0', content: 'Here comes description in detail.' },
    //     { title: 'Hello1', content: 'Here comes description in detail1.' },
    //     { title: 'Hello2', content: 'Here comes description in detail2.' },
    //     { title: 'Hello3', content: 'Here comes description in detail3.' }
    // ]);


    //기존 posts 배열에 새로운 post추가 함수
    const createPost = () => {
        if (!input.current.value || !textarea.current.value) {
            alert('제목과 본문을 입력하세요');
            return;
        }
        setPosts([
            {
                title: input.current.value,
                content: textarea.current.value
            }
            , ...posts
        ]);

        input.current.value = '';
        textarea.current.value = '';
    }

    //인수로 받은 순번의 포스트만 삭제하는 함수
    const deletePost = index => {
        setPosts(
            // filter는 기본 배열을 받아서 조건식을 추가해 특정 조건이 성립하는 데이터만 다시 새롭게 반환하는 함수
            posts.filter((post, postIndex) => postIndex !== index)
        )
        console.log(posts);
    }

    //출력모드에서 수정모드로 변경하는 함수
    const enableUpdate = index => {
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) post.enableUpdate = true;
                return post;
            })
        )
    }

    //수정모드에서 다시 출력모드로 변경하는 함수
    const disableUpdate = index => {
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) post.enableUpdate = false;
                return post;
            })
        )
    }

    //실제 포스트를 수정해서 업데이트하는 함수
    const updatePost = index => {
        if (!updateInput.current.value || !updateTextarea.current.value) {
            alert('수정할 제목과 본문을 모두 입력하세요');
            return;
        }
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) {
                    //const article = showBox.current.children[index];
                    //const input = article.querySelector('input');
                    //const textarea = article.querySelector('textarea');
                    post.title = updateInput.current.value;
                    post.content = updateTextarea.current.value;
                    post.enableUpdate = false;
                }
                return post;
            })
        )
    }


    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
        frame.current.classList.add('on');
    }, [posts]);


    return (
        <main className="community" ref={frame}>
            <div className="inner">
                <h1><a href="#">COMMUNITY</a></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elity cinseterd Doloremque amet recusandae enim voluptatem nemo culpa! Dolor fugit vel, itaque deserunt quae minus quibusdam unde sint initded </p>


                <section className="inputBox">
                    <input type="text" placeholder='Please enter the subject.' ref={input} /> <br />
                    <textarea cols="30" rows="5" placeholder='Please enter text.' ref={textarea}></textarea> <br />
                    <div className="btn"> 
                        <button onClick={() => {
                            input.current.value = '';
                            textarea.current.value = '';
                        }}>CANCLE</button>
                        <button onClick={createPost}>CREATE</button>
                    </div>
                </section>

                <section className="showBox" ref={showBox}>
                    {
                        posts.map((post, index) => {
                            return (
                                <article key={index}>
                                    {
                                        post.enableUpdate
                                            ?
                                            //수정모드
                                            <>
                                                <div className="post">
                                                    <input type="text" defaultValue={post.title} ref={updateInput} /><br />
                                                    <textarea defaultValue={post.content} ref={updateTextarea}></textarea>
                                                </div>

                                                <ul className="btns">
                                                    <li onClick={() => updatePost(index)}>ENTER</li>
                                                    <li onClick={() => disableUpdate(index)}>CANCEL</li>
                                                </ul>
                                            </>
                                            :
                                            //출력모드
                                            <>
                                                <div className="post">
                                                    <h2>{post.title}</h2>
                                                    <p>{post.content}</p>
                                                </div>

                                                <ul className="btns">
                                                    <li onClick={() => enableUpdate(index)}>EDIT</li>
                                                    <li onClick={() => deletePost(index)}>DEL</li>
                                                </ul>
                                            </>
                                    }
                                </article>
                            )
                        })
                    }
                </section>
                {/* <div className="tbox">
                    <strong>NUM</strong>
                    <h2>TITLE</h2>
                    <span>NAME</span>
                    <em>DATE</em>
                </div>

                {
                    posts.map((data, index) => {
                        return (
                            <article key={index}>
                                <div className="left">
                                    <strong>{data.num}</strong>
                                    <h2>{data.title}</h2>
                                    <span>{data.writer}</span>
                                    <em>{data.date}</em>
                                </div>
                            </article>
                        )
                    })
                }

                <div className="pagination">
                    <p className="numbers">
                        <button className="on">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                    </p>
                </div> */}

                <div className="right">
                    <img className="pic1" src={path + "/img/commu_pic1.jpeg"} />

                    <img className="pic2" src={path + "/img/commu_pic9.jpeg"} />

                </div>

                <div className="banner">
                    <div className="b_box">
                        <img className="b_pic" src={path + "/img/bg.jpg"} />
                        <h2>
                            The opening of the flagship store is meaningful in that it serves as an important opportunity to deepen the link between <br />Louis Vuitton and Korean culture</h2>
                    </div>

                </div>

                <div className="news_box">
                    <div className="n_box1">
                        <img className="n_pic1" src={path + "/img/news2.jpeg"} />
                        <div className="txt_box">
                            <h2>Louis Vuitton Maison Seoul: Open</h2>
                            <p>
                                The entire floor of the Louis Vuitton Maison Seoul is connected by a “floating” staircase, and all Louis Vuitton collections are presented in a variety of private spaces.<br />

                                In Louis Vuitton Maison Seoul, works of art and archives reflecting the history of Louis Vuitton are installed throughout, providing a special shopping experience.<br />

                                On the 4th floor, a special exhibition by Alberto Giacometti is held to commemorate the opening of Espace Louis Vuitton Seoul, the world's fifth opening. At the opening exhibition of Espas Louis Vuitton Seoul, eight representative sculptures of Giacometti, including Homme qui chavire (1950) and Grande Femme II [Tall Woman II] (1960), are on display.
                            </p>
                            <button>MORE</button>
                        </div>

                    </div>
                    <div className="n_box2">
                        <img className="n_pic2" src={path + "/img/news3.jpeg"} />
                        <div className="txt_box2">
                            <h2>Louis Vuitton Maison Seoul presented by Frank Gehry</h2>
                            <p>
                                Frank Gehry's Louis Vuitton Maison Seoul design was inspired by the elegant movement of a traditional crane dance that embodies the shape of a crane with Korean history.</p>
                            <button>MORE</button>
                        </div>
                    </div>
                    <div className="n_box3">
                        <img className="n_pic3" src={path + "/img/news1.jpeg"} />
                        <div className="txt_box3">
                            <h2>Louis Vuitton interior designed by Peter Marino</h2>
                            <p>
                                Marino added, “The stone material used in the interior flows from the outside, and the dynamism of the huge square contrasts sharply with the baroque glass windows of the building.”</p>
                            <button>MORE</button>
                        </div>
                    </div>
                </div>

                <div className="opening">
                    <div className="open">
                        <img className="open_box" src={path + "/img/Opening2.jpeg"} />
                    </div>
                    <div className="open_txt">
                        <h2>Louis Vuitton New Bond Street</h2>
                        <p>On the evening of 23rd October, Louis Vuitton held an event to celebrate the grand reopening of the London Maison. Louis Vuitton Chairman and Chief Executive Officer Michael Burke welcomed the Maison's muse, friends and celebrity guests at the unveiling of the remodeled Louis Vuitton New Bond Street store.<br />
                            A special cocktail dinner party will include Kylie Minogue, Gal Gadot, Shailene Woodley, Riley Keough, Jason Momoa and Noel Gallagher, among many others. Noel Gallagher, Naomi Scott, Isabelle Huppert, Stacy Martin, Mark Ronson, Raffey Cassidy, Doutzen Kroes, Maisie Williams Williams, Alexa Chung, Poppy Delevingne, Lady Amelia Windsor, Sabine Getty, Yasmin Le Bon and Amber Le Bon and others were present.</p>
                        <button>MORE</button>
                    </div>
                </div>

                <div className="newsletter">
                    <img className="letter" src={path + "/img/newsletter.jpeg"} />
                    <div className="letter_txt">
                        <span>NEWSLETTER</span>
                        <h1>THE LATEST NEWS FROM THE<br />MAGAZINE</h1>

                        <button>Subscribe</button>
                        <p>Be the first to know. Follow us on</p>
                    </div>
                </div>

            </div>
        </main>
    )
}
export default Community;