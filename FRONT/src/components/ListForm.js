import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/list_form.css";

const ListForm = () => {
  const listForm = useSelector((state) => state.listForm.list);
  return (
    <div>
      <table>
        <thead>
          <tr className="board-thead">
            <th width="50">번호</th>
            <th>제목</th>
            <th width="100">작성자</th>
            <th width="100">작성일</th>
          </tr>
        </thead>
        {/* 반복문 돌면서 그려주게 만드는 것! */}
        {listForm.map((el, index) => {
          console.log(index);
          // 태그를 반환해준다 (나중에 리스트를 컴포넌트로 만들어서 그려주면 훨씬 깔끔하다))
          return (
            <tbody key={index}>
              <tr className="board-tbody">
                <td className="board-num">{index + 1}</td>
                <td className="board-title">
                  <Link to={"/board/detail/" + el.num}>{el.title}</Link>
                </td>
                <td className="board-name">{el.userName}</td>
                <td className="board-date">{el.registDate}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ListForm;
