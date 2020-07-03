import React, {useState} from "react";
import auxiliary from "./auxiliary.module.css";
import classname from "classnames";

const Paginator = ({totalUsers, pageSize, currentPage, portionSize, onChangedPageNumber}) => {
    let pagesCount = Math.ceil(totalUsers / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize;
    let rightPortionPageNumber = (portionNumber * portionSize);

    return (
        <div className={auxiliary.paginator}>
            {portionNumber > 1
            && <button className={auxiliary.but}
                       onClick={() => {
                           setPortionNumber(portionNumber - 1)
                       }}
            >Prev</button>
            }
            {pages.filter(p => p > leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
                return (
                    <span key={p} className={classname({[auxiliary.selectPage]: currentPage === p},
                        auxiliary.pageNumber)}
                          onClick={() => {
                              onChangedPageNumber(p);
                          }}
                    >{p}</span>
                )
            })}
            {portionCount > portionNumber
            && <button className={auxiliary.but}
                       onClick={() => {
                           setPortionNumber(portionNumber + 1)
                       }}
            >Next</button>
            }

        </div>
    )
};
export default Paginator;


