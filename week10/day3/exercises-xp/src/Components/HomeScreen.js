import ErrorBoundary from './ErrorBoundary';

function HomeScreen() {
    return (
        <ErrorBoundary>
            <div>
              <h1>Home</h1>
            </div>
        </ErrorBoundary>
    )
}

export default HomeScreen;