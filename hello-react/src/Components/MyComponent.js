import React from 'react';

const MyComponent = ({ name = '사용자명', children }) => {
    return (
        <div>
            안녕하세요. 제 이름은 {name} 입니다. <br />
            children 값은 {children} 입니다.
        </div>
    )
}

/*const MyComponent = props => {
    const { name, children } = props;
    return (
        <div>
            안녕하세요. 제 이름은 {name || '사용자이름'} 입니다. <br />
            children 값은 {children} 입니다.
        </div>
    )
}*/

/*const MyComponent = props => {
    return (
        <div>
            안녕하세요. 제 이름은 {props.name || '사용자이름'} 입니다. <br />
            children 값은 {props.children} 입니다.
        </div>
    )
}*/

/* React 19 RC deprecated : defaultProps, PropTypes
MyComponent.defaultProps = {
    name: '사용자이름'
}*/

/* React 19 RC deprecated : defaultProps, PropTypes
import PropTypes from 'prop-types';
MyComponent.propTypes = {
    name: PropTypes.string
}*/

/* React 19 : TypeScript 를 사용하여 props 타입 정의
interface MyComponentProps {
    name?: String;
}
const MyComponent: React.FC<MyComponentProps> = ({ name = '사용자명', children }) => { ... }*/


export default MyComponent;