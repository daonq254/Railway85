import "./App.css";
import React from "react";

function App() {
  // Logic
  // Logic
  // Obj
  // let divStyle = {
  //   color: "red",
  //   backgroundColor: "blue",
  //   width: "200px",
  //   height: "200px",
  // };
  // Viết hàm xử lý sự kiện khi người dùng nhấn nút Click handleClick
  // let handleClick = () => {
  //   //
  //   alert("Hello VTI");
  //   console.log("CLICK CLICK !!!");
  // };
  //
  return (
    <div className="container">
      {/* Menu */}
      <div>
        <div style={{ backgroundColor: "blue" }}>Menu1</div>
        <div style={{ backgroundColor: "black" }}>Menu2</div>
      </div>
      {/* Banner */}
      <div style={{ backgroundColor: "orange" }}>Banner</div>
      {/* Content */}
      <div>
        <div style={{ backgroundColor: "blueviolet" }}>Content1</div>
        <div style={{ backgroundColor: "green" }}>Content2</div>
        <div style={{ backgroundColor: "yellow" }}>Content3</div>
      </div>
    </div>
    // <div style={divStyle}>
    // <>
    //   <div>
    //     <h1>Hello VTI</h1>
    //     <button type="button" class="btn btn-warning">
    //       Click 1
    //     </button>

    //     <button type="button" class="btn btn-info">
    //       Click 2
    //     </button>
    //   </div>

    //   <div>
    //     <table class="table table-hover">
    //       <thead>
    //         <tr>
    //           <th>ID</th>
    //           <th>Username</th>
    //           <th>Email</th>
    //           <th>Fullname</th>
    //           <th>Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>1</td>
    //           <td>Daonq1</td>
    //           <td>daonq1@example.com</td>
    //           <td>Nguyễn Đạo 1</td>

    //           <button type="button" class="btn btn-danger">
    //             Delete
    //           </button>

    //           <button type="button" class="btn btn-warning">
    //             Edit
    //           </button>
    //         </tr>
    //         <tr>
    //           <td>2</td>
    //           <td>Daonq2</td>
    //           <td>daonq2@example.com</td>
    //           <td>Nguyễn Đạo 2</td>
    //           <button type="button" class="btn btn-danger">
    //             Delete
    //           </button>

    //           <button type="button" class="btn btn-warning">
    //             Edit
    //           </button>
    //         </tr>
    //         <tr>
    //           <td>3</td>
    //           <td>Daonq3</td>
    //           <td>daonq3@example.com</td>
    //           <td>Nguyễn Đạo 3</td>
    //           <button type="button" class="btn btn-danger">
    //             Delete
    //           </button>

    //           <button type="button" class="btn btn-warning">
    //             Edit
    //           </button>
    //         </tr>
    //         <tr>
    //           <td>4</td>
    //           <td>Daonq4</td>
    //           <td>daonq4@example.com</td>
    //           <td>Nguyễn Đạo 4</td>
    //           <button type="button" class="btn btn-danger">
    //             Delete
    //           </button>

    //           <button type="button" class="btn btn-warning">
    //             Edit
    //           </button>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </>
    /* <button
        type="button"
        onClick={handleClick}
        style={{ backgroundColor: "red" }}
      >
        Click!!
      </button> */
  );

  // return React.createElement("div", null, "Hello DAONQ");   // <div>Hello DAONQ</div>
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Hello VTI")
  // );
  // JSX
  // return (
  //   <>
  //     {/* Content 1 */}
  //     <div>
  //       <h1 className="App1">HELLO VTI</h1>
  //       <h3>VTI ACADEMY</h3>
  //     </div>
  //     {/* Content 2 */}
  //     <div>
  //       <h5>DAONQ VTI</h5>
  //     </div>
  //   </>
  // );
}

export default App;
