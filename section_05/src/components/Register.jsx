import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  //   const [name, setName] = useState("초기 이름");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeBirth = (e) => {
  //     setBirth(e.target.value);
  //   };

  //   const onChangeCountry = (e) => {
  //     setCountry(e.target.value);
  //   };

  //   const onChangeBio = (e) => {
  //     setBio(e.target.value);
  //   };
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef(null);

  console.log("Register Rendering: ", countRef.current);

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    console.log(++countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeName = (e) => {
    setInput({
      ...input,
      name: e.target.value,
    });
  };

  const onChangeBirth = (e) => {
    setInput({
      ...input,
      birth: e.target.value,
    });
  };

  const onChangeCountry = (e) => {
    setInput({
      ...input,
      country: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    setInput({
      ...input,
      bio: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          console.log(++countRef.current);
        }}
      >
        ref + 1
      </button> */}

      <div>
        <input
          ref={inputRef}
          type="text"
          name="name"
          value={input.name}
          placeholder="이름"
          onChange={onChange}
        />
        {input.name}
      </div>
      <div>
        <input
          type="date"
          name="birth"
          value={input.birth}
          onChange={onChange}
        />
        {input.birth}
      </div>
      <div>
        <select
          name="country"
          value={input.country}
          onChange={onChange}
        >
          <option value=""></option>
          <option value="KOR">한국</option>
          <option value="USA">미국</option>
          <option value="JPN">일본</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
        ></textarea>
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
