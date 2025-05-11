import classNames from "classnames/bind";
import styles from '../css/CssModule.module.css'; //classnames 라이브러리 CSS Module 과 함께 사용하기
//import styles from '../styles/CssModule.module.scss'; //classnames 라이브러리 Sass 와 함께 사용하기

const cx = classNames.bind(styles);

const ClassnamesModuleSample = () => {
    return (
        <div>
            <div className={ cx('wrapper') }>
                안녕하세요. 저는 <span className="something">CSS Module! (wrapper)</span>
            </div>
            <div className={ cx('wrapper', 'inverted') }>
                안녕하세요. 저는 <span className="something">CSS Module! (wrapper inverted)</span>
            </div>
            <div>
                classnames: CSS Modele 사용시 여러 클래스 적용 또는 조건부 클래스 설정 용이.
            </div>
        </div>
    )
}

export default ClassnamesModuleSample;