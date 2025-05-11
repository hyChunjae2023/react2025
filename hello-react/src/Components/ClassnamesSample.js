import classNames from 'classnames'
import '../css/ClassnamesSample.css'

const ClassnamesSample = ({myClass = 'border2', highlighted, theme, hello = 'Hello' }) => {
    return (
        <div>
            <div className={ classNames('ClassnamesSample', { highlighted }, theme) }>{ hello }</div>
            <div className={ `ClassnamesSample ${ theme } ${ highlighted ? 'highlighted' : '' }` }>{ hello }</div>
            <div className={ classNames('choco', 'bold900') }>className = 'choco bold900'</div>
            <div className={ classNames('choco', { bold900: true }) }>className = 'choco bold900'</div>
            <div className={ classNames('choco', { two: false }) }>className = 'choco'</div>
            <div className={ classNames('choco', [ 'bold900', 'italicStyle' ]) }>className = 'choco, bold900, italicStyle'</div>
            <div className={ classNames('choco', myClass, { borderRadius20: true }) }>className = 'choco border2 borderRadius20'</div>
            <div className={ classNames('choco', myClass, { borderRadius20: false }) }>className = 'choco border2'</div>
        </div>        
    )
}

export default ClassnamesSample;