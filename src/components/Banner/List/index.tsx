import styles from '../styles.module.css';

function List({option}: {option: string}) {
    return(
        <li className={styles["hero__nav__list-item"]}>
            <a className={styles["hero__nav__list__item-link"]} href="">{option}</a>
        </li>
    );
};

export default List;