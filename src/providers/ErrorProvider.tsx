import React from "react";
import ErrorBoundaryPage from "@screens/ErrorBoundaryPage";

type ErrorBoundaryProps = {
  children: React.ReactElement;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any): void {
    /**
     * We can capture the error with any error tracking tool
     * Like:
     *
     *  Sentry.captureException(error);
     *  crashlytics().recordError(error);
     *  Bugsnag.notify(error)
     *  rollbar.error(error)
     */
    console.log("error", error, errorInfo);
  }

  render(): React.ReactElement {
    if (this.state.hasError) {
      return <ErrorBoundaryPage />;
    }
    return this.props.children;
  }
}
