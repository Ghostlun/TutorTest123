// @flow strict

import * as React from 'react';

const Mycomponent = (props) => {

    // const {name, children} => props
    return (
        <div>
            저의 이름은 {props.name} 입니다.
            저의 취미는 {props.children} 입니다.

        </div>
    );
};

export default Mycomponent;

Mycomponent.defaultProps = {

    name : '기본이름'
}