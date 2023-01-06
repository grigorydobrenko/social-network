import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'Grigory'} updateStatus={() => {}}/>)
        const instance = component.getInstance();

        // @ts-ignore
        expect(instance?.state.status).toBe("Grigory");
    })
    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status={'Grigory'} updateStatus={() => {}}/>)

        const root = component.root
        let span = root.findByType('span')

        expect(span).not.toBeNull()
    });
});