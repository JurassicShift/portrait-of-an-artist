import { screen, render } from "@testing-library/react";
import { store } from '../store/store.ts';
import { Provider } from 'react-redux';
import App from "../components/App";
// import Landing from "../components/Landing.tsx"

describe("App tests", () => {
    it("should contain Landing component", () => {
        render(<Provider store={store}>
            <App />
        </Provider>);

        const landingComponent = screen.getByText("[", { selector: "span.landing__content--open" });
        expect(landingComponent).toBeInTheDocument();
    });
});