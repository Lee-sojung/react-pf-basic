import { useEffect, useRef, useState } from "react";

function Join() {
    const frame = useRef(null);
    const initVal = {
        userid: "",
        pwd1: "",
        pwd2: "",
        email: "",
        comments: "",
        gender: "",
        interests: "",
        edu: ""
    }
    const path = process.env.PUBLIC_URL;
    const [val, setVal] = useState(initVal);
    const [err, setErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false);


    const handleChange = e => {
        const { name, value } = e.target;
        setVal({ ...val, [name]: value });
    }

    const handleCheck = e => {
        const { name } = e.target;
        const isCheck = e.target.checked;
        setVal({ ...val, [name]: isCheck });
    }

    const handleSelect = e => {
        const { name } = e.target;
        const isSelected = e.target.options[e.target.selectedIndex].value;
        setVal({ ...val, [name]: isSelected });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmit(true);
        setErr(check(val));
        console.log(val);
    }

    const check = val => {
        let errs = {};
        let eng = /[a-zA-Z]/;
        let num = /[0-9]/;
        let spc = /[!@#$%^&*]/;


        if (!val.userid || val.userid.length < 5) errs.userid = '아이디 5글자 이상 입력';

        if (!val.pwd1 || val.pwd1.length < 5 || !eng.test(val.pwd1) || !num.test(val.pwd1) || !spc.test(val.pwd1)) {
            errs.pwd1 = '비밀번호는 5글자 이상, 문자,숫자,특수문자를 모두 포함';
        }

        if (val.pwd1 !== val.pwd2) {
            errs.pwd2 = '2개의 비밀번호를 동일하게 입력';
        }

        if (!val.email || val.email.length < 8 || !/@/.test(val.email)) {
            errs.email = '이메일주소를 8글자이상 입력';
        }

        if (!val.comments || val.comments.length < 10) {
            errs.comments = '남기는말을 10글자 이상 입력';
        }
        if (!val.gender) {
            errs.gender = '성별을 선택하세요'
        }

        if (!val.interests) {
            errs.interests = '관심사를 하나 이상 선택하세요'
        }

        if (!val.edu) {
            errs.edu = '학력을 선택해 주세요'
        }
        return errs;
    }




    useEffect(() => {
        frame.current.classList.add('on');
        console.log(err);
        const len = Object.keys(err).length;
        if (len === 0 && isSubmit) {
            console.log('인증성공')
            setSuccess(true);

        } else {
            console.log('인증실패');
            setSuccess(false);
        }
    }, [err]);

    return (
        <main className="join" ref={frame}>
            <div className="inner">
                <h1><a href="#">JOIN</a></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elity cinseterd Doloremque amet recusandae enim voluptatem nemo culpa! Dolor fugit vel, itaque deserunt quae minus quibusdam unde sint initded </p>

                {success ? <div>회원가입을 축하합니다.</div> : null}

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className="h">회원가입 입력 폼 양식</legend>

                        <h2><label for="terms">Terms & Policy</label></h2>
                        <textarea className="agreement" name="terms" id="terms" cols="30" rows="10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero omnis cupiditate voluptatem quo id assumenda atque, repellat eius officia quos ipsa deserunt. Natus dolorem saepe dicta doloremque mollitia voluptates beatae velit, nihil praesentium, eius veniam obcaecati necessitatibus. Ullam minima recusandae quos omnis quae! Doloribus, dolorem. Iste, hic voluptates! Voluptatem quas vero delectus laudantium blanditiis commodi veniam eos explicabo perspiciatis rerum quasi aspernatur quisquam ratione enim et quos deserunt voluptate aperiam quod, eaque dolorum. Aliquam exercitationem fugit enim quaerat. Nobis nemo eos ratione omnis assumenda ipsa similique hic, illum aliquam commodi veritatis autem dolorem iusto! Rem, hic. Consequatur itaque dicta molestiae quidem rerum id similique autem possimus necessitatibus dolor assumenda libero, eaque deleniti dolores mollitia. Dicta eius perferendis dolorem dolor odio ipsam qui in quos accusantium animi quo maxime, vitae a? Quae minus vero deserunt iusto atque impedit, aperiam facilis explicabo, nisi natus quasi tempora cumque? Aliquid provident molestiae accusamus assumenda saepe, fuga minus ea architecto soluta a, voluptatibus veritatis quis repudiandae officia mollitia voluptatum ipsum ex quaerat eum corporis maiores. Suscipit, consequuntur, iste sapiente eligendi culpa exercitationem et dolorum accusantium repellendus fugiat facere explicabo dicta atque ab. Eum sunt quam atque voluptatum dolorum ducimus, vitae sed beatae porro voluptates amet!architecto soluta a, voluptatibus veritatis quis repudiandae officia mollitia voluptatum ipsum ex quaerat eum corporis maiores. Suscipit, consequuntur, iste sapiente eligendi culpa exercitationem et dolorum accusantium repellendus fugiat facere explicabo dicta atque ab. Eum sunt quam atque voluptatum dolorum ducimus, vitae sed beatae porro voluptates amet!repudiandae officia mollitia voluptatum ipsum ex quaerat eum corporis maiores. Suscipit, consequuntur, iste sapiente eligendi culpa exercitationem et dolorum accusantium repellendus fugiat facere explicabo dicta atque ab. Eum sunt quam atque voluptatum dolorum ducimus, vitae sed beatae porro voluptates amet!architecto soluta a, voluptatibus veritatis quis repudiandae officia mollitia voluptatum ipsum ex quaerat eum corporis maiores. Suscipit, consequuntur, iste sapiente eligendi culpa exercitationem et dolorum accusantium repellendus fugiat facere explicabo dicta atque ab. Eum sunt quam atque voluptatum dolorum ducimus, vitae sed beatae porro voluptates amet!
                            </textarea>

                            <div className="agree">
                                <input type="checkbox" name="agree" id="agree"/>
                                <label htmlFor="agree">I agree to the above</label>
                            </div>

                        <table>
                            <caption className="h">회원가입 입력</caption>
                            <tbody>
                                {/*user id*/}
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="userid">USER ID</label>
                                    </th>
                                    <td>
                                        <input
                                            type="text"
                                            id="userid"
                                            name="userid"
                                            placeholder="id를 입력하세요"
                                            // value={val.userid}
                                            onChange={handleChange}
                                        />
                                        <span className="err">{err.userid}</span>
                                    </td>
                                </tr>
                                {/*password*/}
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="password">PASSWORD</label>
                                    </th>
                                    <td>
                                        <input
                                            type="password"
                                            id="pwd1"
                                            name="pwd1"
                                            placeholder="비밀번호를 입력하세요"
                                            // value={val.pwd1}
                                            onChange={handleChange}
                                        />
                                        <span className="err">{err.pwd1}</span>
                                    </td>
                                </tr>
                                {/*re password*/}
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="pwd2">RE-PASSWORD</label>
                                    </th>
                                    <td>
                                        <input
                                            type="password"
                                            id="pwd2"
                                            name="pwd2"
                                            placeholder="비밀번호를 재 입력하세요"
                                            // value={val.pwd2}
                                            onChange={handleChange}
                                        />
                                        <span className="err">{err.pwd2}</span>
                                    </td>
                                </tr>
                                {/*email*/}
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="email">E-MAIL</label>
                                    </th>
                                    <td>
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="email을 입력하세요"
                                            // value={val.email}
                                            onChange={handleChange}
                                        />
                                        <span className="err">{err.email}</span>
                                    </td>
                                </tr>
                                {/*comments*/}
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="pwd2">COMMENTS</label>
                                    </th>
                                    <td>
                                        <textarea
                                            col='30'
                                            row='10'
                                            type="password"
                                            id="comments"
                                            name="comments"
                                            placeholder="코맨트을 적어주세요"
                                            // value={val.comments}
                                            onChange={handleChange}
                                        ></textarea>
                                        <span className="err">{err.comments}</span>
                                    </td>
                                </tr>
                                {/*gender*/}
                                <tr>
                                    <th scope="row">
                                        GENDER
                                    </th>
                                    <td>
                                        <label htmlFor="male">MALE</label>
                                        <input
                                            type="radio"
                                            id="male"
                                            name="gender"
                                            onChange={handleCheck}
                                        />

                                        <label htmlFor="female">FEMALE</label>
                                        <input
                                            type="radio"
                                            id="female"
                                            name="gender"
                                            onChange={handleCheck}
                                        />
                                        <span className="err">{err.gender}</span>
                                    </td>
                                </tr>

                                {/*interests*/}
                                <tr>
                                    <th scope="row">
                                        INTERESTS
                                    </th>
                                    <td>
                                        <label htmlFor="male">SPORTS</label>
                                        <input
                                            type="checkbox"
                                            id="sports"
                                            name="interests"
                                            onChange={handleCheck}
                                        />

                                        <label htmlFor="female">MUSIC</label>
                                        <input
                                            type="checkbox"
                                            id="music"
                                            name="interests"
                                            onChange={handleCheck}
                                        />


                                        <label htmlFor="female">GAME</label>
                                        <input
                                            type="checkbox"
                                            id="game"
                                            name="interests"
                                            onChange={handleCheck}
                                        />

                                        <span className="err">{err.interests}</span>
                                    </td>
                                </tr>

                                {/*education*/}
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="edu">EDUCATION</label>
                                    </th>
                                    <td>
                                        <select name="edu" id="edu" onChange={handleSelect}>
                                            <option value="">학력을 선택하세요</option>
                                            <option value="elementqary school">초등학교 졸업</option>
                                            <option value="middle school">중학교 졸업</option>
                                            <option value="high school">고등학교 졸업</option>
                                            <option value="college">대학교 졸업</option>
                                        </select>
                                        <span className="err">{err.edu}</span>
                                    </td>
                                </tr>

                                {/*btn set*/}
                                <tr>
                                    <th colSpan='2' className="btnSet">
                                        <input type="reset" value='CANCEL' />
                                        <input type="submit" value='SEND' />
                                    </th>
                                </tr>

                            </tbody>
                        </table>

                        <div className="join_r">
                            <div className="join_box">
                            {/* <img className="join_pic" src={path + "/img/backg.jpeg"} /> */}
                                <h1>A Variety of <br/>Louis Vuitton services</h1>
                            </div>
                            <div className="join_box">
                                <h1>Edit your personal information</h1>
                            </div>
                            <div className="join_box">
                                <h1>Louis Vuitton digital information magazine reception</h1>
                            </div>
                        </div>

                    </fieldset>
                </form>
            </div>
        </main>
    )
}

export default Join;