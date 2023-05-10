import React, { useEffect, useRef, useState } from "react";
import Avatar from "../components/Avatar";
import BotResponse from "../components/BotResponse";
import Error from "../components/Error";
import LandingPage from "../components/IntroSection";
import Loading from "../components/Loading";
import NavContent from "../components/NavContent";
import SvgComponent from "../components/SvgComponent";
import ScrollToBottomButton from "../components/ScrollDownButton";
import { MdSend } from "react-icons/md";
const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [err, setErr] = useState(false);
  const [responseFromAPI, setReponseFromAPI] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  

  const chatLogRef = useRef(null);
  function autoResizeInput(textarea) {
    const initialHeight = 20; // Set the initial height of the textarea
    const maxHeight = 200; // Set a maximum height for the textarea
  
    if (textarea.scrollHeight > textarea.clientHeight) {
      textarea.style.height = "auto"; // Set the height to auto to recalculate the scroll height
  
      // Calculate the new height based on the content
      let newHeight = Math.min(textarea.scrollHeight, maxHeight);
      newHeight = Math.max(newHeight, initialHeight);
  
      if (textarea.value.split('\n').length > 1) { // Only resize if there is more than one line of text
        textarea.style.height = newHeight + "px";
        if (newHeight === maxHeight) {
          textarea.style.overflowY = "scroll";
        } else {
          textarea.style.overflowY = "hidden";
        }
      }
    } else if (textarea.scrollHeight < textarea.clientHeight && textarea.clientHeight > initialHeight) {
      textarea.style.height = textarea.scrollHeight + "px";
    }
    // resize back to the original height in case the user deletes all the text
    else {
      textarea.style.height = initialHeight + "px";
    }
  }
  
  
  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
      e.target.style.height = "20px";
    }
  };
  
  document.addEventListener('keydown', handleKeyDown);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!responseFromAPI) {
      if (inputPrompt.trim() !== "") {
        // Set responseFromAPI to true before making the fetch request
        setReponseFromAPI(true);
        setChatLog([...chatLog, { chatPrompt: inputPrompt }]);
        callAPI();

        // hide the keyboard in mobile devices
        e.target.querySelector("input").blur();
      }

      async function callAPI() {
        try {
          const response = await fetch("https://127.0.0.0:4000", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: inputPrompt }),
          });
           const data = response.body.botresponse;
            setChatLog([
            ...chatLog,
            {
              chatPrompt: inputPrompt,
              botMessage: data,
            },
          ]);
          localStorage.setItem("chatLog", JSON.stringify(chatLog));
          console.log(chatLog)
          setErr(false);
        } catch (err) {
          setErr(err);
          console.log(err);
        }
        //  Set responseFromAPI back to false after the fetch request is complete
        setReponseFromAPI(false);
      }
    }

    setInputPrompt("");
  };

  
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }

    return () => {};
  }, []);

  useEffect((chatLog) => {
    if (selectedCard) {
      setChatLog([
        ...chatLog,
        {
          chatPrompt: "you are an expert in" + selectedCard,
          botMessage: "You are using a model fine tuned on" + selectedCard,
        },
      ]);
    }
  }, [selectedCard]);

  useEffect(() => {
    // Load chatLog from localStorage
    const savedChatLog = localStorage.getItem("chatLog");
    if (savedChatLog) {
      setChatLog(JSON.parse(savedChatLog));
    }
  }, []);
/*
  useEffect(() => {
    // Scroll to the latest message in chatLog
    if (chatLogRef.current) {
      chatLogRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [chatLog]);

  useEffect(() => {
  if (showMenu) {
    // Load chatLog from localStorage
    const savedChatLog = localStorage.getItem("chatLog");
    if (savedChatLog) {
      setChatLog(JSON.parse(savedChatLog));
    }
  }
}, [showMenu]);


*/
  return (
    <>
      <header>
        <div className="menu">
          <button onClick={() => setShowMenu(true)}>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#d9d9e3"
              strokeLinecap="round"
            >
              <path d="M21 18H3M21 12H3M21 6H3" />
            </svg>
          </button>
        </div>
        <h1>Scholai</h1>
      </header>

      {showMenu && (
        <nav>
          <div className="navItems">
            <NavContent
              chatLog={chatLog}
              setChatLog={setChatLog}
              setShowMenu={setShowMenu}
            />

          </div>
          <div className="navCloseIcon">
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              xmlSpace="preserve"
              stroke="#fff"
              width={42}
              height={42}
              onClick={() => setShowMenu(false)}
            >
              <path d="m53.691 50.609 13.467-13.467a2 2 0 1 0-2.828-2.828L50.863 47.781 37.398 34.314a2 2 0 1 0-2.828 2.828l13.465 13.467-14.293 14.293a2 2 0 1 0 2.828 2.828l14.293-14.293L65.156 67.73c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L53.691 50.609z" />
            </svg>
          </div>
        </nav>
      )}

      <aside className="sideMenu">
        <NavContent
          chatLog={chatLog}
          setChatLog={setChatLog}
          setShowMenu={setShowMenu}
        />
      </aside>

    <section className="chatBox">
  <div className="chatLogWrapper">
    {chatLog.length === 0 && (
      <LandingPage onSelectCard={(cardName) => setSelectedCard(cardName)} />
    )}
    {chatLog.map((chat, idx) => (
      <div
        className="chatLog"
        key={idx}
        ref={chatLogRef}
        id={`navPrompt-${chat.chatPrompt.replace(/[^a-zA-Z0-9]/g, "-")}`}
      >
        <div className="chatPromptMainContainer">
          <div className="chatPromptWrapper">
            <Avatar bg="#5437DB" className="userSVG">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={1.9}
                viewBox="0 0 24 24"
                // strokeLinecap="round"
                className="h-6 w-6"
                height={40}
                width={40}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </Avatar>
            <div id="chatPrompt">{chat.chatPrompt}</div>
          </div>
          <ScrollToBottomButton className="scroll-down-button" />
        </div>

        <div className="botMessageMainContainer">
          <div className="botMessageWrapper">
            <Avatar bg="#11a27f" className="openaiSVG">
              <SvgComponent w={41} h={41} />
            </Avatar>
            {chat.botMessage ? (
              <div id="botMessage">
                <BotResponse
                  response={chat.botMessage}
                  chatLogRef={chatLogRef}
                />
              </div>
            ) : err ? (
              <Error err={err} />
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    ))}
  </div>

  <form onSubmit={handleSubmit}>
    <div className="inputPromptWrapper">
      <textarea
        name="inputPrompt"
        id=""
        className="inputPrompttTextarea"
        type="text"
        rows="1"
        columns="14"
        scrollIntoView={true}
        scrollHeight={100}
        autoComplete="off"
        value={inputPrompt}
        onChange={(e) => {
          setInputPrompt(e.target.value);
        }}
        onInput={(e) => autoResizeInput(e.target)}
        autoFocus
        placeholder="Enter your message Here"
      ></textarea>
      <button aria-label="form submit" type="submit" className="submitButton">
        <MdSend></MdSend>
      </button>
    </div>
  </form>
</section>
    </>
  );
};

export default Home;
