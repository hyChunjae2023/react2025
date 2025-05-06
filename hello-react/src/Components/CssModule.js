import styles from '../css/CssModule.module.css';
const CssModule = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                안녕하세요. 저는 <span className="something">CSS Module!</span> 입니다.
            </div>
            <div className={`${styles.wrapper} ${styles.inverted}`}>
                안녕하세요. 저는 <span className="something">CSS Module!</span> 입니다.
            </div>
            <div className={[styles.wrapper, styles.inverted].join(' ')}>
                안녕하세요. 저는 <span className="something">CSS Module!</span> 입니다.
            </div>
        </div>
    )
}

export default CssModule;