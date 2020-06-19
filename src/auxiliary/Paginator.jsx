import React from "react";
import U from "./../Page/Users/Users.module.css";

const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
            <div className={U.numberPage}> {pages.map(p => {
                return (
                    <span key={p} className={props.currentPage === p ? U.selectPage : undefined}
                          onClick={() => {
                              props.onChangedPageNumber(p)
                          }}
                    >{p + ', '}</span>
                )
            })}
            </div>
    )
};

export default Paginator;