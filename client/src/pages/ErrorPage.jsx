import { useRouteError } from "react-router-dom";
import {ErrorPageContainer} from "./ErrorPage.styles";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <ErrorPageContainer >
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </ErrorPageContainer>
    )
}

