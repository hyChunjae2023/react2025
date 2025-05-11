import styled, { css } from 'styled-components'

/**
 * styled-components 라이브러리: 컴포넌트 파일 안에 스타일 선언하여 .css 나 .scss 파일 별도 생성하지 않아도 됨.
 * 
 * Tagged 템플릿 리터럴 : `` 를 사용하여 만든 문자열에 스타일 정보를 담은 문법. 
 *                      템플릿 안에 자바스크립트 객체나 함수를 전달할 때 전달한 자바스크립트 객체나 함수의 원본 값을 그대로 추출 가능.
 *   1) 태그의 타입을 styled 함수의 인자로 전달
 *      const MyInput = styled('input')`background: gray;`
 *   2) 컴포넌트 형식의 값을 넣어 줌(해당 컴포넌트의 className props 를 최상위 DOM 의 className 값으로 설정하는 작업이 내부적으로 되어 있어야 함)
 *      const StyledLink = styled(Link)`color: blue;`
 * 
 *      //해당 컴포넌트의 className props 를 최상위 DOM 의 className 값으로 설정하는 작업이 내부적으로 되어 있어야 함.
 *      const Sample = ({ className }) => {
 *          return <div className={className}>Sample</div>;
 *      };
 *      const StyledSample = styled(Sample)`font-size: 2rem;`
 * 
 *  반응형 디자인 : 기본적으로 가로크기 1024px 에 가운데 정렬, 가로크기 작아짐에 따라 크기를 줄이고 768px 가 되면 꽉 채우기
 *      width: 1024px;
 *      margin: 0 auto;
 *      @media (max-width: 1024px) {
 *          width: 768px;
 *      }
 *      @media (max-width: 768px) {
 *          width: 100%;
 *      }
 * 
 */

const sizes = {
    desktop: 1024,
    tablet: 768
};

/** 동일한 반응형 작업을 여러 컴포넌트에서 사용해야 하는 경우 함수화: sizes 객체에 따라 자동으로 media 쿠리 함수를 만들어 반응형 디자인 적용 */
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;
})

const Box = styled.div`
    /*props 로 넣어준 값 직접 전달 가능*/
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`}
`;

const Button = styled.button`
    background: white;
    color: black;
    background-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능*/
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /* props 에 따른 조건부 스티일링: 다음 코드는 inverted 값이 true 일 때 특정 스타일(여러줄이면 css ｀｀, 한줄이면 ｀｀)을 부여해 줍니다 */
    ${props => 
    props.inverted 
    && css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
            background: white;
            color: black;
        }
    `};
    & + button {
        margin-left: 1rem;
    }
`;


const StyledComponentsSample = () => (
    <div>
        <div>styled-components: 자바스크립트 파일 하나에 스타일까지 작성. 별도 CSS (.css/.scss) 파일을 만들지 않아도 된다.</div>        
        <Box color="black">
            <Button>안녕하세요.</Button>
            <Button inverted={true}>테두리만</Button>
        </Box>
        {/** Box 에 color 속성 기본값 : blue */}
        <Box>
            <Button>안녕하세요.</Button>
            <Button inverted={true}>테두리만</Button>
        </Box>
    </div>
);

export default StyledComponentsSample;


