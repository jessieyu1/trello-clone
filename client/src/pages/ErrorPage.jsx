import { Link, useRouteError } from "react-router-dom";
import {ErrorPageContainer} from "./ErrorPage.styles";
import { Button } from "@mui/material";

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
            <Button>
                <Link to="/">
                    Back to Home Page
                </Link>
            </Button>
        </ErrorPageContainer>
    )
}

