import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component",()=>{
    test("status from props should be in the state", ()=>{
        const component = create(<ProfileStatus status="maxya"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('maxya');
    });
    test("check span exist", ()=>{
        const component = create(<ProfileStatus status="maxya"/>);
        const instance = component.root;
        let span = instance.findByType('span');
        expect(span.children[0]).toBe('maxya');
    });
    test("check input instead of span", ()=>{
        const component = create(<ProfileStatus status="maxya"/>);
        const instance = component.root;
        let span = instance.findByType('span');
        span.props.onDoubleClick();
        let input = instance.findByType('input');
        expect(input.props.value).toBe('maxya');
    });
    test("check input don't exist", ()=>{
        const component = create(<ProfileStatus status="maxya"/>);
        const instance = component.root;
        expect(()=>{let input = instance.findByType('input')}).toThrow();
    });
    test("callback should be called", ()=>{
        let mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="maxya" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
})