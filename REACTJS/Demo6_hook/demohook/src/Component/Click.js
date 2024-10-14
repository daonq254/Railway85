import React, { useEffect, useState } from "react";

function Click(props) {
  //Khai báo State count1 để lưu trữ số lần người dùng Click vào nút Click 1
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Hàm xử lý sự kiện khi nhấn nút Click 1
  let handleClick1 = () => {
    setCount1(count1 + 1); // Thay đổi giá trị của State count1
  };

  let handleClick2 = () => {
    setCount2(count2 + 1); // Thay đổi giá trị của State count1
  };

  // Khai báo useEffect
  //   useEffect(() => {
  //     console.log("Đoạn Code 1 được gọi!!");
  //   });

  useEffect(() => {
    console.log("Đoạn Code 1 được gọi!!");
  }, [count1, count2]);

  useEffect(() => {
    console.log("Đoạn Code 2 được gọi!!");
  }, [count2]);

  useEffect(() => {
    console.log("Đoạn Code 3 được gọi!!");
  }, []);

  //

  useEffect(() => {
    //    Logic
    return () => {
      console.log("Đoạn Code 4 được gọi!!");
    };
  });
  //
  return (
    <>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button type="button" className="btn btn-info" onClick={handleClick1}>
            Click 1
          </button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h4>Bạn đã click {count1} lần vào nút Click 1</h4>
        </div>
      </div>
      {/*  */}
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button type="button" className="btn btn-info" onClick={handleClick2}>
            Click 2
          </button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h4>Bạn đã click {count2} lần vào nút Click 2</h4>
        </div>
      </div>
    </>
  );
}

export default Click;
