import { render } from "@testing-library/react-native"
import CustomSafeAreaScrollView from "../../../src/components/global/CustomSafeAreaViewScroll"
import { Text } from "react-native"
describe('CustomSafeAreaViewScroll', () => {
    it("it should render children correctly", () => {
        const { getByText } = render(<CustomSafeAreaScrollView>
            <Text>Test Child</Text>
        </CustomSafeAreaScrollView>)
        expect(getByText('Test Child')).toBeTruthy()
    })
})