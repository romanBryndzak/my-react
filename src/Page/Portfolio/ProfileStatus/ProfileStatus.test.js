import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";
import React from "react";

describe('ProfileStatus component', () => {
    test('After creation span should be displayed', () => {
        const component = create(<ProfileStatus status='Hello'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    })
});
