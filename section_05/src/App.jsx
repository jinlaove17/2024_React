import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Bulb from "./components/Bulb";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

function App() {
  const buttonProps = {
    text: "카페",
    color: "blue",
  };

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Button
        text={"메일"}
        color={"red"}
        a={1}
      />
      <Button {...buttonProps} />
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header />
      </Button>
      <Bulb />
      <Counter />
      <Register />
      <HookExam />
    </>
  );
}

export default App;
