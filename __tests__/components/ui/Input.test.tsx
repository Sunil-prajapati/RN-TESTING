import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import Input from '../../../src/components/ui/Input';

describe("Input",() => {
    const mockOnChangeText = jest.fn() // we can define regular expression or type in fn to prevent particular data
    const mockOnFocus = jest.fn()
    const mockOnBlur = jest.fn()

    it("Should render correctly",() => {
        const {getByTestId} = render(
        <Input 
        value='' 
        onChangeText={mockOnChangeText} 
        placeholder='Enter text' 
        testID='inputComponent'
        />
    )
    expect(getByTestId('inputComponent')).toBeTruthy()
    })

    it("Should show multiple focus and blur events",() => {
        const {getByTestId} = render(
        <Input 
            value='' 
            onChangeText={mockOnChangeText} 
            placeholder='Enter text'
            onFocus={mockOnFocus}
            onBlur={mockOnBlur} 
        />
    )
    fireEvent(getByTestId("textInput"),'focus',{})
    fireEvent(getByTestId("textInput"),'blur',{})
    fireEvent(getByTestId("textInput"),'focus',{})
    fireEvent(getByTestId("textInput"),'blur',{})

    expect(mockOnFocus).toHaveBeenCalledTimes(2) 
    expect(mockOnFocus).toHaveBeenCalledTimes(2)
    })

    it("Should display error text if error prop is provided",() => {
        const {getByTestId} = render(
        <Input 
            value='' 
            onChangeText={mockOnChangeText} 
            placeholder='Enter text'
            error='This is an error'
        />
    )
    expect(getByTestId('errorText')).toHaveTextContent("This is an error")
    })

    it("Should call onFocus and setFocus state on input focus",() => {
        const {getByTestId} = render(
        <Input 
            value='' 
            onChangeText={mockOnChangeText} 
            placeholder='Enter text'
            onFocus={mockOnFocus}
        />
    )
      // Use `act` to ensure state updates are applied
    act(() => {
        fireEvent(getByTestId('textInput'),'focus',{})
    })
    expect(mockOnFocus).toHaveBeenCalled()
    })


    it('should apply disabled style and prevent text changes when disabled', () => {
        const { getByTestId } = render(
            <Input
                value=""
                onChangeText={mockOnChangeText}
                placeholder="Enter text"
                disabled
            />
        );

        // Check that pointerEvents is set to 'none' for the disabled state
        const animatedView = getByTestId('parent');
        expect(animatedView).toHaveStyle({ pointerEvents: 'none' });

        // Ensure the text input is not editable
        const textInput = getByTestId('textInput');
        expect(textInput.props.editable).toBe(false);

    });

    it('should call default onFocus function when not provided', () => {
        const { getByTestId } = render(
            <Input
                value=""
                onChangeText={mockOnChangeText}
                placeholder="Enter text"
            />
        );
        act(() => {
            fireEvent(getByTestId('textInput'), 'focus', {});
        });
    });


    it('should call default onBlur function when not provided', () => {
        const { getByTestId } = render(
            <Input
                value=""
                onChangeText={mockOnChangeText}
                placeholder="Enter text"
            />
        );
        act(() => {
            fireEvent(getByTestId('textInput'), 'blur', {});
        });

    });
})