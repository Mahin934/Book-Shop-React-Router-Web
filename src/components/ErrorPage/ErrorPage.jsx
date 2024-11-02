import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
                <h1 className="text-9xl font-bold text-error">404</h1>
                <p className="mt-4 text-2xl text-base-content">
                    Oops! The page you're looking for does not exist.
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;