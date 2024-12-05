import React, { useState, useEffect } from "react";
import Nav from "./GameNav";
import { Input } from "react-rainbow-components";
import { Select } from "react-rainbow-components";
import Data from "../../data/project.json";
import { Spinner, Modal } from "react-bootstrap";

function VotingSystem() {
  const [serialNumber, setSerialNumber] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState("");
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const options = [
      { label: "請選擇組別", value: "" },
      ...Data.map((item) => ({
        label: item.title,
        value: item.title,
      })),
    ];
    setOptions(options);
  }, []);

  const validateSerialNumber = (number) => /^[A-Z0-9]{8}$/.test(number);

  const handleSubmit = async () => {
    if (!validateSerialNumber(serialNumber)) {
      setError("序號無效，請輸入正確格式的 8 位亂碼（如 ABCD1234）。");
      alert("序號無效，請輸入正確格式的 8 位亂碼（如 ABCD1234）。");
      return;
    }

    if (!question1 || !question2 || !question3) {
      setError("請回答所有問題後再提交。");
      alert("請回答所有問題後再提交。");
      return;
    }

    const voteData = {
      serialNumber,
      question1,
      question2,
      question3,
    };

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://backend-vote.onrender.com/api/submit-vote",
        //"http://127.0.0.1:3000/api/submit-vote",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(voteData),
        }
      );

      const result = await response.json();
      if (result.success) {
        setHasVoted(true);
        setError("");
        setSerialNumber("");
        setQuestion1("");
        setQuestion2("");
        setQuestion3("");
        alert("感謝您的投票！");
      } else if (result.message === "序號已投過票。") {
        setError(result.message);
        setSerialNumber("");
        alert("此序號已經投過票。");
      } else if (result.message === "序號無效。") {
        setError(result.message);
        alert("序號無效。");
      } else {
        setError(result.message || "提交失敗，請稍後再試。");
        console.log(result.message);
      }
    } catch (err) {
      setError("提交失敗，請檢查網路連線並稍後再試。");
      alert("提交失敗，請檢查網路連線並稍後再試。");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const backgroundImageUrl = "url(/introBg.webp)";
  const backgroundStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.5,
  };

  return (
    <div className="h-screen">
      <Nav />
      <div className="flex justify-center">
        <h2 className="text-center p-3">投下你最愛的組別</h2>
        <img src="/icon/2-05.png" alt="vote" className="w-16" />
      </div>
      <Modal show={isLoading} centered backdrop="static" keyboard={false}>
        <Modal.Body className="text-center py-4">
          <Spinner animation="border" role="status" variant="primary" className="mb-2" />
          <p className="mb-0">處理中，請稍候...</p>
        </Modal.Body>
      </Modal>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="space-y-6 w-10/12 mx-auto md:w-1/2"
      >
        <div style={backgroundStyle}></div>
        <div className="flex space-x-4">
          <div className="">
            <span className="font-semibold opacity-50">step1</span>
            <div className="relative left-1/2 top-3 w-[2px] h-16 bg-black opacity-40"></div>
          </div>
          <div className="space-y-2">
            <label htmlFor="serialNumber" className="text-base font-bold">
              請輸入你的序號（入場左下角）
            </label>
            <Input
              className="rainbow-p-around_medium"
              style={{ width: "90%" }}
              placeholder="xxxxxxxx"
              valueAlignment="center"
              minLength={8}
              maxLength={8}
              step={1}
              required
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value.toUpperCase())}
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="">
            <span className="font-semibold opacity-50">step2</span>
          </div>
          <div className="flex-grow space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="favoriteWork" className="text-base font-bold">
                1. 你最喜歡哪一組的作品：
              </label>
              <Select
                id="favoriteWork"
                required
                options={options}
                style={{ width: "90%" }}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                value={question1}
                onChange={(e) => setQuestion1(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="bestPresentation" className="text-base font-bold">
                2. 哪一組的作品呈現你最喜歡：
              </label>
              <Select
                id="bestPresentation"
                required
                options={options}
                style={{ width: "90%" }}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                value={question2}
                onChange={(e) => setQuestion2(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="mostCreative" className="text-base font-bold">
                3. 你覺得哪一組的作品最有創意：
              </label>
              <Select
                id="mostCreative"
                required
                options={options}
                style={{ width: "90%" }}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                value={question3}
                onChange={(e) => setQuestion3(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="w-full flex justify-center mt-16">
        <button
          onClick={handleSubmit}
          className="bg-nav-blue text-white p-2.5 rounded-md mx-auto"
        >
          提交投票
        </button>
      </div>
    </div>
  );
}

export default VotingSystem;
