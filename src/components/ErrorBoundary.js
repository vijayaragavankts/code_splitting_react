function ErrorFallBack({ error, resetErrorBoundary }) {
    return ( <
        div role = "alert" >
        <
        p > Something went wrong: < /p> <
        pre > { error.message } < /pre> <
        button onClick = { resetErrorBoundary } > Try again < /button> <
        /div>
    );
}

export default ErrorFallBack;