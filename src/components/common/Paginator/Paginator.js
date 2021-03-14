import React, { useState } from 'react';
import styles from './Paginator.module.css';
import сn from 'classnames';

let Paginator = ({ totalItemsCount, currentPage, pageSize, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (<div className={styles.paginator}>
        {portionNumber > 1 &&
            <button className={styles.buttonLeft} onClick={() => { setPortionNumber(portionNumber - 1) }}>&laquo;</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={сn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p);
                        }}> {p}</span>
                })}
        {portionCount > portionNumber &&
            <button className={styles.buttonRight} onClick={() => { setPortionNumber(portionNumber + 1) }}>&raquo;</button>}
    </div>
    );
}

export default Paginator; 